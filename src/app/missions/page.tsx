import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { featuredMissions } from "@/lib/seed-data";

export default function MissionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-navy pt-28 pb-12 border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Stories</p>
          <h1 className="display-heading text-5xl mb-4">Featured Missions</h1>
          <p className="font-body text-cream/50 max-w-xl">
            Long-form stories from the field — spotlighting the kingdom work being done
            by organizations in our network.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-navy py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {featuredMissions.map((mission) => (
              <Link
                key={mission.id}
                href={`/missions/${mission.id}`}
                className="group flex flex-col sm:flex-row gap-6 bg-navy-light border border-gold/10 hover:border-gold/30 transition-all duration-300 p-6"
              >
                {/* Date / meta */}
                <div className="sm:w-36 shrink-0">
                  <p className="font-body text-xs text-cream/30">
                    {new Date(mission.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="font-body text-xs text-cream/30 mt-1">
                    {mission.readingTime} min read
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="section-label text-[10px] mb-2">{mission.region}</p>
                  <h2 className="font-display text-2xl text-cream group-hover:text-gold transition-colors duration-200 leading-snug mb-3">
                    {mission.title}
                  </h2>
                  <p className="font-body text-sm text-cream/55 leading-relaxed mb-4">
                    {mission.excerpt}
                  </p>
                  <p className="font-body text-xs text-gold/60">{mission.orgName}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center border border-gold/10 p-10">
            <p className="font-display text-2xl text-cream/40 mb-3">More stories coming soon</p>
            <p className="font-body text-sm text-cream/30">
              Featured Missions are managed via Sanity CMS — connect your CMS to publish more stories.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
