import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code2,
  Layers,
  Cloud,
  Cpu,
  Zap,
  Database,
  Globe,
  Rocket,
  GitBranch,
  Activity,
  Palette,
  Smartphone,
  GraduationCap,
  Award,
  Sparkles,
  BookOpen,
  Sun,
  Moon,
  Instagram,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const LINKS = {
  email: "sourabhraj311@gmail.com",
  github: "https://github.com/srvraj311",
  linkedin: "https://www.linkedin.com/in/srvraj311",
  behance: "https://www.behance.net/sourabhraj",
  playStore: "https://play.google.com/store/apps/dev?id=8639471483097231208",
  resume:
    "https://docs.google.com/document/d/1pwVMw1AFa5WONMjgiv9HB2F0ev5c-zQAvy8PteS8zAI/edit?usp=sharing",
  instagram: "https://www.instagram.com/sourabh.archive/",
  photo: "/img/sourabh.webp",
};

// Instagram story highlights - pulled from @sourabh.archive.
// Each highlight's frames live at /life/ig/<slug>_NN.jpg (+ a <slug>__cover.jpg).
const HIGHLIGHT_DATA: { title: string; slug: string; count: number }[] = [
  { title: "Mumbai 💛", slug: "mumbai", count: 3 },
  { title: "Goa ⛱️", slug: "goa", count: 10 },
  { title: "Munnar 🏞️", slug: "munnar", count: 7 },
  { title: "Kannur 🌊", slug: "kannur", count: 2 },
  { title: "Kolkata 🌉", slug: "kolkata", count: 2 },
  { title: "Food 🍽️", slug: "misc", count: 1 },
  { title: "PC 🖥️", slug: "pc", count: 3 },
  { title: "Bike 🏍️", slug: "bike", count: 3 },
  { title: "Sahyadri ⛰️", slug: "sahyadri", count: 5 },
  { title: "Nashik 🙏", slug: "nashik", count: 3 },
  { title: "Karnataka 🙌", slug: "karnataka", count: 3 },
  { title: "Diveagar 🌊", slug: "divegar", count: 4 },
  { title: "Puducherry 🏖️", slug: "puducherry", count: 1 },
];

const HIGHLIGHTS = HIGHLIGHT_DATA.map((h) => ({
  title: h.title,
  cover: `/life/ig/${h.slug}__cover.jpg`,
  images: Array.from({ length: h.count }, (_, i) => `/life/ig/${h.slug}_${String(i + 1).padStart(2, "0")}.jpg`),
}));

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cover: string;
  accent: string;
  link?: string;
  linkLabel?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GreytHR",
    subtitle: "Greytip · Full-Suite HRMS Platform",
    description:
      "The core HR platform I build at greytHR - payroll, employee lifecycle, leave and attendance, and compliance for tens of thousands of businesses. Backend services and a maintainable Angular frontend, full stack.",
    tags: ["Java", "Spring Boot", "Angular", "SQL", "AWS"],
    cover: "hrms",
    accent: "#14b8a6",
    link: "https://www.greythr.com",
    linkLabel: "Visit greytHR",
  },
  {
    id: 2,
    title: "StudyOptimizer & Feasibility",
    subtitle: "IQVIA · Clinical Trial Optimization",
    description:
      "Full-stack development for patient enrollment planning and clinical trial optimization. Designed and tuned scalable applications, contributed to algorithm development, cloud integration (Azure, AWS), and security enhancements.",
    tags: ["Java", "Spring Boot", "SQL", "Python", "Angular", "Azure"],
    cover: "clinical",
    accent: "#14b8a6",
  },
  {
    id: 3,
    title: "Shortify",
    subtitle: "URL Shortener · System-Design Reference",
    description:
      "A URL shortener rebuilt from a plain CRUD app into a production-grade system, one component at a time - cache-aside redirects, a Redis token-bucket rate limiter, async analytics via a transactional outbox (idempotent workers + a dead-letter queue), circuit breakers, structured logging, a /metrics endpoint, and an admin failure-injection lab. Every dependency degrades gracefully.",
    tags: ["Next.js", "TypeScript", "Redis", "System Design", "MongoDB"],
    cover: "shortener",
    accent: "#14b8a6",
    link: "https://shrtfy.vercel.app",
    linkLabel: "Open live app",
  },
  {
    id: 4,
    title: "Eduverse.ai",
    subtitle: "AI-Powered Learning Paths",
    description:
      "An AI platform that generates personalized learning paths from user preferences - age group, language, and learning duration. Powered by LLaMA 3 70B via the Groq API, with a React frontend and a FastAPI backend.",
    tags: ["React", "FastAPI", "Python", "LLaMA 3 70B", "Groq"],
    cover: "learn",
    accent: "#ec4899",
    link: "https://github.com/srvraj311/eduverse_ai",
    linkLabel: "View on GitHub",
  },
  {
    id: 5,
    title: "Health.io",
    subtitle: "Healthcare Automation Platform",
    description:
      "Leverages AI to automate core healthcare functions - digital prescriptions, intelligent medication recommendations, an enhanced patient/provider experience, and AI-powered hospital account management.",
    tags: ["React Native", "Spring", "Angular", "MongoDB", "AI"],
    cover: "health",
    accent: "#7C3AED",
    link: "https://github.com/srvraj311/health-io-api",
    linkLabel: "View on GitHub",
  },
  {
    id: 6,
    title: "enWrite",
    subtitle: "Cross-Platform Notes App",
    description:
      "A simple, clean web and Android app for taking notes on the go - real-time cloud sync, a fully responsive UI, and a rich user experience.",
    tags: ["Angular", "Android", "Node.js", "Express", "Firebase"],
    cover: "notes",
    accent: "#10b981",
    link: "https://enwrite-web.web.app",
    linkLabel: "Open live app",
  },
  {
    id: 7,
    title: "Ivory Minimal",
    subtitle: "Android Icon Pack",
    description:
      "A minimal, colourful Android icon pack with 300+ icons - 10,000+ downloads on the Play Store. Built on Blueprint Dashboard, with every icon designed in Photoshop and Illustrator.",
    tags: ["Android", "Photoshop", "Illustrator", "Design"],
    cover: "icons",
    accent: "#f59e0b",
    link: "https://play.google.com/store/apps/details?id=com.srv.ivory",
    linkLabel: "View on Play Store",
  },
  {
    id: 8,
    title: "Seat Allocation System",
    subtitle: "Algorithm · Hiring Challenge",
    description:
      "An efficient seat-booking algorithm built with dynamic programming for an Unstop challenge, surfaced through a full-stack app for demo and code inspection.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    cover: "algorithm",
    accent: "#14b8a6",
    link: "https://seat-allocation-fullstack.vercel.app",
    linkLabel: "Open live app",
  },
];

