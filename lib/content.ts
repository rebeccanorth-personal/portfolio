// ── Update these whenever they change ─────────────────────────────────────────
export const currently = {
  listening: {
    artist: "Chappell Roan",
    track: "Pink Pony Club",
    link: "https://open.spotify.com/artist/7GlBOeep6PqTfFi59PTUUN",
  },
  reading: {
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    link: "https://www.momtestbook.com",
  },
};

// ── About ──────────────────────────────────────────────────────────────────────
export const about = {
  headline: "Growth PM. Designer. Builder.",
  taglines: ["Growth PM.", "Designer.", "Builder."],
  bio: "Growth PM at Microsoft who can't help but wireframe before writing a spec. I live in the space where data meets design — running experiments that move subscriber numbers by millions, then going home to build small tools for myself because I genuinely can't stop.",
  summary: "Growth Product Manager with a proven track record of driving acquisition, activation, and retention through data-driven experimentation, PLG strategies, and monetization initiatives. Experienced at scaling subscriber growth in consumer products while building 0→1 offerings, rapid testing frameworks, and optimized user journeys that deliver measurable business impact.",
  story: [
    "I'm a PM who can't help but wireframe before I write a spec. Whether that makes me a better product manager or a very confused designer probably depends on the day — but it's meant I ship things that actually look like someone thought about them.",
    "I grew up in Information Science at Cornell, which is a polite way of saying I spent four years arguing about whether good design is discovered or invented. (Still arguing, for the record.)",
    "At Microsoft I found my home in growth: that scrappy, hypothesis-driven corner of product where you're constantly interrogating why users do what they do, then building small experiments that sometimes move enormous numbers. I've grown M365 subscriber counts by millions. I still get unreasonably excited when a conversion rate ticks up by half a point.",
    "Outside of work I take improv classes, lift weights, go to music festivals, and take my camera everywhere I travel. I believe the best PMs are relentlessly curious about everything — and I'm still very much proving that theory.",
  ],
};

// ── Experience ─────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "ms-growth",
    title: "Product Manager 2",
    subtitle: "Subscriber Growth & Lifecycle",
    company: "Microsoft",
    period: "May 2025 – Present",
    location: "New York, NY",
    description:
      "Drive end-to-end growth strategy for Consumer M365 in-app experiences through PLG and hypothesis-driven experiments. Revamp the MVP trial journey to improve activation and boost paid conversion rates, while building a scalable framework for rapid experimentation. Launched a 0→1 EDU offer to test new market segments.",
    metrics: [
      { value: "20%", label: "YoY subscriber growth" },
      { value: "900K", label: "new subscribers via EDU offer" },
    ],
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
      "Owned top-of-funnel acquisition for M365, redesigning the Windows onboarding to increase subscriptions and LTV. Built new infrastructure to accelerate experimentation velocity, enabling faster validation of growth hypotheses.",
    metrics: [
      { value: "7%", label: "MAU growth across Word, Excel, PowerPoint" },
    ],
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
    metrics: [
      { value: "14%", label: "consumer subscription increase" },
      { value: "10%", label: "paid activation rate increase" },
    ],
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
      "Led a team of engineers and designers to create a personalized Office upsell experience in the Windows onboarding process by leveraging user intent signals.",
    metrics: [],
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
      "Analyzed user data to develop tactical retention campaigns. Used competitive analysis to surface streaming app improvements.",
    metrics: [],
    type: "intern" as const,
  },
  {
    id: "cornell",
    title: "B.S. Information Science",
    subtitle: "Concentration: UX  ·  Minors: Business, Design & Environmental Analysis",
    company: "Cornell University",
    period: "Aug 2016 – Dec 2019",
    location: "Ithaca, NY",
    description:
      "Research assistant for the Design & Augmented Intelligence Lab. TA for Info 4240: Designing Technology for Social Impact. Web developer and graphic designer for Anabel's Grocery.",
    metrics: [],
    type: "education" as const,
  },
];

