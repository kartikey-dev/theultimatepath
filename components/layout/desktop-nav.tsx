"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/site-config";

interface DesktopNavProps {
  items: readonly NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Main navigation" className="site-nav">
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