const EXPERTISE = [
  {
    icon: <Database size={22} />,
    title: "Backend",
    color: "#7C3AED",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Python", "REST APIs", "SQL", "MongoDB", "Redis"],
  },
  {
    icon: <Layers size={22} />,
    title: "Frontend",
    color: "#14b8a6",
    skills: ["Angular", "React", "React Native", "TypeScript", "Electron.js", "Responsive UI"],
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & DevOps",
    color: "#10b981",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitLab CI/CD"],
  },
  {
    icon: <Activity size={22} />,
    title: "System Design",
    color: "#f59e0b",
    skills: ["Caching", "Rate Limiting", "Event-Driven", "Idempotency", "Fault Tolerance", "Observability", "Scalability"],
  },
  {
    icon: <Cpu size={22} />,
    title: "AI Engineering",
    color: "#ec4899",
    skills: ["LLM Integration", "RAG", "Prompt Engineering", "Generative AI", "AI Workflows"],
  },
  {
    icon: <Palette size={22} />,
    title: "Design",
    color: "#8b5cf6",
    skills: ["Figma", "Photoshop", "Illustrator", "Icon Design", "Design Systems"],
  },
];

const TIMELINE = [
  {
    year: "Oct 2025 - Now",
    role: "Software Development Engineer II",
    context: "greytHR",
    detail:
      "Building greytHR's full-suite HRMS platform - backend services and an Angular frontend for payroll, employee lifecycle, and compliance.",
  },
  {
    year: "Apr - Oct 2025",
    role: "Lead Software Engineer",
    context: "Persistent Systems Limited",
    detail:
      "Led design and development of impactful features in the Healthcare and Life Sciences domain, driving customer experience and product profitability. Focused on scalable architecture, team mentorship, and business-aligned delivery.",
  },
  {
    year: "2024 - 2025",
    role: "Senior Software Engineer",
    context: "Persistent Systems Limited",
    detail:
      "Enhanced application security, performance, and scalability. Led major upgrades and technology migrations, and played a key role in transitioning the monolith to microservices for smoother deployments and better resilience.",
  },
  {
    year: "2022 - 2024",
    role: "Software Engineer",
    context: "Persistent Systems Limited",
    detail:
      "Built healthcare web apps in Angular, Spring Boot, and MongoDB for patient enrollment and clinical-trial planning. Optimised backend forecasting and milestone algorithms, tuned UI performance with ag-Grid and GoJS, and led Angular version upgrades. Multiple Bravo Awards.",
  },
  {
    year: "Feb - Jul 2022",
    role: "Software Engineer Intern",
    context: "Persistent Systems Limited",
    detail:
      "Feature development and bug fixing across full-stack modules - Angular, Java, and Spring Boot. Took part in code reviews and adapted quickly to agile practices.",
  },
  {
    year: "Aug - Nov 2021",
    role: "Android Developer Intern",
    context: "BinaryDots (Fretbox)",
    detail:
      "Worked on Fretbox Management - converting UI prototypes to layouts, wiring data via API calls, and adding section logic. Learned production-scale VCS practices and sharpened problem-solving with Android.",
  },
  {
    year: "2022",
    role: "B.Tech · Electronics & Communication Engineering",
    context: "BCREC, Durgapur",
    detail: "Graduated with a B.Tech in Electronics and Communication Engineering.",
  },
];

const RECOGNITION: { title: string; org: string; href?: string }[] = [
  {
    title: "Top Talent Recognition - FY24",
    org: "Persistent Systems",
    href: "https://res.cloudinary.com/srvraj311/image/upload/v1712005442/Mail_-_Sourabh_._-_Outlook_page-0001_cprji7.jpg",
  },
  {
    title: "High Five - Team Award (Dec 2023)",
    org: "Persistent Systems",
  },
  {
    title: "Bravo Team Award",
    org: "Persistent Systems",
    href: "https://res.cloudinary.com/srvraj311/image/upload/v1712005301/thumbnail_REQ-075665_49889_mlmoun.png",
  },
  {
    title: "Snowflake SnowPro Core",
    org: "Credly",
    href: "https://www.credly.com/badges/dfce4d98-0b09-4fdd-a12c-54fae5525ecb/linked_in_profile",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    org: "Credly",
    href: "https://www.credly.com/badges/e152bff9-5de2-46d5-9e58-c897436f23cf?source=linked_in_profile",
  },
  {
    title: "Generative AI Certification",
    org: "Persistent Systems",
    href: "https://res.cloudinary.com/srvraj311/image/upload/v1712005856/1709801890836_page-0001_ulbbnb.jpg",
  },
  {
    title: "TechGig Code Gladiators",
    org: "TechGig",
    href: "https://res.cloudinary.com/srvraj311/image/upload/v1659594346/techgig-cert_nx3zno.png",
  },
];

