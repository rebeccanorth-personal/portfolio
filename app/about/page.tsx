"use client";

import { motion } from "framer-motion";
import { experience, about } from "@/lib/content";
import { useState } from "react";

const typeColors = {
  "full-time": "var(--accent)",
  intern: "var(--teal)",
  education: "var(--pink)",
};

const typeLabels = {
  "full-time": "Full-time",
  intern: "Internship",
  education: "Education",
};

export default function About() {
  const [expanded, setExpanded] = useState<string | null>("ms-growth");

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-4xl mx-auto">
      {/* Header */}
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
          About
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          Hi, I&apos;m Rebecca.
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Growth PM at Microsoft. Cornell Information Science. Five years of turning
          hypotheses into shipped product and watching the numbers move.
        </p>
      </motion.div>

      {/* Story */}
      <div className="mb-20 space-y-4">
        {about.story.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-lg leading-relaxed"
            style={{ color: i === 0 ? "var(--text)" : "var(--muted)" }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "var(--muted)" }}
        >
          Timeline
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{ background: "var(--border-hover)" }}
          />

          <div className="space-y-2">
            {experience.map((role, i) => {
              const isOpen = expanded === role.id;
              const color = typeColors[role.type];

              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : role.id)}
                    className="w-full text-left pl-10 relative group"
                  >
                    {/* Node */}
                    <div
                      className="absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isOpen ? color : "var(--surface-2)",
                        border: `2px solid ${isOpen ? color : "var(--border-hover)"}`,
                        boxShadow: isOpen ? `0 0 12px ${color}66` : "none",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: isOpen ? "#fff" : color }}
                      />
                    </div>

                    {/* Header */}
                    <div
                      className="card px-5 py-4 flex items-center justify-between transition-all duration-200"
                      style={isOpen ? { borderColor: `${color}44` } : {}}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--text)" }}
                          >
                            {role.title}
                          </span>
                          {role.subtitle && (
                            <span className="text-sm italic" style={{ color: color }}>
                              — {role.subtitle}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--muted)" }}>
                          <span className="font-semibold">{role.company}</span>
                          <span>{role.period}</span>
                          <span>{role.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span
                          className="hidden sm:inline text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${color}18`, color }}
                        >
                          {typeLabels[role.type]}
                        </span>
                        <span
                          className="text-sm transition-transform duration-200"
                          style={{
                            color: "var(--muted)",
                            transform: isOpen ? "rotate(180deg)" : "none",
                          }}
                        >
                          ↓
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-10 pt-1"
                    >
                      <div
                        className="card px-5 py-4 ml-0"
                        style={{ borderTop: "none", borderRadius: "0 0 16px 16px", borderColor: `${color}44` }}
                      >
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                          {role.description}
                        </p>
                        {role.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-3">
                            {role.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="flex items-baseline gap-1.5 px-3 py-2 rounded-lg"
                                style={{ background: `${color}10`, border: `1px solid ${color}25` }}
                              >
                                <span className="text-base font-bold" style={{ color }}>
                                  {m.value}
                                </span>
                                <span className="text-xs" style={{ color: "var(--muted)" }}>
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
