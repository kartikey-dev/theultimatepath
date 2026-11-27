"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname() || "/";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      return;
    }

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".surface-card, .step-card, .faq-accordion__item, .faq-item",
      ),
    );

    const pending: HTMLElement[] = [];
    const viewportThreshold = window.innerHeight * 0.94;

    targets.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > viewportThreshold) {
        el.setAttribute("data-reveal-pending", "true");
        el.style.setProperty("--reveal-delay", `${(idx % 3) * 70}ms`);
        pending.push(el);
      }
    });

    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.removeAttribute("data-reveal-pending");
            target.setAttribute("data-reveal-visible", "true");
            observer.unobserve(target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    for (const el of pending) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of pending) {
        el.removeAttribute("data-reveal-pending");
      }
    };
  }, [pathname]);

  return (
    <>
      <div
        key={`route-bar-${pathname}`}
        className="route-progress"
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        key={pathname}
        data-route={pathname}
        className="page-transition"
      >
        {children}
      </div>
    </>
  );
}
