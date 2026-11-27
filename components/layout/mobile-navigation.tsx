"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/lib/site-config";

interface MobileNavigationProps {
  items: readonly NavItem[];
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setIsOpen(false);
    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav__trigger"
        aria-expanded={isOpen}
        aria-controls={drawerId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => (isOpen ? closeMenu(false) : setIsOpen(true))}
      >
        <span className="mobile-nav__bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="mobile-nav__label">Menu</span>
      </button>

      {isOpen ? (
        <div
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-nav__drawer"
        >
          <div className="mobile-nav__panel container">
            <div className="mobile-nav__top">
              <span className="mobile-nav__heading">Explore The Ultimate Path</span>
              <button
                type="button"
                className="mobile-nav__close"
                aria-label="Close navigation menu"
                onClick={() => closeMenu(true)}
              >
                Close ×
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mobile-nav__links">
              {items.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`mobile-nav__link${
                      isActive ? " mobile-nav__link--active" : ""
                    }`}
                    onClick={() => closeMenu(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mobile-nav__cta-row">
              <Link
                href="/connect"
                className="btn btn-primary"
                onClick={() => closeMenu(false)}
              >
                Enquire about a reading
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
