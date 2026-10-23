"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { travel } from "@/lib/content";
import { startDrag } from "./drag";
import Overlay, { Shot } from "./Overlay";

const DESK_HEIGHT = 620;

export default function PolaroidDesk() {
  const desk = useRef<HTMLDivElement>(null);
  const [photo, setPhoto] = useState<(typeof travel)[number] | null>(null);

  function polaroids() {
    return Array.from(desk.current?.querySelectorAll<HTMLElement>(".polaroid") ?? []);
  }
  function scatter() {
    const box = desk.current;
    if (!box) return;
    box.style.height = DESK_HEIGHT + "px";
    const w = box.clientWidth;
    polaroids().forEach((p) => {
      p.style.left = Math.round(Math.random() * (w - p.offsetWidth)) + "px";
      p.style.top = Math.round(Math.random() * (DESK_HEIGHT - p.offsetHeight)) + "px";
      p.style.rotate = Math.round(Math.random() * 28 - 14) + "deg";
    });
  }
  function tidy() {
    const box = desk.current;
    const ps = polaroids();
    if (!box || !ps.length) return;
    const pw = ps[0].offsetWidth, ph = ps[0].offsetHeight, gap = 14;
    const cols = Math.max(2, Math.floor((box.clientWidth - gap) / (pw + gap)));
    const left = (box.clientWidth - (cols * (pw + gap) - gap)) / 2;
    box.style.height = Math.ceil(ps.length / cols) * (ph + gap) + gap + "px";
    ps.forEach((p, i) => {
      p.style.left = Math.round(left + (i % cols) * (pw + gap)) + "px";
      p.style.top = Math.round(gap + Math.floor(i / cols) * (ph + gap)) + "px";
      p.style.rotate = ((i % 3) - 1) * 1.5 + "deg";
    });
  }

  // Positions are random, so they are set after mount rather than during render
  useLayoutEffect(scatter, []);

  return (
    <>
      <div className="desk" ref={desk}>
        {travel.map((t) => (
          <div key={t.src} className="polaroid" onPointerDown={(e) => startDrag(e, desk.current, () => setPhoto(t))}>
            <Image src={t.src} alt={t.location} width={264} height={264} sizes="132px" draggable={false} />
            <span>{t.location.split(",")[0]}</span>
          </div>
        ))}
      </div>
      <div className="desktools">
        <span className="mono">{travel.length} photos</span>
        <span style={{ display: "flex", gap: 8 }}>
          <button type="button" className="tool" onClick={tidy}>Tidy up</button>
          <button type="button" className="tool" onClick={scatter}>Scatter</button>
        </span>
      </div>

      <Overlay open={!!photo} onClose={() => setPhoto(null)} label={photo?.location ?? "Photo"} variant="shot">
        {photo && <Shot src={`/_next/image?url=${encodeURIComponent(photo.src)}&w=1200&q=75`} title={photo.location} />}
      </Overlay>
    </>
  );
}
