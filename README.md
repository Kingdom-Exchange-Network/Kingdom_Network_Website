# Kingdom Exchange Mission Network — Website

A global directory connecting kingdom-minded organizations, volunteers, donors, and missionaries.

Built by [The Free Range Dev, LLC](https://thefreerangedev.com) · Live at [kingdomexchangenetwork.com](https://kingdomexchangenetwork.com)

---

## Tech Stack

| Layer | Choice | Status |
|---|---|---|
| Framework | Next.js 14.2.35 (App Router), React 18, TypeScript 5 | In use (Next.js 14 is out of support; upgrade planned) |
| Styling | Tailwind CSS 3.4 with custom tokens in `tailwind.config.ts` | In use |
| UI components | Headless UI 2.2 (powers `Select.tsx`) | In use |
| Database | Supabase (PostgreSQL with RLS) via `@supabase/supabase-js` | In use for auth and the Prayer Wall |
| Auth | Better Auth 1.6 with a `pg` pool (email/password and Google OAuth) | Backend in use; sign-in UI not built |
| Hosting | Netlify (Next.js Runtime) | In use |
| File storage | Supabase Storage (private bucket) | Planned |
| Email | Resend | Planned |
| Newsletter | Mailchimp or Resend | Not decided |
| CMS | Sanity.io | Phase 2, not installed |
| Payments | Stripe | Later phase |

---

## Getting Started (New Developer Onboarding)

### 1. Clone the Repository

```bash
git clone https://github.com/Kingdom-Exchange-Network/Kingdom_Network_Website.git
cd Kingdom_Network_Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Environment variables (add to `.env.local`):

```env
# Supabase (Prayer Wall and direct DB queries)
# Use the base project URL only. Never add /rest/v1/ to it.
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Better Auth (Phase 1)
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_API_KEY=

# Google OAuth (Phase 1)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS (Phase 2, not installed)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Resend Email (Support Application, not built)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Stripe (Phase 3, not built)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Six variables are checked when the code loads: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. `npm run build` fails if any of them is missing. The auth route (`/api/auth`) and the Prayer Wall (`/prayer`) need real values to work. Sanity, Resend, and Stripe variables are not used yet.

Directory, organization, mission, and news content is served from `src/lib/seed-data.ts`. Only the Prayer Wall and auth read from Supabase.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

### 6. Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts   # Better Auth route handler
│   ├── about/              # About / Mission / Vetting / Disclaimer
│   ├── connect/            # Connect with Us (online presence hub)
│   ├── directory/          # Directory listing + filters
│   │   ├── [id]/           # Individual org profile pages
│   │   └── apply/          # Listing application page (form not wired up yet)
│   ├── donate/             # Donation page
│   ├── missions/           # Featured Missions list
│   │   └── [id]/           # Individual mission article
│   ├── news/               # News & Events
│   ├── prayer/             # Prayer Wall (Supabase)
│   ├── globals.css         # Global styles + Tailwind layers
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── sitemap.ts          # Generated sitemap (reads NEXT_PUBLIC_SITE_URL)
├── components/
│   ├── ApplyFormSelects.tsx  # Client-side selects for the apply page
│   ├── ComingSoonButton.tsx  # Button that shows a "coming soon" message
│   ├── CrownLogo.tsx       # SVG crown mark
│   ├── Footer.tsx          # Sticky footer
│   ├── Header.tsx          # Responsive nav header
│   ├── OrgCard.tsx         # Directory card component
│   └── Select.tsx          # Themed select (Headless UI Listbox)
└── lib/
    ├── auth.ts             # Better Auth server config (email/password + Google OAuth)
    ├── auth-client.ts      # Better Auth React client
    ├── seed-data.ts        # Static seed data (orgs, missions, news)
    ├── supabase.ts         # Supabase client
    └── types.ts            # TypeScript types
public/
└── brand/                  # KMAN crown and logo lockup SVGs
supabase/
└── migrations/             # SQL migrations (see below)
```

### Database Migrations

SQL migrations live in `supabase/migrations/` and are run by hand, in order, in the Supabase SQL Editor. Run each file once. `0002_prayer.sql` is not idempotent (`CREATE POLICY` fails on a second run). Every new table needs RLS.

| File | Creates |
|---|---|
| `0001_better_auth.sql` | Better Auth tables (user, session, account, verification) |
| `0002_prayer.sql` | Prayer Wall tables, RLS policies, anon grants, `increment_prayer_count` RPC |

Tables for organization listings and the Support Application do not exist yet.

---

## Design System

| Token | Value |
|---|---|
| Background primary (plum) | `#0D0519` |
| Background dark | `#080210` |
| Background light | `#160B2B` |
| Border | `#1F1040` |
| Gold accent | `#D4AF5A` |
| Gold light | `#E8C97A` |
| Gold dark | `#B8942F` |
| Text primary | `#F0EAD8` (warm white) |
| Text muted | `#A09880` |
| Text subtle | `#7A7060` |
| Display font | Cormorant Garamond (serif) |
| Body font | Jost (geometric sans) |

Tailwind color aliases: `plum`, `plum-dark`, `plum-light`, `plum-border`, `gold`, `gold-light`, `gold-dark`, `gold-muted`, `cream`, `cream-muted`, `cream-subtle`, `tag-teal`, `tag-purple`, `tag-blue`.

Component classes defined in `globals.css`: `.btn-primary`, `.btn-outline`, `.section-label`, `.display-heading`.

The primary dark color is plum, not navy.

---

## Development Notes

- The product is an AI-Free Zone. Do not add generative AI to anything a visitor or member uses.
- Native `<select>` menus cannot be styled with CSS. Use `Select.tsx`, and use `!important` variants such as `!bg-plum` when overriding its classes.
- When a server component page needs client-only UI, extract a `"use client"` sub-component instead of converting the whole page.
- `overflow-hidden` on a `<section>` clips dropdowns. Put it on the `aria-hidden` background glow wrapper instead.
- Format dates with `timeZone: "UTC"` to avoid hydration mismatches.

---

## Development Phases

Status key: `[x]` done, `[ ]` not started or partial (partial items say what remains).

| Phase | Status | Focus |
|---|---|---|
| Phase 1: MVP Directory | In Progress | Foundation, core pages, launch content, Supabase listings, fixes, SEO, soft launch |
| Support Application | Not Started | One application for missions, churches, community groups, individuals, and businesses, with admin review |
| Phase 2: Community Features | In Progress | Prayer Wall, Featured Missions, News & Events, Sanity CMS, newsletter |
| Phase 3: Member Portal & Monetization | Planned | Sign-in UI, member dashboard, org claiming, accountability check-ins |
| Phase 4: Growth | Ongoing | Online presence, mentoring, resource exchange, map, marketplace, multilingual, mobile app |

### Phase 1 — MVP Directory (In Progress)

Foundation

- [x] Design system and component library (plum and gold tokens, Cormorant Garamond and Jost, reusable component classes)
- [x] Themed Select component (Headless UI Listbox) in the hero, directory filters, and apply form
- [x] Better Auth backend (email/password and Google OAuth), replacing Clerk
- [ ] Supabase schema (partial: Better Auth and Prayer Wall migrations exist; listing and application tables come with the Support Application)
- [x] Hosting on Netlify with auto-deploy on merge to `main`
- [x] Custom domain on kingdomexchangenetwork.com
- [x] GitHub repo with Rulesets branch protection

Pages

- [x] Home page (hero with scripture, search bar, three pillars, featured organizations, featured missions, AI-Free Zone and Referral-Only notice)
- [x] About / Mission page (vetting process and liability disclaimer)
- [x] Directory page with 7 Mountains category and subcategory filters, plus region, type, and need filters (seed data)
- [x] Organization profile page (seed data)
- [x] Donate page
- [x] Sticky footer
- [x] Connect with Us page (`/connect`) with the Discord link and coming-soon tiles for other channels
- [x] Header navigation, including the Home link
- [x] Placeholder data removed, with every feature, field, and style kept

Go-Live

- [ ] Confirm the production domain and HTTPS certificate on Netlify
- [ ] Replace the Google OAuth client and test email and Google sign-in on the live domain
- [ ] Retire the old Vercel deployment

Launch Content

- [ ] Vision content for Kingdom Exchange and Kingdom Mission Funding Partners
- [ ] Funding opportunity profile pages built from approved application answers
- [ ] First project profiles, each published only after its details are reviewed and the applicant approves it
- [ ] First public version live, adding funding opportunities as their details are confirmed

Launch Readiness

- [ ] Listing application and admin approval (built as the Support Application below)
- [ ] Move pages off `seed-data.ts` to Supabase (creation dates set by the database, mission reading time computed from the text)
- [ ] Site functionality fixes
- [ ] Mobile responsiveness pass
- [ ] Basic SEO (partial: sitemap, global metadata, and per-article mission metadata exist; per-organization OG images, structured data, and `robots.txt` remain)
- [ ] QA pass
- [ ] Soft launch to founding KMAN members
- [ ] Decide donation handling (entity, governance, fee model). KMAN Stripe giving stays "coming soon" until then.

### Support Application (Not Started)

The Support Application replaces the simple listing application. One application serves missions, churches, community groups, individuals, and businesses.

- [ ] Review the application as an applicant and as the builder
- [ ] Build the application on the site (Next.js and Supabase). Access checks live in server code, because the site uses Better Auth, not Supabase Auth. Build order:
  - [ ] 1. User roles and protected admin pages
  - [ ] 2. Reviewer sign-in by email magic link (Better Auth)
  - [ ] 3. Resend email on the Kingdom Exchange domain
  - [ ] 4. Tables for applications, need items, attachments, reviewer notes, and status history
  - [ ] 5. Private file storage with direct uploads to Supabase Storage
  - [ ] 6. Reviewer screens and applicant profile approval
  - [ ] 7. POPIA privacy notice
- [ ] Shared core sections for every applicant, with a short required set and an "I need help" route
- [ ] Conditional modules (business; land, buildings, and shared space; care, recovery, and children; individual or household)
- [ ] Repeatable entries for itemized needs with line totals, volunteer roles, outcome stories, and attachments (unknown costs stay unknown, never zero)
- [ ] Private application record kept separate from the public profile, with attachments visible to authorized reviewers only
- [ ] Review workflow: draft, submitted, help needed, reviewed, awaiting applicant approval, published (no blanket "verified" badge)
- [ ] Before the form circulates: a review contact, a privacy notice, access roles, and a retention and deletion process
- [ ] Test cases for the main applicant types
- [ ] Decide the public browsing categories (the form's six categories or the site's 7 Mountains)

### Phase 2 — Community Features (In Progress)

- [x] Prayer Wall (`/prayer`) backed by Supabase. Requests auto-approve, and a sign-in wall is planned once the auth UI exists (see Phase 3).
  - [x] Updates display on the right prayer request card
  - [x] "I Prayed for This" button on each card
  - [x] Live prayer count per request
  - [ ] The poster can add updates to their own request
- [ ] Featured Missions list and article pages (partial: pages exist and read from seed data)
- [ ] Sanity CMS integration for Featured Missions
- [ ] News & Events page (partial: page exists and reads from seed data)
- [ ] Newsletter signup and integration
- [ ] Polish, bug fixes, and outreach push

### Phase 3 — Member Portal & Monetization (Planned)

> The Better Auth backend is complete. Only the sign-in and session UI remain.

- [ ] Member sign-in and session UI
- [ ] Free member sign-in wall for prayer request submission (identity fills from the profile, and an anonymous option hides the name)
- [ ] Member dashboard scaffold
- [ ] Organization claiming and self-service profile editing
- [ ] Stripe subscription setup and premium listing tiers (on hold until the fee model is decided)
- [ ] Accountability check-in feature (weekly goals and progress)
- [ ] Passkey authentication support

### Phase 4 — Growth (Ongoing)

- [x] Online Presence hub, delivered as the Connect with Us page
- [ ] Mentor / Discipleship tab
  - [ ] Add the tab to navigation
  - [ ] Seekers side for people looking for a mentor (spiritual, business, skills)
  - [ ] Givers side for people offering to mentor or teach
  - [ ] Search and filter by mentor type and purpose
- [ ] Resource & Donation Exchange tab
  - [ ] Searchable Resource Exchange tab
  - [ ] Physical goods exchange (the giver covers shipping)
  - [ ] Financial giving search to find organizations by cause and give directly
  - [ ] Filter by continent, region, and country
- [ ] Map with location (general or exact location chosen by the user)
- [ ] Impact reporting dashboard
- [ ] Kingdom Marketplace
- [ ] Multilingual support (Spanish first)
- [ ] Mobile app (React Native)
- [ ] Evaluate GoHighLevel for CRM, email, and SMS consolidation
- [ ] Mission visits, tours, and spiritual retreats

### Technical Maintenance

- [ ] Upgrade from Next.js 14
- [ ] Extract the hero search into its own client component so `src/app/page.tsx` can return to a server component
- [ ] Strengthen focus-ring visibility on hero Select instances (WCAG 2.4.7)

---

## Deployment

The site deploys automatically to Netlify on every merge to `main`, so a merge is a release.

- Pull requests get Netlify Deploy Previews. Previews use the production environment variables and database, so a preview that writes data writes to production.
- Environment variables are set in the Netlify project settings. Never mark `NEXT_PUBLIC_*` variables or the public site URL as secret, because Netlify fails the build when a secret value appears in build output.
- `NEXT_PUBLIC_*` values are fixed at build time. Change them, then redeploy.
- The repo has no `netlify.toml`. Build settings live in the Netlify dashboard.

---

## Contributing

1. Branch from an up-to-date `main` (`feat/`, `fix/`, `docs/`, or `chore/` prefix)
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Open a pull request against `main`

Direct pushes to `main` are blocked, and pull requests need approval. Never commit secrets or `.env.local`.

---

*Built by The Free Range Dev, LLC · © 2026 Kingdom Exchange Mission Network*
