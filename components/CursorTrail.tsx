"use client";

import { useEffect, useRef } from "react";

const DOTS = 10;

export default function CursorTrail() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursor = useRef({ x: -100, y: -100 });
  const positions = useRef(
    Array.from({ length: DOTS }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let rafId: number;
    function tick() {
      let x = cursor.current.x;
      let y = cursor.current.y;
      positions.current.forEach((pos, i) => {
        pos.x += (x - pos.x) * 0.22;
        pos.y += (y - pos.y) * 0.22;
        const el = dotsRef.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
        x = pos.x;
        y = pos.y;
      });
      rafId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {Array.from({ length: DOTS }, (_, i) => {
        const size = Math.round(6 - i * 0.35);
        const opacity = (1 - i / DOTS) * 0.45;
        return (
          <div
            key={i}
            ref={(el) => { dotsRef.current[i] = el; }}
            className="absolute top-0 left-0 rounded-full will-change-transform"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              opacity,
              background: i < 3 ? "var(--accent)" : "var(--teal)",
            }}
          />
        );
      })}
    </div>
  );
}
