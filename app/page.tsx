"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { currently, about } from "@/lib/content";

function MusicBars() {
  return (
    <div className="flex items-end gap-px" style={{ width: 20, height: 20 }}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: 4,
            borderRadius: 2,
            background: "var(--accent)",
            animation: `musicBar 0.65s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.16}s`,
            minHeight: 3,
          }}
        />
      ))}
      <style>{`
        @keyframes musicBar {
          from { height: 4px; }
          to { height: 20px; }
        }
      `}</style>
    </div>
  );
}

function ReadingLines() {
  return (
    <div style={{ width: 20, height: 20 }} className="flex flex-col justify-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            height: 3,
            borderRadius: 2,
            width: i === 2 ? "60%" : "100%",
            background: "var(--teal)",
            animation: `readLine 1.8s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
            opacity: 0.3,
          }}
        />
      ))}
      <style>{`
        @keyframes readLine {
          0%, 100% { opacity: 0.3; }
          33% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

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
    desc: "Design work: branding, visual identity, art.",
    color: "#60A5FA",
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
        <div className="flex flex-col gap-12">
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
              Designer.
              <br />
              Builder.
            </h1>

            <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              {about.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/professional"
                  className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(155,111,245,0.25)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(155,111,245,0.45)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(155,111,245,0.25)"; }}
                >
                  View my work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <a
                  href="/Rebecca_North_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--surface-2)";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--surface)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  Resume ↗
                </a>
              </motion.div>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:rebecnorth@gmail.com"
                className="flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--muted)" }}
              >
                <Mail size={14} />
                <span>rebecnorth@gmail.com</span>
              </a>
              <span style={{ color: "var(--border-hover)" }}>·</span>
              <a
                href="tel:5169966064"
                className="flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--muted)" }}
              >
                <Phone size={14} />
                <span>(516) 996-6064</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Currently widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row gap-3"
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <MusicBars />
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                currently listening
              </p>
              <p className="text-sm font-medium leading-none" style={{ color: "var(--text)" }}>
                {currently.listening.track}{" "}
                <span style={{ color: "var(--muted)" }}>· {currently.listening.artist}</span>
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <ReadingLines />
            <div>
              <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                currently reading
              </p>
              <p className="text-sm font-medium leading-none" style={{ color: "var(--text)" }}>
                {currently.reading.title}{" "}
                <span style={{ color: "var(--muted)" }}>· {currently.reading.author}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section directory — bento layout */}
      <section className="pt-16 pb-10 px-6 max-w-6xl mx-auto">
        {/* Top row: Professional (wide) + Personal */}
        <div className="grid sm:grid-cols-5 gap-3 mb-3">
          {/* Professional — featured wide */}
          <motion.div
            className="sm:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href="/professional"
              className="block relative overflow-hidden group rounded-2xl p-8 h-full min-h-48 transition-all duration-200"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(600px at 0% 100%, rgba(32,211,234,0.07), transparent 70%)" }}
              />
              <span
                className="absolute right-6 bottom-4 text-8xl font-black select-none pointer-events-none leading-none"
                style={{ color: "rgba(32,211,234,0.06)" }}
              >
                01
              </span>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--teal)" }}>
                Professional
              </p>
              <h3 className="text-2xl font-extrabold mb-2" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                Five years at Microsoft.
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Growth, experimentation, and subscriber numbers in the millions.
              </p>
            </Link>
          </motion.div>

          {/* Personal */}
          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href="/personal"
              className="block relative overflow-hidden group rounded-2xl p-8 h-full min-h-48 transition-all duration-200"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(400px at 100% 0%, rgba(244,114,182,0.08), transparent 70%)" }}
              />
              <span
                className="absolute right-6 bottom-4 text-8xl font-black select-none pointer-events-none leading-none"
                style={{ color: "rgba(244,114,182,0.06)" }}
              >
                02
              </span>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--pink)" }}>
                Personal
              </p>
              <h3 className="text-2xl font-extrabold mb-2" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                Built for myself.
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Side projects that actually get used.
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Bottom row: About + Graphics + Play */}
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              href: "/about",
              num: "03",
              label: "About",
              headline: "The full picture.",
              desc: "Story, background, and timeline.",
              color: "var(--accent)",
              glow: "rgba(155,111,245,0.08)",
            },
            {
              href: "/graphics",
              num: "04",
              label: "Graphics",
              headline: "Design work.",
              desc: "Branding, visual identity, and art.",
              color: "#60A5FA",
              glow: "rgba(96,165,250,0.07)",
            },
            {
              href: "/play",
              num: "05",
              label: "Play",
              headline: "The rest of me.",
              desc: "Writing, travel, and everything else.",
              color: "#34D399",
              glow: "rgba(52,211,153,0.07)",
            },
          ].map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={s.href}
                className="block relative overflow-hidden group rounded-2xl p-6 h-full min-h-36 transition-all duration-200"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(300px at 0% 100%, ${s.glow}, transparent 70%)` }}
                />
                <span
                  className="absolute right-4 bottom-3 text-6xl font-black select-none pointer-events-none leading-none"
                  style={{ color: `color-mix(in srgb, ${s.color} 8%, transparent)` }}
                >
                  {s.num}
                </span>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: s.color }}>
                  {s.label}
                </p>
                <h3 className="text-lg font-extrabold mb-1" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
                  {s.headline}
                </h3>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
