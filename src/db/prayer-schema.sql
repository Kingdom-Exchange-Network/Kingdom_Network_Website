-- Prayer requests schema
-- Run this in Supabase Dashboard → SQL Editor

-- Tables --------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS prayer_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    region TEXT,
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

-- Row Level Security --------------------------------------------------------

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_updates ENABLE ROW LEVEL SECURITY;

-- Anyone may read approved prayer requests.
CREATE POLICY "Anon can read approved prayer requests"
    ON prayer_requests
    FOR SELECT
    TO anon
    USING (status = 'approved');

-- Anyone may submit a prayer request. The check pins status to 'pending' and
-- prayer_count to 0, so a client cannot self-approve or seed a count.
CREATE POLICY "Anon can submit prayer requests"
    ON prayer_requests
    FOR INSERT
    TO anon
    WITH CHECK (status = 'pending' AND prayer_count = 0);

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
-- table privilege; without these grants the anon role is denied outright and
-- the policies above never take effect.
GRANT INSERT, SELECT ON public.prayer_requests TO anon;
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
