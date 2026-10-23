// ── Update these whenever they change ─────────────────────────────────────────
export const currently = {
  listening: {
    artist: "Ashe",
    track: "Funeral",
    link: "https://open.spotify.com/search/Funeral%20Ashe",
  },
  reading: {
    title: "Fruit Fly",
    author: "Josh Silver",
    link: "https://www.goodreads.com/book/show/243596291-fruit-fly",
  },
};

// ── About ──────────────────────────────────────────────────────────────────────
export const about = {
  headline: "Growth PM. Designer. Builder.",
  taglines: ["Growth PM.", "Designer.", "Builder."],
  bio: "Growth PM at Microsoft specializing in acquisition, activation, and retention for consumer subscription products. I live at the intersection of data and design — running experiments, scaling growth through PLG and 0→1 launches, and using AI daily to work faster and build better.",
  summary: "Growth Product Manager specializing in acquisition, activation, and retention for consumer subscription products, with a track record of scaling growth through PLG, experimentation, and 0→1 launches. A heavy AI practitioner who uses it daily, from writing specs and analyzing data to prototyping and shipping internal tools.",
  story: [
    "I'm a PM who can't help but prototype before I write a spec. My background is in Information Science at Cornell with a concentration in UX, the intersection of technology, design, and human behavior that shapes how I approach every product decision.",
    "At Microsoft I found my home in growth: running experiments, interrogating user behavior, and building the infrastructure to do it faster. I'm also deeply bought into AI as a way to work. I use it daily to move faster, think through problems, and ship things I couldn't have built alone.",
    "Away from the screen I'm usually somewhere with my camera, walking miles around the city, at a concert, or deep in a book.",
  ],
};

// ── Experience ─────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "ms-growth",
    title: "Product Manager 2",
    subtitle: "M365 & Copilot Subscriber Growth",
    company: "Microsoft",
    period: "May 2025 – Present",
    location: "New York, NY",
    description:
      "Drive end-to-end growth strategy for Consumer M365 and Copilot experiences that improve retention and subscriber growth. Own the checkout experience, optimizing conversion across the purchase funnel. Revamp the MVP trial journey to improve activation and boost paid conversion rates, while building a scalable framework for rapid experimentation. Launched a 0→1 EDU SKU to test new market segments.",
    metrics: [] as { value: string; label: string }[],
    type: "full-time" as const,
  },
  {
    id: "ms-fre",
    title: "Product Manager 2",
    subtitle: "First Run Experiences",
    company: "Microsoft",
    period: "Sep 2022 – Apr 2025",
    location: "New York, NY",
    description:
      "Owned top-of-funnel acquisition for M365, redesigning the Windows onboarding to increase subscriptions and LTV. Built new infrastructure to accelerate experimentation velocity, enabling faster validation of growth hypotheses. Scaled engagement strategy that grew free desktop app MAU across Word, Excel, and PowerPoint.",
    metrics: [] as { value: string; label: string }[],
    type: "full-time" as const,
  },
  {
    id: "ms-pm",
    title: "Product Manager",
    subtitle: "",
    company: "Microsoft",
    period: "Sep 2020 – Aug 2022",
    location: "Redmond, WA",
    description:
      "Launched and optimized growth experiments across M365 FRE offer pages. Improved UX and redesigned Windows 11 acquisition flows.",
    metrics: [] as { value: string; label: string }[],
    type: "full-time" as const,
  },
  {
    id: "ms-intern",
    title: "Program Manager Intern",
    subtitle: "",
    company: "Microsoft",
    period: "Jun – Aug 2019",
    location: "Redmond, WA",
    description:
      "Led a team of engineers and designers to create a personalized Office upsell experience in the Windows onboarding process by utilizing user intent.",
    metrics: [] as { value: string; label: string }[],
    type: "intern" as const,
  },
  {
    id: "sirius",
    title: "Customer Retention Marketing Intern",
    subtitle: "",
    company: "SiriusXM",
    period: "Jun – Aug 2018",
    location: "New York, NY",
    description:
      "Analyzed data to strategically develop tactical campaigns to retain current users. Used competitive analysis research to improve streaming app and gain subscribers.",
    metrics: [] as { value: string; label: string }[],
    type: "intern" as const,
  },
  {
    id: "anabels-exp",
    title: "Web Developer & Graphic Designer",
    subtitle: "",
    company: "Anabel's Grocery",
    period: "2017",
    location: "Ithaca, NY",
    description:
      "Built the website for Cornell's student-run grocery cooperative from design briefs: HTML, CSS, PHP, WordPress, plus a full product inventory list. Designed all branding and print materials in Illustrator and Photoshop.",
    metrics: [] as { value: string; label: string }[],
    type: "volunteer" as const,
  },
  {
    id: "cornell",
    title: "B.S. Information Science",
    subtitle: "Concentration: UX\nMinors: Business, Design & Environmental Analysis",
    company: "Cornell University",
    period: "Aug 2016 – Dec 2019",
    location: "Ithaca, NY",
    description:
      "Research assistant for the Design & Augmented Intelligence Lab. TA for Info 4240: Designing Technology for Social Impact. Web developer and graphic designer for Anabel's Grocery.",
    metrics: [] as { value: string; label: string }[],
    type: "education" as const,
  },
];

