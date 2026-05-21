"use client";

import { motion } from "framer-motion";
import { personalProjects } from "@/lib/content";

// Stylised in-code previews — representations of each app's actual UI
function PlanMyWeekPreview() {
  const lines = [
    { text: "📅  Weekly Planner", bold: true, color: "#E8E8F2" },
    { text: "    May 19 → May 25, 2025", bold: false, color: "#6868A0" },
    { text: "", bold: false, color: "" },
    { text: "── Monday May 19 ─────────────────", bold: false, color: "#9B6FF5" },
    { text: "    Social Life event (or Enter): Dinner w/ Sarah", bold: false, color: "#E8E8F2" },
    { text: "    Start time: 7:30pm", bold: false, color: "#6868A0" },
    { text: "    End time (Enter = +1hr): 10pm", bold: false, color: "#6868A0" },
    { text: "    ✓ 'Dinner w/ Sarah' → 7:30 PM–10:00 PM", bold: false, color: "#9B6FF5" },
    { text: "    Workout event (or Enter): Spin class", bold: false, color: "#E8E8F2" },
    { text: "    ✓ 'Spin class' → 8:00 AM–9:00 AM", bold: false, color: "#9B6FF5" },
    { text: "", bold: false, color: "" },
    { text: "── Tuesday May 20 ────────────────", bold: false, color: "#9B6FF5" },
    { text: "    Social Life event (or Enter): ▌", bold: false, color: "#E8E8F2" },
  ];

  return (
    <div
      className="w-full rounded-xl overflow-hidden font-mono text-xs leading-5"
      style={{ background: "#080812", border: "1px solid rgba(155,111,245,0.15)" }}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ background: "#0E0E1A", borderBottom: "1px solid rgba(155,111,245,0.1)" }}
      >
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 text-xs" style={{ color: "#6868A0" }}>zsh — plan-my-week</span>
      </div>
      <div className="px-4 py-4 space-y-0.5">
        {lines.map((l, i) => (
          <p key={i} className={l.bold ? "font-bold" : ""} style={{ color: l.color || "transparent", minHeight: "1.25rem" }}>
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}

function LiftLogPreview() {
  const entries = [
    { tag: "Upper Body", exercise: "Bench Press · 4×8 @ 135lb" },
    { tag: "Upper Body", exercise: "Cable Row · 3×12 @ 60lb" },
    { tag: "Core", exercise: "Plank · 3×60s" },
  ];

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ background: "#0a0a0a", border: "1px solid #181818", fontFamily: "'DM Mono', monospace" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3"
        style={{ borderBottom: "1px solid #181818" }}
      >
        <p className="text-xl font-black tracking-wider" style={{ color: "#f0ebe0", fontFamily: "serif", letterSpacing: "0.1em" }}>
          LIFT <span style={{ color: "#b8e878" }}>+</span> LOG
        </p>
        <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "#555" }}>
          track · reflect · improve
        </p>
      </div>
      {/* Protein bar */}
      <div className="px-4 py-3" style={{ borderBottom: "1px solid #181818" }}>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs" style={{ color: "#777", fontFamily: "monospace" }}>PROTEIN TODAY</span>
          <span className="text-xs font-bold" style={{ color: "#b8e878", fontFamily: "monospace" }}>82 / 100g</span>
        </div>
        <div className="w-full h-1.5 rounded-full" style={{ background: "#181818" }}>
          <div className="h-1.5 rounded-full" style={{ width: "82%", background: "#b8e878" }} />
        </div>
      </div>
      {/* Workout log */}
      <div className="px-4 py-3 space-y-2">
        {entries.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#181818", color: "#b8e878", fontFamily: "monospace", flexShrink: 0 }}>
              {e.tag}
            </span>
            <span className="text-xs" style={{ color: "#c8c2b6", fontFamily: "monospace" }}>{e.exercise}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LollaPreview() {
  const stages = ["Bud Light", "Perry's", "T-Mobile", "BMI"];
  const acts = [
    { name: "Chappell Roan", stage: 0, start: 0, len: 3, color: "#F472B6", selected: true },
    { name: "Tyler the Creator", stage: 2, start: 1, len: 3, color: "#A78BFA", selected: true },
    { name: "Hozier", stage: 1, start: 0, len: 2, color: "#34D399", selected: false },
    { name: "Vampire Weekend", stage: 3, start: 2, len: 2, color: "#60A5FA", selected: false },
  ];

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ background: "#0d0d14", border: "1px solid rgba(244,114,182,0.15)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#11111e" }}
      >
        <div>
          <p className="text-xs font-bold" style={{ color: "#E8E8F2" }}>Lolla Schedule</p>
          <p className="text-xs" style={{ color: "#6868A0" }}>Friday · Aug 1</p>
        </div>
        <div className="flex gap-2">
          {["Lineup", "My Schedule", "Friends"].map((t, i) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full"
              style={i === 0
                ? { background: "rgba(244,114,182,0.15)", color: "#F472B6" }
                : { color: "#6868A0" }
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Stage headers */}
      <div className="grid grid-cols-4 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        {stages.map((s) => (
          <p key={s} className="text-xs text-center font-semibold" style={{ color: "#6868A0" }}>{s}</p>
        ))}
      </div>
      {/* Timeline grid */}
      <div className="relative px-3 py-2" style={{ height: 88 }}>
        <div className="absolute inset-x-3 inset-y-2 grid grid-cols-4 gap-1">
          {stages.map((_, si) => (
            <div key={si} className="rounded" style={{ background: "rgba(255,255,255,0.02)" }} />
          ))}
        </div>
        {acts.map((a) => (
          <div
            key={a.name}
            className="absolute rounded-lg px-2 py-1 text-xs font-semibold overflow-hidden"
            style={{
              left: `calc(${a.stage * 25}% + 12px + ${a.stage * 2}px)`,
              width: "calc(25% - 6px)",
              top: `${a.start * 26 + 8}px`,
              height: `${a.len * 26}px`,
              background: a.selected ? `${a.color}22` : "rgba(255,255,255,0.04)",
              border: `1px solid ${a.selected ? a.color + "60" : "rgba(255,255,255,0.06)"}`,
              color: a.selected ? a.color : "#6868A0",
            }}
          >
            {a.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const previews = [PlanMyWeekPreview, LiftLogPreview, LollaPreview];

export default function Personal() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--muted)" }}
        >
          Personal
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          Built for myself
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Side projects I made because I needed them — vibe coded with Claude. No agency brief,
          no sprint planning, just a problem I had and an AI I could build with.
        </p>
      </motion.div>

      <div className="space-y-6">
        {personalProjects.map((project, i) => {
          const Preview = previews[i];
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="card overflow-hidden group relative"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(500px at 0% 0%, ${project.accent}08, transparent 70%)` }}
                />

                <div className={`flex flex-col ${i === 0 ? "lg:flex-row" : "md:flex-row"} gap-0`}>
                  {/* Preview panel */}
                  <div
                    className={`${i === 0 ? "lg:w-3/5" : "md:w-1/2"} p-6 flex items-center justify-center`}
                    style={{ background: "var(--surface-2)", borderRight: "1px solid var(--border)" }}
                  >
                    <div className="w-full max-w-sm">
                      <Preview />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i === 0 ? "lg:w-2/5" : "md:w-1/2"} p-8 flex flex-col`}>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}
                      >
                        {i === 0 ? "📅" : i === 1 ? "🏋️" : "🎪"}
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200"
                            style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--muted)" }}
                          >
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                      {project.name}
                    </h2>
                    <p className="text-sm font-medium mb-3" style={{ color: project.accent }}>
                      {project.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--muted)" }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: `${project.accent}10`,
                            border: `1px solid ${project.accent}20`,
                            color: project.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
