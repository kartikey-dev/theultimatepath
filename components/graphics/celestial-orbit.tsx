interface CelestialOrbitProps {
  tone?: "paper" | "night";
  className?: string;
}

export function CelestialOrbit({
  tone = "paper",
  className = "",
}: CelestialOrbitProps) {
  return (
    <div
      className={`celestial-orbit celestial-orbit--${tone} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        className="celestial-orbit__svg"
        viewBox="0 0 420 420"
        fill="none"
      >
        <circle
          cx="210"
          cy="210"
          r="196"
          stroke="currentColor"
          strokeOpacity="0.42"
          strokeWidth="1.2"
          strokeDasharray="4 7"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="176"
          ry="122"
          transform="rotate(-24 210 210)"
          stroke="currentColor"
          strokeOpacity="0.48"
          strokeWidth="1.2"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="138"
          ry="190"
          transform="rotate(28 210 210)"
          stroke="var(--color-brass)"
          strokeOpacity="0.68"
          strokeWidth="1.35"
        />
        {/* Compass four-point stars */}
        <path
          d="M58 84l5 13 13 5-13 5-5 13-5-13-13-5 13-5 5-13Z"
          fill="var(--color-brass)"
          fillOpacity="0.92"
          className="celestial-star celestial-star--a"
        />
        <path
          d="M358 118l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z"
          fill="var(--color-brass)"
          fillOpacity="0.88"
          className="celestial-star celestial-star--b"
        />
        <path
          d="M332 332l4.5 11 11 4.5-11 4.5-4.5 11-4.5-11-11-4.5 11-4.5 4.5-11Z"
          fill="currentColor"
          fillOpacity="0.78"
          className="celestial-star celestial-star--c"
        />
        {/* Crescent moon accent */}
        <path
          d="M78 320a16 16 0 1 0 19-23 12.5 12.5 0 0 1-19 23Z"
          stroke="var(--color-brass)"
          strokeWidth="1.6"
          fill="var(--color-brass)"
          fillOpacity="0.16"
        />
        {/* Constellation dots & lines */}
        <path
          d="M144 42L182 28L236 44L288 60"
          stroke="var(--color-brass)"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <circle cx="144" cy="42" r="2.8" fill="var(--color-brass)" />
        <circle cx="182" cy="28" r="2.2" fill="currentColor" fillOpacity="0.65" />
        <circle cx="236" cy="44" r="2" fill="var(--color-brass)" />
        <circle cx="288" cy="60" r="2.6" fill="var(--color-brass)" fillOpacity="0.9" />
        <circle cx="44" cy="222" r="2.5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="378" cy="248" r="2.8" fill="var(--color-brass)" />
      </svg>
    </div>
  );
}
