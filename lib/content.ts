// ── Update these whenever they change ─────────────────────────────────────────
export const currently = {
  listening: {
    artist: "MUNA",
    track: "Dancing On The Wall",
    link: "https://open.spotify.com/track/3x4HQHF6oY2yKtIGF2kTJz",
  },
  reading: {
    title: "The Rachel Incident",
    author: "Caroline O'Donoghue",
    link: "https://www.goodreads.com/book/show/62039271-the-rachel-incident",
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
    "I'm also deeply bought into AI as a way to work — not just as a PM on a Copilot growth team, but personally. I use it to move faster, think through problems, and build things I wouldn't have been able to ship alone. This portfolio is a good example of that.",
    "Outside of work I take improv classes, lift weights, go to music festivals, and take my camera everywhere I travel. I believe the best PMs are relentlessly curious about everything — and I'm still very much proving that theory.",
  ],
};

// ── Experience ─────────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "ms-growth",
    // newest first
    title: "Product Manager 2",
    subtitle: "Consumer Copilot Growth",
    company: "Microsoft",
    period: "May 2025 – Present",
    location: "New York, NY",
    description:
      "Drive end-to-end growth strategy for Consumer M365 in-app experiences through PLG and hypothesis-driven experiments. Revamp the MVP trial journey to improve activation and boost paid conversion rates, while building a scalable framework for rapid experimentation. Launched a 0→1 EDU offer to test new market segments.",
    metrics: [
      { value: "20%", label: "YoY subscriber growth" },
      { value: "900K", label: "new subscribers via EDU offer" },
      { value: "+200K", label: "trial conversions" },
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
    id: "romer",
    title: "Marketing Intern",
    subtitle: "",
    company: "Romer",
    period: "Jan – Jun 2020",
    location: "Remote",
    description:
      "Expanded startup awareness and managed community growth. Shaped brand identity through cross-platform creative content creation.",
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
    id: "snap",
    title: "Product Design Intern",
    subtitle: "",
    company: "SNAPWellness",
    period: "Jun – Aug 2018",
    location: "New York, NY",
    description:
      "Designed the company website and customer database. Created eCommerce additions to expand the platform's commercial capabilities.",
    metrics: [],
    type: "intern" as const,
  },
  {
    id: "anabels-exp",
    title: "Web Developer & Graphic Designer",
    subtitle: "Anabel's Grocery — Cornell Co-op",
    company: "Cornell University",
    period: "2017",
    location: "Ithaca, NY",
    description:
      "Built the website for Cornell's student-run grocery cooperative from design briefs: HTML, CSS, PHP, WordPress, plus a full product inventory list. Designed all branding and print materials in Illustrator and Photoshop.",
    metrics: [],
    type: "project" as const,
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

// ── All portfolio projects (Professional page) ─────────────────────────────────
// images: src=null renders a styled placeholder; swap with a real path when ready
export const allProjects = [
  {
    id: "microsoft",
    name: "Microsoft 365",
    tagline: "Growth & Acquisition",
    role: "Product Manager → PM2",
    company: "Microsoft",
    period: "2019 – Present",
    type: "Full-time",
    accent: "var(--teal)",
    tags: ["PLG", "Experimentation", "Acquisition", "0→1"],
    summary:
      "Five years owning top-of-funnel acquisition and subscriber lifecycle for M365 Consumer across Windows surfaces. Built experimentation infrastructure, launched a 0→1 EDU offer, and shipped redesigns that moved subscription numbers by millions.",
    metrics: [
      { value: "20%", label: "YoY subscriber growth" },
      { value: "+200K", label: "trial conversions" },
      { value: "900K", label: "new subscribers (EDU)" },
      { value: "7%", label: "MAU growth across Office apps" },
    ],
    modal: {
      overview:
        "M365 Consumer growth sits at the intersection of product, design, and data. Every experiment starts with a hypothesis about user behavior — why does someone hesitate at the offer page? What framing converts a trial user into a paid subscriber? I've run hundreds of these experiments across Windows onboarding flows, in-app surfaces, and lifecycle touchpoints, each one building infrastructure and intuition for the next.",
      process: [
        { step: "Ideate", desc: "Identify problems and propose solutions that balance business impact, engineering cost, and user needs — always starting from the user behavior the data surfaces." },
        { step: "Research", desc: "Conduct user research with target audiences to understand intent and friction points. Pair qual insights with telemetry to prioritize what matters." },
        { step: "Design", desc: "Apply UX principles to create improvements grounded in customer insight. I wireframe before I spec — it makes the design conversations with engineers much faster." },
        { step: "Develop", desc: "Lead feature teams through planning and execution. Make sure every dependency is visible and every engineer knows why the feature matters." },
        { step: "Experiment", desc: "Test features with controlled rollouts, analyze telemetry, and scorecard results against hypothesis. Kill fast. Double down faster." },
        { step: "Iterate", desc: "Good product is never done. Revisit, retest, and improve — especially on high-traffic surfaces where a 0.5-point conversion lift compounds at scale." },
      ],
      images: [
        { caption: "Windows OOBE — M365 Acquisition Flow", src: null, gradient: "linear-gradient(135deg, rgba(32,211,234,0.15), rgba(155,111,245,0.1))" },
        { caption: "M365 Offer Page — UX Redesign", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.15), rgba(32,211,234,0.08))" },
        { caption: "EDU Offer — 0→1 Launch", src: null, gradient: "linear-gradient(135deg, rgba(32,211,234,0.12), rgba(155,111,245,0.12))" },
        { caption: "Experimentation Dashboard", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.1), rgba(32,211,234,0.15))" },
      ],
    },
  },
  {
    id: "sirius",
    name: "SiriusXM",
    tagline: "Station Schedule Redesign",
    role: "Product Designer",
    company: "SiriusXM",
    period: "2018 · Internship",
    type: "Internship",
    accent: "var(--accent)",
    tags: ["UX Design", "Figma", "Prototyping"],
    summary:
      "Designed a website for the Customer Retention team — letting satellite radio listeners preview station schedules and find when their favorite shows air.",
    metrics: [],
    modal: {
      overview:
        "The Customer Retention Marketing team had a clear need: give listeners a way to preview station schedules so they'd re-engage with content they were already paying for. I took the project from brief to prototype — six directions, two finalists, one shipped design.",
      process: [
        { step: "Brief", desc: "Analyzed the design brief to understand the core goal: reduce churn by surfacing content value before a subscriber considers canceling." },
        { step: "Ideate", desc: "Generated six distinct website directions, each exploring a different content hierarchy and interaction model." },
        { step: "Narrow", desc: "Evaluated all six against usability principles and business requirements. Reduced to two finalists for team review." },
        { step: "Prototype", desc: "Built an interactive Figma prototype of the selected direction — screen by screen, interaction by interaction." },
        { step: "Handoff", desc: "Presented to the team. Design was approved and sent to development." },
      ],
      images: [
        { caption: "Initial Brief Analysis", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.12), rgba(244,114,182,0.08))" },
        { caption: "Six Initial Directions", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.1), rgba(32,211,234,0.1))" },
        { caption: "Two Finalist Concepts", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.15), rgba(244,114,182,0.06))" },
        { caption: "Final Figma Prototype", src: null, gradient: "linear-gradient(135deg, rgba(155,111,245,0.18), rgba(32,211,234,0.08))" },
      ],
    },
  },
  {
    id: "sweat",
    name: "Sweat in the City",
    tagline: "Travel Fitness Aggregator",
    role: "Product Designer + Developer",
    company: "Side project",
    period: "Cornell",
    type: "Side project",
    accent: "var(--pink)",
    tags: ["Product Design", "Sketch", "HTML/CSS/JS"],
    summary:
      "When you travel, only big-box gyms show up in search. Every boutique studio and spin class stays invisible. I built the thing I wanted to exist.",
    metrics: [],
    modal: {
      overview:
        "The problem was personal: I travel and I work out, and finding non-chain fitness options in an unfamiliar city was genuinely painful. I designed and coded a prototype aggregator that surfaces all local workout options in one search — classes, gyms, studios, everything.",
      process: [
        { step: "Problem", desc: "Identified the gap through personal experience: major gym chains dominate search results, leaving boutique studios completely invisible to traveling users." },
        { step: "Design", desc: "Sketched the information architecture and key screens in Sketch. Focused on making search fast and results scannable — you're usually looking on your phone in a hotel." },
        { step: "Build", desc: "Coded the prototype in HTML, CSS, JavaScript, and PHP. Real enough to demo the full user flow end to end." },
      ],
      images: [
        { caption: "Problem Definition & Research", src: null, gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(155,111,245,0.08))" },
        { caption: "Sketch Wireframes", src: null, gradient: "linear-gradient(135deg, rgba(244,114,182,0.1), rgba(32,211,234,0.08))" },
        { caption: "Coded Prototype", src: null, gradient: "linear-gradient(135deg, rgba(244,114,182,0.15), rgba(155,111,245,0.06))" },
      ],
    },
  },
  {
    id: "anabels",
    name: "Anabel's Grocery",
    tagline: "Website & Brand Identity",
    role: "Developer + Graphic Designer",
    company: "Cornell",
    period: "2017",
    type: "Cornell",
    accent: "#F59E0B",
    tags: ["Web Dev", "WordPress", "Branding", "Illustrator"],
    summary:
      "Cornell's student-run grocery cooperative needed a website and a brand identity from scratch. I built both.",
    metrics: [],
    modal: {
      overview:
        "Anabel's Grocery opened in September 2017 to give Cornell students access to affordable food on campus. They needed a web presence immediately — and a brand that felt warm, student-made, and trustworthy. I handled the full build: site architecture, WordPress development, inventory system, and all visual identity and print materials.",
      process: [
        { step: "Scope", desc: "Identified two core needs: a site students would actually visit to check inventory, and a brand identity that felt authentic to a student-run co-op." },
        { step: "Brand", desc: "Designed the visual identity in Illustrator — logo, color palette, typography, and tone. Created promotional materials for campus distribution." },
        { step: "Build", desc: "Coded the website from design briefs using HTML, CSS, PHP on WordPress. Built a full inventory list so students could check stock before making the trip." },
        { step: "Launch", desc: "Shipped the site at store opening. Built to be maintained by non-technical student staff with minimal ongoing support." },
      ],
      images: [
        { caption: "Brand Identity & Logo", src: null, gradient: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(155,111,245,0.06))" },
        { caption: "Website Design", src: null, gradient: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(32,211,234,0.06))" },
        { caption: "Inventory System", src: null, gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(155,111,245,0.04))" },
        { caption: "Print & Promotional Materials", src: null, gradient: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(244,114,182,0.06))" },
      ],
    },
  },
];

// ── Chat system prompt ─────────────────────────────────────────────────────────
export const chatSystemPrompt = `You are a friendly assistant on Rebecca North's portfolio website. Answer questions about Rebecca's background, experience, projects, and skills. Be warm, concise, and direct — two to four sentences max unless more detail is genuinely needed.

About Rebecca:
- Growth Product Manager at Microsoft (PM2 - Consumer Copilot Growth, May 2025–Present, NYC)
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
