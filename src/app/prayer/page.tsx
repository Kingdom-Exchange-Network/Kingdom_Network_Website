"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrownLogo from "@/components/CrownLogo";
import { prayerRequests } from "@/lib/seed-data";

export default function PrayerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    region: "",
    anonymous: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Supabase integration will be wired in Phase 2
    setSubmitted(true);
  }

  const sorted = [...prayerRequests].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <div className="bg-navy pt-28 pb-14 border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-gold"><CrownLogo size={28} /></span>
          </div>
          <p className="section-label mb-4">Intercession</p>
          <h1 className="display-heading text-5xl sm:text-6xl mb-5">Prayer Wall</h1>
          <p className="font-body text-lg text-cream/60 leading-relaxed max-w-xl mx-auto">
            Bring your needs before the network. Stand in the gap for those in the field.
            The kingdom advances on its knees.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-navy py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Submit form */}
            <aside className="lg:col-span-1">
              <div className="bg-navy-light border border-gold/15 p-6 sticky top-24">
                <h2 className="display-heading text-2xl mb-1">Submit a Request</h2>
                <p className="font-body text-xs text-cream/40 mb-5 leading-relaxed">
                  Requests are reviewed before being posted publicly.
                </p>

                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-display text-xl text-cream mb-2">Request Received</p>
                    <p className="font-body text-xs text-cream/45 leading-relaxed">
                      Thank you for sharing. We will review your request and post it to the
                      wall within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ title: "", body: "", region: "", anonymous: false }); }}
                      className="mt-5 font-body text-xs text-gold/50 hover:text-gold/80 transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="section-label block mb-1.5">Title *</label>
                      <input
                        required
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Brief title for your request"
                        className="w-full bg-navy border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/25 outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-1.5">Prayer Request *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.body}
                        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                        placeholder="Share what you'd like the network to pray for..."
                        className="w-full bg-navy border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/25 outline-none focus:border-gold/50 transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-1.5">Region (optional)</label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-navy border border-gold/20 px-3 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors"
                      >
                        <option value="">Select region...</option>
                        <option>North America</option>
                        <option>Latin America</option>
                        <option>East Africa</option>
                        <option>West Africa</option>
                        <option>North Africa</option>
                        <option>Southeast Asia</option>
                        <option>South Asia</option>
                        <option>Middle East</option>
                        <option>Europe</option>
                        <option>Global</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          formData.anonymous ? "bg-gold border-gold" : "border-gold/30"
                        }`}
                        onClick={() => setFormData({ ...formData, anonymous: !formData.anonymous })}
                      >
                        {formData.anonymous && (
                          <svg className="w-2.5 h-2.5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-body text-xs text-cream/50 cursor-pointer"
                        onClick={() => setFormData({ ...formData, anonymous: !formData.anonymous })}
                      >
                        Post anonymously
                      </span>
                    </label>
                    <button type="submit" className="btn-primary w-full">
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </aside>

            {/* Prayer wall */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="display-heading text-2xl">Active Requests</h2>
                <p className="font-body text-xs text-cream/30">
                  {prayerRequests.length} requests
                </p>
              </div>

              {sorted.map((req) => {
                const formattedDate = new Date(req.postedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <div
                    key={req.id}
                    className="bg-navy-light border border-gold/10 hover:border-gold/20 transition-colors p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display text-xl text-cream leading-snug">
                        {req.title}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0 bg-navy border border-gold/15 px-2.5 py-1">
                        <svg className="w-3 h-3 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="font-body text-xs text-gold/60">{req.prayerCount}</span>
                      </div>
                    </div>

                    <p className="font-body text-sm text-cream/60 leading-relaxed mb-4">
                      {req.body}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3 font-body text-xs text-cream/30">
                        {req.region && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                            </svg>
                            {req.region}
                          </span>
                        )}
                        <span>{formattedDate}</span>
                        {req.orgName && !req.anonymous && (
                          <span className="text-gold/40">{req.orgName}</span>
                        )}
                        {req.anonymous && <span className="italic">Anonymous</span>}
                      </div>

                      <button className="flex items-center gap-1.5 font-body text-xs text-cream/40 hover:text-gold/70 transition-colors border border-gold/15 hover:border-gold/35 px-3 py-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        I prayed for this
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
