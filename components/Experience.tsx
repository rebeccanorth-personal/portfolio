"use client";

import { useState } from "react";
import { experience } from "@/lib/content";

const kinds: Record<string, string> = {
  "full-time": "Full-time",
  intern: "Internship",
  volunteer: "Volunteer",
  education: "Education",
};

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0].id);

  return (
    <div className="tl">
      {experience.map((r) => {
        const open = openId === r.id;
        // Single-line subtitles join the title; multi-line ones (Cornell) lead the description
        const multi = r.subtitle.includes("\n");
        const title = r.title + (r.subtitle && !multi ? " — " + r.subtitle : "");
        return (
          <div key={r.id} className={"role" + (open ? " open" : "")} data-type={r.type}>
            <span className="node" aria-hidden="true"><i /></span>
            <div className="rcard">
              <button type="button" className="rhead" aria-expanded={open} onClick={() => setOpenId(open ? null : r.id)}>
                <span className="t">
                  <b>{r.company}</b>
                  <span className="ttl">{title}</span>
                  <span className="meta">{r.period} · {r.location}</span>
                </span>
                <span className="kind">{kinds[r.type]}</span>
                <span className="chev" aria-hidden="true">↓</span>
              </button>
              <div className="rbody">
                <div>
                  <p>{multi && <>{r.subtitle.split("\n").join(". ")}. </>}{r.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
