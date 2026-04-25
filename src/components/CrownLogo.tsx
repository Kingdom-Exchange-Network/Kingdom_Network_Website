interface CrownLogoProps {
  size?: number;
  className?: string;
}

export default function CrownLogo({ size = 32, className = "" }: CrownLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kingdom Exchange Mission Network crown logo"
    >
      {/* Crown base */}
      <rect x="4" y="22" width="32" height="5" rx="1" fill="currentColor" />
      {/* Crown points */}
      <path
        d="M4 22L4 10L12 17L20 4L28 17L36 10L36 22Z"
        fill="currentColor"
      />
      {/* Center jewel */}
      <circle cx="20" cy="13" r="2.5" fill="#0A0D1A" />
      {/* Side jewels */}
      <circle cx="9" cy="19" r="1.5" fill="#0A0D1A" />
      <circle cx="31" cy="19" r="1.5" fill="#0A0D1A" />
      {/* Bottom trim */}
      <rect x="4" y="26.5" width="32" height="0.5" fill="#0A0D1A" opacity="0.3" />
    </svg>
  );
}
