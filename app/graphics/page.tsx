"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pieces = [
  {
    src: "/graphics/juliet-kopel-business-card.png",
    title: "Juliet Kopel Business Card",
    category: "Print Design",
    desc: "Business card for a chemical engineer at Boylan Bottling Co — molecular hexagon motif.",
    aspect: "aspect-[4/3]",
    bg: "#ffffff",
  },
  {
    src: "/graphics/boylan-bottling-logo.png",
    title: "Boylan Bottling Co",
    category: "Logo Design",
    desc: "Brand mark pairing the BB initials with a test tube inside a triangle.",
    aspect: "aspect-square",
    bg: "#ffffff",
  },
  {
    src: "/graphics/arp-up-logo.png",
    title: "Arp Up",
    category: "Logo Design",
    desc: "Circular logo with hand-lettered type integrated around a saxophone form.",
    aspect: "aspect-square",
    bg: "#ffffff",
  },
  {
    src: "/graphics/digital-disconnect.jpg",
    title: "Digital Disconnect",
    category: "Illustration",
    desc: "Editorial illustration exploring the cut between analog and digital communication.",
    aspect: "aspect-square",
    bg: "#ffffff",
  },
  {
    src: "/graphics/es-logo.png",
    title: "ES Logo",
    category: "Logo Design",
    desc: "Monogram logo with two aircraft forming the letterforms.",
    aspect: "aspect-square",
    bg: "#ffffff",
  },
  {
    src: "/graphics/stephen-wise-auction.png",
    title: "Stephen Wise ECC Auction",
    category: "Event Design",
    desc: "Miami Vice–themed event poster for the Stephen Wise ECC Auction 2023.",
    aspect: "aspect-[9/16]",
    bg: "#0d0d1a",
  },
  {
    src: "/graphics/phoebes-records.png",
    title: "Phoebe's Records",
    category: "Sticker Design",
    desc: "Vinyl record sticker design for a bat mitzvah party favor.",
    aspect: "aspect-square",
    bg: "#ffffff",
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
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="break-inside-avoid"
          >
            <div
              className="rounded-2xl overflow-hidden group relative cursor-default"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Image */}
              <div style={{ background: piece.bg }}>
                <Image
                  src={piece.src}
                  alt={piece.title}
                  width={800}
                  height={800}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}
              >
                <div className="px-4 pb-4">
                  <p className="text-sm font-bold leading-tight text-white">
                    {piece.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
