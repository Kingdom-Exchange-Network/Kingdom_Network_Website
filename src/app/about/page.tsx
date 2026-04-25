import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CrownLogo from "@/components/CrownLogo";

const vettingSteps = [
  {
    step: "01",
    title: "Application Submitted",
    body: "Organizations submit a listing application with basic information — name, type, region, description, website, and contact.",
  },
  {
    step: "02",
    title: "Public Records Review",
    body: "Our admin team reviews public records, the organization's website, 501(c)(3) status or business registration, and online presence.",
  },
  {
    step: "03",
    title: "Social & References Check",
    body: "Social media channels, testimonials, and available references are reviewed for alignment with stated mission and values.",
  },
  {
    step: "04",
    title: "Approval & Badge",
    body: "Approved organizations receive a 'Verified Member' badge displayed on their directory profile.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <div className="bg-navy pt-28 pb-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-gold"><CrownLogo size={30} /></span>
          </div>
          <p className="section-label mb-4">Our Story</p>
          <h1 className="display-heading text-5xl sm:text-6xl mb-6">
            About Kingdom Exchange
          </h1>
          <p className="font-body text-lg text-cream/60 leading-relaxed max-w-2xl mx-auto">
            Kingdom Exchange Mission Network (KMAN) exists to make the global Church more
            connected, more visible, and more effective — by building a trusted directory
            of kingdom-minded organizations doing the work of the gospel around the world.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="bg-navy py-20 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-3">Our Mission</p>
              <h2 className="display-heading text-3xl mb-5">
                Connecting the Kingdom, Advancing the Mission
              </h2>
              <p className="font-body text-cream/60 leading-relaxed mb-4">
                We believe the body of Christ is more powerful when it can see itself.
                Too many faithful organizations operate in isolation — unable to find the
                volunteers they need, the donors who share their vision, or the partner
                churches that could multiply their impact.
              </p>
              <p className="font-body text-cream/60 leading-relaxed">
                KMAN bridges that gap — a curated, searchable, verified directory for the
                global Church.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { verse: "Matthew 6:33", text: "Seek first the kingdom of God and his righteousness, and all these things will be added to you." },
                { verse: "1 Corinthians 12:27", text: "Now you are the body of Christ, and each one of you is a part of it." },
              ].map(({ verse, text }) => (
                <blockquote
                  key={verse}
                  className="border-l-2 border-gold/40 pl-6 py-1"
                >
                  <p className="font-display text-xl text-cream/80 italic mb-2">&ldquo;{text}&rdquo;</p>
                  <cite className="font-body text-xs text-gold/60 not-italic">{verse}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vetting process */}
      <section id="vetting" className="bg-navy-light py-20 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Trust & Safety</p>
            <h2 className="display-heading text-4xl mb-4">Our Vetting Process</h2>
            <p className="font-body text-cream/50 max-w-xl mx-auto">
              Every organization listed in KMAN undergoes a manual review before receiving
              a Verified Member badge. Here is how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10">
            {vettingSteps.map((s) => (
              <div key={s.step} className="bg-navy-light p-8">
                <span className="font-display text-5xl text-gold/20 block mb-4">{s.step}</span>
                <h3 className="font-display text-xl text-cream mb-3">{s.title}</h3>
                <p className="font-body text-sm text-cream/55 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy border border-gold/15 p-6">
            <p className="font-body text-sm text-cream/50 leading-relaxed">
              <span className="text-gold">Premium Kingdom Partner tier</span> includes a deeper vetting review
              and annual re-verification. This tier provides additional trust signals to donors and volunteers
              seeking organizations with a strong track record.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/directory/apply" className="btn-primary">Apply to Be Listed</Link>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-navy py-20 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 text-center">Who We Serve</p>
          <h2 className="display-heading text-4xl text-center mb-10">The Kingdom Network</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: "🌍", label: "Missionaries" },
              { icon: "🤝", label: "Volunteers" },
              { icon: "💛", label: "Donors" },
              { icon: "⛪", label: "Churches" },
              { icon: "📋", label: "Job Seekers" },
              { icon: "🏢", label: "Kingdom Businesses" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="bg-navy-light border border-gold/10 p-6 text-center"
              >
                <span className="text-3xl block mb-3">{icon}</span>
                <span className="font-body text-sm text-cream/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liability Disclaimer */}
      <section id="disclaimer" className="bg-navy-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display-heading text-2xl mb-5">Liability Disclaimer</h2>
          <div className="font-body text-xs text-cream/35 leading-relaxed space-y-3">
            <p>
              Kingdom Exchange Mission Network (KMAN) provides this directory as an informational resource only.
              Listing in this directory does not constitute endorsement, affiliation, or recommendation by KMAN
              or The Free Range Dev, LLC.
            </p>
            <p>
              KMAN makes reasonable efforts to verify the legitimacy of listed organizations; however, we do not
              guarantee the accuracy, completeness, or timeliness of any information provided by listed organizations.
              Users are encouraged to conduct their own due diligence before engaging with, donating to, or
              volunteering with any organization listed in this directory.
            </p>
            <p>
              KMAN is not responsible for the actions, representations, financial management, or outcomes of any
              organization listed herein. Donations made directly to listed organizations are at the donor&apos;s
              own discretion and risk. KMAN does not collect, process, or hold donations on behalf of any
              listed organization except where explicitly stated.
            </p>
            <p>
              By using this directory, you agree that KMAN and The Free Range Dev, LLC shall not be held liable
              for any direct, indirect, incidental, or consequential damages arising from reliance on directory
              information or engagement with listed organizations.
            </p>
            <p className="text-cream/25 pt-2">
              Last updated: April 2026 · Plan version 1.0 · © 2026 The Free Range Dev, LLC
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
