import { Reveal, Section } from "./section";
import { Award, Brain, Cloud, Compass, Cpu, Users } from "lucide-react";

const pillars = [
  { icon: Award, label: "MBA", detail: "Business Administration" },
  { icon: Users, label: "10+ Years", detail: "Engineering Leadership" },
  { icon: Compass, label: "Enterprise Architecture", detail: "System & solution design" },
  { icon: Cpu, label: "AI-Augmented Engineering", detail: "Copilot · Claude · OpenAI" },
  { icon: Cloud, label: "Cloud Strategy", detail: "AWS · Vercel · CI/CD" },
  { icon: Brain, label: "Technical Vision", detail: "Cross-functional leadership" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I lead engineering organizations to deliver enterprise software at scale."
      description="Strategic Software Engineering Leader and MBA graduate. I bridge product vision and architectural execution — scaling teams, defining technical strategy, and shipping platforms trusted by millions."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 transition-all hover:border-foreground/20 hover:bg-surface">
              <div className="mb-6 grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue">
                <p.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="text-lg font-medium tracking-tight text-foreground">{p.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.detail}</div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
