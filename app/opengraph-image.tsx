import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The link preview shown in texts, Slack, LinkedIn, etc. Built at deploy time.
export const alt = "Rebecca North — Growth PM. Designer. Builder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0E0E0E";
const BG = "#F4F2EE";

const stickers = [
  { text: "UI + UX", bg: INK, color: BG, x: 720, y: 92, r: -6 },
  { text: "Growth", bg: "#FFA27F", color: INK, x: 930, y: 170, r: 5 },
  { text: "A/B tests", bg: "#8EE0C3", color: INK, x: 760, y: 280, r: -3 },
  { text: "0 → 1", bg: BG, color: INK, x: 990, y: 330, r: 8, border: true },
  { text: "Branding", bg: "#B7A2FF", color: INK, x: 700, y: 420, r: 4 },
  { text: "Prototyping", bg: INK, color: BG, x: 900, y: 470, r: -5 },
];

export default async function Image() {
  const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));
  const [bold, medium, mono] = await Promise.all([
    font("IBMPlexSans-700.woff"),
    font("IBMPlexSans-500.woff"),
    font("IBMPlexMono-500.woff"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: BG, fontFamily: "Plex Sans", color: INK }}>
        {/* The site's orange and lilac glow */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", backgroundImage: "radial-gradient(circle at 74% 18%, #FF8A3D 0%, #FF6E4E 12%, rgba(255,162,127,0.8) 26%, rgba(244,242,238,0) 48%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", backgroundImage: "radial-gradient(circle at 92% 64%, rgba(183,162,255,0.9) 0%, rgba(183,162,255,0.4) 18%, rgba(244,242,238,0) 40%)" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: "100%", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 28, fontWeight: 500 }}>
            <span>Rebecca North</span>
            <span style={{ color: "#5E5B57" }}>UX PM · NYC</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 700, lineHeight: 0.98, letterSpacing: -4 }}>
            <span>Growth PM.</span>
            <span>Designer.</span>
            <span>Builder.</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Plex Mono", fontSize: 26 }}>
            <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#FF6E4E" }} />
            rebeccanorth.me
          </div>
        </div>

        {stickers.map((s) => (
          <div
            key={s.text}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              display: "flex",
              padding: "14px 20px",
              borderRadius: 6,
              background: s.bg,
              color: s.color,
              border: s.border ? `2px solid ${INK}` : "none",
              fontSize: 34,
              fontWeight: 500,
              transform: `rotate(${s.r}deg)`,
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
            }}
          >
            {s.text}
          </div>
        ))}
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plex Sans", data: bold, style: "normal", weight: 700 },
        { name: "Plex Sans", data: medium, style: "normal", weight: 500 },
        { name: "Plex Mono", data: mono, style: "normal", weight: 500 },
      ],
    }
  );
}
