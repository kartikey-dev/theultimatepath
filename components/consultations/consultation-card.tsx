import { ArcanaEmblem } from "@/components/graphics/arcana-emblem";

interface ConsultationCardProps {
  number: string;
  title: string;
  summary: string;
  suitableFor: string;
  emblem?: "star" | "moon" | "sun" | "leaf";
}

export function ConsultationCard({
  number,
  title,
  summary,
  suitableFor,
  emblem = "star",
}: ConsultationCardProps) {
  return (
    <article className="surface-card">
      <div className="surface-card__top">
        <span className="surface-card__index">{number}</span>
        <ArcanaEmblem variant={emblem} />
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p className="surface-card__meta">{suitableFor}</p>
    </article>
  );
}
