"use client";

import { motion } from "framer-motion";

const placeholders = [
  { label: "Branding", aspect: "aspect-square" },
  { label: "Typography", aspect: "aspect-[4/3]" },
  { label: "Illustration", aspect: "aspect-square" },
  { label: "Digital Art", aspect: "aspect-[3/4]" },
  { label: "Print Design", aspect: "aspect-[4/3]" },
  { label: "UX Screens", aspect: "aspect-[3/4]" },
];

export default function Graphics() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto">
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
          Graphics
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          Design work
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Graphic design, branding, illustration, and visual work spanning digital and print.
          Tools: Figma, Photoshop, Illustrator.
        </p>
      </motion.div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {placeholders.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="break-inside-avoid"
          >
            <div
              className={`card ${item.aspect} w-full flex items-center justify-center group cursor-pointer relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(155,111,245,0.1), rgba(32,211,234,0.05))",
                }}
              />
              <div className="text-center relative">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  {item.label}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--border-hover)" }}>
                  coming soon
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-sm mt-12"
        style={{ color: "var(--muted)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Work samples coming soon. In the meantime,{" "}
        <a
          href="mailto:rebecnorth@gmail.com"
          className="underline"
          style={{ color: "var(--accent)" }}
        >
          reach out
        </a>{" "}
        and I&apos;ll share directly.
      </motion.p>
    </div>
  );
}
