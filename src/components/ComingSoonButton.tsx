"use client";

import { useState } from "react";

interface ComingSoonButtonProps {
  enabled: boolean;
  href: string;
  className?: string;
  children: React.ReactNode;
}

// When enabled, renders a normal external link. When not enabled, renders a
// button that goes nowhere and shows "This feature is coming soon." on click.
export default function ComingSoonButton({
  enabled,
  href,
  className,
  children,
}: ComingSoonButtonProps) {
  const [showMessage, setShowMessage] = useState(false);

  if (enabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setShowMessage(true)} className={className}>
        {children}
      </button>
      <p aria-live="polite" className={`font-body text-xs text-cream/60${showMessage ? " mt-3" : ""}`}>
        {showMessage ? "This feature is coming soon." : ""}
      </p>
    </>
  );
}
