export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    role="img"
    aria-label="Logo Informatic Point"
  >
    <rect x="4" y="4" width="40" height="40" rx="11" fill="#0A1128" />
    <circle cx="17" cy="24" r="4.5" fill="#06B6D4" />
    <path
      d="M27 17.5l9.5 6.5-9.5 6.5"
      fill="none"
      stroke="#8B5CF6"
      strokeWidth="3.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo = ({ light = false }) => (
  <span className="flex items-center gap-2.5">
    <LogoMark />
    <span
      className={`font-display text-lg font-bold tracking-tight ${
        light ? "text-paper" : "text-ink"
      }`}
    >
      Informatic<span className="text-brand">Point</span>
    </span>
  </span>
);

export default Logo;
