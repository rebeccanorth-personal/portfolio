"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Rendered into <body> so it sits above every section, including the footer. Fades in on open (CSS).
// Esc, the Close button or a backdrop click closes it; the page behind can't scroll while it's open.
export default function Overlay({
  open,
  onClose,
  label,
  variant,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  variant: "panel" | "shot";
  children: React.ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus Close on open, return focus to whatever opened it, and close on Esc
  useEffect(() => {
    if (!open) return;
    const lastFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      lastFocus?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div
      className="fx"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {variant === "panel" ? (
        <div className="panel">
          <button ref={closeRef} type="button" className="close" onClick={onClose}>Close</button>
          {children}
        </div>
      ) : (
        <>
          <button ref={closeRef} type="button" className="shot-close" onClick={onClose}>Close</button>
          {children}
        </>
      )}
    </div>,
    document.body
  );
}

// A single image, shown like a print with its title and description
export function Shot({ src, title, desc }: { src: string; title: string; desc?: string }) {
  return (
    <figure className="shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={title} />
      <figcaption>
        <b>{title}</b>
        {desc && <span>{desc}</span>}
      </figcaption>
    </figure>
  );
}
