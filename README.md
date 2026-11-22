# Kingdom Exchange Mission Network — Website

A global directory connecting kingdom-minded organizations, volunteers, donors, and missionaries.

Built by [The Free Range Dev, LLC](https://thefreerangedev.com) · Plan version 1.0 · April 2026

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom CSS variables |
| Database | Supabase (PostgreSQL) |
| Auth | Better Auth (email/password + Google OAuth) |
| CMS | Sanity.io — Phase 2 |
| Email | Resend + Mailchimp — Phase 2 |
| Payments | Stripe — Phase 3 |
| Hosting | Vercel |

---

## Getting Started (New Developer Onboarding)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/kingdom-network-website.git
cd kingdom-network-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables (add to `.env.local`):

```env
# Supabase — used by Better Auth (Phase 1) and direct DB queries (Phase 2+)
# Leave blank for local dev with seed data; DATABASE_URL is required for auth features
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Better Auth (Phase 1)
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_API_KEY=

# Google OAuth (Phase 1)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS (Phase 2)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production

# Resend Email (Phase 2)
RESEND_API_KEY=

# Stripe (Phase 3)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

> During Phase 1 MVP development, all directory data is served from `src/lib/seed-data.ts`. Sanity, Resend, and Stripe variables are not required to run the dev server locally. Better Auth (DATABASE_URL, BETTER_AUTH_SECRET) and Google OAuth variables are required if you need authentication features.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

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
│   ├── directory/          # Directory listing + filters
│   │   ├── [id]/           # Individual org profile pages
│   │   └── apply/          # Listing application form
│   ├── donate/             # Donation page
│   ├── missions/           # Featured Missions blog list
│   │   └── [id]/           # Individual mission article
│   ├── news/               # News & Events
│   ├── prayer/             # Prayer Wall
│   ├── globals.css         # Global styles + Tailwind layers
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── CrownLogo.tsx       # SVG crown mark
│   ├── Footer.tsx          # Sticky footer
│   ├── Header.tsx          # Responsive nav header
│   └── OrgCard.tsx         # Directory card component
└── lib/
    ├── auth.ts             # Better Auth server config (email/password + Google OAuth)
    ├── auth-client.ts      # Better Auth React client
    ├── seed-data.ts        # Static seed data (orgs, missions, news, prayer)
    └── types.ts            # TypeScript types
```

### Database migrations

SQL migrations live in `supabase/migrations/` and are run by hand, in order, in the Supabase SQL Editor. Run each file once. `0002_prayer.sql` is not idempotent (`CREATE POLICY` fails on a second run).

| File | Creates |
|---|---|
| `0001_better_auth.sql` | Better Auth tables (user, session, account, verification) |
| `0002_prayer.sql` | Prayer Wall tables, RLS policies, anon grants, `increment_prayer_count` RPC |

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

---

## Development Phases

The build plan and progress checklist are maintained privately by the project team and are not tracked in this repository.

---

## Deployment

The site deploys automatically to Vercel on push to `main`.

- Vercel project: connect at [vercel.com](https://vercel.com) and import this repo
- Add environment variables in Vercel project settings
- Domain: configure custom domain in Vercel dashboard

---

## Contributing

1. Branch from `main`: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Open a pull request against `main`

---

*Built by The Free Range Dev, LLC · © 2026 Kingdom Exchange Mission Network*
