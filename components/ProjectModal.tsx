"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export interface ProjectModalData {
  name: string;
  tagline: string;
  role: string;
  company: string;
  period: string;
  accent: string;
  modal: {
    overview: string;
    process?: { step: string; desc: string }[];
    images: { caption: string; src: string | null; gradient: string }[];
    metrics?: { value: string; label: string }[];
  };
}

interface Props {
  project: ProjectModalData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    setImgIndex(0);
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  const images = project?.modal.images ?? [];
  const prev = () => setImgIndex((i) => Math.max(0, i - 1));
  const next = () => setImgIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(16px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Sheet */}
          <motion.div
            className="relative z-10 w-full sm:max-w-3xl overflow-y-auto"
            style={{
              background: "var(--surface)",
              borderRadius: "20px 20px 0 0",
              maxHeight: "92vh",
              border: "1px solid var(--border-hover)",
              borderBottom: "none",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
          >
            {/* Image carousel */}
            <div className="relative overflow-hidden rounded-t-[20px]" style={{ aspectRatio: "16/9" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: images[imgIndex]?.gradient ?? "#0F0F1A" }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.22 }}
                >
                  {images[imgIndex]?.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={images[imgIndex].src!}
                      alt={images[imgIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center px-10 select-none">
                      <p
                        className="text-xs uppercase tracking-[0.2em] mb-2"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {project.company}
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {images[imgIndex]?.caption}
                      </p>
                      <p
                        className="text-xs mt-3"
                        style={{ color: "rgba(255,255,255,0.18)" }}
                      >
                        Add screenshot to lib/content.ts → images[{imgIndex}].src
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    disabled={imgIndex === 0}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all disabled:opacity-20"
                    style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    disabled={imgIndex === images.length - 1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all disabled:opacity-20"
                    style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
                  >
                    →
                  </button>
                  {/* Dot indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className="rounded-full transition-all duration-200"
                        style={{
                          width: i === imgIndex ? 20 : 6,
                          height: 6,
                          background: i === imgIndex ? "#fff" : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 pb-10">
              {/* Header */}
              <div className="mb-6">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: project.accent }}
                >
                  {project.company} · {project.period}
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-extrabold mb-1"
                  style={{ color: "var(--text)", letterSpacing: "-0.025em" }}
                >
                  {project.name}
                </h2>
                <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {project.tagline} · {project.role}
                </p>
              </div>

              {/* Metrics */}
              {project.modal.metrics && project.modal.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.modal.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-4 py-2.5 rounded-xl"
                      style={{
                        background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${project.accent} 22%, transparent)`,
                      }}
                    >
                      <p
                        className="text-2xl font-extrabold leading-none mb-0.5"
                        style={{ color: project.accent }}
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

              {/* Overview */}
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                {project.modal.overview}
              </p>

              {/* Process */}
              {project.modal.process && project.modal.process.length > 0 && (
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-5"
                    style={{ color: "var(--muted)" }}
                  >
                    Process
                  </p>
                  <div className="relative pl-4">
                    <div
                      className="absolute left-0 top-2 bottom-2 w-px"
                      style={{ background: `color-mix(in srgb, ${project.accent} 20%, transparent)` }}
                    />
                    <div className="space-y-5">
                      {project.modal.process.map((s, i) => (
                        <div key={s.step} className="flex gap-4 items-start">
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                            style={{
                              background: `color-mix(in srgb, ${project.accent} 15%, transparent)`,
                              color: project.accent,
                              border: `1px solid color-mix(in srgb, ${project.accent} 25%, transparent)`,
                            }}
                          >
                            {i + 1}
                          </div>
                          <div>
                            <p
                              className="text-sm font-semibold mb-0.5"
                              style={{ color: "var(--text)" }}
                            >
                              {s.step}
                            </p>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--muted)" }}
                            >
                              {s.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
