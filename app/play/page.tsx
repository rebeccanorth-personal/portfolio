"use client";

import { motion } from "framer-motion";
import { writing } from "@/lib/content";

const photoPlaceholders = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  aspect: ["aspect-square", "aspect-[4/3]", "aspect-[3/4]"][i % 3],
}));

export default function Play() {
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
          Play
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          Everything else
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Writing, travel photography, and the things that aren&apos;t on my resume but are very much a part of how I think.
        </p>
      </motion.div>

      {/* Writing */}
      <section className="mb-20">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--muted)" }}
        >
          Writing
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {writing.map((article, i) => (
            <motion.div
              key={article.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-6 group h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: "rgba(52,211,153,0.12)",
                      color: "#34D399",
                      border: "1px solid rgba(52,211,153,0.2)",
                    }}
                  >
                    {article.publication}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    {article.date}
                  </span>
                </div>
                <h3 className="font-bold mb-2 group-hover:underline" style={{ color: "var(--text)" }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {article.excerpt}
                </p>
                <span
                  className="inline-block mt-4 text-xs font-semibold"
                  style={{ color: "#34D399" }}
                >
                  Read on Medium ↗
                </span>
              </a>
            </motion.div>
          ))}

          {/* Medium profile link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a
              href={writing[0].mediumProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-6 group h-full flex flex-col items-center justify-center text-center min-h-32"
            >
              <p className="text-2xl mb-2">✍️</p>
              <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>
                More on Medium
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                @rebeccanorth ↗
              </p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Travel photography */}
      <section>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--muted)" }}
        >
          Travel photography
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photoPlaceholders.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: p.id * 0.04 }}
              className="break-inside-avoid"
            >
              <div
                className={`card ${p.aspect} w-full flex items-center justify-center relative overflow-hidden group`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(52,211,153,0.08), rgba(155,111,245,0.05))",
                  }}
                />
                <p className="text-xs relative z-10" style={{ color: "var(--border-hover)" }}>
                  photo coming soon
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm mt-10"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Photos coming soon — shot on trips through Europe, Southeast Asia, and beyond.
        </motion.p>
      </section>
    </div>
  );
}
