import { Quote } from "lucide-react";
import { Reveal, Section } from "./section";

const slots = [
  {
    name: "Isaac Roldan",
    role: "Product Manager | Grupo Salinas",
    text: "Adrian brings a rare combination of technical depth and product-minded strategy. He doesn't just build systems — he architects solutions that align with business goals and scale across teams.",
  },
  {
    name: "Angel Solis",
    role: "CTO | Entersol",
    text: "Working with Adrian across engineering, product, and ops was seamless. He drives alignment, unblocks teams, and delivers at pace without cutting corners on quality.",
  },
  {
    name: "Ricardo Martínez",
    role: "Technical Leader | Kavak",
    text: "Adrian raised the bar for engineering craft in our org. His code reviews, architectural guidance, and one-on-one mentorship helped an entire generation of engineers level up.",
  },
  {
    name: "Benajmin Martínez",
    role: "Head of Dev OPS | Kavak",
    text: "When we needed to scale from a handful of teams to dozens, Adrian designed the operating model, the platform strategy, and the hiring plan that made it possible.",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Recommendations"
      title="What leaders, peers, and product partners say."
      description="Endorsements are on their way — reserved slots for managers, peers, and product leadership."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {slots.map((s, i) => (
          <Reveal key={s.role} delay={i * 0.05}>
            <figure className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-8">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-border" />
              <blockquote className="text-base leading-relaxed text-foreground/80">
                {s.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/40 font-mono text-xs text-muted-foreground">
                  {s.role
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
