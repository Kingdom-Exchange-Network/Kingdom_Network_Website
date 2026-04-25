import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { featuredMissions, seedOrganizations } from "@/lib/seed-data";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return featuredMissions.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mission = featuredMissions.find((m) => m.id === params.id);
  if (!mission) return {};
  return {
    title: `${mission.title} — Kingdom Exchange Mission Network`,
    description: mission.excerpt,
    openGraph: {
      title: mission.title,
      description: mission.excerpt,
      type: "article",
    },
  };
}

export default function MissionArticlePage({ params }: Props) {
  const mission = featuredMissions.find((m) => m.id === params.id);
  if (!mission) notFound();

  const org = seedOrganizations.find((o) => o.id === mission.orgId);

  const formattedDate = new Date(mission.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Article header */}
      <div className="bg-navy pt-28 pb-16 border-b border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-xs text-cream/30 mb-10">
            <Link href="/" className="hover:text-gold/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/missions" className="hover:text-gold/60 transition-colors">Featured Missions</Link>
            <span>/</span>
            <span className="text-cream/50 line-clamp-1">{mission.title}</span>
          </nav>

          <p className="section-label mb-4">{mission.region}</p>

          <h1 className="display-heading text-4xl sm:text-5xl leading-tight mb-6">
            {mission.title}
          </h1>

          <p className="font-body text-lg text-cream/60 leading-relaxed mb-8">
            {mission.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-xs text-cream/35 border-t border-gold/10 pt-6">
            <span>{formattedDate}</span>
            <span className="text-cream/20">·</span>
            <span>{mission.readingTime} min read</span>
            {org && (
              <>
                <span className="text-cream/20">·</span>
                <Link
                  href={`/directory/${org.id}`}
                  className="text-gold/50 hover:text-gold/80 transition-colors"
                >
                  {org.name}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="flex-1 bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {mission.body.map((paragraph, i) => (
              <p
                key={i}
                className={`font-body leading-relaxed ${
                  paragraph.startsWith('"') || paragraph.startsWith("“")
                    ? "font-display text-xl text-cream/85 italic pl-6 border-l-2 border-gold/30"
                    : "text-cream/70"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="my-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-gold/15" />
            <div className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
            <div className="flex-1 h-px bg-gold/15" />
          </div>

          {/* Org callout */}
          {org && (
            <div className="bg-navy-light border border-gold/15 p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-14 h-14 bg-navy border border-gold/20 flex items-center justify-center shrink-0">
                <span className="font-display text-2xl text-gold/70">{org.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <p className="section-label mb-1">Featured Organization</p>
                <h3 className="font-display text-xl text-cream mb-1">{org.name}</h3>
                <p className="font-body text-xs text-cream/50 mb-3 leading-relaxed">
                  {org.shortDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/directory/${org.id}`} className="btn-primary text-xs px-5 py-2">
                    View Profile
                  </Link>
                  {org.seekingDonors && (
                    <Link href="/donate" className="btn-outline text-xs px-5 py-2">
                      Give Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Nav row */}
          <div className="mt-12 flex items-center justify-between">
            <Link
              href="/missions"
              className="flex items-center gap-2 font-body text-xs text-cream/30 hover:text-gold/60 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Stories
            </Link>
            <Link
              href="/prayer"
              className="font-body text-xs text-gold/50 hover:text-gold/80 transition-colors"
            >
              Pray for this mission →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
