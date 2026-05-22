"use client";

import { useEffect, useRef, useState } from "react";

type Style = "dot-ring" | "smooth" | "spotlight";

const LERP = 0.28;

/* ── Dot + Ring ─────────────────────────────────────────── */
function DotRing() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursor = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const hovered = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      hovered.current = !!el.closest("a, button, [role=button]");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf: number;
    const tick = () => {
      ring.current.x += (cursor.current.x - ring.current.x) * LERP;
      ring.current.y += (cursor.current.y - ring.current.y) * LERP;
      if (ringRef.current) {
        const size = hovered.current ? 52 : 36;
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.marginLeft = `-${size / 2}px`;
        ringRef.current.style.marginTop = `-${size / 2}px`;
        ringRef.current.style.opacity = hovered.current ? "0.9" : "0.5";
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Dot — exact */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 rounded-full"
        style={{ width: 5, height: 5, marginLeft: -2.5, marginTop: -2.5, background: "var(--accent)" }}
      />
      {/* Ring — delayed */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 rounded-full transition-[width,height,opacity] duration-200"
        style={{
          width: 36, height: 36,
          marginLeft: -18, marginTop: -18,
          border: "1.5px solid var(--accent)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

/* ── Smooth Follower ─────────────────────────────────────── */
function SmoothFollower() {
  const ref = useRef<HTMLDivElement>(null);
  const cursor = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => { cursor.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      pos.current.x += (cursor.current.x - pos.current.x) * LERP;
      pos.current.y += (cursor.current.y - pos.current.y) * LERP;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={ref}
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: 22, height: 22,
          marginLeft: -11, marginTop: -11,
          background: "var(--accent)",
          opacity: 0.35,
          filter: "blur(3px)",
          boxShadow: "0 0 12px 4px var(--accent)",
        }}
      />
    </div>
  );
}

/* ── Spotlight ───────────────────────────────────────────── */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const cursor = useRef({ x: -300, y: -300 });
  const pos = useRef({ x: -300, y: -300 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => { cursor.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      pos.current.x += (cursor.current.x - pos.current.x) * LERP;
      pos.current.y += (cursor.current.y - pos.current.y) * LERP;
      if (ref.current) {
        ref.current.style.background = `radial-gradient(circle at center, rgba(155,111,245,0.18) 0%, rgba(32,211,234,0.08) 50%, transparent 75%)`;
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={ref}
        className="absolute top-0 left-0 rounded-full"
        style={{ width: 180, height: 180, marginLeft: -90, marginTop: -90 }}
      />
    </div>
  );
}

/* ── Picker UI + Manager ─────────────────────────────────── */
const LABELS: Record<Style, string> = {
  "dot-ring": "Dot + Ring",
  "smooth": "Smooth Glow",
  "spotlight": "Spotlight",
};

export default function CursorManager() {
  const [style, setStyle] = useState<Style>("dot-ring");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cursor-style") as Style | null;
    if (saved) setStyle(saved);
  }, []);

  const pick = (s: Style) => {
    setStyle(s);
    localStorage.setItem("cursor-style", s);
    setOpen(false);
  };

  return (
    <>
      {style === "dot-ring" && <DotRing />}
      {style === "smooth" && <SmoothFollower />}
      {style === "spotlight" && <Spotlight />}

      {/* Picker */}
      <div className="fixed bottom-6 left-6 z-[9998] flex flex-col items-start gap-2">
        {open && (
          <div
            className="rounded-xl p-2 flex flex-col gap-1 text-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--border-hover)" }}
          >
            {(Object.keys(LABELS) as Style[]).map((s) => (
              <button
                key={s}
                onClick={() => pick(s)}
                className="px-3 py-1.5 rounded-lg text-left transition-all duration-150 cursor-pointer"
                style={{
                  background: style === s ? "var(--accent)" : "transparent",
                  color: style === s ? "#fff" : "var(--muted)",
                  fontWeight: style === s ? 600 : 400,
                }}
              >
                {LABELS[s]}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all duration-150"
          style={{ background: "var(--surface)", border: "1px solid var(--border-hover)", color: "var(--muted)" }}
        >
          {open ? "close" : "✦ cursor"}
        </button>
      </div>
    </>
  );
}
