"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { startDrag, nextZ } from "./drag";
import { pictureStickers, wordStickers } from "./stickerArt";

const starters = [
  { text: "UI + UX", cls: "s-ink", left: "60%", top: "14%", rotate: "-6deg" },
  { text: "Growth", cls: "s-peach", left: "74%", top: "30%", rotate: "5deg" },
  { text: "A/B tests", cls: "s-mint", left: "63%", top: "50%", rotate: "-3deg" },
  { text: "0 → 1", cls: "s-line", left: "80%", top: "58%", rotate: "8deg" },
  { text: "Branding", cls: "s-lilac", left: "57%", top: "72%", rotate: "4deg" },
  { text: "Prototyping", cls: "s-ink", left: "76%", top: "80%", rotate: "-5deg" },
];

type Added = { id: number; word?: [string, string]; pic?: string; left: number; top: number; rotate: number; z: number };

export default function Hero() {
  const hero = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState<Added[]>([]);
  const nextId = useRef(0);
  const book = useRef<HTMLDivElement>(null);

  // Close the sticker book on any click outside it, or on Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!book.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // New stickers land on the right half, clear of the headline
  function add(sticker: { word?: [string, string]; pic?: string }) {
    const box = hero.current;
    if (!box) return;
    const w = box.clientWidth, h = box.clientHeight;
    setAdded((a) => [...a, {
      id: nextId.current++,
      ...sticker,
      left: Math.round(Math.min(w * (0.52 + Math.random() * 0.36), w - 160)),
      top: Math.round(h * (0.08 + Math.random() * 0.62)),
      rotate: Math.round(Math.random() * 20 - 10),
      z: nextZ(),
    }]);
  }
  const usedWords = new Set(added.map((s) => s.word?.[0]));
  const usedPics = new Set(added.map((s) => s.pic));

  return (
    <div className="hero" ref={hero}>
      <h1 className="h"><span>Growth PM.</span><span>Designer.</span><span>Builder.</span></h1>
      <p className="sub">Six years running experiments on Microsoft 365 taught me what makes people stay. Now I design for it.</p>
      <div className="ctas">
        <Link className="btn p" href="/work">See my work</Link>
        <a className="btn s" href="mailto:rebecnorth@gmail.com">Contact</a>
      </div>
      <p className="mono">Drag the stickers · open the book for more</p>

      {starters.map((s) => (
        <span key={s.text} className={"sticker " + s.cls} style={{ left: s.left, top: s.top, rotate: s.rotate }}
          onPointerDown={(e) => startDrag(e, hero.current)}>{s.text}</span>
      ))}
      {added.map((s) => s.word ? (
        <span key={s.id} className={"sticker slap " + s.word[1]} style={{ left: s.left, top: s.top, rotate: s.rotate + "deg", zIndex: s.z }}
          onPointerDown={(e) => startDrag(e, hero.current)}>{s.word[0]}</span>
      ) : (
        <span key={s.id} className="sticker pic slap" role="img" aria-label={s.pic + " sticker"} style={{ left: s.left, top: s.top, rotate: s.rotate + "deg", zIndex: s.z }}
          onPointerDown={(e) => startDrag(e, hero.current)} dangerouslySetInnerHTML={{ __html: pictureStickers[s.pic!] }} />
      ))}

      <div className="sbook" data-open={open} ref={book}>
        <button type="button" className="sbook-toggle" aria-expanded={open} aria-controls="sticker-spread" onClick={() => setOpen(!open)}>
          <span className="cov" aria-hidden="true" />Sticker book <span className="chev" aria-hidden="true">▾</span>
        </button>
        <div className="spread" id="sticker-spread" aria-label="Sticker book">
          <div className="leaf">
            <p className="mono">Words</p>
            <div className="words">
              {wordStickers.map((w) => (
                <button key={w[0]} type="button" className={w[1] + (usedWords.has(w[0]) ? " used" : "")} onClick={() => add({ word: w })}>{w[0]}</button>
              ))}
            </div>
          </div>
          <div className="leaf">
            <p className="mono">Pictures</p>
            <div className="pics">
              {Object.keys(pictureStickers).map((k) => (
                <button key={k} type="button" className={usedPics.has(k) ? "used" : undefined} aria-label={"Add " + k + " sticker"}
                  onClick={() => add({ pic: k })} dangerouslySetInnerHTML={{ __html: pictureStickers[k] }} />
              ))}
            </div>
          </div>
          <div className="leaf-foot">
            <span className="mono">Tap one to stick it on the page</span>
            <button type="button" onClick={() => setAdded([])}>Peel off the new ones</button>
          </div>
        </div>
      </div>
    </div>
  );
}
