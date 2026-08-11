export const identity = {
  name: "Pray Patel",
  handle: "~/pray",
  role: "Computer Science Engineer · Software Developer",
  status: "available for opportunities",
  location: "India",
};

export const nav = [
  { label: "work", href: "#work" },
  { label: "stack", href: "#stack" },
  { label: "about", href: "#about" },
  { label: "notes", href: "#notes" },
  { label: "contact", href: "#contact" },
];

export const currently = [
  { key: "building", value: "Aergus — infrastructure control plane" },
  { key: "learning", value: "DSA, system design" },
  { key: "exploring", value: "devops, distributed infra" },
  { key: "education", value: "B.E CSE 3rd year" },
  { key: "location", value: "India" },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  diagram: string[];
  stack: string[];
  links: { label: string; href: string }[];
  diff?: { removed: string; added: string };
  icon?: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    id: "stakker",
    index: "01",
    name: "Stakker",
    tagline: "infrastructure control plane",
    logo: "/aergus.png?v=2",
    description:
      "A system for monitoring, configuring, and automating infrastructure through a web dashboard and a lightweight agent. Built around a clear separation between control plane and data plane, so the dashboard never talks to raw hosts directly.",
    diagram: [
      "dashboard",
      "  │",
      "  │  rest / websocket",
      "  ▼",
      "backend ──┬──────────────┐",
      "          │              │",
      "     agent (go)     cloud apis",
      "          │",
      "   docker / linux host",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Go",
      "PostgreSQL",
      "Drizzle",
      "WebSockets",
      "Docker",
      "Kubernetes",
    ],
    links: [
      { label: "source", href: "https://github.com/Pray45" },
      { label: "case study", href: "#work" },
    ],
    diff: {
      removed: "another admin dashboard",
      added: "infrastructure control plane with a real agent",
    },
  },
  {
    id: "nimbus",
    index: "02",
    name: "Nimbus",
    tagline: "online code execution platform",
    icon: "☁️",
    description:
      "A browser-based coding environment that runs untrusted code safely. The interesting part isn't the editor — it's the queue in front of it, and the isolation behind it.",
    diagram: [
      "monaco editor",
      "      │  submit",
      "      ▼",
      "job queue (bullmq / redis)",
      "      │  dequeue",
      "      ▼",
      "docker runner ──▶ isolated result",
    ],
    stack: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "WebSockets",
      "Monaco",
    ],
    links: [
      { label: "source", href: "https://github.com/Pray45" },
      { label: "case study", href: "#work" },
    ],
    diff: {
      removed: "run code in the browser",
      added: "queue, isolate, and stream execution results safely",
    },
  },
  {
    id: "moonlit",
    index: "03",
    name: "MoonLit",
    tagline: "discovery-first reading platform",
    icon: "🌙",
    description:
      "A mobile app for finding your next book — genres, authors, curated lists, and metadata ingestion pipelines feeding a recommendation surface, not just a catalog.",
    diagram: [
      "metadata ingestion",
      "      │",
      "      ▼",
      "search + recommendation",
      "      │",
      "      ▼",
      "expo / react native app",
    ],
    stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    links: [{ label: "source", href: "https://github.com/Pray45" }],
  },
];

export const principles = [
  { n: "01", text: "Understand the problem before choosing the stack." },
  {
    n: "02",
    text: "Prefer simple architecture until complexity is justified.",
  },
  { n: "03", text: "Build the smallest useful version first." },
  { n: "04", text: "Reuse before introducing another dependency." },
  { n: "05", text: "Measure before optimizing." },
  { n: "06", text: "Make systems observable before making them clever." },
  {
    n: "07",
    text: "Write software that can survive its creator leaving the room.",
  },
];

export const stack = [
  {
    cat: "01 / languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "C++"],
  },
  {
    cat: "02 / frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "React Native",
      "Expo",
    ],
  },
  { cat: "03 / backend", items: ["Node.js", "Express", "REST", "WebSockets"] },
  {
    cat: "04 / database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Drizzle", "Neon"],
  },
  {
    cat: "05 / infrastructure",
    items: ["Docker", "Linux", "Git", "GitHub", "Cloudflare", "CI/CD"],
  },
  {
    cat: "06 / currently learning",
    items: ["DSA", "System design", "Networking", "Cloud", "DevOps"],
  },
];

export const timeline = [
  {
    period: "2025 — 2026",
    role: "GDG on Campus Lead",
    org: "Government Engineering College, Patan",
    detail:
      "Leading a student developer community — sessions, workshops, and technical events.",
    logo: "/GDG.png"
  },
];

export const notes = [
  "Why I stopped building CRUD projects",
  "What I learned building an online code runner",
  "Understanding Redis queues",
  "How I structure a Node.js backend",
  "Things I got wrong while learning system design",
];

export const social = {
  github: "https://github.com/Pray45",
  linkedin: "https://linkedin.com/in/pray-patel",
  email: "praypatel45@gmail.com",
  resume: "/resume.pdf",
};

export const commands = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub ↗", href: social.github },
  { label: "LinkedIn ↗", href: social.linkedin },
  { label: "Resume ↗", href: social.resume },
];
