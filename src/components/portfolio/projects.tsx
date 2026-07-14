import { motion } from "motion/react";
import { Reveal, Section } from "./section";
import { EarlierRoles } from "./earlier-roles";
import { ArrowUpRight } from "lucide-react";

type Project = {
  company: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  leadership: string;
  architecture: string;
  impact: string[];
  stack: string[];
  accent: string;
  diagram: string[];
};

const projects: Project[] = [
  {
    company: "MSC Industrial Supply",
    role: "Software Engineering Lead",
    timeline: "2024 — Present",
    problem:
      "A multi-billion dollar distributor with fragmented frontend delivery and inconsistent enterprise UX across business units.",
    solution:
      "Full-stack modernization with a unified Enterprise Design System and Node.js service layer.",
    leadership:
      "Directing 10 engineers across estimation, sprint execution, and architectural review with Product.",
    architecture: "Stencil JS · React · Node.js · Express · Prisma · PostgreSQL · Vercel",
    impact: [
      "30% system performance improvement",
      "40% faster frontend delivery",
      "Automated CI/CD with reduced production incidents",
    ],
    stack: ["Node.js", "React", "Stencil JS", "PostgreSQL", "GitHub Actions", "Vercel"],
    accent: "from-sky-400/40 to-blue-500/10",
    diagram: [
      "React / Stencil JS",
      "Design System",
      "Node.js / Express",
      "Prisma ORM",
      "PostgreSQL",
      "Vercel",
    ],
  },
  {
    company: "Cemex",
    role: "Software Engineering Specialist",
    timeline: "2023 — 2024",
    problem:
      "A global building-materials leader modernizing a legacy B2B portal serving thousands of enterprise customers.",
    solution:
      "Resilient Angular architecture with enterprise-grade Web Components and accessibility compliance.",
    leadership:
      "Cross-functional knowledge transfer programs elevating the regional engineering team.",
    architecture: "Angular · Stencil.js · Web Components · Strapi",
    impact: [
      "Legacy modules migrated to modern architecture",
      "Global accessibility & performance compliance",
      "Regional team upskilled on modern tooling",
    ],
    stack: ["Angular", "Stencil.js", "Web Components", "TypeScript", "Strapi"],
    accent: "from-emerald-400/40 to-teal-500/10",
    diagram: [
      "Angular Portal",
      "Web Components",
      "Strapi CMS",
      "Design System",
      "A11y Standards",
      "CI/CD",
    ],
  },
  {
    company: "Midas Technologies",
    role: "Frontend Tech Lead",
    timeline: "2023",
    problem:
      "Early-stage fintech needed scalable UX/UI architecture for crypto and gaming platforms across mobile and desktop.",
    solution:
      "Unified React and React Native architecture with reusable primitives and web-map integrations.",
    leadership:
      "Partnered with executive leadership on product roadmaps and technical feasibility for fintech launches.",
    architecture: "React · React Native · Web Maps · Design System",
    impact: [
      "Cross-platform delivery from a shared foundation",
      "Roadmap alignment across product & engineering",
      "SEO initiatives driving organic growth",
    ],
    stack: ["React", "React Native", "TypeScript", "Mapbox", "Design Systems"],
    accent: "from-amber-400/40 to-orange-500/10",
    diagram: ["React Web", "React Native", "Design System", "Web Maps API", "API Layer", "CI/CD"],
  },
  {
    company: "Kavak",
    role: "Technical Lead",
    timeline: "2019 — 2022",
    problem:
      "LATAM's first unicorn needed to expand into new markets while scaling engineering culture and standards.",
    solution:
      "Internationalization framework, monorepo migration, and governed design system for a 50+ engineer platform.",
    leadership:
      "20+ interviews, weekly 1-on-1s, formal performance reviews, and frontend engineering standards.",
    architecture:
      "Next.js · React · Strapi CMS · Storybook · Monorepo (Nx/Turborepo) · Angular · Stencil JS",
    impact: [
      "Launched in Brazil, Chile & Argentina",
      "100% UI consistency across web ecosystem",
      "Reduced build times for 50+ contributors",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Storybook",
      "Strapi",
      "AWS",
      "Angular",
      "Stencil JS",
    ],
    accent: "from-violet-400/40 to-fuchsia-500/10",
    diagram: [
      "Next.js App",
      "Strapi CMS",
      "Monorepo (Nx)",
      "Storybook DS",
      "i18n Framework",
      "AWS",
    ],
  },
  {
    company: "Teknei",
    role: "UX Engineer",
    timeline: "2018 — 2019",
    problem:
      "Early corporate digital transformation in Mexico, needing modern UX and scalable frontend delivery.",
    solution:
      "Modern JavaScript and jQuery interfaces with a strong UX focus, bridging design and frontend development.",
    leadership:
      "Technical execution aligned to business strategy, driving frontend best practices within an enterprise services environment.",
    architecture: "JavaScript · jQuery · HTML/CSS · UX Design · Performance · A11y",
    impact: [
      "Corporate platform interfaces modernized",
      "Technical alignment across business & engineering",
      "Foundation for scalable frontend delivery",
    ],
    stack: ["JavaScript", "jQuery", "HTML/CSS", "UX Design", "Performance", "A11y"],
    accent: "from-slate-400/40 to-zinc-500/10",
    diagram: [
      "JavaScript / jQuery",
      "HTML/CSS UI",
      "UX Design",
      "Performance",
      "A11y",
      "Production",
    ],
  },
];