// ── Professional work (Work page rows) ─────────────────────────────────────────
// shots[0] sits in the back of the card, shots[1] in front, shots[2] fans in on hover
export type Project = {
  id: string;
  name: string;
  category: string;
  role: string;
  tags: string[];
  overview: string;
  process: { step: string; desc: string }[];
  shots: { src: string; caption: string }[];
  link?: string;
};

export const professionalProjects: Project[] = [
  {
    id: "alexruss",
    name: "alexrussacts.com",
    category: "Web design, Freelance",
    role: "Designer & Developer · Freelance · 2024",
    tags: ["Web Design", "Squarespace", "Visual Design", "Branding"],
    overview:
      "Alex needed a professional web presence that could go in front of casting directors, agents, and collaborators. The brief was simple: make it feel serious, make it feel him, and make it easy to update. I designed and built the full site on Squarespace (layout, typography, color palette, navigation and content structure), resulting in a minimal dark aesthetic that lets his headshots and performance work speak for themselves.",
    process: [
      { step: "Brief", desc: "Casting directors and agents need credentials fast, so headshots, resume and contact came first." },
      { step: "Design", desc: "A dark, minimal visual language with high contrast and a serif wordmark." },
      { step: "Build", desc: "Built in Squarespace with custom CSS so Alex can maintain it himself." },
      { step: "Launch", desc: "Shipped to alexrussacts.com, now his main casting and networking tool." },
    ],
    shots: [
      { src: "/projects/alexruss-2.png", caption: "Showcase & reels" },
      { src: "/projects/alexruss-3.png", caption: "Headshots" },
      { src: "/projects/alexruss-1.png", caption: "Homepage: about" },
    ],
    link: "https://alexrussacts.com",
  },
  {
    id: "sweat",
    name: "Sweat in the City",
    category: "Product design, Cornell",
    role: "Product Designer + Developer · Cornell · 2018",
    tags: ["Product Design", "Sketch", "HTML/CSS/JS"],
    overview:
      "When you travel, only big-box gyms show up in search, and every boutique studio and spin class stays invisible. I designed and coded a prototype aggregator that surfaces all local workout options in one search.",
    process: [
      { step: "Problem", desc: "Chains dominate search; boutique studios are invisible to travelers." },
      { step: "Design", desc: "Information architecture and key screens in Sketch, built for scanning on a phone." },
      { step: "Build", desc: "Coded in HTML, CSS, JavaScript and PHP, real enough to demo end to end." },
    ],
    shots: [
      { src: "/projects/sweat-1.png", caption: "Homepage: boutique fitness discovery" },
      { src: "/projects/sweat-2.png", caption: "What we do" },
    ],
  },
  {
    id: "anabels",
    name: "Anabel's Grocery",
    category: "Web + brand, Cornell",
    role: "Developer + Graphic Designer · Cornell · 2017",
    tags: ["Web Dev", "WordPress", "Branding", "Illustrator"],
    overview:
      "Anabel's Grocery opened in 2017 to give Cornell students affordable food on campus. They needed a website right away and a brand that felt warm, student-made and trustworthy. I built the site, the inventory list and all the visual identity and print materials.",
    process: [
      { step: "Scope", desc: "A site students would visit to check inventory, and an authentic co-op brand." },
      { step: "Brand", desc: "Logo, palette, type and tone in Illustrator, plus campus print pieces." },
      { step: "Build", desc: "WordPress site with a full inventory list, built from design briefs." },
      { step: "Launch", desc: "Shipped at opening, maintainable by non-technical student staff." },
    ],
    shots: [
      { src: "/projects/anabels-1.png", caption: "Our impact" },
      { src: "/projects/anabels-2.png", caption: "Our suppliers" },
    ],
  },
];

