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
  bio: "I'm a Product Manager at Microsoft who doesn't just recognize the importance of design — I understand it. I build products with users at the center: accessible, intentional, and grounded in real behavior. With a background in Information Science and UX from Cornell, I move fluidly between engineers, designers, and data scientists to take products from 0 to 1 and from good to great.",
  summary: "Growth Product Manager with a proven track record of driving acquisition, activation, and retention through data-driven experimentation, PLG strategies, and monetization initiatives. Experienced at scaling subscriber growth in consumer products while building 0→1 offerings, rapid testing frameworks, and optimized user journeys that deliver measurable business impact.",
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
