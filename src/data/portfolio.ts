import type { ComponentType } from "react";
import { Layout, Rocket, Sparkles } from "lucide-react";
import {
  AccessabilityIcon,
  CssIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NextJsIcon,
  PerformanceOptimizationIcon,
  ReactIcon,
  ReduxIcon,
  ResponsiveIcon,
  RestAPIIcon,
  RQIcon,
  SEOIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../components/ui/BrandIcons";

export type SkillIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export type Social = {
  label: string;
  href: string;
};

export const profile = {
  name: "Omar Mohamed Hosny",
  role: "Front-End Developer",
  intro:
    "Building modern, responsive, and high-performance web experiences with React and Next.js.",
  email: "omar.hosny.dev@gmail.com",
  location: "Available worldwide · Remote",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  } satisfies Record<string, string>,
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export type SkillCategory = "Core" | "Framework" | "Styling" | "Data" | "Tooling";

export type Skill = {
  name: string;
  icon: SkillIcon;
  category: SkillCategory;
  level: number;
  note: string;
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: HtmlIcon,
    category: "Core",
    level: 95,
    note: "Semantic, accessible markup",
  },
  {
    name: "CSS3",
    icon: CssIcon,
    category: "Styling",
    level: 92,
    note: "Layouts, animation, responsiveness",
  },
  {
    name: "JavaScript",
    icon: JsIcon,
    category: "Core",
    level: 90,
    note: "ES6+, async, DOM, deep logic",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    category: "Core",
    level: 86,
    note: "Typed, safer applications",
  },
  {
    name: "React.js",
    icon: ReactIcon,
    category: "Framework",
    level: 92,
    note: "Hooks, composition, patterns",
  },
  {
    name: "Next.js",
    icon: NextJsIcon,
    category: "Framework",
    level: 88,
    note: "App Router, RSC, Server Actions",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    category: "Styling",
    level: 90,
    note: "Utility-first design systems",
  },
  {
    name: "Responsive Web Design",
    icon: ResponsiveIcon,
    category: "Styling",
    level: 90,
    note: "Mobile-first, fluid layouts",
  },
  {
    name: "Accessibility",
    icon: AccessabilityIcon,
    category: "Core",
    level: 85,
    note: "Semantic, keyboard, ARIA",
  },
  {
    name: "SEO",
    icon: SEOIcon,
    category: "Core",
    level: 82,
    note: "Metadata, structured, crawlable",
  },
  {
    name: "Performance Optimization",
    icon: PerformanceOptimizationIcon,
    category: "Core",
    level: 84,
    note: "Core Web Vitals & caching",
  },
  {
    name: "React Query",
    icon: RQIcon,
    category: "Data",
    level: 85,
    note: "Server state & caching",
  },
  {
    name: "Redux",
    icon: ReduxIcon,
    category: "Data",
    level: 80,
    note: "Predictable global state",
  },
  {
    name: "Supabase",
    icon: SupabaseIcon,
    category: "Data",
    level: 78,
    note: "Auth, database & backend",
  },
  {
    name: "Git & GitHub",
    icon: GitIcon,
    category: "Tooling",
    level: 88,
    note: "Version control & collaboration",
  },
  {
    name: "REST APIs",
    icon: RestAPIIcon,
    category: "Data",
    level: 86,
    note: "Fetching, caching, integrating",
  },
];

export type ProjectAccent = "violet" | "amber" | "emerald" | "sky";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  accent: ProjectAccent;
  year: string;
  demo: string;
  github: string;
  featured?: boolean;
  highlights?: string[];
  concepts?: string[];
};

