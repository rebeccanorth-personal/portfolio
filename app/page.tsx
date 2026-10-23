import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import { currently } from "@/lib/content";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <div className="resume">
        <section className="block" id="about" aria-labelledby="about-h">
          <h2 className="mono" id="about-h" style={{ margin: 0 }}>About</h2>
          <div className="about">
            <p className="lead">I&apos;m a PM who thinks like a designer.</p>
            <p>I&apos;m a UX PM, so I do both. I studied Information Science at Cornell with a concentration in UX, which is where I learned to work in the overlap between technology, design and how people actually behave.</p>
            <p>I spent six years on growth at Microsoft, working on onboarding, checkout and trials for Microsoft 365 and Copilot. It taught me to prototype before I write a spec and to test a hunch before I trust it.</p>
            <p>Away from the screen I&apos;m usually somewhere with my camera, at a concert, or deep in a book.</p>
            <div className="now">
              <a className="now-card" href={currently.listening.link} target="_blank" rel="noopener noreferrer">
                <span className="bars" aria-hidden="true"><i /><i /><i /><i /></span>
                <span><span className="mono">Currently listening</span><b>{currently.listening.track} <span>· {currently.listening.artist}</span></b></span>
              </a>
              <a className="now-card" href={currently.reading.link} target="_blank" rel="noopener noreferrer">
                <span className="lines" aria-hidden="true"><i /><i /><i /></span>
                <span><span className="mono">Currently reading</span><b>{currently.reading.title} <span>· {currently.reading.author}</span></b></span>
              </a>
            </div>
          </div>
        </section>
        <section className="block" aria-labelledby="xp-h">
          <h2 className="mono" id="xp-h" style={{ margin: 0 }}>Experience</h2>
          <div>
            <Experience />
            <p style={{ margin: "18px 0 0" }}>
              <a className="u-coral" style={{ fontWeight: 600, fontSize: 14 }} href="/Rebecca_North_Resume.pdf" target="_blank" rel="noopener noreferrer">View full resume ↗</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
