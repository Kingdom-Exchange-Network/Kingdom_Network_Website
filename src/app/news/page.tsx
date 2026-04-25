import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsEvents } from "@/lib/seed-data";

const typeLabel: Record<"news" | "event", string> = {
  news: "News",
  event: "Event",
};

const typeColors: Record<"news" | "event", string> = {
  news: "bg-gold/10 text-gold border-gold/30",
  event: "bg-tag-purple/10 text-purple-300 border-purple-500/30",
};

export default function NewsPage() {
  const sorted = [...newsEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page header */}
      <div className="bg-navy pt-28 pb-12 border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Kingdom Exchange</p>
          <h1 className="display-heading text-5xl mb-4">News & Events</h1>
          <p className="font-body text-cream/50 max-w-xl">
            Announcements, network updates, and upcoming events from Kingdom Exchange Mission
            Network and our partner organizations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-navy py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {sorted.map((item) => {
              const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              return (
                <div
                  key={item.id}
                  className="bg-navy-light border border-gold/10 hover:border-gold/25 transition-colors p-6 flex flex-col sm:flex-row gap-5"
                >
                  {/* Date column */}
                  <div className="sm:w-40 shrink-0">
                    <p className="font-body text-xs text-cream/35">{formattedDate}</p>
                    {item.type === "event" && item.location && (
                      <p className="font-body text-xs text-cream/30 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`font-body text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border ${typeColors[item.type]}`}
                      >
                        {typeLabel[item.type]}
                      </span>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[10px] tracking-[0.1em] uppercase text-cream/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-xl text-cream leading-snug mb-2">
                      {item.title}
                    </h2>
                    <p className="font-body text-sm text-cream/55 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-navy-light border border-gold/15 p-8 text-center">
            <p className="section-label mb-3">Stay Connected</p>
            <h2 className="display-heading text-3xl mb-4">Get Network Updates</h2>
            <p className="font-body text-sm text-cream/50 max-w-md mx-auto mb-6 leading-relaxed">
              Subscribe to receive news, event announcements, and featured mission stories
              directly in your inbox. No spam — kingdom content only.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-navy border border-gold/20 px-4 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="font-body text-xs text-cream/25 mt-3">
              Newsletter integration via Mailchimp — coming soon.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
