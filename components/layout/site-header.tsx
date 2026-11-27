import Link from "next/link";
import { BrandWordmark } from "@/components/brand/brand-wordmark";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { HEADER_NAV_ITEMS } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          <BrandWordmark />
        </Link>

        <DesktopNav items={HEADER_NAV_ITEMS} />

        <div className="site-header__actions">
          <Link href="/connect" className="btn btn-primary site-header__cta">
            Enquire
          </Link>
          <MobileNavigation items={HEADER_NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
