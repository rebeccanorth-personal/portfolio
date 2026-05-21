"use client";

import { motion } from "framer-motion";
import { experience, pmProjects } from "@/lib/content";

const fullTime = experience.filter((e) => e.type === "full-time");

const skills = [
  "Product-Led Growth",
  "A/B Experimentation",
  "Acquisition & Retention",
  "Funnel Optimization",
  "0→1 Product Launches",
  "Data Analysis",
  "Roadmap Strategy",
  "Cross-functional Leadership",
  "Figma",
  "Photoshop",
  "HTML · CSS · JS",
];

export default function Professional() {
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
          Professional
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          Work experience
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Five years at Microsoft driving subscriber growth, experimentation infrastructure,
          and top-of-funnel acquisition for M365 Consumer — from intern to PM2.
        </p>
      </motion.div>

      {/* Roles */}
      <div className="space-y-6 mb-20">
        {fullTime.map((role, i) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                    {role.title}
                  </h2>
                  {role.subtitle && (
                    <span className="text-base italic" style={{ color: "var(--accent)" }}>
                      — {role.subtitle}
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold" style={{ color: "var(--teal)" }}>
                  {role.company}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {role.period}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {role.location}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              {role.description}
            </p>

            {role.metrics.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {role.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="px-4 py-2.5 rounded-xl"
                    style={{
                      background: "rgba(155,111,245,0.08)",
                      border: "1px solid rgba(155,111,245,0.2)",
                    }}
                  >
                    <p
                      className="text-2xl font-extrabold leading-none mb-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* PM Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "var(--muted)" }}
        >
          Project work
        </p>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Earlier projects spanning product design, UX, and development.
        </p>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {pmProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 flex flex-col relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
                    color: p.accent,
                    border: `1px solid color-mix(in srgb, ${p.accent} 25%, transparent)`,
                  }}
                >
                  {p.type}
                </span>
              </div>
              <h3 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                {p.name}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: p.accent }}>
                {p.role}
              </p>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--muted)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--muted)" }}
        >
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-3 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--muted)" }}
        >
          Education
        </p>
        {experience
          .filter((e) => e.type === "education")
          .map((edu) => (
            <div key={edu.id} className="card p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                    {edu.title}
                  </h2>
                  <p className="text-sm" style={{ color: "var(--pink)" }}>
                    {edu.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                    {edu.period}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {edu.location}
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-3" style={{ color: "var(--muted)" }}>
                {edu.subtitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {edu.description}
              </p>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
