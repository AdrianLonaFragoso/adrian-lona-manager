import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, Section } from "./section";
import { ChevronDown } from "lucide-react";

type Item = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

const items: Item[] = [
  {
    company: "MSC Industrial Supply",
    role: "Software Engineering Lead",
    period: "Jan 2024 — Present",
    highlights: [
      "Directing 10 engineers on enterprise-scale delivery.",
      "Full-stack modernization: Node.js, Express, Prisma, PostgreSQL.",
      "Enterprise Design System with Stencil JS + React.",
      "CI/CD standardized on GitHub Actions and Vercel.",
    ],
  },
  {
    company: "Midas Technologies",
    role: "Frontend Tech Lead",
    period: "Jan 2023 — Dec 2023",
    highlights: [
      "UX/UI architecture for crypto and gaming platforms.",
      "React and React Native at scale — mobile and desktop.",
      "Roadmap partnership with executive leadership.",
    ],
  },
  {
    company: "Cemex",
    role: "Software Engineering Specialist",
    period: "Jan 2023 — Dec 2024",
    highlights: [
      "Modernized Cemex Go platform with Angular + Web Components.",
      "Global accessibility & performance compliance.",
      "Cross-functional knowledge transfer on Stencil.js and Strapi.",
    ],
  },
  {
    company: "Kavak.com",
    role: "Technical Lead",
    period: "Jan 2019 — Dec 2022",
    highlights: [
      "20+ interviews · weekly 1-on-1s · formal performance reviews.",
      "Internationalization framework + Strapi CMS for LATAM expansion.",
      "Strategic monorepo migration for 50+ contributors.",
      "Storybook-based Design System governance.",
    ],
  },
  {
    company: "Teknei",
    role: "UX Engineer",
    period: "Jan 2018 — Dec 2019",
    highlights: [
      "Corporate interfaces on Java Spring MVC + modern JS.",
      "Technical execution aligned to business strategy.",
    ],
  },
  {
    company: "Web Maps",
    role: "Web Design Leader",
    period: "Jan 2016 — Dec 2017",
    highlights: [
      "Managed a creative engineering team & design interns.",
      "SEO and marketing engineering driving user growth.",
    ],
  },
];

export function Timeline() {
  const [open, setOpen] = useState<string | null>(items[0].company);
  return (
    <Section
      id="timeline"
      eyebrow="Timeline"
      title="A decade of engineering leadership."
      description="From creative engineering to leading multi-million dollar platforms — a compounding journey of scale and craft."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-6" aria-hidden />
        <div className="space-y-4">
          {items.map((it, i) => {
            const isOpen = open === it.company;
            return (
              <Reveal key={it.company} delay={i * 0.04}>
                <div className="relative pl-10 sm:pl-14">
                  <span
                    className={`absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 transition-colors sm:left-4.5 ${
                      isOpen ? "border-accent-blue bg-accent-blue" : "border-border bg-background"
                    }`}
                    style={{ left: "0.65rem" }}
                  />
                  <button
                    onClick={() => setOpen(isOpen ? null : it.company)}
                    className="group w-full rounded-2xl border border-border/60 bg-surface/40 p-6 text-left transition-all hover:border-foreground/20 hover:bg-surface/70"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                          {it.period}
                        </div>
                        <div className="mt-1 font-display text-2xl tracking-tight text-foreground">
                          {it.company}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{it.role}</div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180 text-foreground" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 space-y-2 overflow-hidden"
                        >
                          {it.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-3 text-sm text-foreground/90"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                              {h}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