// ── Graphics: two squares beside each professional project ─────────────────────
// The top square in each row sits on a colored tile. "logo" pieces are transparent masks,
// so they take the ink color of light or dark mode
export const graphics = [
  { src: "/graphics/cut/lb-card.png", title: "LB Wedding", desc: "Custom playing cards for a party favor" },
  { src: "/graphics/cut/juliet.png", title: "Juliet Kopel", desc: "Business card for a chemical engineer" },
  { src: "/graphics/cut/fox-hat.png", title: "The Fox's Hat", desc: "Merch for the Fox's party" },
  { src: "/graphics/cut/es-logo.png", title: "ES Logo", desc: "A logo for Eric, who loves to travel", logo: true },
  { src: "/graphics/cut/sd-mono.png", title: "S&D Monogram", desc: "Engagement party logo", logo: true },
  { src: "/graphics/cut/sd-sign.png", title: "S&D Engagement Sign", desc: "Welcome sign for an engagement party" },
];

// ── Personal projects ──────────────────────────────────────────────────────────
export const personalProjects = [
  {
    name: "plan-my-week",
    tagline: "Weekly calendar automation for macOS",
    line: "Plans your week into Apple Calendar every Sunday.",
    description:
      "CLI tool that walks through your week day by day and creates Apple Calendar events via AppleScript. Fires every Sunday at 9 AM via a launchd LaunchAgent. Pure Python, no dependencies.",
    tags: ["Python", "AppleScript", "macOS", "Automation"],
    github: "https://github.com/rebeccanorth-personal/plan-my-week",
    image: { src: "/projects/plan-my-week.jpg", caption: "A real run of the planner in Terminal" },
  },
  {
    name: "lift + log",
    tagline: "Workout and protein tracking PWA",
    line: "Workout and protein tracker that logs to Sheets.",
    description:
      "Progressive web app for logging workouts and daily protein intake. Auto-tags sessions by type (Upper Body, Run, HIIT, etc.) and logs to Google Sheets for weekly Claude analysis.",
    tags: ["JavaScript", "PWA", "Google Sheets API"],
    github: "https://github.com/rebeccanorth-personal/lift-and-log",
    image: { src: "/projects/lift-and-log.jpg", caption: "A day of logged workouts and protein" },
  },
  {
    name: "Lollapalooza App",
    tagline: "Festival lineup planner with friends",
    line: "Festival planner for building a schedule with friends.",
    description:
      "React app for building your Lollapalooza schedule. Browse the full lineup on a timeline, build your personal picks, coordinate with friends, detect conflicts, and share your schedule via a URL.",
    tags: ["React", "Vite", "PWA"],
    github: "https://github.com/rebeccanorth-personal/lolla-schedule",
    image: { src: "/projects/lolla.jpg", caption: "Thursday lineup with a crew's picks" },
  },
];

// ── Writing ────────────────────────────────────────────────────────────────────
export const writing = [
  {
    title: '"Yes And"-ing to Success',
    publication: "Medium",
    date: "January 2023",
    excerpt:
      "What improv comedy taught me about showing up at work, and why I think everyone should take a class at least once.",
    url: "https://medium.com/@rebeccanorth/yes-and-ing-to-success-2053088b7f7f",
    mediumProfile: "https://medium.com/@rebeccanorth",
  },
];

