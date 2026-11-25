"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderLink } from "@/components/OrderLink";
import { nav } from "@/data/site";

function current(pathname: string, href: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const target = href.length > 1 ? href.replace(/\/$/, "") : href;
  return path === target;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="wordmark" aria-label="Cafe Alfredo's home">
          <strong>Cafe Alfredo&apos;s</strong>
          <span>Somerset</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <OrderLink className="btn btn-accent header-order">Order online</OrderLink>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-toggle-bars" aria-hidden="true" />
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={open ? "nav-panel is-open" : "nav-panel"}
        aria-label="Mobile"
        hidden={!open}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current(pathname, item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
