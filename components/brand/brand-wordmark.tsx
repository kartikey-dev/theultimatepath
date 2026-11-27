interface BrandWordmarkProps {
  compact?: boolean;
  inverted?: boolean;
}

export function BrandWordmark({
  compact = false,
  inverted = false,
}: BrandWordmarkProps) {
  return (
    <span
      className={`brand-wordmark${compact ? " brand-wordmark--compact" : ""}${
        inverted ? " brand-wordmark--inverted" : ""
      }`}
    >
      <svg
        className="brand-emblem"
        viewBox="0 0 40 40"
        width={40}
        height={40}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="3"
          width="30"
          height="34"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="8.5"
          y="6.5"
          width="23"
          height="27"
          rx="3.5"
          stroke="var(--color-brass)"
          strokeWidth="1"
          strokeOpacity="0.85"
        />
        <path
          d="M20 29V13M20 22c-3.6-.8-5.6-3.2-5.6-6.2 2.8.2 4.8 1.8 5.6 4.4M20 20c3.6-.8 5.6-3.2 5.6-6.2-2.8.2-4.8 1.8-5.6 4.4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="10.5" r="1.3" fill="var(--color-brass)" />
      </svg>
      <span className="brand-wordmark__text">
        <span className="brand-wordmark__title">The Ultimate Path</span>
        <span className="brand-wordmark__byline">by Archana Mahajan</span>
      </span>
    </span>
  );
}
