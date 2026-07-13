import {
  Compass,
  GraduationCap,
  HeartHandshake,
  LineChart,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal, Section } from "./section";

const items = [
  {
    icon: Sparkles,
    title: "Engineering Culture",
    body: "High-trust teams built on transparency, ownership, and craft.",
  },
  {
    icon: Users,
    title: "Hiring",
    body: "Rigorous, humane technical interviews aligned to business outcomes.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    body: "Coaching engineers from IC to senior — with structured growth paths.",
  },
  {
    icon: LineChart,
    title: "Career Development",
    body: "Clear ladders, feedback loops, and formal performance reviews.",
  },
  {
    icon: MessageSquare,
    title: "1-on-1s",
    body: "Weekly conversations that surface blockers and unlock momentum.",
  },
  {
    icon: Target,
    title: "Technical Roadmaps",
    body: "Strategy translated into quarterly, executable engineering plans.",
  },
  {
    icon: HeartHandshake,
    title: "Stakeholder Communication",
    body: "Trusted partner to Product, Design, and Executive leadership.",
  },
  {
    icon: Rocket,
    title: "Agile Leadership",
    body: "Sprint execution tuned for predictability and sustained velocity.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Excellence",
    body: "Standards, reviews, and quality gates that scale with headcount.",
  },
  {
    icon: Compass,
    title: "Delivery Predictability",
    body: "Estimation and delivery frameworks trusted by the business.",
  },
];

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Engineering Leadership"
      title="Leadership philosophy, expressed as operating principles."
      description="Great engineering organizations are built deliberately — through culture, clarity, and craft. These are the practices I bring to every team I lead."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 6) * 0.04}>
            <div className="group h-full rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue">
                  <it.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </span>
                <h3 className="text-base font-medium tracking-tight text-foreground">{it.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
