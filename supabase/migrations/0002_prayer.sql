-- 0002_prayer.sql
--
-- Prayer Wall schema for the Kingdom Exchange Network site.
-- Read and written by src/app/prayer/page.tsx through supabase-js with the
-- anon key: a select of prayer_requests with embedded prayer_updates, an
-- insert followed by .select().single(), and rpc("increment_prayer_count").
--
-- Run ONCE in the Supabase SQL Editor, after 0001_better_auth.sql.
-- It is not idempotent: CREATE POLICY has no IF NOT EXISTS, so a second run
-- fails at the first policy. CREATE TABLE IF NOT EXISTS also means a re-run
-- will NOT add the CHECK constraints below to a table that already exists.
--
-- Written for this project's Supabase settings: "automatically expose new
-- tables" is OFF, so the anon role gets only the privileges granted at the
-- bottom of this file.

-- Tables --------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS prayer_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL
        CHECK (char_length(title) <= 200),
    body TEXT NOT NULL
        CHECK (char_length(body) <= 2000),
    region TEXT
        CHECK (char_length(region) <= 100),
    org_name TEXT,
    anonymous BOOLEAN NOT NULL DEFAULT FALSE,
    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'approved', 'rejected')),
    prayer_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prayer_updates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    request_id UUID NOT NULL REFERENCES prayer_requests(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Postgres does not index foreign key columns automatically. This one backs
-- the embedded prayer_updates lookup and the EXISTS check in the updates
-- read policy.
CREATE INDEX IF NOT EXISTS prayer_updates_request_id_idx
    ON prayer_updates (request_id);

-- Row Level Security --------------------------------------------------------

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_updates ENABLE ROW LEVEL SECURITY;

-- Anyone may read approved prayer requests.
CREATE POLICY "Anon can read approved prayer requests"
    ON prayer_requests
    FOR SELECT
    TO anon
    USING (status = 'approved');

-- Anyone may submit a prayer request. Submissions auto-approve and appear on
-- the wall immediately; the check pins status to 'approved' and prayer_count to
-- 0, so a client still cannot seed a count.
--
-- This also keeps insert-then-select working: PostgREST returns the new row
-- through INSERT ... RETURNING, and RETURNING only succeeds if the row also
-- passes the SELECT policy above. A row inserted as 'approved' does. If
-- moderation is ever switched to 'pending', the client's .select().single()
-- will fail with an RLS error and must be changed in the same release.
CREATE POLICY "Anon can submit prayer requests"
    ON prayer_requests
    FOR INSERT
    TO anon
    WITH CHECK (status = 'approved' AND prayer_count = 0);

-- Anyone may read updates belonging to an approved request.
CREATE POLICY "Anon can read updates for approved requests"
    ON prayer_updates
    FOR SELECT
    TO anon
    USING (
        EXISTS (
            SELECT 1
            FROM prayer_requests
            WHERE prayer_requests.id = prayer_updates.request_id
              AND prayer_requests.status = 'approved'
        )
    );

-- No public UPDATE or DELETE policies are defined, so those actions are denied
-- to the anon role.

-- Table grants --------------------------------------------------------------

-- RLS policies only filter rows for roles that already hold the underlying
-- privilege; without these grants the anon role is denied outright and the
-- policies above never take effect.
--
-- Start from nothing so no table-level privilege (from schema default
-- privileges or an earlier run) survives underneath the column-level grant.
-- A table-level INSERT would make the column list below meaningless.
REVOKE ALL ON public.prayer_requests FROM anon;
REVOKE ALL ON public.prayer_updates FROM anon;

-- INSERT is limited to exactly the columns the prayer page sends. id,
-- created_at and prayer_count come from their defaults; org_name is never
-- writable by the public.
GRANT INSERT (title, body, region, anonymous, status)
    ON public.prayer_requests TO anon;

-- SELECT stays table-wide: the page reads select("*") and the insert's
-- .select() returns every column.
GRANT SELECT ON public.prayer_requests TO anon;
GRANT SELECT ON public.prayer_updates TO anon;

-- Functions -----------------------------------------------------------------

-- Increment the prayer counter for a single approved request. Runs as the
-- definer so it can bypass RLS, but only ever touches approved rows.
CREATE OR REPLACE FUNCTION increment_prayer_count(request_id UUID)
RETURNS VOID
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
    UPDATE prayer_requests
    SET prayer_count = prayer_count + 1
    WHERE id = request_id
      AND status = 'approved';
$$;

GRANT EXECUTE ON FUNCTION increment_prayer_count(UUID) TO anon;
