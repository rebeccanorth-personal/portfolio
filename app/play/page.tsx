"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { writing } from "@/lib/content";

type TravelPhoto = { src: string; location: string };
type TravelItem =
  | TravelPhoto
  | { pair: TravelPhoto[]; location: string }
  | { triple: TravelPhoto[]; location: string };

const travel: TravelItem[] = [
  { src: "/travel/rio.jpg", location: "Rio de Janeiro, Brazil" },
  { src: "/travel/sao-paulo.jpg", location: "São Paulo, Brazil" },
  {
    pair: [
      { src: "/travel/buenos-aires-1.jpg", location: "Buenos Aires, Argentina" },
      { src: "/travel/buenos-aires-2.jpg", location: "Buenos Aires, Argentina" },
    ],
    location: "Buenos Aires, Argentina",
  },
  { src: "/travel/seville.jpg", location: "Seville, Spain" },
  { src: "/travel/cannes.jpg", location: "Cannes, France" },
  {
    pair: [
      { src: "/travel/aix.jpg", location: "Aix-en-Provence, France" },
      { src: "/travel/aix-lavender.jpg", location: "Aix-en-Provence, France" },
    ],
    location: "Aix-en-Provence, France",
  },
  {
    pair: [
      { src: "/travel/nice-1.jpg", location: "Nice, France" },
      { src: "/travel/nice-2.jpg", location: "Nice, France" },
    ],
    location: "Nice, France",
  },
  {
    triple: [
      { src: "/travel/lagos-1.jpg", location: "Lagos, Portugal" },
      { src: "/travel/lagos-2.jpg", location: "Lagos, Portugal" },
      { src: "/travel/lagos-3.jpg", location: "Lagos, Portugal" },
    ],
    location: "Lagos, Portugal",
  },
  { src: "/travel/chefchaouen.jpg", location: "Chefchaouen, Morocco" },
  { src: "/travel/tel-aviv.jpg", location: "Tel Aviv, Israel" },
  {
    pair: [
      { src: "/travel/sedona-1.jpg", location: "Sedona, Arizona" },
      { src: "/travel/sedona-2.jpg", location: "Sedona, Arizona" },
    ],
    location: "Sedona, Arizona",
  },
  { src: "/travel/scottsdale.jpg", location: "Scottsdale, Arizona" },
  { src: "/travel/whistler.jpg", location: "Whistler, Canada" },
  { src: "/travel/vancouver.jpg", location: "Vancouver, Canada" },
  { src: "/travel/bend.png", location: "Bend, Oregon" },
  { src: "/travel/mount-rainier.jpg", location: "Mount Rainier, Washington" },
];

function PhotoCard({ src, location }: TravelPhoto) {
  return (
    <div
      className="rounded-2xl overflow-hidden group relative cursor-default"
      style={{ border: "1px solid var(--border)" }}
    >
      <Image
        src={src}
        alt={location}
        width={1200}
        height={1600}
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
        }}
      >
        <div className="px-3 pb-3">
          <p className="text-xs font-bold leading-tight text-white">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Play() {
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
          Play
        </p>
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          The rest of me
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          The non-LinkedIn version. I took an improv class and wrote about it. I travel with my camera. I make playlists that are objectively too long. This is that part.
        </p>
      </motion.div>

      {/* Writing */}
      <section className="mb-16">
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
                <span className="inline-block mt-4 text-xs font-semibold" style={{ color: "#34D399" }}>
                  Read on Medium ↗
                </span>
              </a>
            </motion.div>
          ))}

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
          {travel.map((item, i) => {
            if ("triple" in item) {
              return item.triple.map((p, j) => (
                <motion.div
                  key={p.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + j) * 0.05 }}
                  className="break-inside-avoid"
                >
                  <PhotoCard src={p.src} location={p.location} />
                </motion.div>
              ));
            }

            if ("pair" in item) {
              return item.pair.map((p, j) => (
                <motion.div
                  key={p.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + j) * 0.05 }}
                  className="break-inside-avoid"
                >
                  <PhotoCard src={p.src} location={p.location} />
                </motion.div>
              ));
            }

            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid"
              >
                <PhotoCard src={item.src} location={item.location} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
