"use client";

import Image from "next/image";
import { useState } from "react";
import { professionalProjects, graphics, personalProjects, type Project } from "@/lib/content";
import Overlay, { Shot } from "./Overlay";

const tiles = ["c-peach", "c-lilac", "c-mint"];
type Personal = (typeof personalProjects)[number];
type Graphic = (typeof graphics)[number];

export function ProfessionalRows() {
  const [project, setProject] = useState<Project | null>(null);
  const [graphic, setGraphic] = useState<Graphic | null>(null);

  return (
    <>
      <div className="dani">
        {professionalProjects.map((p, i) => {
          const [a, b = a, c] = p.shots;
          return (
            <div key={p.id} className={"drow" + (i % 2 ? " flip" : "")}>
              <button type="button" className="big" aria-label={p.name + ": open project"} onClick={() => setProject(p)}>
                {/* The third frame only fans in on hover when there is a third screenshot */}
                {c && <span className="ph c"><Image src={c.src} alt="" fill sizes="(max-width: 760px) 50vw, 360px" /></span>}
                <span className="ph a"><Image src={a.src} alt="" fill sizes="(max-width: 760px) 70vw, 460px" /></span>
                <span className="ph b"><Image src={b.src} alt="" fill sizes="(max-width: 760px) 40vw, 260px" /></span>
                <span className="lbl">{p.name} <span>{p.category}</span></span>
              </button>
              <div className="sqs">
                {[graphics[i * 2], graphics[i * 2 + 1]].map((g, k) => (
                  <button key={g.title} type="button" className={"sq" + (k === 0 ? " " + tiles[i] : "")} aria-label={g.title} onClick={() => setGraphic(g)}>
                    {g.logo ? (
                      <span className="mark" style={{ WebkitMaskImage: `url(${g.src})`, maskImage: `url(${g.src})` }} />
                    ) : (
                      <span className="pic"><Image src={g.src} alt="" fill sizes="200px" style={{ objectFit: "contain" }} /></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Overlay open={!!project} onClose={() => setProject(null)} label={project?.name ?? "Project"} variant="panel">
        {project && (
          <div className="pm">
            <p className="mono">{project.role}</p>
            <h3>{project.name}</h3>
            <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <p className="ov">{project.overview}</p>
            <ol>{project.process.map((s) => <li key={s.step}><b>{s.step}</b>{s.desc}</li>)}</ol>
            <div className="shots">
              {project.shots.map((s) => (
                <figure key={s.src}>
                  <Image src={s.src} alt={s.caption} width={1200} height={760} sizes="(max-width: 860px) 90vw, 400px" style={{ height: "auto" }} />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
            {project.link && <a className="btn p" href={project.link} target="_blank" rel="noopener noreferrer">Visit the site ↗</a>}
          </div>
        )}
      </Overlay>

      <Overlay open={!!graphic} onClose={() => setGraphic(null)} label={graphic?.title ?? "Graphic"} variant="shot">
        {graphic && <Shot src={graphic.src} title={graphic.title} desc={graphic.desc} />}
      </Overlay>
    </>
  );
}

export function PersonalCards() {
  const [project, setProject] = useState<Personal | null>(null);

  return (
    <>
      <div className="grid4">
        {personalProjects.map((p) => (
          <button key={p.name} type="button" className="card" onClick={() => setProject(p)}>
            <div className="cover">
              <Image src={p.image.src} alt="" fill sizes="(max-width: 860px) 45vw, 240px" style={{ objectFit: "cover", objectPosition: "top" }} />
              <span className="open">Open</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.line}</p>
          </button>
        ))}
      </div>

      <Overlay open={!!project} onClose={() => setProject(null)} label={project?.name ?? "Project"} variant="panel">
        {project && (
          <div className="pm">
            <p className="mono">{project.tagline}</p>
            <h3>{project.name}</h3>
            <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <p className="ov">{project.description}</p>
            <div className="shots">
              <figure>
                <Image src={project.image.src} alt={project.image.caption} width={1000} height={1000} sizes="560px" style={{ height: "auto" }} />
                <figcaption>{project.image.caption}</figcaption>
              </figure>
            </div>
            <a className="btn p" href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
          </div>
        )}
      </Overlay>
    </>
  );
}
