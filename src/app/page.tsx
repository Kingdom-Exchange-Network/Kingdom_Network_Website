import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrgCard from "@/components/OrgCard";
import CrownLogo from "@/components/CrownLogo";
import { seedOrganizations, featuredMissions } from "@/lib/seed-data";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Connect",
    body: "Discover verified kingdom-minded organizations across the globe — nonprofits, churches, ministries, and mission agencies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Serve",
    body: "Find opportunities to give your time, skills, and resources where the kingdom is advancing — locally and internationally.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Advance",
    body: "Support the global mission through prayer, giving, and collaboration — fueling organizations doing work that matters eternally.",
  },
];

export default function HomePage() {
  const featuredOrgs = seedOrganizations.filter((o) => o.verified).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-screen bg-navy pt-16 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/5 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,90,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Crown mark */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border border-gold/30 flex items-center justify-center">
              <span className="text-gold">
                <CrownLogo size={36} />
              </span>
            </div>
          </div>

          {/* Scripture */}
          <p className="section-label mb-6">Matthew 6:33 · Seek first the kingdom</p>

          {/* Main heading */}
          <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Connecting the Kingdom,{" "}
            <em className="text-gold not-italic">Advancing the Mission</em>
          </h1>

          <p className="font-body text-lg text-cream/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            A global directory of verified kingdom-minded organizations — connecting
            missionaries, volunteers, donors, and churches with the work God is doing
            around the world.
          </p>

          {/* Embedded search bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-light border border-gold/20 p-1 flex flex-col sm:flex-row gap-1">
              <input
                type="text"
                placeholder="Search organizations, regions, needs..."
                className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 outline-none"
              />
              <select aria-label="Organization type" className="bg-navy border-0 sm:border-l border-t border-gold/20 px-4 py-3 font-body text-sm text-cream/60 outline-none cursor-pointer min-w-[130px]">
                <option value="">All Types</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="church">Church</option>
                <option value="ministry">Ministry</option>
                <option value="forprofit">Business</option>
              </select>
              <select aria-label="Region" className="bg-navy border-0 sm:border-l border-t border-gold/20 px-4 py-3 font-body text-sm text-cream/60 outline-none cursor-pointer min-w-[130px]">
                <option value="">All Regions</option>
                <option value="north-america">North America</option>
                <option value="latin-america">Latin America</option>
                <option value="south-america">South America</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="australia">Australia</option>
                <option value="europe">Europe</option>
                <option value="middle-east">Middle East</option>
                <option value="global">Global</option>
              </select>
              <select aria-label="Need type" className="bg-navy border-0 sm:border-l border-t border-gold/20 px-4 py-3 font-body text-sm text-cream/60 outline-none cursor-pointer min-w-[130px]">
                <option value="">All Needs</option>
                <option value="resource coordination">Resource Coordination</option>
                <option value="hiring">Hiring</option>
                <option value="volunteers">Volunteers</option>
                <option value="donors">Donors</option>
              </select>
              <Link
                href="/directory"
                className="btn-primary px-8 whitespace-nowrap text-center flex items-center justify-center"
              >
                Search
              </Link>
            </div>
            <p className="font-body text-xs text-cream/30 mt-3">
              {seedOrganizations.length} organizations listed ·{" "}
              <Link href="/directory/apply" className="hover:text-gold/60 transition-colors">
                List yours free
              </Link>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
      </section>

      {/* ── THREE PILLARS ──────────────────────────────────────────── */}
      <section className="bg-navy border-y border-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why KMAN</p>
            <h2 className="display-heading text-4xl">Three Pillars of the Network</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-navy px-10 py-12 text-center flex flex-col items-center gap-5"
              >
                <div className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold">
                  {pillar.icon}
                </div>
                <h3 className="display-heading text-2xl">{pillar.title}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ORGANIZATIONS ─────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Directory Preview</p>
              <h2 className="display-heading text-4xl">Featured Organizations</h2>
            </div>
            <Link href="/directory" className="btn-outline hidden sm:inline-flex items-center gap-2">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredOrgs.map((org) => (
              <OrgCard key={org.id} org={org} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/directory" className="btn-outline">
              View All Organizations
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED MISSIONS ──────────────────────────────────────── */}
      <section className="bg-navy-light border-t border-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Stories</p>
              <h2 className="display-heading text-4xl">Featured Missions</h2>
            </div>
            <Link href="/missions" className="btn-outline hidden sm:inline-block">
              All Stories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredMissions.map((mission) => (
              <Link
                key={mission.id}
                href={`/missions/${mission.id}`}
                className="group block bg-navy border border-gold/10 hover:border-gold/30 transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="section-label text-[10px]">{mission.region}</span>
                  <span className="text-cream/20">·</span>
                  <span className="font-body text-[10px] text-cream/40">
                    {mission.readingTime} min read
                  </span>
                </div>
                <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-200 leading-snug mb-3">
                  {mission.title}
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed line-clamp-3 mb-4">
                  {mission.excerpt}
                </p>
                <p className="font-body text-xs text-gold/60">{mission.orgName}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────── */}
      <section className="bg-navy border-t border-gold/10 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-gold"><CrownLogo size={30} /></span>
          </div>
          <h2 className="display-heading text-4xl mb-5">Is Your Organization Listed?</h2>
          <p className="font-body text-cream/60 mb-8 leading-relaxed">
            Join the network and connect with volunteers, donors, missionaries, and churches
            who share your kingdom vision. Listing is free to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/directory/apply" className="btn-primary">Apply to Be Listed</Link>
            <Link href="/about" className="btn-outline">Learn About Vetting</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
