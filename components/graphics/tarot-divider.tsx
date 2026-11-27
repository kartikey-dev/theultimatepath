export function TarotDivider() {
  return (
    <div className="tarot-divider" aria-hidden="true">
      <div className="container tarot-divider__inner">
        <span className="tarot-divider__line" />
        <svg viewBox="0 0 120 32" width="120" height="32" fill="none">
          <path
            d="M22 16a7 7 0 1 0 8.5-9.8 5.5 5.5 0 0 1-8.5 9.8Z"
            stroke="var(--color-brass)"
            strokeWidth="1.2"
          />
          <rect
            x="52"
            y="8"
            width="16"
            height="16"
            transform="rotate(45 60 16)"
            stroke="var(--color-forest)"
            strokeWidth="1.2"
            fill="var(--color-brass)"
            fillOpacity="0.14"
          />
          <path
            d="M60 10l1.6 4.4L66 16l-4.4 1.6L60 22l-1.6-4.4L54 16l4.4-1.6L60 10Z"
            fill="var(--color-brass)"
          />
          <circle
            cx="94"
            cy="16"
            r="5"
            stroke="var(--color-brass)"
            strokeWidth="1.2"
          />
          <circle cx="94" cy="16" r="1.5" fill="var(--color-forest)" />
        </svg>
        <span className="tarot-divider__line" />
      </div>
    </div>
  );
}
