"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { currently, about } from "@/lib/content";

const sections = [
  {
    href: "/about",
    label: "About",
    desc: "My story, background, and how I got here.",
    color: "var(--accent)",
  },
  {
    href: "/professional",
    label: "Professional",
    desc: "Microsoft · growth, experimentation, and impact.",
    color: "var(--teal)",
  },
  {
    href: "/personal",
    label: "Personal",
    desc: "Side projects built for fun and for real use.",
    color: "var(--pink)",
  },
  {
    href: "/graphics",
    label: "Graphics",
    desc: "Design work — branding, visual identity, art.",
    color: "#F59E0B",
  },
  {
    href: "/play",
    label: "Play",
    desc: "Writing, travel photography, and everything else.",
    color: "#34D399",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated mesh orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(155,111,245,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-20%",
            left: "-15%",
          }}
          animate={{ x: [0, 80, 30, 0], y: [0, 60, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(32,211,234,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{ x: [0, -60, 20, 0], y: [0, -50, 30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            top: "40%",
            right: "30%",
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </div>

      {/* Hero */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 pt-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-6"
            style={{ color: "var(--muted)" }}
          >
            Rebecca North
          </p>

          <h1
            className="text-6xl sm:text-8xl font-extrabold leading-none mb-8"
            style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
          >
            Growth PM.
            <br />
            <span className="gradient-text">Designer.</span>
            <br />
            Builder.
          </h1>

          <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
            {about.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/professional"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--teal))",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(155,111,245,0.25)",
              }}
            >
              View my work
            </Link>
            <a
              href="https://rebeccanorth.me/s/Rebecca_North_Resume-3f7b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              Resume ↗
            </a>
          </div>
        </motion.div>

        {/* Currently widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row gap-3"
        >
          <a
            href={currently.listening.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl group transition-all duration-200"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <span className="text-base">🎵</span>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                currently listening
              </p>
              <p className="text-sm font-medium leading-none" style={{ color: "var(--text)" }}>
                {currently.listening.track}{" "}
                <span style={{ color: "var(--muted)" }}>· {currently.listening.artist}</span>
              </p>
            </div>
          </a>

          <a
            href={currently.reading.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl group transition-all duration-200"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <span className="text-base">📖</span>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                currently reading
              </p>
              <p className="text-sm font-medium leading-none" style={{ color: "var(--text)" }}>
                {currently.reading.title}{" "}
                <span style={{ color: "var(--muted)" }}>· {currently.reading.author}</span>
              </p>
            </div>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-px h-10 mx-auto"
            style={{ background: "linear-gradient(to bottom, var(--muted), transparent)" }}
          />
        </motion.div>
      </section>

      {/* Section directory */}
      <section className="section px-6 max-w-6xl mx-auto">
        <motion.p
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Explore
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={s.href} className="card block p-6 group h-full">
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ background: s.color }}
                />
                <h3 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                  {s.label}
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
                <span className="inline-block mt-4 text-xs font-semibold" style={{ color: s.color }}>
                  View →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
