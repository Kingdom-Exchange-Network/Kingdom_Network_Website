import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrownLogo from "@/components/CrownLogo";

const comingSoon = [
  {
    name: "Rumble",
    path: "M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm4 6.2v7.6L16 12z",
  },
  {
    name: "TikTok",
    path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06V9.7a5.68 5.68 0 0 0-.77-.05A5.66 5.66 0 1 0 15.54 15.3V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48z",
  },
  {
    name: "Facebook",
    path: "M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07z",
  },
  {
    name: "YouTube",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z",
  },
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <div className="bg-plum pt-28 pb-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-gold"><CrownLogo size={30} /></span>
          </div>
          <p className="section-label mb-4">Stay Connected</p>
          <h1 className="display-heading text-5xl sm:text-6xl mb-6">
            Connect with the Community
          </h1>
          <p className="font-body text-lg text-cream/60 leading-relaxed max-w-2xl mx-auto">
            Our Discord server is the primary hub for the Kingdom Exchange community — where
            missionaries, volunteers, donors, and churches meet to share needs, pray for one
            another, and coordinate the work. Come introduce yourself.
          </p>
        </div>
      </div>

      {/* Active socials */}
      <section className="bg-plum py-20 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 text-center">Active Socials</p>
          <h2 className="display-heading text-4xl text-center mb-10">Where We Gather</h2>

          <div className="max-w-md mx-auto">
            <a
              href="https://discord.gg/yNxvAETvgr"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-plum-light border border-gold/20 gold-border-hover p-8 text-center transition-colors duration-200 group"
            >
              <span className="text-gold group-hover:text-gold-light transition-colors duration-200 flex justify-center mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.32 4.37A19.79 19.79 0 0 0 15.43 2.86a.07.07 0 0 0-.08.04c-.21.37-.44.86-.61 1.25a18.27 18.27 0 0 0-5.49 0 12.64 12.64 0 0 0-.61-1.25.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.89 1.51.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-1.99a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13 10.2 10.2 0 0 0 .37-.29.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.38.29a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.69.77 1.36 1.22 1.99a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42z" />
                </svg>
              </span>
              <span className="font-display text-xl text-cream block mb-2">Join us on Discord</span>
              <span className="font-body text-sm text-cream/50">
                Prayer, introductions, and day-to-day coordination.
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-plum-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 text-center">Coming Soon</p>
          <h2 className="display-heading text-4xl text-center mb-4">More Ways to Follow</h2>
          <p className="font-body text-cream/50 max-w-xl mx-auto text-center mb-10">
            These channels are not live yet. Discord remains the place to find us in the meantime.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {comingSoon.map(({ name, path }) => (
              <div
                key={name}
                className="bg-plum border border-gold/10 p-6 text-center opacity-40 select-none"
              >
                <span className="text-cream flex justify-center mb-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </span>
                <span className="font-body text-sm text-cream/70 block mb-1">{name}</span>
                <span className="font-body text-xs text-cream/50 tracking-wide">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
