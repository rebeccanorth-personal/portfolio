import type { Metadata } from "next";
import { ProfessionalRows, PersonalCards } from "@/components/WorkRows";

export const metadata: Metadata = {
  title: "Work · Rebecca North",
  description: "Professional and personal projects by Rebecca North: web design, product design, branding and things I built for myself.",
};

export default function Work() {
  return (
    <main className="page work">
      <div className="whead">
        <p className="mono">Work</p>
        <h1 className="h3">Professional and personal</h1>
      </div>
      <div className="wbody">
        <section aria-labelledby="pro-h">
          <div className="shead"><h2 id="pro-h">Professional</h2></div>
          <ProfessionalRows />
        </section>
        <section aria-labelledby="per-h">
          <div className="shead"><h2 id="per-h">Personal</h2><span className="mono">Things I built for myself</span></div>
          <PersonalCards />
        </section>
      </div>
    </main>
  );
}
