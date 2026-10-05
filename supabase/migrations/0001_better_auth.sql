-- 0001_better_auth.sql
--
-- Better Auth core schema for the Kingdom Exchange Network site.
--
-- Derived from the installed packages, not from docs or memory:
--   better-auth            1.6.11  (node_modules/better-auth/package.json)
--   @better-auth/core      1.6.11  (node_modules/@better-auth/core/dist/db/get-tables.mjs)
--   @better-auth/infra     0.2.10  (dash() plugin, node_modules/@better-auth/infra/dist/index.mjs)
-- Column types, defaults, constraints and index names follow the Postgres
-- branch of node_modules/better-auth/dist/db/get-migration.mjs (what
-- `better-auth migrate` would emit for this config).
--
-- Config this matches (src/lib/auth.ts): pg Pool adapter (Kysely, postgres),
-- emailAndPassword, Google OAuth, plugins: [dash()] with default options.
-- dash() adds no tables; it only adds user."lastActiveAt" when
-- activityTracking.enabled is true, which it is not here.
-- No secondaryStorage, no rateLimit database storage, no custom
-- model/field names, no additionalFields, default text ids.
--
-- Run once in the Supabase SQL Editor against the new, empty database.
-- Safe to re-run: every statement is IF NOT EXISTS.

-- Tables ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "user" (
    "id"            text        NOT NULL PRIMARY KEY,
    "name"          text        NOT NULL,
    "email"         text        NOT NULL UNIQUE,
    "emailVerified" boolean     NOT NULL,
    "image"         text,
    "createdAt"     timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"     timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "session" (
    "id"        text        NOT NULL PRIMARY KEY,
    "expiresAt" timestamptz NOT NULL,
    "token"     text        NOT NULL UNIQUE,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz NOT NULL,
    "ipAddress" text,
    "userAgent" text,
    "userId"    text        NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "account" (
    "id"                    text        NOT NULL PRIMARY KEY,
    "accountId"             text        NOT NULL,
    "providerId"            text        NOT NULL,
    "userId"                text        NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "accessToken"           text,
    "refreshToken"          text,
    "idToken"               text,
    "accessTokenExpiresAt"  timestamptz,
    "refreshTokenExpiresAt" timestamptz,
    "scope"                 text,
    "password"              text,
    "createdAt"             timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"             timestamptz NOT NULL
);

CREATE TABLE IF NOT EXISTS "verification" (
    "id"         text        NOT NULL PRIMARY KEY,
    "identifier" text        NOT NULL,
    "value"      text        NOT NULL,
    "expiresAt"  timestamptz NOT NULL,
    "createdAt"  timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"  timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes (names match Better Auth's generator: <table>_<field>_idx) ---------

CREATE INDEX IF NOT EXISTS "session_userId_idx"         ON "session" ("userId");
CREATE INDEX IF NOT EXISTS "account_userId_idx"         ON "account" ("userId");
CREATE INDEX IF NOT EXISTS "verification_identifier_idx" ON "verification" ("identifier");

-- Row Level Security ---------------------------------------------------------
-- Supabase "automatic RLS" should already enable this on new public tables;
-- stated explicitly so the result does not depend on that setting.
-- No policies are created on purpose: anon/authenticated (Data API) get no
-- access. The app connects as the table owner (postgres) through the
-- pooler, which bypasses RLS, so Better Auth is unaffected.

ALTER TABLE "user"         ENABLE ROW LEVEL SECURITY;
ALTER TABLE "session"      ENABLE ROW LEVEL SECURITY;
ALTER TABLE "account"      ENABLE ROW LEVEL SECURITY;
ALTER TABLE "verification" ENABLE ROW LEVEL SECURITY;
