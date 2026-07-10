import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-plum pt-28 pb-12 border-b border-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Join the Network</p>
          <h1 className="display-heading text-5xl mb-4">
            List Your Organization
          </h1>
          <p className="font-body text-cream/50">
            Apply to have your organization listed in the Kingdom Exchange
            Mission Network directory. All applications are reviewed and vetted
            before approval.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-plum py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-plum-light border border-gold/15 p-8 space-y-6">
            <h2 className="display-heading text-2xl">Application Form</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="section-label block mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  placeholder="Full legal name"
                  className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="apply-type" className="section-label block mb-2">
                  Organization Type *
                </label>
                <div className="relative">
                  <select id="apply-type" className="w-full appearance-none bg-plum border border-gold/20 px-3 pr-8 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors">
                    <option value="">Select type...</option>
                    <option value="nonprofit">Nonprofit / 501(c)(3)</option>
                    <option value="church">
                      Church / Religious Organization
                    </option>
                    <option value="ministry">Ministry / Para-Church</option>
                    <option value="forprofit">Kingdom-Minded Business</option>
                  </select>
                  <svg aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/40" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="section-label block mb-2">Website</label>
                <input
                  type="url"
                  placeholder="https://yourorg.com"
                  className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="section-label block mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  placeholder="contact@yourorg.com"
                  className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="apply-region" className="section-label block mb-2">
                  Primary Region *
                </label>
                <div className="relative">
                  <select id="apply-region" className="w-full appearance-none bg-plum border border-gold/20 px-3 pr-8 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors">
                    <option value="">Select region...</option>
                    <option>North America</option>
                    <option>Latin America</option>
                    <option>South America</option>
                    <option>East Africa</option>
                    <option>West Africa</option>
                    <option>Southeast Asia</option>
                    <option>South Asia</option>
                    <option>Middle East</option>
                    <option>Europe</option>
                    <option>Australia</option>
                    <option>Global</option>
                  </select>
                  <svg aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/40" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="section-label block mb-2">Country *</label>
                <input
                  type="text"
                  placeholder="Primary country of operation"
                  className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="section-label block mb-2">
                Short Description * (1–2 sentences)
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your organization's mission and primary work..."
                className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="section-label block mb-2">
                Full Description *
              </label>
              <textarea
                rows={5}
                placeholder="Provide a detailed description of your organization, history, programs, and impact..."
                className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            {/* Needs checkboxes */}
            <div>
              <label className="section-label block mb-3">
                Current Needs (check all that apply)
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  "Now Hiring",
                  "Seeking Volunteers",
                  "Accepting Donations",
                ].map((need) => (
                  <label
                    key={need}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-4 h-4 border border-gold/30 bg-plum" />
                    <span className="font-body text-sm text-cream/60">
                      {need}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 501c3 */}
            <div>
              <label className="section-label block mb-2">
                501(c)(3) or Registration Number (if applicable)
              </label>
              <input
                type="text"
                placeholder="EIN or registration number"
                className="w-full bg-plum border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Disclaimer agreement */}
            <div className="border-t border-gold/10 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="w-4 h-4 mt-0.5 border border-gold/30 bg-plum shrink-0" />
                <span className="font-body text-xs text-cream/50 leading-relaxed">
                  I confirm the information provided is accurate and agree to
                  the{" "}
                  <Link
                    href="/about#disclaimer"
                    className="text-gold/60 hover:text-gold transition-colors"
                  >
                    Kingdom Exchange Mission Network Liability Disclaimer
                  </Link>
                  . I understand this listing will be reviewed before
                  publication.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto px-10"
            >
              Submit Application
            </button>
          </div>

          <p className="font-body text-xs text-cream/30 mt-6 leading-relaxed">
            Applications are typically reviewed within 5–10 business days. You
            will receive an email confirmation when your listing is approved.{" "}
            <Link
              href="/about#vetting"
              className="hover:text-gold/50 transition-colors"
            >
              Learn about our vetting process.
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
