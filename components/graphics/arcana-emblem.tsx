interface ArcanaEmblemProps {
  variant?: "star" | "moon" | "sun" | "leaf";
  className?: string;
}

export function ArcanaEmblem({
  variant = "star",
  className = "",
}: ArcanaEmblemProps) {
  return (
    <span
      className={`arcana-emblem ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 64" width="40" height="52" fill="none">
        <rect
          x="3"
          y="3"
          width="42"
          height="58"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="7"
          y="7"
          width="34"
          height="50"
          rx="3.5"
          stroke="var(--color-brass)"
          strokeOpacity="0.75"
          strokeWidth="1"
        />
        {variant === "star" ? (
          <>
            <path
              d="M24 17l3.2 8.8L36 29l-8.8 3.2L24 41l-3.2-8.8L12 29l8.8-3.2L24 17Z"
              stroke="currentColor"
              strokeWidth="1.35"
              fill="var(--color-brass)"
              fillOpacity="0.18"
            />
            <circle cx="24" cy="48" r="1.4" fill="var(--color-brass)" />
          </>
        ) : null}
        {variant === "moon" ? (
          <>
            <path
              d="M26 21a10.5 10.5 0 1 0 9 15.8 8.2 8.2 0 0 1-9-15.8Z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="var(--color-brass)"
              fillOpacity="0.16"
            />
            <circle cx="31" cy="21" r="1.5" fill="var(--color-brass)" />
            <circle cx="24" cy="48" r="1.4" fill="var(--color-brass)" />
          </>
        ) : null}
        {variant === "sun" ? (
          <>
            <circle
              cx="24"
              cy="30"
              r="7.5"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="var(--color-brass)"
              fillOpacity="0.18"
            />
            <path
              d="M24 17v3M24 40v3M11 30h3M34 30h3M15 21l2.2 2.2M30.8 36.8L33 39M33 21l-2.2 2.2M17.2 36.8L15 39"
              stroke="var(--color-brass)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </>
        ) : null}
        {variant === "leaf" ? (
          <>
            <path
              d="M24 44V20M24 35c-5-1-8-4.5-8-9 4 .2 6.8 2.5 8 6M24 31c5-1 8-4.5 8-9-4 .2-6.8 2.5-8 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="15.5" r="1.6" fill="var(--color-brass)" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