// ── Personal projects ──────────────────────────────────────────────────────────
export const personalProjects = [
  {
    name: "plan-my-week",
    tagline: "Weekly calendar automation for macOS",
    description:
      "CLI tool that walks through your week day by day and creates Apple Calendar events via AppleScript. Fires every Sunday at 9 AM via a launchd LaunchAgent. Pure Python, no dependencies.",
    tags: ["Python", "AppleScript", "macOS", "Automation"],
    github: "https://github.com/rebeccanorth-personal/plan-my-week",
    live: null,
    accent: "#8B5CF6",
  },
  {
    name: "lift + log",
    tagline: "Workout and protein tracking PWA",
    description:
      "Progressive web app for logging workouts and daily protein intake. Auto-tags sessions by type (Upper Body, Run, HIIT, etc.) and logs to Google Sheets. Vanilla JS, zero dependencies.",
    tags: ["JavaScript", "PWA", "Google Sheets API"],
    github: "https://github.com/rebeccanorth-personal/lift-and-log",
    live: null,
    accent: "#22D3EE",
  },
  {
    name: "lolla schedule",
    tagline: "Festival lineup planner with friends",
    description:
      "React app for building your Lollapalooza schedule. Browse the full lineup on a timeline, build your personal picks, coordinate with friends, detect conflicts, and share your schedule via a URL.",
    tags: ["React", "Vite", "PWA"],
    github: "https://github.com/rebeccanorth-personal/lolla-schedule",
    live: null,
    accent: "#F472B6",
  },
];

// ── Writing ────────────────────────────────────────────────────────────────────
export const writing = [
  {
    title: '"Yes And"-ing to Success',
    publication: "Medium",
    date: "January 2023",
    excerpt:
      "What improv comedy taught me about showing up at work — and why I think everyone should take a class at least once.",
    url: "https://medium.com/@rebeccanorth/yes-and-ing-to-success-2053088b7f7f",
    mediumProfile: "https://medium.com/@rebeccanorth",
  },
];

// ── PM projects ───────────────────────────────────────────────────────────────
export const pmProjects = [
  {
    id: "sirius",
    name: "SiriusXM — Station Schedule Redesign",
    role: "Product Designer",
    type: "Internship project",
    description:
      "The customer retention team needed a way for satellite radio listeners to preview station schedules and find when their favorite shows were airing. I created six initial concepts from design briefs, narrowed to two, built a Figma prototype, and presented to the team for a final selection that went to development.",
    tags: ["UX Design", "Figma", "Prototyping"],
    accent: "var(--teal)",
  },
  {
    id: "sweat",
    name: "Sweat in the City",
    role: "Product Designer + Developer",
    type: "Side project",
    description:
      "When you travel, only big-box gyms show up in search results — every boutique studio and spin class stays invisible. I designed and built a prototype aggregator where travelers can find all local workout options in one place. Design in Sketch, built in HTML, CSS, and JavaScript.",
    tags: ["Product Design", "Sketch", "HTML/CSS/JS", "PHP"],
    accent: "var(--pink)",
  },
  {
    id: "anabels",
    name: "Anabel's Grocery",
    role: "Developer + Graphic Designer",
    type: "Cornell",
    description:
      "Cornell's student-run grocery cooperative needed a web presence from scratch. I built the site from design briefs using HTML, CSS, PHP, and WordPress — including a full inventory list so students could check stock before making the trip. Also handled all branding and print materials in Illustrator and Photoshop.",
    tags: ["Web Development", "WordPress", "Branding", "Illustrator"],
    accent: "#F59E0B",
  },
];

// ── Chat system prompt ─────────────────────────────────────────────────────────
export const chatSystemPrompt = `You are a friendly assistant on Rebecca North's portfolio website. Answer questions about Rebecca's background, experience, projects, and skills. Be warm, concise, and direct — two to four sentences max unless more detail is genuinely needed.

About Rebecca:
- Growth Product Manager at Microsoft (PM2 - Subscriber Growth & Lifecycle, May 2025–Present, NYC)
- Previous: PM2 - First Run Experiences at Microsoft (Sep 2022–Apr 2025)
- Previous: Product Manager at Microsoft (Sep 2020–Aug 2022, Redmond)
- Internships: Microsoft Program Manager (Summer 2019), SiriusXM Customer Retention (Summer 2018)
- Education: Cornell University, B.S. Information Science, UX concentration, Class of 2019
- Minors: Business, Design & Environmental Analysis

Key impact:
- 20% YoY M365 Consumer subscriber growth
- Launched 0→1 EDU offer unlocking 900K new subscribers annually
- 7% MAU growth across Word, Excel, PowerPoint
- 14% subscription increase via UX improvements
- 10% paid activation increase via Windows 11 redesign

Skills: Growth PM, PLG, A/B experimentation, data analysis, Figma, Photoshop, Illustrator, HTML, CSS, JavaScript

Personal projects: plan-my-week (macOS automation), lift+log (workout PWA), lolla-schedule (festival planner)

Writing: Medium @rebeccanorth — "Yes And-ing to Success" (improv lessons for the workplace)

If asked something you don't know, say you're not sure and suggest reaching out at rebecnorth@gmail.com.`;
