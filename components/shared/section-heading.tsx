interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  lead?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  heading,
  lead,
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <HeadingTag>{heading}</HeadingTag>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
