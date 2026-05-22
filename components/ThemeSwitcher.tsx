"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes } from "@/components/ThemeContext";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { active, adaptiveMode, applyTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="mb-3 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-hover)",
              width: 240,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="px-4 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                Design directions
              </p>
            </div>

            <div className="p-2">
              {themes.map((theme) => {
                const isActive = active === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150"
                    style={{
                      background: isActive ? "var(--surface-2)" : "transparent",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-7 rounded-lg overflow-hidden flex"
                      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <div className="flex-1" style={{ background: theme.swatch[0] }} />
                      <div className="w-2.5" style={{ background: theme.swatch[1] }} />
                      <div className="w-2.5" style={{ background: theme.swatch[2] }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                          {theme.name}
                        </p>
                        {isActive && (
                          <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: "var(--accent)", color: "#fff", fontSize: 9 }}>
                            on
                          </span>
                        )}
                      </div>
                      <p className="text-xs truncate" style={{ color: "var(--muted)", fontSize: 10 }}>
                        {theme.id === "adaptive" && isActive
                          ? adaptiveMode === "dark" ? "Dark mode active" : "Light mode active"
                          : theme.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              className="px-4 py-2.5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p className="text-center" style={{ color: "var(--muted)", fontSize: 10 }}>
                Only visible in dev mode
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg transition-all duration-200"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-hover)",
          color: "var(--text)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <span>🎨</span>
        <span>Themes</span>
        <span style={{ color: "var(--muted)" }}>{open ? "↓" : "↑"}</span>
      </button>
    </div>
  );
}