const REPOS = [
  {
    name: "shortify-url-shortener",
    desc: "URL shortener rebuilt as a system-design reference - caching, token-bucket rate limiting, outbox + DLQ, circuit breakers, observability, chaos lab, ADRs.",
    lang: "TypeScript",
    href: "https://github.com/srvraj311/shortify-url-shortener",
  },
  {
    name: "eduverse_ai",
    desc: "AI learning-path generator - LLaMA 3 70B via Groq, React + FastAPI.",
    lang: "Python",
    href: "https://github.com/srvraj311/eduverse_ai",
  },
  {
    name: "health-io-api",
    desc: "AI-powered healthcare automation platform - REST API & services.",
    lang: "Java",
    href: "https://github.com/srvraj311/health-io-api",
  },
  {
    name: "health-io-app",
    desc: "React Native mobile client for the Health.io platform.",
    lang: "JavaScript",
    href: "https://github.com/srvraj311/health-io-app",
  },
  {
    name: "health-io-hospital",
    desc: "Web console for hospital account management on Health.io.",
    lang: "TypeScript",
    href: "https://github.com/srvraj311/health-io-hospital",
  },
  {
    name: "enWrite-angular",
    desc: "Cross-platform note-taking web app with real-time cloud sync.",
    lang: "TypeScript",
    href: "https://github.com/srvraj311/enWrite-angular",
  },
  {
    name: "ivory-icon-pack",
    desc: "Minimal Android icon pack - 300+ custom icons, 10K+ downloads.",
    lang: "Java",
    href: "https://github.com/srvraj311/ivory-icon-pack",
  },
  {
    name: "seat-allocation-fullstack",
    desc: "Dynamic-programming seat-booking algorithm on a MEAN-stack app.",
    lang: "TypeScript",
    href: "https://github.com/srvraj311/seat-allocation-fullstack",
  },
];

const METRICS = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "+", label: "Side Projects Shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 7, suffix: "", label: "Awards & Certifications" },
  { value: 10, suffix: "K+", label: "Play Store Downloads" },
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  YAML: "#cb171e",
};

