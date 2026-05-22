"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeVars = Record<string, string>;
export type AdaptiveMode = "dark" | "light";

export const adaptiveDark: ThemeVars = {
  "--bg": "#111014",
  "--surface": "#1A1820",
  "--surface-2": "#22202C",
  "--border": "rgba(255,255,255,0.08)",
  "--border-hover": "rgba(255,255,255,0.16)",
  "--text": "#EDE8F5",
  "--muted": "#8880A8",
  "--accent": "#B794F4",
  "--teal": "#4DD0E1",
  "--pink": "#F687B3",
};

export const adaptiveLight: ThemeVars = {
  "--bg": "#E6EAF4",
  "--surface": "#EEF1F9",
  "--surface-2": "#D8DEEC",
  "--border": "rgba(0,0,0,0.08)",
  "--border-hover": "rgba(0,0,0,0.15)",
  "--text": "#120D24",
  "--muted": "#3D2B6B",
  "--accent": "#7C3AED",
  "--teal": "#0891B2",
  "--pink": "#DB2777",
};

export const themes = [
  {
    id: "dark-ai",
    name: "Dark AI",
    desc: "Current — cold, technical",
    vars: {
      "--bg": "#080812",
      "--surface": "#0E0E1E",
      "--surface-2": "#161628",
      "--border": "rgba(255,255,255,0.06)",
      "--border-hover": "rgba(255,255,255,0.13)",
      "--text": "#E8E8F2",
      "--muted": "#6868A0",
      "--accent": "#9B6FF5",
      "--teal": "#20D3EA",
      "--pink": "#F472B6",
    },
    swatch: ["#080812", "#9B6FF5", "#20D3EA"],
  },
  {
    id: "warm-dark",
    name: "Warm Dark",
    desc: "Refined — better contrast, less cold",
    vars: {
      "--bg": "#0D0B12",
      "--surface": "#141120",
      "--surface-2": "#1C1830",
      "--border": "rgba(255,255,255,0.07)",
      "--border-hover": "rgba(255,255,255,0.14)",
      "--text": "#F2EFF8",
      "--muted": "#9E9BB8",
      "--accent": "#A78BFA",
      "--teal": "#38BDF8",
      "--pink": "#F9A8D4",
    },
    swatch: ["#0D0B12", "#A78BFA", "#38BDF8"],
  },
  {
    id: "ink",
    name: "Ink",
    desc: "Warm black — amber tones, earthy",
    vars: {
      "--bg": "#0A0907",
      "--surface": "#121008",
      "--surface-2": "#1C1A10",
      "--border": "rgba(255,255,255,0.07)",
      "--border-hover": "rgba(255,255,255,0.13)",
      "--text": "#F5F0E4",
      "--muted": "#A09070",
      "--accent": "#C084FC",
      "--teal": "#34D399",
      "--pink": "#60A5FA",
    },
    swatch: ["#0A0907", "#C084FC", "#34D399"],
  },
  {
    id: "cream",
    name: "Cream",
    desc: "Editorial light — warm, readable",
    vars: {
      "--bg": "#F6F3EE",
      "--surface": "#FFFFFF",
      "--surface-2": "#EDE9E2",
      "--border": "rgba(0,0,0,0.08)",
      "--border-hover": "rgba(0,0,0,0.16)",
      "--text": "#18141E",
      "--muted": "#7A7090",
      "--accent": "#7C3AED",
      "--teal": "#0284C7",
      "--pink": "#DB2777",
    },
    swatch: ["#F6F3EE", "#7C3AED", "#0284C7"],
  },
  {
    id: "mixed",
    name: "Mixed",
    desc: "Charcoal surfaces, off-white text",
    vars: {
      "--bg": "#111014",
      "--surface": "#1A1820",
      "--surface-2": "#22202C",
      "--border": "rgba(255,255,255,0.08)",
      "--border-hover": "rgba(255,255,255,0.16)",
      "--text": "#EDE8F5",
      "--muted": "#8880A8",
      "--accent": "#B794F4",
      "--teal": "#4DD0E1",
      "--pink": "#F687B3",
    },
    swatch: ["#111014", "#B794F4", "#4DD0E1"],
  },
  {
    id: "adaptive",
    name: "Adaptive",
    desc: "Mixed palette — you pick the mode",
    vars: adaptiveDark,
    swatch: ["#111014", "#B794F4", "#F0EEF6"] as [string, string, string],
  },
];

interface ThemeContextValue {
  active: string;
  adaptiveMode: AdaptiveMode;
  applyTheme: (themeId: string, mode?: AdaptiveMode) => void;
  toggleAdaptiveMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("dark-ai");
  const [adaptiveMode, setAdaptiveMode] = useState<AdaptiveMode>("dark");

  function applyTheme(themeId: string, mode?: AdaptiveMode) {
    const resolvedMode = mode ?? adaptiveMode;
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    const vars =
      themeId === "adaptive"
        ? resolvedMode === "light"
          ? adaptiveLight
          : adaptiveDark
        : theme.vars;

    Object.entries(vars).forEach(([key, val]) => {
      document.documentElement.style.setProperty(key, val);
    });
    setActive(themeId);
    localStorage.setItem("portfolio-theme", themeId);
    if (themeId === "adaptive") {
      localStorage.setItem("portfolio-adaptive-mode", resolvedMode);
    }
  }

  function toggleAdaptiveMode() {
    const next = adaptiveMode === "dark" ? "light" : "dark";
    setAdaptiveMode(next);
    applyTheme("adaptive", next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const savedMode = localStorage.getItem("portfolio-adaptive-mode") as AdaptiveMode | null;
    if (savedMode) setAdaptiveMode(savedMode);
    if (saved) applyTheme(saved, savedMode ?? "dark");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ active, adaptiveMode, applyTheme, toggleAdaptiveMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
