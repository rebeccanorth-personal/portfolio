"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { allProjects } from "@/lib/content";
import ProjectModal, { ProjectModalData } from "@/components/ProjectModal";

function parseMetric(value: string) {
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.includes("%") ? "%" : value.endsWith("K") ? "K" : "";
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  return { prefix, suffix, num };
}

function CountUp({ value }: { value: string }) {
  const { prefix, suffix, num } = parseMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const microsoft = allProjects[0];
const projectWork = allProjects.slice(1);

export default function Professional() {
  const [active, setActive] = useState<ProjectModalData | null>(null);

  return (
    <>
      <div className="min-h-screen pt-20 pb-12 px-6 max-w-5xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--muted)" }}
          >
            Professional
          </p>
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            Work & projects
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Five years at Microsoft growing Consumer M365 and Copilot, plus product design and development projects from earlier in my career.
          </p>
        </motion.div>

        {/* ── Microsoft featured section ─────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative overflow-hidden rounded-2xl"
          style={{ border: "1px solid color-mix(in srgb, var(--teal) 30%, transparent)" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 80% 0%, color-mix(in srgb, var(--teal) 10%, transparent) 0%, transparent 60%)",
            }}
          />

          {/* Top bar */}
          <div
            className="px-8 py-5 flex flex-wrap items-center justify-between gap-4"
            style={{
              borderBottom: "1px solid color-mix(in srgb, var(--teal) 18%, transparent)",
              background: "color-mix(in srgb, var(--teal) 5%, transparent)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  background: "color-mix(in srgb, var(--teal) 18%, transparent)",
                  color: "var(--teal)",
                  border: "1px solid color-mix(in srgb, var(--teal) 30%, transparent)",
                }}
              >
                MS
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>Microsoft</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>2019 – Present · New York & Redmond</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {microsoft.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "color-mix(in srgb, var(--teal) 10%, transparent)",
                    color: "var(--teal)",
                    border: "1px solid color-mix(in srgb, var(--teal) 20%, transparent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Summary */}
            <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: "var(--muted)" }}>
              {microsoft.modal.overview}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {microsoft.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-4 py-4 rounded-xl text-center"
                  style={{
                    background: "color-mix(in srgb, var(--teal) 8%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--teal) 18%, transparent)",
                  }}
                >
                  <p className="text-3xl font-extrabold leading-none mb-1" style={{ color: "var(--teal)" }}>
                    <CountUp value={m.value} />
                  </p>
                  <p className="text-xs leading-tight" style={{ color: "var(--muted)" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Role progression */}
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                Career progression
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { title: "PM2: Subscriber Growth & Lifecycle", period: "May 2025 – Present", location: "New York, NY" },
                  { title: "PM2: First Run Experiences", period: "Sep 2022 – Apr 2025", location: "New York, NY" },
                  { title: "Product Manager", period: "Sep 2020 – Aug 2022", location: "Redmond, WA" },
                  { title: "Program Manager Intern", period: "Jun – Aug 2019", location: "Redmond, WA" },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--teal)" }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{r.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{r.period} · {r.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PM Process */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                How I work
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {microsoft.modal.process!.map((s, i) => (
                  <div
                    key={s.step}
                    className="px-4 py-4 rounded-xl"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold" style={{ color: "color-mix(in srgb, var(--teal) 60%, transparent)" }}>
                        0{i + 1}
                      </span>
                      <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{s.step}</p>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA note */}
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "color-mix(in srgb, var(--accent) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
              }}
            >
              <span className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>🔒</span>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                Due to NDA constraints I can&apos;t share product screenshots, but I&apos;m happy to walk through specific experiments, designs, or decisions in detail.{" "}
                <a href="mailto:rebecnorth@gmail.com" className="underline" style={{ color: "var(--accent)" }}>
                  Reach out
                </a>
                .
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Project work ──────────────────────────────────────────────── */}
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--muted)" }}
          >
            Project work
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Product design, UX, and development projects. Click any to explore.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {projectWork.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(p as ProjectModalData)}
                className="text-left relative overflow-hidden group rounded-2xl cursor-pointer"
                style={{ background: "var(--surface)", border: "1px solid var(--border-hover)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-all duration-300 z-10"
                  style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                />
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(300px at 0% 100%, color-mix(in srgb, ${p.accent} 8%, transparent), transparent 70%)`,
                  }}
                />

                {/* Preview strip */}
                <div
                  className="h-36 w-full relative overflow-hidden"
                  style={{
                    background: `color-mix(in srgb, ${p.accent} 12%, var(--surface-2))`,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {(p as { coverImage?: string }).coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={(p as { coverImage: string }).coverImage}
                      alt={p.name}
                      className="w-full h-full block object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: `color-mix(in srgb, ${p.accent} 60%, transparent)` }}>
                        {p.tagline}
                      </p>
                    </div>
                  )}
                  <div
                    className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 font-semibold"
                    style={{ background: `color-mix(in srgb, ${p.accent} 15%, transparent)`, color: p.accent, backdropFilter: "blur(4px)" }}
                  >
                    Open →
                  </div>
                </div>

                <div className="p-5">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium mb-3 inline-block"
                    style={{
                      background: `color-mix(in srgb, ${p.accent} 10%, transparent)`,
                      color: p.accent,
                      border: `1px solid color-mix(in srgb, ${p.accent} 20%, transparent)`,
                    }}
                  >
                    {p.type}
                  </span>
                  <h3 className="font-bold mb-0.5" style={{ color: "var(--text)" }}>
                    {p.name}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: p.accent }}>
                    {p.role}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.summary}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
