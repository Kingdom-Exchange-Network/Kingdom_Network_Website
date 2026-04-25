import Link from "next/link";
import { Organization, categoryLabels, categoryColors } from "@/lib/types";

interface OrgCardProps {
  org: Organization;
}

export default function OrgCard({ org }: OrgCardProps) {
  return (
    <Link
      href={`/directory/${org.id}`}
      className="block group bg-navy-light border border-gold/10 hover:border-gold/30 transition-all duration-300 p-5"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        {/* Logo placeholder / initials */}
        <div className="w-10 h-10 bg-navy border border-gold/20 flex items-center justify-center shrink-0">
          <span className="font-display text-lg text-gold/70">
            {org.name.charAt(0)}
          </span>
        </div>

        {/* Verified badge */}
        {org.verified && (
          <span className="flex items-center gap-1 bg-gold/10 border border-gold/20 text-gold font-body text-[10px] tracking-[0.15em] uppercase px-2 py-0.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified
          </span>
        )}
      </div>

      {/* Org name */}
      <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-200 leading-snug mb-1">
        {org.name}
      </h3>

      {/* Location */}
      <p className="font-body text-xs text-cream/40 mb-3 flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {org.region} · {org.country}
      </p>

      {/* Short description */}
      <p className="font-body text-sm text-cream/60 leading-relaxed mb-4 line-clamp-2">
        {org.shortDescription}
      </p>

      {/* Category tags */}
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
    </Link>
  );
}