// ─── Utilities ────────────────────────────────────────────────────────────────

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-hover)] mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{children}</span>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 text-xs font-medium rounded-md border"
      style={{
        color: color ?? "var(--muted-foreground)",
        borderColor: color ? `${color}30` : "var(--hairline)",
        backgroundColor: color ? `${color}10` : "var(--surface)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Counter Metric ───────────────────────────────────────────────────────────

function MetricItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-6 md:px-6 md:py-8">
      <span
        className="text-3xl md:text-5xl font-black tracking-tight"
        style={{ fontFamily: "'Inter Tight', sans-serif", color: "var(--primary)" }}
      >
        {count}
        {suffix}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground text-center mt-1">{label}</span>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "About", "Expertise", "Journey", "Life", "Contact"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled ? "var(--glass-blur)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="text-base font-bold tracking-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              srvraj311
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--hairline)] text-muted-foreground hover:text-foreground hover:border-[var(--hairline-strong)] transition-all"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 z-40 bg-[var(--surface-solid)] border-b border-[var(--hairline)] px-6 py-6 flex flex-col gap-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="mt-2 px-4 py-2.5 text-sm font-medium text-center rounded-lg border border-primary/30 text-primary">
            Let's Talk
          </a>
        </motion.div>
      )}
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative md:min-h-screen flex items-center overflow-hidden pt-16">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,212,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center pt-6 pb-10 md:py-24">
        {/* Left */}
        <div className="flex flex-col gap-5 md:gap-6 order-1 md:order-1">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-hover)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] md:text-xs font-mono tracking-widest text-muted-foreground uppercase">
              SDE II · Full Stack · SaaS &amp; AI
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-[clamp(3rem,13vw,7rem)] font-black leading-[0.9] tracking-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Sourabh<span style={{ color: "var(--primary)" }}>.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
          >
            Full-stack engineer building enterprise SaaS, healthcare platforms,
            and AI-powered products that create real-world impact.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:gap-3"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--hairline-strong)] text-foreground hover:bg-[var(--surface-hover)] transition-all duration-200"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="flex items-center gap-4 pt-2 flex-wrap"
          >
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={LINKS.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-muted-foreground hover:text-foreground transition-colors">
              <Palette size={18} />
            </a>
            <a href={LINKS.playStore} target="_blank" rel="noopener noreferrer" aria-label="Google Play" className="text-muted-foreground hover:text-foreground transition-colors">
              <Smartphone size={18} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href={`mailto:${LINKS.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
            <span className="w-px h-4 bg-[var(--hairline-strong)]" />
            <span className="text-xs text-muted-foreground">Based in India</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>
        </div>

        {/* Right: image + stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative order-2 md:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-sm mx-auto flex flex-col items-center md:block md:min-h-[460px]">
            {/* image + its own effects */}
            <div className="relative w-[68%] max-w-[260px] mx-auto md:w-[82%] md:max-w-none md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[115%] rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, var(--primary) 0%, var(--secondary) 70%, transparent 100%)" }}
              />
              <div
                className="absolute left-1/2 bottom-[-4%] -translate-x-1/2 w-[62%] h-[9%] rounded-[50%] blur-xl opacity-40"
                style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)" }}
              />
              <img
                src={LINKS.photo}
                alt="Sourabh - Software Engineer"
                className="relative block w-full object-contain"
                style={{ filter: "drop-shadow(0 22px 38px rgba(0,0,0,0.28))" }}
              />
            </div>

            {/* stat cards: 2×2 grid on mobile, floating on desktop */}
            <div className="grid grid-cols-2 gap-2.5 w-full max-w-[320px] mt-6 md:mt-0 md:max-w-none md:contents">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="rounded-xl border border-[var(--hairline)] backdrop-blur-xl px-3.5 py-2.5 md:px-4 md:py-3 md:absolute md:-left-5 md:top-6"
                style={{ backgroundColor: "var(--glass)" }}
              >
                <div className="text-lg md:text-xl font-black text-primary" style={{ fontFamily: "'Inter Tight', sans-serif" }}>SDE II</div>
                <div className="text-xs text-muted-foreground mt-0.5">at greytHR</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="rounded-xl border border-[var(--hairline)] backdrop-blur-xl px-3.5 py-2.5 md:px-4 md:py-3 md:absolute md:-right-5 md:top-24"
                style={{ backgroundColor: "var(--glass)" }}
              >
                <div className="text-lg md:text-xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif", color: "var(--secondary)" }}>4+ yrs</div>
                <div className="text-xs text-muted-foreground mt-0.5">Full-stack</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="rounded-xl border border-[var(--hairline)] backdrop-blur-xl px-3.5 py-2.5 md:px-4 md:py-3 md:absolute md:-left-5 md:bottom-16"
                style={{ backgroundColor: "var(--glass)" }}
              >
                <div className="text-lg md:text-xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#10b981" }}>Lead SE</div>
                <div className="text-xs text-muted-foreground mt-0.5">ex-Persistent</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="rounded-xl border border-[var(--hairline)] backdrop-blur-xl px-3.5 py-2.5 md:px-4 md:py-3 md:absolute md:-right-5 md:bottom-6"
                style={{ backgroundColor: "var(--glass)" }}
              >
                <div className="text-lg md:text-xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif", color: "var(--primary)" }}>10K+</div>
                <div className="text-xs text-muted-foreground mt-0.5">App installs</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--hairline-strong)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Currently Building ───────────────────────────────────────────────────────

function CurrentlyBuilding() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const focuses = [
    { icon: <Layers size={18} />, title: "HRMS Platform Development", desc: "Payroll, employee lifecycle, and compliance at scale for greytHR." },
    { icon: <Cpu size={18} />, title: "AI Applications", desc: "LLM-powered tools for healthcare and developer workflows." },
    { icon: <Code2 size={18} />, title: "Frontend Architecture", desc: "Scalable, maintainable Angular & React systems for complex apps." },
    { icon: <Activity size={18} />, title: "System Design", desc: "High-availability services that scale gracefully under load." },
    { icon: <Cloud size={18} />, title: "Cloud Native", desc: "Services on AWS & Azure with containerised deployments." },
    { icon: <Palette size={18} />, title: "Design & Craft", desc: "Icon design, design systems, and interfaces that feel considered." },
  ];

  return (
    <section ref={ref} className="py-14 md:py-32 border-t border-[var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-10 md:mb-14"
        >
          <SectionLabel>Focus</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Currently Building
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              variants={fadeUp}
              className="group p-4 md:p-5 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-primary/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-primary bg-primary/10 shrink-0">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-foreground text-[15px] leading-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-14 md:py-32 border-t border-[var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-6"
        >
          <SectionLabel>About</SectionLabel>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* text - 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-6 md:gap-8">
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUp}
              className="text-2xl md:text-6xl font-black leading-[1.15] md:leading-[1.1]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              I build software that solves{" "}
              <em className="not-italic" style={{ color: "var(--primary)" }}>
                meaningful
              </em>{" "}
              problems.
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUp}
              className="flex flex-col gap-4 text-[15px] md:text-base text-muted-foreground leading-relaxed md:leading-7"
            >
              <p>
                I started out building web and mobile apps from scratch, and the thrill of
                watching an idea turn into a real, working product never got old.
              </p>
              <p>
                Over the last four-plus years I've worked on enterprise healthcare systems at
                Persistent Systems - clinical trials and patient enrollment planning, rising to
                Lead Software Engineer - and I'm now at greytHR building their full-suite HRMS
                platform. I enjoy turning complex business requirements into architecture
                that's clean enough to extend and robust enough to survive production.
              </p>
              <p>
                On the side I ship small products, explore practical AI engineering, and design -
                I've published an Android icon pack with 10K+ downloads. I believe good engineers
                care about craft: how it works, how it looks, and how it holds up.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {["Full Stack", "Frontend Architecture", "AI Engineering", "Healthcare Tech", "Design"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs rounded-full border border-[var(--hairline)] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* image - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[var(--muted)]">
              <img
                src="/img/about.webp"
                alt="Sourabh's desk — the setup most of this work gets built on"
                className="w-full object-cover aspect-[4/3] md:aspect-[4/5]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-white/85">
                <MapPin size={13} className="shrink-0" />
                <span>My desk — where most of this gets built.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────

function Metrics() {
  return (
    <section className="border-y border-[var(--hairline)]" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-[var(--hairline)]">
          {METRICS.map((m) => (
            <MetricItem key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project Covers ───────────────────────────────────────────────────────────
// A cohesive set of abstract, on-theme SVG covers - one motif per project genre.
// Dark base + faint grid + accent glow + a single centred line motif. Scales
// cleanly for both the wide desktop cards and the narrow mobile strip.

const COVER_MOTIFS: Record<string, (a: string) => React.ReactNode> = {
  // Enterprise HRMS - an org / people network
  hrms: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M600 214 L470 344 M600 214 L600 344 M600 214 L730 344 M470 344 L412 474 M470 344 L528 474 M730 344 L672 474 M730 344 L788 474"
        stroke={a}
        strokeOpacity="0.45"
        strokeWidth="3"
      />
      <circle cx="600" cy="200" r="34" fill="#0a0a0a" stroke={a} strokeWidth="4" />
      <circle cx="470" cy="345" r="26" fill="#0a0a0a" stroke={a} strokeWidth="3.5" />
      <circle cx="600" cy="345" r="26" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3.5" />
      <circle cx="730" cy="345" r="26" fill="#0a0a0a" stroke={a} strokeWidth="3.5" />
      <circle cx="412" cy="480" r="19" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="3" />
      <circle cx="528" cy="480" r="19" fill="#0a0a0a" stroke={a} strokeWidth="3" />
      <circle cx="672" cy="480" r="19" fill="#0a0a0a" stroke={a} strokeWidth="3" />
      <circle cx="788" cy="480" r="19" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="3" />
      <circle cx="600" cy="200" r="6" fill={a} />
    </g>
  ),
  // Clinical trials - a vitals panel with rising bars and a pulse trace
  clinical: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="360" y="168" width="480" height="364" rx="24" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="3" />
      <rect x="410" y="410" width="46" height="80" rx="10" fill={a} fillOpacity="0.22" />
      <rect x="474" y="372" width="46" height="118" rx="10" fill={a} fillOpacity="0.38" />
      <rect x="538" y="330" width="46" height="160" rx="10" fill={a} fillOpacity="0.54" />
      <rect x="602" y="288" width="46" height="202" rx="10" fill={a} fillOpacity="0.72" />
      <rect x="666" y="246" width="46" height="244" rx="10" fill={a} />
      <path
        d="M380 300 H444 L466 300 L490 234 L516 348 L540 300 H612 L636 264 L658 330 L680 300 H760"
        stroke={a}
        strokeWidth="4"
      />
      <path d="M756 198 h40 M776 178 v40" stroke={a} strokeWidth="7" />
    </g>
  ),
  // Health.io - a medical plus at the centre of an AI node graph
  health: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M600 350 L600 150 M600 350 L778 250 M600 350 L778 452 M600 350 L600 552 M600 350 L422 452 M600 350 L422 250"
        stroke={a}
        strokeOpacity="0.4"
        strokeWidth="2.5"
      />
      <circle cx="600" cy="350" r="96" stroke={a} strokeOpacity="0.22" strokeWidth="3" />
      <path d="M600 276 v148 M526 350 h148" stroke={a} strokeWidth="18" />
      <circle cx="600" cy="150" r="16" fill="#0a0a0a" stroke={a} strokeWidth="3" />
      <circle cx="778" cy="250" r="12" fill={a} />
      <circle cx="778" cy="452" r="16" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" />
      <circle cx="600" cy="552" r="12" fill={a} />
      <circle cx="422" cy="452" r="16" fill="#0a0a0a" stroke={a} strokeWidth="3" />
      <circle cx="422" cy="250" r="12" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" />
    </g>
  ),
  // enWrite - a document with text lines and a sync loop
  notes: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M436 250 A 170 170 0 0 1 706 190" stroke={a} strokeOpacity="0.4" strokeWidth="4" />
      <path d="M706 190 l-40 -12 M706 190 l-10 40" stroke={a} strokeOpacity="0.4" strokeWidth="4" />
      <path d="M764 450 A 170 170 0 0 1 494 510" stroke={a} strokeOpacity="0.4" strokeWidth="4" />
      <path d="M494 510 l40 12 M494 510 l10 -40" stroke={a} strokeOpacity="0.4" strokeWidth="4" />
      <rect x="486" y="196" width="228" height="308" rx="18" fill="#0a0a0a" stroke={a} strokeWidth="4" />
      <g stroke="#ffffff" strokeOpacity="0.28" strokeWidth="8">
        <path d="M520 250 h160 M520 292 h160 M520 334 h116 M520 376 h160 M520 418 h84" />
      </g>
      <circle cx="714" cy="196" r="8" fill={a} />
    </g>
  ),
  // Ivory Minimal - a 3×3 grid of geometric icon shapes
  icons: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
      <circle cx="490" cy="240" r="40" stroke={a} />
      <rect x="560" y="200" width="80" height="80" rx="18" stroke="#ffffff" strokeOpacity="0.28" />
      <path d="M710 282 L672 210 L748 210 Z" stroke={a} />
      <circle cx="490" cy="350" r="40" stroke={a} strokeWidth="11" />
      <path d="M600 306 v88 M556 350 h88" stroke={a} strokeWidth="12" />
      <rect x="672" y="322" width="76" height="76" rx="8" transform="rotate(45 710 360)" stroke="#ffffff" strokeOpacity="0.28" />
      <rect x="452" y="422" width="76" height="76" rx="10" fill={a} fillOpacity="0.2" stroke={a} />
      <path d="M562 460 a38 38 0 0 1 76 0 Z" stroke={a} />
      <g fill={a} stroke="none">
        <circle cx="690" cy="440" r="8" />
        <circle cx="726" cy="440" r="8" />
        <circle cx="690" cy="476" r="8" />
        <circle cx="726" cy="476" r="8" />
      </g>
    </g>
  ),
  // Seat allocation - a DP grid with a highlighted path
  algorithm: (a) => {
    const cols = 6;
    const rows = 4;
    const cell = 62;
    const ox = 600 - (cols * cell) / 2;
    const oy = 350 - (rows * cell) / 2;
    const path = [
      [0, 3],
      [1, 3],
      [1, 2],
      [3, 2],
      [3, 1],
      [5, 1],
      [5, 0],
    ];
    const key = (c: number, r: number) => `${c}-${r}`;
    const onPath = new Set([
      key(0, 3), key(1, 3), key(1, 2), key(2, 2), key(3, 2), key(3, 1), key(4, 1), key(5, 1), key(5, 0),
    ]);
    const pts = path.map(([c, r]) => `${ox + c * cell + cell / 2} ${oy + r * cell + cell / 2}`);
    return (
      <g strokeLinecap="round" strokeLinejoin="round">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <rect
              key={key(c, r)}
              x={ox + c * cell + 5}
              y={oy + r * cell + 5}
              width={cell - 10}
              height={cell - 10}
              rx="8"
              fill={onPath.has(key(c, r)) ? a : "#0a0a0a"}
              fillOpacity={onPath.has(key(c, r)) ? 0.22 : 1}
              stroke={onPath.has(key(c, r)) ? a : "#ffffff"}
              strokeOpacity={onPath.has(key(c, r)) ? 0.7 : 0.12}
              strokeWidth="3"
            />
          )),
        )}
        <polyline points={pts.join(" ")} fill="none" stroke={a} strokeWidth="4.5" />
        <circle cx={ox + cell / 2} cy={oy + 3 * cell + cell / 2} r="12" fill={a} stroke="none" />
        <circle cx={ox + 5 * cell + cell / 2} cy={oy + cell / 2} r="12" fill="#0a0a0a" stroke={a} strokeWidth="4" />
      </g>
    );
  },
  // Eduverse.ai - one source branching into personalised learning paths
  learn: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M320 350 C 470 350 480 190 640 190 M320 350 C 470 350 500 350 640 350 M320 350 C 470 350 480 510 640 510"
        stroke={a}
        strokeOpacity="0.5"
        strokeWidth="3"
      />
      <path
        d="M640 190 C 760 190 770 130 890 130 M640 190 C 760 190 770 250 890 250 M640 510 C 760 510 770 450 890 450 M640 510 C 760 510 770 570 890 570"
        stroke={a}
        strokeOpacity="0.32"
        strokeWidth="2.5"
      />
      <circle cx="320" cy="350" r="30" fill="#0a0a0a" stroke={a} strokeWidth="4" />
      <circle cx="640" cy="190" r="20" fill="#0a0a0a" stroke={a} strokeWidth="3.5" />
      <circle cx="640" cy="350" r="20" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3.5" />
      <circle cx="640" cy="510" r="20" fill="#0a0a0a" stroke={a} strokeWidth="3.5" />
      <circle cx="890" cy="130" r="13" fill={a} />
      <circle cx="890" cy="250" r="13" fill="#0a0a0a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" />
      <circle cx="890" cy="450" r="13" fill="#0a0a0a" stroke={a} strokeWidth="3" />
      <circle cx="890" cy="570" r="13" fill={a} />
      <circle cx="320" cy="350" r="6" fill={a} />
    </g>
  ),
  // Shortify - a long link collapsing to a short key
  shortener: (a) => (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="7">
        <path d="M356 250 h150 M520 250 h96 M630 250 h120 M764 250 h80" />
      </g>
      <path d="M420 250 C 500 250 500 350 600 350 C 700 350 700 250 780 250" stroke={a} strokeOpacity="0.4" strokeWidth="3" />
      <rect x="470" y="410" width="260" height="72" rx="20" fill="#0a0a0a" stroke={a} strokeWidth="4" />
      <g stroke={a} strokeWidth="7">
        <path d="M512 446 h44 M584 446 h44 M656 446 h44" />
      </g>
      <path d="M420 250 a14 14 0 1 0 0.1 0 Z" fill={a} stroke="none" />
      <circle cx="600" cy="350" r="8" fill={a} />
    </g>
  ),
};

function ProjectCover({ variant, accent, className = "" }: { variant: string; accent: string; className?: string }) {
  const motif = COVER_MOTIFS[variant] ?? COVER_MOTIFS.hrms;
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`cg-${variant}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`cgrid-${variant}`} width="46" height="46" patternUnits="userSpaceOnUse">
          <path d="M46 0H0V46" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="700" fill="#0a0a0a" />
      <rect width="1200" height="700" fill={`url(#cgrid-${variant})`} />
      <rect width="1200" height="700" fill={`url(#cg-${variant})`} />
      {motif(accent)}
    </svg>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-14 md:py-32 border-t border-[var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <SectionLabel>Work</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-black"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Production systems and side projects - from healthcare and HR infrastructure to AI tools and design work.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* large featured row */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <motion.div
                key={p.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                variants={fadeUp}
                className="group relative rounded-2xl border border-[var(--hairline)] overflow-hidden bg-[var(--surface-solid)] hover:border-[var(--hairline-strong)] transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ height: 260 }}>
                  <ProjectCover
                    variant={p.cover}
                    accent={p.accent}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-solid)] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <Tag key={t} color={p.accent}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm mt-0.5 text-primary">{p.subtitle}</p>
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={p.linkLabel ?? `Open ${p.title}`}
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--hairline)] text-muted-foreground hover:text-foreground hover:border-[var(--hairline-strong)] transition-all"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* smaller rows */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.slice(2).map((p, i) => (
              <motion.div
                key={p.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={(i + 2) * 0.1}
                variants={fadeUp}
                className="group relative rounded-2xl border border-[var(--hairline)] overflow-hidden bg-[var(--surface-solid)] hover:border-[var(--hairline-strong)] transition-all duration-300 flex"
              >
                <div className="relative w-40 shrink-0 overflow-hidden hidden sm:block">
                  <ProjectCover
                    variant={p.cover}
                    accent={p.accent}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface-solid)]" />
                </div>
                <div className="p-6 flex flex-col justify-center gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-xs mt-0.5 text-primary">{p.subtitle}</p>
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={p.linkLabel ?? `Open ${p.title}`}
                        className="shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-1"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 4).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Expertise ────────────────────────────────────────────────────────────────