export const projects: Project[] = [
  {
    id: "wild-oasis-website",
    title: "The Wild Oasis — Website",
    tagline: "Next.js customer booking experience",
    description:
      "A modern customer-facing hotel booking platform built with Next.js, allowing users to explore cabins, check availability, make reservations, and manage their bookings and profile.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS", "Auth.js"],
    accent: "emerald",
    year: "2025",
    demo: "https://github.com/",
    github: "https://github.com/",
    featured: true,
    highlights: [
      "🏡 Cabin browsing and detailed cabin pages",
      "📅 Availability and reservation system",
      "🔐 Google authentication",
      "👤 Guest profile management",
      "⚡ Server-first architecture with React Server Components",
      "🚀 Next.js App Router and Server Actions",
      "📱 Fully responsive UI",
    ],
    concepts: [
      "App Router",
      "React Server Components",
      "Client Components",
      "Server Actions",
      "Dynamic Routes",
      "Server-side Rendering",
      "Static vs Dynamic Rendering",
      "Data Fetching",
      "Caching & Revalidation",
      "Loading & Error States",
      "Authentication",
      "Protected Routes",
      "Responsive Design",
      "SEO & Performance",
    ],
  },
  {
    id: "wild-oasis",
    title: "The Wild Oasis — Dashboard",
    tagline: "Full-stack hotel management dashboard",
    description:
      "A React data-management dashboard for hotel staff with authentication, analytics, live data visualization and full CRUD over cabins, bookings and guests, powered by React Query and Supabase.",
    technologies: [
      "React",
      "React Query",
      "Supabase",
      "Styled Components",
      "Authentication",
      "Dashboard",
      "Data Visualization",
    ],
    accent: "emerald",
    year: "2025",
    demo: "https://github.com/",
    github: "https://github.com/",
  },
  {
    id: "fast-react-pizza",
    title: "Fast React Pizza",
    tagline: "Food ordering application",
    description:
      "A fast, responsive pizza ordering app with a cart flow, live order tracking and a clean mobile-first interface, powered by Redux state and an external API.",
    technologies: ["React", "Redux", "API Integration", "Responsive UI"],
    accent: "amber",
    year: "2025",
    demo: "https://github.com/",
    github: "https://github.com/",
  },
  {
    id: "worldwise",
    title: "WorldWise",
    tagline: "Travel & city manager",
    description:
      "A travel tracker that lets users log cities they have visited on an interactive map, complete with geolocation, routing and a lightweight state architecture.",
    technologies: [
      "React",
      "React Router",
      "Context API",
      "useReducer",
      "React Leaflet",
    ],
    accent: "emerald",
    year: "2024",
    demo: "https://github.com/",
    github: "https://github.com/",
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    tagline: "Interactive quiz experience",
    description:
      "A timed quiz application with progress tracking, score calculation and a state machine built on useReducer, wired to a live questions API.",
    technologies: ["React", "useReducer", "API Integration", "Timer"],
    accent: "sky",
    year: "2024",
    demo: "https://github.com/",
    github: "https://github.com/",
  },
];

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

export const journey: TimelineItem[] = [
  {
    title: "HTML & CSS",
    period: "Foundations",
    description:
      "Built a solid base in semantic markup, modern layouts, Flexbox, Grid and responsive design.",
  },
  {
    title: "JavaScript",
    period: "The language",
    description:
      "Learned the DOM, events, arrays, objects and the fundamentals of writing real logic in the browser.",
  },
  {
    title: "Advanced JavaScript",
    period: "Deeper concepts",
    description:
      "Mastered closures, async/await, promises, modules and functional patterns for maintainable code.",
  },
  {
    title: "React",
    period: "Component thinking",
    description:
      "Moved into declarative UI — components, hooks, composition, forms and routing with React Router.",
  },
  {
    title: "State Management",
    period: "Scalable state",
    description:
      "Handled complex state with Redux and the Context API + useReducer for predictable, testable apps.",
  },
  {
    title: "React Query",
    period: "Server state",
    description:
      "Adopted React Query for caching, synchronization and elegant handling of asynchronous data.",
  },
  {
    title: "Full-stack Development",
    period: "Beyond the front-end",
    description:
      "Connected to Supabase for auth and databases, shipping complete features from UI to data layer.",
  },
  {
    title: "Next.js",
    period: "Server-first React",
    description:
      "Building production apps with the App Router, React Server Components, Server Actions and full-stack data fetching.",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: SkillIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Responsive Websites",
    description:
      "Pixel-perfect websites that adapt beautifully to every screen size and device.",
    icon: ResponsiveIcon,
    points: ["Mobile-first", "Fluid layouts", "Cross-browser"],
  },
  {
    title: "Landing Pages",
    description:
      "High-converting, fast landing pages designed to communicate and persuade.",
    icon: Rocket,
    points: ["Conversion focused", "Fast loading", "Modern UI"],
  },
  {
    title: "Portfolio Websites",
    description:
      "Personal and creative portfolios that make your work the centrepiece.",
    icon: Sparkles,
    points: ["Unique design", "Smooth motion", "Accessible"],
  },
  {
    title: "React Web Applications",
    description:
      "Scalable, production-ready React applications built with clean architecture.",
    icon: ReactIcon,
    points: ["Reusable components", "Typed with TS", "Maintainable"],
  },
  {
    title: "UI Implementation",
    description:
      "Turning design files into precise, interactive and accessible interfaces.",
    icon: Layout,
    points: ["Figma to code", "Design systems", "Micro-interactions"],
  },
  {
    title: "Performance & SEO",
    description:
      "Auditing and optimising front-ends for speed, accessibility and discoverability.",
    icon: PerformanceOptimizationIcon,
    points: ["Core Web Vitals", "a11y", "Best practices"],
  },
];

export const aboutHighlights = [
  {
    title: "Clean Code",
    description: "Readable, modular and maintainable components.",
  },
  {
    title: "Responsive Design",
    description: "Interfaces that feel native on any device.",
  },
  {
    title: "Performance",
    description: "Fast loads and smooth 60fps interactions.",
  },
  {
    title: "Accessibility",
    description: "Semantic, keyboard-friendly and inclusive.",
  },
  {
    title: "SEO",
    description: "Structured, crawlable and discoverable.",
  },
  {
    title: "React & Next.js",
    description: "Hooks, Server Components and current best practices.",
  },
];
