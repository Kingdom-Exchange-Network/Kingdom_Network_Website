"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrgCard from "@/components/OrgCard";
import { seedOrganizations } from "@/lib/seed-data";
import { OrgCategory, OrgType } from "@/lib/types";

const regionOptions = [
  "All Regions",
  "North America",
  "Latin America",
  "East Africa",
  "West Africa",
  "Southeast Asia",
  "Middle East",
  "Europe",
  "Global",
];

const typeOptions: { label: string; value: OrgType | "" }[] = [
  { label: "All Types", value: "" },
  { label: "Nonprofit", value: "nonprofit" },
  { label: "Church", value: "church" },
  { label: "Ministry", value: "ministry" },
  { label: "Business", value: "forprofit" },
];

const categoryOptions: { label: string; value: OrgCategory | "" }[] = [
  { label: "All Categories", value: "" },
  { label: "Relief", value: "relief" },
  { label: "Missions", value: "missions" },
  { label: "Education", value: "education" },
  { label: "Volunteers", value: "volunteers" },
  { label: "Hiring", value: "hiring" },
  { label: "Marketplace", value: "marketplace" },
];

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [type, setType] = useState<OrgType | "">("");
  const [category, setCategory] = useState<OrgCategory | "">("");
  const [hiringOnly, setHiringOnly] = useState(false);
  const [volunteersOnly, setVolunteersOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    return seedOrganizations.filter((org) => {
      if (search && !org.name.toLowerCase().includes(search.toLowerCase()) &&
          !org.shortDescription.toLowerCase().includes(search.toLowerCase())) return false;
      if (region !== "All Regions" && org.region !== region) return false;
      if (type && org.type !== type) return false;
      if (category && !org.category.includes(category)) return false;
      if (hiringOnly && !org.hiring) return false;
      if (volunteersOnly && !org.volunteersNeeded) return false;
      if (verifiedOnly && !org.verified) return false;
      return true;
    });
  }, [search, region, type, category, hiringOnly, volunteersOnly, verifiedOnly]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page header */}
      <div className="bg-navy pt-28 pb-12 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Kingdom Exchange</p>
          <h1 className="display-heading text-5xl mb-4">Organization Directory</h1>
          <p className="font-body text-cream/50 max-w-xl">
            Browse and filter verified kingdom-minded organizations across the globe.
            Connect with missions, churches, nonprofits, and more.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-navy py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Sidebar filters ───────────────────────── */}
            <aside className="lg:w-64 shrink-0 space-y-6">
              {/* Search */}
              <div>
                <label className="section-label block mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Name or keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-navy-light border border-gold/20 px-3 py-2.5 font-body text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
                />
              </div>

              {/* Region */}
              <div>
                <label className="section-label block mb-2">Region</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-navy-light border border-gold/20 px-3 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors"
                >
                  {regionOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="section-label block mb-2">Organization Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as OrgType | "")}
                  className="w-full bg-navy-light border border-gold/20 px-3 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors"
                >
                  {typeOptions.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="section-label block mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as OrgCategory | "")}
                  className="w-full bg-navy-light border border-gold/20 px-3 py-2.5 font-body text-sm text-cream/70 outline-none focus:border-gold/50 transition-colors"
                >
                  {categoryOptions.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Checkboxes */}
              <div>
                <label className="section-label block mb-3">Filter By Need</label>
                <div className="space-y-2.5">
                  {[
                    { label: "Now Hiring", value: hiringOnly, set: setHiringOnly },
                    { label: "Need Volunteers", value: volunteersOnly, set: setVolunteersOnly },
                    { label: "Verified Only", value: verifiedOnly, set: setVerifiedOnly },
                  ].map(({ label, value, set }) => (
                    <label
                      key={label}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          value
                            ? "bg-gold border-gold"
                            : "border-gold/30 group-hover:border-gold/60"
                        }`}
                        onClick={() => set(!value)}
                      >
                        {value && (
                          <svg className="w-2.5 h-2.5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-body text-sm text-cream/60 group-hover:text-cream/80 transition-colors"
                        onClick={() => set(!value)}
                      >
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSearch(""); setRegion("All Regions"); setType(""); setCategory("");
                  setHiringOnly(false); setVolunteersOnly(false); setVerifiedOnly(false);
                }}
                className="font-body text-xs text-cream/30 hover:text-gold/60 transition-colors"
              >
                Clear all filters
              </button>
            </aside>

            {/* ── Results grid ─────────────────────────── */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-sm text-cream/40">
                  {filtered.length} organization{filtered.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((org) => (
                    <OrgCard key={org.id} org={org} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border border-gold/10">
                  <p className="font-display text-3xl text-cream/30 mb-3">No results</p>
                  <p className="font-body text-sm text-cream/30">
                    Try adjusting your filters or{" "}
                    <button
                      onClick={() => {
                        setSearch(""); setRegion("All Regions"); setType(""); setCategory("");
                        setHiringOnly(false); setVolunteersOnly(false); setVerifiedOnly(false);
                      }}
                      className="text-gold/50 hover:text-gold transition-colors"
                    >
                      clear all
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
