"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/content";

interface ConsultationFaqProps {
  items: readonly FaqItem[];
}

export function ConsultationFaq({ items }: ConsultationFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div
      className="faq-accordion"
      role="region"
      aria-label="Consultation frequently asked questions"
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const buttonId = `${baseId}-btn-${idx}`;

        return (
          <div key={item.question} className="faq-accordion__item">
            <h3 className="faq-accordion__heading">
              <button
                id={buttonId}
                type="button"
                className="faq-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <span>{item.question}</span>
                <span className="faq-accordion__symbol" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="faq-accordion__panel"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
