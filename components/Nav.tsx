"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const darkVars: Record<string, string> = {
  "--bg": "#080812",
  "--surface": "#0E0E1E",
  "--surface-2": "#161628",
  "--border": "rgba(255,255,255,0.06)",
  "--border-hover": "rgba(255,255,255,0.12)",
  "--text": "#E8E8F2",
  "--muted": "#6868A0",
  "--accent": "#9B6FF5",
  "--teal": "#20D3EA",
  "--pink": "#F472B6",
};

const lightVars: Record<string, string> = {
  "--bg": "#DDE5F0",
  "--surface": "#E5EDF8",
  "--surface-2": "#D0D9EA",
  "--border": "rgba(0,0,0,0.08)",
  "--border-hover": "rgba(0,0,0,0.14)",
  "--text": "#120D24",
  "--muted": "#3D2B6B",
  "--accent": "#7C3AED",
  "--teal": "#0891B2",
  "--pink": "#DB2777",
};

const links = [
  { href: "/about", label: "About" },
  { href: "/professional", label: "Professional" },
  { href: "/personal", label: "Personal" },
  { href: "/graphics", label: "Graphics" },
  { href: "/play", label: "Play" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-mode") as "dark" | "light" | null;
    if (saved) {
      setMode(saved);
      applyVars(saved);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyVars(m: "dark" | "light") {
    const vars = m === "light" ? lightVars : darkVars;
    Object.entries(vars).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v)
    );
  }

  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyVars(next);
    localStorage.setItem("portfolio-mode", next);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: "color-mix(in srgb, var(--bg) 80%, transparent)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--text)" }}
        >
          rebecca north
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "var(--text)" : "var(--muted)",
                  background: isActive ? "var(--surface-2)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--surface-2)";
                    e.currentTarget.style.color = "var(--text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--muted)";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Dark / light toggle */}
          <button
            onClick={toggle}
            className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-hover)",
              color: "var(--muted)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; }}
          >
            <span>{mode === "dark" ? "🌙" : "☀️"}</span>
            <span>{mode === "dark" ? "Dark" : "Light"}</span>
          </button>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border-hover)",
              color: "var(--muted)",
            }}
          >
            <span>{mode === "dark" ? "🌙" : "☀️"}</span>
            <span>{mode === "dark" ? "Dark" : "Light"}</span>
          </button>

          <button
            className="flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--muted)",
                transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--muted)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--muted)",
                transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "var(--text)" : "var(--muted)",
                  background: isActive ? "var(--surface-2)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
