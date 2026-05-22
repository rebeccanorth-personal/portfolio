"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience, about } from "@/lib/content";
import { useState } from "react";

const typeColors: Record<string, string> = {
  "full-time": "var(--accent)",
  intern: "var(--teal)",
  education: "var(--pink)",
  project: "#60A5FA",
};

const typeLabels: Record<string, string> = {
  "full-time": "Full-time",
  intern: "Internship",
  education: "Education",
  project: "Project",
};

export default function About() {
  const [expanded, setExpanded] = useState<string | null>("ms-growth");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-12 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12"
      >
        <div className="flex-1">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--muted)" }}
          >
            About
          </p>
          <h1
            className="text-4xl font-extrabold mb-4"
            style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            Hi, I&apos;m Rebecca.
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Growth PM at Microsoft. Cornell Information Science. Five years of turning
            hypotheses into shipped product and watching the numbers move.
          </p>
        </div>

        <div className="flex-shrink-0 flex justify-center">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: 220,
              height: 260,
              border: "1px solid var(--border)",
              boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="/rebecca.jpg"
              alt="Rebecca North"
              fill
              className="object-cover object-top"
              priority
            />
            <div
              className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Story */}
      <div className="mb-12 space-y-3">
        {about.story.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="text-base leading-relaxed"
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
          className="text-xs font-semibold tracking-widest uppercase mb-5"
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : role.id)}
                    onMouseEnter={() => setHovered(role.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="w-full text-left pl-10 relative"
                    style={{ cursor: "pointer" }}
                  >
                    {/* Node */}
                    <div
                      className="absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isOpen || hovered === role.id ? color : "var(--surface-2)",
                        border: `2px solid ${isOpen || hovered === role.id ? color : "var(--border-hover)"}`,
                        boxShadow: isOpen ? `0 0 12px ${color}66` : hovered === role.id ? `0 0 8px ${color}44` : "none",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: isOpen || hovered === role.id ? "#fff" : color }}
                      />
                    </div>

                    {/* Header */}
                    <div
                      className="card px-5 py-4 flex items-center justify-between transition-all duration-200"
                      style={{
                        borderColor: isOpen ? `${color}44` : hovered === role.id ? `${color}30` : undefined,
                        background: hovered === role.id && !isOpen ? "var(--surface-2)" : undefined,
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--text)" }}
                          >
                            {role.company}
                          </span>
                          {role.subtitle && (
                            <span className="text-sm italic" style={{ color: color }}>
                              · {role.subtitle}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--muted)" }}>
                          <span className="font-semibold">{role.title}</span>
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
                          className="text-sm font-bold transition-all duration-200"
                          style={{
                            color: isOpen || hovered === role.id ? color : "var(--muted)",
                            transform: isOpen ? "rotate(180deg)" : "none",
                            display: "inline-block",
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
