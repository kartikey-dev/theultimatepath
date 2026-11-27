import Link from "next/link";
import { TAROT_DISCLAIMER } from "@/lib/site-config";

interface DisclaimerProps {
  compact?: boolean;
}

export function Disclaimer({ compact = false }: DisclaimerProps) {
  return (
    <aside
      className={`disclaimer-panel${compact ? " disclaimer-panel--compact" : ""}`}
      aria-label="Consultation scope and reflection notice"
    >
      <p>
        <strong>Reflection & scope note:</strong> {TAROT_DISCLAIMER}{" "}
        <Link href="/disclaimer" className="inline-link">
          Read full disclaimer
        </Link>
      </p>
    </aside>
  );
}
