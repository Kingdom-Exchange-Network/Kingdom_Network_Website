import Link from "next/link";
import CrownLogo from "./CrownLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold-thin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-gold">
                <CrownLogo size={24} />
              </span>
              <div>
                <p className="font-display text-base text-cream">Kingdom Exchange</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/40">
                  Mission Network
                </p>
              </div>
            </div>
            <p className="font-body text-xs text-cream/50 leading-relaxed max-w-xs">
              Connecting kingdom-minded organizations, volunteers, donors, and
              missionaries across the globe.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="section-label mb-4">Directory</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/directory", label: "Browse All" },
                { href: "/directory?type=nonprofit", label: "Nonprofits" },
                { href: "/directory?type=church", label: "Churches" },
                { href: "/directory?need=hiring", label: "Now Hiring" },
                { href: "/directory?need=volunteers", label: "Need Volunteers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-cream/50 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="section-label mb-4">Community</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/missions", label: "Featured Missions" },
                { href: "/prayer", label: "Prayer Requests" },
                { href: "/news", label: "News & Events" },
                { href: "/donate", label: "Give" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-cream/50 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="section-label mb-4">Organization</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About / Mission" },
                { href: "/about#vetting", label: "Vetting Process" },
                { href: "/about#disclaimer", label: "Liability Disclaimer" },
                { href: "/directory/apply", label: "List Your Org" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-cream/50 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-gold-thin flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-cream/30 font-body text-xs">
            <span>© {year} Kingdom Exchange Mission Network</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Built by{" "}
              <a
                href="https://thefreerangedev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold/60 transition-colors duration-200"
              >
                The Free Range Dev
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/about#disclaimer"
              className="font-body text-xs text-cream/30 hover:text-gold/60 transition-colors duration-200"
            >
              Liability Disclaimer
            </Link>
            <span className="text-cream/20 text-xs font-body">
              Last updated Apr 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
