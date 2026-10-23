import type { Metadata } from "next";
import PolaroidDesk from "@/components/PolaroidDesk";
import { writing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Play · Rebecca North",
  description: "The rest of me: writing and travel photography.",
};

export default function Play() {
  const article = writing[0];
  return (
    <main className="page play">
      <div className="whead">
        <p className="mono">Play</p>
        <h1 className="h3">The rest of me</h1>
        <p className="sub">The non-LinkedIn version. I took an improv class and wrote about it. I travel with my camera. I make playlists that are objectively too long. This is that part.</p>
      </div>
      <div className="wbody">
        <section aria-labelledby="writing-h">
          <div className="shead"><h2 id="writing-h">Writing</h2><span className="mono">On Medium</span></div>
          <div className="grid2">
            <a className="wcard" href={article.url} target="_blank" rel="noopener noreferrer">
              <span className="date">{article.date}</span>
              <b>{article.title}</b>
              <p>{article.excerpt}</p>
              <span className="u-coral" style={{ fontWeight: 600, fontSize: 13 }}>Read on Medium ↗</span>
            </a>
            <a className="wcard" href={article.mediumProfile} target="_blank" rel="noopener noreferrer">
              <span className="mono">@rebeccanorth</span>
              <b>More on Medium</b>
              <span className="u-coral" style={{ fontWeight: 600, fontSize: 13 }}>Medium ↗</span>
            </a>
          </div>
        </section>
        <section aria-labelledby="travel-h">
          <div className="shead"><h2 id="travel-h">Travel photography</h2><span className="mono">Drag the polaroids around · click one to look closer</span></div>
          <PolaroidDesk />
        </section>
      </div>
    </main>
  );
}
