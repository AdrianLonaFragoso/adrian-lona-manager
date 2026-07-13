import { motion } from "motion/react";
import { Reveal, Section } from "./section";
import { Bot, Braces, GitBranch, Lightbulb, Sparkles, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI-Augmented Development",
    body: "Integrated GitHub Copilot, Claude and OpenAI into engineering workflows to multiply developer output.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    body: "Designed and deployed agentic patterns for automated code analysis and living documentation.",
  },
  {
    icon: Braces,
    title: "Prompt Engineering",
    body: "Standardized technical prompt libraries for system design, test generation, and legacy refactors.",
  },
  {
    icon: Lightbulb,
    title: "AI-Assisted Architecture",
    body: "Rapid-prototype architectural reviews and impact analysis for faster, data-driven decisions.",
  },
  {
    icon: GitBranch,
    title: "AI-Driven SDLC",
    body: "Bottleneck analysis across PR review and CI/CD — measurable acceleration end to end.",
  },
  {
    icon: Sparkles,
    title: "Developer Productivity",
    body: "Benchmarked and rolled out AI tooling as a strategic capability, not a novelty.",
  },
];

export function AI() {
  return (
    <Section
      id="ai"
      eyebrow="AI Engineering"
      title="Engineering in the AI era."
      description="Treating AI as a strategic capability across the software delivery lifecycle — from architecture to production."
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/50">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="relative grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -2 }}
                className="h-full bg-surface/60 p-8 backdrop-blur-sm transition-colors hover:bg-surface/80"
              >
                <div className="mb-6 grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
