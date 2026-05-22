"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pieces = [
  {
    src: "/graphics/lb-wedding-card.jpeg",
    title: "LB Wedding",
    desc: "Custom playing cards for party favor",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/fox-wedding-matchbox.jpeg",
    title: "The Fox's Matchbox",
    desc: "Wedding matchbox for the Fox's",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    pair: [
      { src: "/graphics/arp-up-logo.png", title: "ARP", desc: "A logo for a musician with the initials AJP", bg: "#ffffff" },
      { src: "/graphics/boylan-bottling-logo.png", title: "Boylan Bottling Co", desc: "A logo for a chemist with the initials BB", bg: "#ffffff" },
    ],
  },
  {
    src: "/graphics/phoebes-records.png",
    title: "Phoebe's Records",
    desc: "A vinyl-themed logo for Phoebe's Bat Mitzvah",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/es-logo.png",
    title: "ES Logo",
    desc: "A logo for Eric who loves to travel",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/sd-engagement-sign.png",
    title: "S&D Engagement Sign",
    desc: "Welcome sign for Shelby & Drew's engagement party",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/stephen-wise-auction.png",
    title: "Stephen Wise",
    desc: "A Miami Vice themed logo for a charity auction",
    bg: "#0d0d1a",
    cardClass: "",
  },
  {
    src: "/graphics/juliet-kopel-business-card.png",
    title: "Juliet Kopel",
    desc: "Business Card for a Chemical Engineer",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/digital-disconnect.jpg",
    title: "Digital Disconnect",
    desc: "Editorial illustration exploring the cut between analog and digital communication.",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/fox-wedding-hat.jpeg",
    title: "The Fox's Hat",
    desc: "Merch for the Fox's party",
    bg: "#ffffff",
    cardClass: "",
  },
  {
    src: "/graphics/sd-wedding-monogram.png",
    title: "S&D Monogram",
    desc: "Engagement party logo for Shelby & Drew",
    bg: "#ffffff",
    cardClass: "",
  },
];

export default function Graphics() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
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
          Tools: Figma, Procreate, Photoshop, Illustrator.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {pieces.map((piece, i) => {
          if ("pair" in piece) {
            return (
              <motion.div
                key="pair-ajp-bb"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="break-inside-avoid flex gap-2"
              >
                {piece.pair.map((p) => (
                  <div
                    key={p.title}
                    className="flex-1 rounded-2xl overflow-hidden group relative cursor-default"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <div style={{ background: p.bg }}>
                      <Image
                        src={p.src}
                        alt={p.title}
                        width={800}
                        height={800}
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }}
                    >
                      <div className="px-3 pb-3">
                        <p className="text-xs font-bold leading-tight text-white">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          }

          return (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`break-inside-avoid ${piece.cardClass}`}
            >
              <div
                className="rounded-2xl overflow-hidden group relative cursor-default"
                style={{ border: "1px solid var(--border)" }}
              >
                <div style={{ background: piece.bg }}>
                  <Image
                    src={piece.src}
                    alt={piece.title}
                    width={800}
                    height={800}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }}
                >
                  <div className="px-4 pb-4">
                    <p className="text-sm font-bold leading-tight text-white">{piece.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
