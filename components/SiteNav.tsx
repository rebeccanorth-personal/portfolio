"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  const path = usePathname();
  return (
    <div className="inner">
      <nav className="top" aria-label="Main">
        <Link href="/" className="who">
          <b>Rebecca North</b>
          <span>UX PM · NYC</span>
        </Link>
        <ul>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/work" aria-current={path === "/work" ? "page" : undefined}>Work</Link></li>
          <li><Link href="/play" aria-current={path === "/play" ? "page" : undefined}>Play</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </div>
  );
}