function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" ref={ref} className="py-14 md:py-32 border-t border-[var(--hairline)]" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-10 md:mb-14"
        >
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Engineering Depth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERTISE.map((e, i) => (
            <motion.div
              key={e.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 group"
            >
              <div
                className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg text-sm font-semibold text-foreground border"
                style={{ backgroundColor: `${e.color}18`, borderColor: `${e.color}40` }}
              >
                <span style={{ color: e.color }} className="flex items-center">{e.icon}</span>
                {e.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {e.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-md border border-[var(--hairline)] text-muted-foreground bg-[var(--surface)] group-hover:border-[var(--hairline-strong)] transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* current role card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
            variants={fadeUp}
            className="sm:col-span-2 lg:col-span-3 p-6 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="flex-1">
              <div className="text-xs font-mono text-primary tracking-widest uppercase mb-2">Current Role</div>
              <h3 className="text-2xl font-black text-foreground" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Software Development Engineer II · greytHR
              </h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                4+ years building production-grade systems across Enterprise HRMS, Healthcare Technology, and AI
                applications. A full-stack engineer with a backend lean - services, APIs, data modelling,
                system design, and engineering craft.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe size={14} className="text-primary" /> India
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Rocket size={14} className="text-primary" /> Full Stack
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cpu size={14} className="text-primary" /> AI Enthusiast
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-14 md:py-32 border-t border-[var(--hairline)]" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          ref={ref}
          className="mb-10 md:mb-14"
        >
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Career Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary to-transparent" />

          <div className="flex flex-col gap-8 md:gap-10 pl-8 md:pl-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                variants={fadeUp}
                className="relative"
              >
                {/* dot */}
                <div
                  className="absolute -left-[2.05rem] md:-left-[2.35rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-[var(--bg-alt)]"
                />
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <span className="inline-flex w-fit items-center rounded-md border border-[var(--hairline)] bg-[var(--surface-hover)] px-2 py-0.5 text-[11px] font-mono tracking-wide text-muted-foreground">
                    {t.year}
                  </span>
                  <h3
                    className="text-lg md:text-xl font-bold text-foreground leading-snug"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {t.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-semibold">{t.context}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition & Certifications */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
          variants={fadeUp}
          className="mt-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={16} className="text-primary" />
            <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
              Recognition &amp; Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RECOGNITION.map((r) => {
              const Wrap = r.href ? "a" : "div";
              return (
                <Wrap
                  key={r.title}
                  {...(r.href ? { href: r.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex items-start justify-between gap-3 p-4 rounded-xl border border-[var(--hairline)] bg-[var(--surface)] transition-all duration-300 ${
                    r.href ? "hover:bg-[var(--surface-hover)] hover:border-[var(--hairline-strong)]" : ""
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium text-foreground leading-snug">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{r.org}</div>
                  </div>
                  {r.href && (
                    <ExternalLink size={12} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-0.5" />
                  )}
                </Wrap>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Code & Experiments ───────────────────────────────────────────────────────

function CodeAndExperiments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 md:py-32 border-t border-[var(--hairline)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          variants={fadeUp}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <SectionLabel>Open Source</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Code &amp; Experiments
            </h2>
          </div>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            <Github size={14} /> View GitHub profile <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REPOS.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.07}
              variants={fadeUp}
              className="group p-5 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--hairline-strong)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <GitBranch size={14} className="text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground font-mono">{r.name}</span>
                </div>
                <ExternalLink size={12} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: LANG_COLORS[r.lang] ?? "#888" }}
                />
                <span className="text-xs text-muted-foreground">{r.lang}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Story Viewer (Instagram-style lightbox) ─────────────────────────────────

const STORY_MS = 4000;

function StoryViewer({
  title,
  images,
  start = 0,
  onClose,
}: {
  title: string;
  images: string[];
  start?: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(start);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const next = () => {
    if (i + 1 < images.length) setI(i + 1);
    else onClose();
  };
  const prev = () => setI((v) => Math.max(0, v - 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  useEffect(() => {
    setLoaded(false);
  }, [i]);

  useEffect(() => {
    if (paused || !loaded || i >= images.length - 1) return;
    const t = setTimeout(() => setI((v) => v + 1), STORY_MS);
    return () => clearTimeout(t);
  }, [i, paused, loaded, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[400px] overflow-hidden rounded-2xl bg-black"
        style={{ aspectRatio: "9/16", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerLeave={() => setPaused(false)}
      >
        {/* blurred backdrop fill */}
        <img
          key={`bg-${i}`}
          src={images[i]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
        />

        {/* progress segments */}
        <div className="absolute top-3 left-3 right-3 z-20 flex gap-1">
          {images.map((_, idx) => (
            <span key={idx} className="h-[2.5px] flex-1 rounded-full bg-white/25 overflow-hidden">
              <span
                className="block h-full bg-white"
                style={
                  idx < i
                    ? { width: "100%" }
                    : idx === i
                      ? {
                          width: loaded && !paused ? "100%" : "0%",
                          transition: loaded && !paused ? `width ${STORY_MS}ms linear` : "none",
                        }
                      : { width: "0%" }
                }
              />
            </span>
          ))}
        </div>

        <div className="absolute top-6 left-3 right-3 z-20 flex items-center justify-between pt-1.5">
          <span className="text-xs font-semibold text-white/95 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full overflow-hidden border border-white/40">
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
            </span>
            {title}
            <span className="text-white/50 font-normal">
              {i + 1}/{images.length}
            </span>
          </span>
          <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <img
          key={i}
          src={images[i]}
          alt={`${title} ${i + 1}`}
          onLoad={() => setLoaded(true)}
          className="relative w-full h-full object-contain select-none"
          draggable={false}
        />

        {/* tap zones */}
        <button aria-label="Previous" onClick={prev} className="absolute inset-y-0 left-0 w-1/3 focus:outline-none" />
        <button aria-label="Next" onClick={next} className="absolute inset-y-0 right-0 w-2/3 focus:outline-none" />

        {i > 0 && (
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>
        )}
        {i < images.length - 1 && (
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white hover:bg-black/60"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ─── Beyond the Screen ────────────────────────────────────────────────────────

function BeyondTheScreen() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [story, setStory] = useState<{ title: string; images: string[]; start: number } | null>(null);

  const cards = [
    { icon: <Palette size={16} />, label: "Design tools", value: "Figma · Photoshop · Illustrator" },
    { icon: <Smartphone size={16} />, label: "Published", value: "Ivory Minimal - 10K+ installs" },
    { icon: <Sparkles size={16} />, label: "Currently exploring", value: "AI engineering & LLM apps" },
    { icon: <Globe size={16} />, label: "Portfolio", value: "behance.net/sourabhraj" },
  ];

  return (
    <section id="life" ref={ref} className="py-14 md:py-32 border-t border-[var(--hairline)] overflow-hidden" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-12"
        >
          <SectionLabel>Beyond Code</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Beyond the Screen
          </h2>
        </motion.div>

        <motion.blockquote
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          variants={fadeUp}
          className="text-2xl md:text-4xl font-black leading-tight max-w-3xl"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          "The best engineers are shaped by things that happen{" "}
          <em className="not-italic" style={{ color: "var(--primary)" }}>
            away from the screen.
          </em>"
        </motion.blockquote>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
          variants={fadeUp}
          className="text-[15px] md:text-base text-muted-foreground leading-relaxed md:leading-7 mt-5 md:mt-6 max-w-2xl"
        >
          When I'm not shipping features you'll find me on the road - long drives and bike trips
          through the Sahyadris, Goa, Munnar, the Konkan coast, and wherever else the weekend allows.
          I also design: icons, interfaces, and a published Android icon pack. Same instinct,
          different canvas.
        </motion.p>

        {/* Instagram highlights - rings */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
          variants={fadeUp}
          className="mt-12"
        >
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-5 text-xs font-mono tracking-widest text-muted-foreground uppercase hover:text-foreground transition-colors"
          >
            <Instagram size={13} /> Highlights · @sourabh.archive
          </a>
          <div className="flex gap-5 overflow-x-auto pb-3 -mx-6 px-6 [scrollbar-width:none]">
            {HIGHLIGHTS.map((h) => (
              <button
                key={h.title}
                onClick={() => setStory({ title: h.title, images: h.images, start: 0 })}
                className="flex flex-col items-center gap-2 group shrink-0 w-[76px]"
              >
                <span
                  className="p-[2.5px] rounded-full"
                  style={{ background: "linear-gradient(45deg, #f59e0b, #ec4899, #7C3AED)" }}
                >
                  <span className="block p-[3px] rounded-full" style={{ backgroundColor: "var(--bg-alt)" }}>
                    <img
                      src={h.cover}
                      alt={h.title}
                      loading="lazy"
                      className="w-[64px] h-[64px] rounded-full object-cover group-hover:scale-[1.05] transition-transform"
                    />
                  </span>
                </span>
                <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                  {h.title}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          variants={fadeUp}
          className="flex flex-wrap gap-2 mt-8"
        >
          {["Road trips", "Motorcycling", "Travel", "Photography", "UI Design", "Icon Design"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs rounded-full border border-[var(--hairline)] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
        >
          {cards.map((item) => (
            <div key={item.label} className="p-4 rounded-xl border border-[var(--hairline)] bg-[var(--surface)] flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-primary bg-primary/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="text-sm font-medium text-foreground">{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {story && (
          <StoryViewer
            title={story.title}
            images={story.images}
            start={story.start}
            onClose={() => setStory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-40 border-t border-[var(--hairline)] relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          variants={fadeUp}
          className="text-3xl md:text-6xl font-black mt-2 mb-5 md:mb-6 leading-tight"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Interested in building something{" "}
          <span style={{ color: "var(--primary)" }}>meaningful</span> together?
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
          variants={fadeUp}
          className="text-[15px] md:text-base text-muted-foreground mb-8 md:mb-10 leading-relaxed"
        >
          I'm open to interesting engineering roles, technical collaboration, and AI projects.
          The fastest way to reach me is email or LinkedIn.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--hairline-strong)] text-foreground hover:bg-[var(--surface-hover)] transition-all duration-200"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--hairline-strong)] text-foreground hover:bg-[var(--surface-hover)] transition-all duration-200"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={LINKS.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--hairline-strong)] text-foreground hover:bg-[var(--surface-hover)] transition-all duration-200"
          >
            <Palette size={16} /> Behance
          </a>
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--hairline-strong)] text-foreground hover:bg-[var(--surface-hover)] transition-all duration-200"
          >
            <BookOpen size={16} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>srvraj311</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sourabh · Built with React &amp; love for craft
        </p>
        <div className="flex items-center gap-4">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={15} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={15} />
          </a>
          <a href={LINKS.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-muted-foreground hover:text-foreground transition-colors">
            <Palette size={15} />
          </a>
          <a href={LINKS.playStore} target="_blank" rel="noopener noreferrer" aria-label="Google Play" className="text-muted-foreground hover:text-foreground transition-colors">
            <Smartphone size={15} />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={15} />
          </a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <Hero />
      <CurrentlyBuilding />
      <About />
      <Metrics />
      <Projects />
      <Expertise />
      <Timeline />
      <CodeAndExperiments />
      <BeyondTheScreen />
      <Contact />
      <Footer />
    </div>
  );
}