// ── Travel photography (Play page polaroids) ───────────────────────────────────
export const travel = [
  { src: "/travel/rio.jpg", location: "Rio de Janeiro, Brazil" },
  { src: "/travel/sao-paulo.jpg", location: "São Paulo, Brazil" },
  { src: "/travel/buenos-aires-1.jpg", location: "Buenos Aires, Argentina" },
  { src: "/travel/buenos-aires-2.jpg", location: "Buenos Aires, Argentina" },
  { src: "/travel/seville.jpg", location: "Seville, Spain" },
  { src: "/travel/cannes.jpg", location: "Cannes, France" },
  { src: "/travel/aix.jpg", location: "Aix-en-Provence, France" },
  { src: "/travel/aix-lavender.jpg", location: "Aix-en-Provence, France" },
  { src: "/travel/nice-1.jpg", location: "Nice, France" },
  { src: "/travel/nice-2.jpg", location: "Nice, France" },
  { src: "/travel/lagos-1.jpg", location: "Lagos, Portugal" },
  { src: "/travel/lagos-2.jpg", location: "Lagos, Portugal" },
  { src: "/travel/lagos-3.jpg", location: "Lagos, Portugal" },
  { src: "/travel/chefchaouen.jpg", location: "Chefchaouen, Morocco" },
  { src: "/travel/tel-aviv.jpg", location: "Tel Aviv, Israel" },
  { src: "/travel/sedona-1.jpg", location: "Sedona, Arizona" },
  { src: "/travel/sedona-2.jpg", location: "Sedona, Arizona" },
  { src: "/travel/scottsdale.jpg", location: "Scottsdale, Arizona" },
  { src: "/travel/whistler.jpg", location: "Whistler, Canada" },
  { src: "/travel/vancouver.jpg", location: "Vancouver, Canada" },
  { src: "/travel/bend.png", location: "Bend, Oregon" },
  { src: "/travel/rainier.jpg", location: "Mount Rainier, Washington" },
  { src: "/travel/monterey-ca.jpg", location: "Monterey, California" },
];

export const chatSystemPrompt = `You are a friendly assistant on Rebecca North's portfolio website. Answer questions about Rebecca's background, experience, projects, and skills. Be warm, concise, and direct; two to four sentences max unless more detail is genuinely needed.

About Rebecca:
- Growth Product Manager at Microsoft (PM2 - M365 & Copilot Subscriber Growth, May 2025–Present, NYC)
- Previous: PM2 - First Run Experiences at Microsoft (Sep 2022–Apr 2025)
- Previous: Product Manager at Microsoft (Sep 2020–Aug 2022, Redmond)
- Internships: Microsoft Program Manager (Summer 2019), SiriusXM Customer Retention (Summer 2018)
- Education: Cornell University, B.S. Information Science, UX concentration, Class of 2019
- Minors: Business, Design & Environmental Analysis

Focus areas:
- Owns checkout and the trial journey for Consumer M365 and Copilot: conversion, activation, and paid retention
- Built experimentation infrastructure to speed up validating growth hypotheses
- Launched a 0→1 EDU SKU to test new market segments
- Previously redesigned Windows onboarding (OOBE) acquisition flows and grew free desktop app engagement across Word, Excel, and PowerPoint

Do not share specific performance numbers or percentages for Rebecca's Microsoft work; they are under NDA. If asked about metrics, say she's happy to talk through impact in conversation.

Skills: Growth PM, PLG, A/B experimentation, data analysis, Figma, Photoshop, Illustrator, HTML, CSS, JavaScript

Personal projects: plan-my-week (macOS automation), lift+log (workout PWA), Lollapalooza App (festival planner)

Freelance and earlier design work: alexrussacts.com (actor portfolio site), SiriusXM station schedule redesign, Sweat in the City (travel fitness aggregator), Anabel's Grocery (website and brand for Cornell's student grocery co-op)

Writing: Medium @rebeccanorth — "Yes And-ing to Success" (improv lessons for the workplace)

If asked something you don't know, say you're not sure and suggest reaching out at rebecnorth@gmail.com.`;
