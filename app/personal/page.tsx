"use client";

import { motion } from "framer-motion";
import { personalProjects } from "@/lib/content";

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
          Side projects I made because I needed them. No agency brief, no sprint planning —
          just a problem I had and code that solved it.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {personalProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <div
              className="card p-8 h-full flex flex-col group relative overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Subtle accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px at 0% 0%, ${project.accent}10, transparent 70%)`,
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}
                  >
                    {i === 0 ? "📅" : i === 1 ? "🏋️" : "🎪"}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200"
                        style={{
                          background: "var(--surface-2)",
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--text)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        }}
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-200"
                        style={{
                          background: `${project.accent}18`,
                          border: `1px solid ${project.accent}30`,
                          color: project.accent,
                        }}
                      >
                        Live ↗
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
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
