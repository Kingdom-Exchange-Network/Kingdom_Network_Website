import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { seedOrganizations } from "@/lib/seed-data";
import CrownLogo from "@/components/CrownLogo";

export default function DonatePage() {
  const donorOrgs = seedOrganizations.filter((o) => o.seekingDonors);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <div className="bg-navy pt-28 pb-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-gold"><CrownLogo size={28} /></span>
          </div>
          <p className="section-label mb-4">Give</p>
          <h1 className="display-heading text-5xl sm:text-6xl mb-6">Support the Mission</h1>
          <p className="font-body text-lg text-cream/60 leading-relaxed max-w-xl mx-auto">
            Your generosity fuels kingdom work around the world. Give directly to organizations
            doing the work, or support KMAN&apos;s mission to keep this directory free and growing.
          </p>
        </div>
      </div>

      {/* How giving works */}
      <section className="bg-navy py-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Transparency</p>
            <h2 className="display-heading text-3xl">How Giving Works on KMAN</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Direct Pass-Through",
                body: "Donations go directly to each organization through their own giving link. KMAN does not hold or process donations.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Vetted Recipients",
                body: "Only verified or reviewed organizations are featured here. Each org is responsible for its own donation compliance.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Stripe Powered",
                body: "Organizations that use KMAN's donation flow are powered by Stripe — industry-standard payment security.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy p-8 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg text-cream">{item.title}</h3>
                <p className="font-body text-sm text-cream/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support KMAN */}
      <section className="bg-navy-light py-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label mb-3">Support KMAN</p>
              <h2 className="display-heading text-3xl mb-5">
                Keep This Directory Free
              </h2>
              <p className="font-body text-cream/60 leading-relaxed mb-4">
                KMAN is designed to be as low-cost as possible so that small organizations
                can be listed for free. Your donation directly supports hosting, development,
                and vetting operations.
              </p>
              <p className="font-body text-cream/60 leading-relaxed mb-6">
                Every gift keeps the directory free for the organizations that need it most.
              </p>
              <a
                href="https://donate.stripe.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Give to KMAN via Stripe
              </a>
            </div>

            <div className="bg-navy border border-gold/15 p-6 space-y-4">
              <h3 className="section-label">Suggested Giving Levels</h3>
              {[
                { amount: "$10 / mo", label: "Sustainer", desc: "Covers monthly hosting costs" },
                { amount: "$25 / mo", label: "Advocate", desc: "Supports vetting and admin" },
                { amount: "$50 / mo", label: "Champion", desc: "Enables new feature development" },
                { amount: "Custom", label: "Partner", desc: "Any amount makes a difference" },
              ].map(({ amount, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 border-b border-gold/10 last:border-b-0"
                >
                  <div>
                    <span className="font-display text-lg text-gold">{amount}</span>
                    <span className="font-body text-xs text-cream/40 ml-3">— {label}</span>
                    <p className="font-body text-xs text-cream/40 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Give to Organizations */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Partner Organizations</p>
            <h2 className="display-heading text-3xl">Give Directly to Organizations</h2>
          </div>

          <div className="space-y-3">
            {donorOrgs.map((org) => (
              <div
                key={org.id}
                className="bg-navy-light border border-gold/10 hover:border-gold/25 transition-colors p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy border border-gold/20 flex items-center justify-center shrink-0">
                    <span className="font-display text-lg text-gold/70">{org.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg text-cream">{org.name}</h3>
                      {org.verified && (
                        <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="font-body text-xs text-cream/40">{org.region} · {org.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/directory/${org.id}`}
                    className="font-body text-xs text-cream/40 hover:text-cream/70 transition-colors"
                  >
                    View Profile
                  </Link>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-4 py-2"
                  >
                    Give Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-cream/30 mt-6 text-center leading-relaxed">
            Donations are made directly to each organization. KMAN is not responsible for the
            management or use of donated funds.{" "}
            <Link href="/about#disclaimer" className="hover:text-gold/50 transition-colors">
              Read our disclaimer.
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
