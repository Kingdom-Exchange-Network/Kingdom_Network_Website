import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seedOrganizations } from "@/lib/seed-data";
import { categoryLabels, categoryColors } from "@/lib/types";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return seedOrganizations.map((org) => ({ id: org.id }));
}

export default function OrgProfilePage({ params }: Props) {
  const org = seedOrganizations.find((o) => o.id === params.id);
  if (!org) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Top bar */}
      <div className="bg-navy pt-24 pb-0 border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-xs text-cream/30 mb-8">
            <Link href="/" className="hover:text-gold/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/directory" className="hover:text-gold/60 transition-colors">Directory</Link>
            <span>/</span>
            <span className="text-cream/50">{org.name}</span>
          </nav>

          {/* Org header */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-10">
            {/* Logo / initials */}
            <div className="w-20 h-20 bg-navy-light border border-gold/20 flex items-center justify-center shrink-0">
              <span className="font-display text-4xl text-gold/70">{org.name.charAt(0)}</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <h1 className="display-heading text-4xl sm:text-5xl">{org.name}</h1>
                {org.verified && (
                  <span className="mt-2 flex items-center gap-1 bg-gold/10 border border-gold/20 text-gold font-body text-[10px] tracking-[0.15em] uppercase px-2 py-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Member
                  </span>
                )}
              </div>

              <p className="font-body text-sm text-cream/40 mb-4 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {org.region} · {org.country}
                <span className="text-cream/20">·</span>
                <span className="capitalize">{org.type}</span>
              </p>

              <div className="flex flex-wrap gap-1.5">
                {org.category.map((cat) => (
                  <span
                    key={cat}
                    className={`font-body text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border ${categoryColors[cat]}`}
                  >
                    {categoryLabels[cat]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 bg-navy py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="display-heading text-2xl mb-4">About</h2>
                <p className="font-body text-cream/70 leading-relaxed">{org.description}</p>
              </div>

              {/* Needs */}
              {(org.hiring || org.volunteersNeeded || org.seekingDonors) && (
                <div>
                  <h2 className="display-heading text-2xl mb-4">Current Needs</h2>
                  <div className="flex flex-wrap gap-3">
                    {org.hiring && (
                      <div className="flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2.5">
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-body text-sm text-gold">Now Hiring</span>
                      </div>
                    )}
                    {org.volunteersNeeded && (
                      <div className="flex items-center gap-2 bg-purple-900/20 border border-purple-500/20 px-4 py-2.5">
                        <svg className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-body text-sm text-purple-300">Seeking Volunteers</span>
                      </div>
                    )}
                    {org.seekingDonors && (
                      <div className="flex items-center gap-2 bg-teal-900/20 border border-teal-500/20 px-4 py-2.5">
                        <svg className="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="font-body text-sm text-teal-300">Accepting Donations</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Contact card */}
              <div className="bg-navy-light border border-gold/15 p-6 space-y-4">
                <h3 className="section-label">Connect</h3>

                {org.website && (
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Visit Website
                  </a>
                )}

                <a
                  href={`mailto:${org.contactEmail}`}
                  className="btn-outline w-full text-center block"
                >
                  Send Email
                </a>
              </div>

              {/* Quick info */}
              <div className="bg-navy-light border border-gold/15 p-6 space-y-3">
                <h3 className="section-label mb-1">Details</h3>
                {[
                  { label: "Type", value: org.type.charAt(0).toUpperCase() + org.type.slice(1) },
                  { label: "Region", value: org.region },
                  { label: "Country", value: org.country },
                  { label: "Listed", value: new Date(org.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" }) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="font-body text-xs text-cream/40">{label}</span>
                    <span className="font-body text-xs text-cream/70 text-right">{value}</span>
                  </div>
                ))}
              </div>

              {/* Back link */}
              <Link
                href="/directory"
                className="flex items-center gap-2 font-body text-xs text-cream/30 hover:text-gold/60 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Directory
              </Link>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
