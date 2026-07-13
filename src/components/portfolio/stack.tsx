import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, Section } from "./section";

const groups: Record<string, string[]> = {
  Leadership: ["Hiring", "1-on-1s", "Performance Reviews", "Mentorship", "OKRs", "Agile/Scrum"],
  Architecture: [
    "System Design",
    "Microservices",
    "Micro-frontends",
    "REST",
    "GraphQL",
    "Solution Architecture",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Stencil JS",
    "Storybook",
    "Web Components",
  ],
  Backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs", "GraphQL"],
  Cloud: ["AWS", "Vercel", "CDN", "Edge Runtime"],
  DevOps: ["GitHub Actions", "CI/CD", "Docker", "Git", "Security"],
  AI: ["GitHub Copilot", "Claude", "OpenAI", "Prompt Engineering", "Agentic Workflows"],
  Product: ["Product Strategy", "Stakeholder Management", "SDLC", "Estimation"],
  Design: ["Design Systems", "Figma", "UX Strategy", "Accessibility"],
};

const keys = Object.keys(groups);

export function Stack() {
  const [active, setActive] = useState<string>(keys[0]);
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title="A modern, opinionated toolkit — from leadership to production."
      description="Grouped by discipline. Selected for reliability, developer experience, and long-term maintainability."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {keys.map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              active === k
                ? "border-foreground bg-foreground text-background"
                : "border-border/60 bg-surface/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <Reveal>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap gap-2"
        >
          {groups[active].map((t) => (
            <span
              key={t}
              className="group relative rounded-xl border border-border/60 bg-surface/50 px-4 py-2.5 text-sm text-foreground/90 transition-all hover:border-foreground/30 hover:-translate-y-0.5"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </Reveal>
    </Section>
  );
}
