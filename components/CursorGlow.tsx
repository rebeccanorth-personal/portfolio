"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background:
          "radial-gradient(700px circle at var(--cx, 50%) var(--cy, 50%), rgba(155,111,245,0.05), transparent 70%)",
        transition: "background 0.1s ease",
      }}
    />
  );
}