function ArchitectureDiagram({ boxes }: { boxes: string[] }) {
  const positions = [
    { x: 30, y: 30, w: 100, h: 40 },
    { x: 30, y: 90, w: 100, h: 40 },
    { x: 30, y: 150, w: 100, h: 40 },
    { x: 170, y: 60, w: 100, h: 40 },
    { x: 170, y: 120, w: 100, h: 40 },
    { x: 300, y: 90, w: 80, h: 40 },
  ];

  const arrows = [
    "M130,50 L170,80",
    "M130,110 L170,80",
    "M130,110 L170,140",
    "M130,170 L170,140",
    "M270,80 L300,110",
    "M270,140 L300,110",
  ];

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="dg" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent-blue)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--accent-blue)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {positions.slice(0, boxes.length).map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="8"
            fill="url(#dg)"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h / 2 + 4}
            textAnchor="middle"
            className="fill-current"
            fontSize="10"
            opacity="0.75"
          >
            {boxes[i]}
          </text>
        </g>
      ))}
      {arrows.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeDasharray="3 3"
        />
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Latest Work"
      title="Five engineering stories that shaped my career."
      description="From enterprise platforms to early-stage startups — the last five roles that defined my leadership and technical journey."
    >
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.company} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-8 shadow-elegant lg:p-12"
            >
              <div
                className={`pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-70`}
              />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full border border-border/70 px-2.5 py-0.5">
                      {p.timeline}
                    </span>
                    <span>{p.role}</span>
                  </div>
                  <h3 className="mt-4 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                    {p.company}
                  </h3>

                  <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                    {[
                      { k: "Opportunity", v: p.problem },
                      { k: "Solution", v: p.solution },
                      { k: "Leadership", v: p.leadership },
                      { k: "Architecture", v: p.architecture },
                    ].map((row) => (
                      <div key={row.k}>
                        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground/80">
                          {row.k}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="rounded-2xl border border-border/60 bg-background/30 p-4 text-foreground/70">
                    <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground/80">
                      <span>Architecture</span>
                      <span className="font-mono">system.diagram</span>
                    </div>
                    <div className="aspect-[16/9]">
                      <ArchitectureDiagram boxes={p.diagram} />
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {p.impact.map((imp) => (
                      <li key={imp} className="flex items-start gap-3 text-sm text-foreground/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <EarlierRoles />
    </Section>
  );
}
