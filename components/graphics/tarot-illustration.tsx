import Image from "next/image";
import {
  TAROT_CARD_HIGH_PRIESTESS,
  TAROT_CARD_STAR,
  TAROT_CARD_TWO_PENTACLES,
} from "@/lib/assets";

interface TarotIllustrationProps {
  variant?: "spread" | "crescent" | "botanical";
  className?: string;
}

export function TarotIllustration({
  variant = "spread",
  className = "",
}: TarotIllustrationProps) {
  return (
    <div
      className={`tarot-illustration ${className}`.trim()}
      aria-hidden="true"
    >
      {variant === "spread" ? (
        <div className="tarot-intro-spread">
          <div className="tarot-intro-spread__card tarot-intro-spread__card--left">
            <Image
              src={TAROT_CARD_HIGH_PRIESTESS.src}
              alt=""
              width={TAROT_CARD_HIGH_PRIESTESS.width}
              height={TAROT_CARD_HIGH_PRIESTESS.height}
              loading="lazy"
              sizes="110px"
            />
          </div>
          <div className="tarot-intro-spread__card tarot-intro-spread__card--center">
            <Image
              src={TAROT_CARD_STAR.src}
              alt=""
              width={TAROT_CARD_STAR.width}
              height={TAROT_CARD_STAR.height}
              loading="lazy"
              sizes="120px"
            />
          </div>
          <div className="tarot-intro-spread__card tarot-intro-spread__card--right">
            <Image
              src={TAROT_CARD_TWO_PENTACLES.src}
              alt=""
              width={TAROT_CARD_TWO_PENTACLES.width}
              height={TAROT_CARD_TWO_PENTACLES.height}
              loading="lazy"
              sizes="110px"
            />
          </div>
        </div>
      ) : null}

      {variant === "crescent" ? (
        <svg viewBox="0 0 220 150" fill="none">
          <circle
            cx="110"
            cy="75"
            r="56"
            stroke="var(--color-brass)"
            strokeOpacity="0.55"
            strokeDasharray="3 5"
          />
          <path
            d="M114 38a34 34 0 1 0 29 51 26 26 0 0 1-29-51Z"
            stroke="var(--color-forest)"
            strokeWidth="1.6"
            fill="var(--color-brass)"
            fillOpacity="0.2"
          />
          <path
            d="M144 48l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z"
            fill="var(--color-brass)"
          />
          <circle cx="62" cy="48" r="2.2" fill="var(--color-forest)" />
          <circle cx="164" cy="108" r="2.2" fill="var(--color-brass)" />
        </svg>
      ) : null}

      {variant === "botanical" ? (
        <svg viewBox="0 0 220 150" fill="none">
          <circle
            cx="110"
            cy="75"
            r="54"
            stroke="var(--color-forest)"
            strokeOpacity="0.28"
          />
          <path
            d="M110 116V38M110 88c-16-3-26-14-26-28 13 .8 22 8 26 19M110 74c16-3 26-14 26-28-13 .8-22 8-26 19"
            stroke="var(--color-forest)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110 24l2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5L110 24Z"
            fill="var(--color-brass)"
          />
        </svg>
      ) : null}
    </div>
  );
}
