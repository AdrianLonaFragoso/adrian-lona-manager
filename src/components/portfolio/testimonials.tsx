import { Quote } from "lucide-react";
import { Reveal, Section } from "./section";

const slots = [
  { role: "Engineering Director", context: "on strategic leadership" },
  { role: "Product Manager", context: "on cross-functional delivery" },
  { role: "Senior Engineer / Peer", context: "on mentorship & craft" },
  { role: "Engineering Manager", context: "on team scaling" },
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
                <span className="text-muted-foreground">
                  Testimonial from a {s.role.toLowerCase()} —
                </span>{" "}
                a written endorsement will appear here reflecting on {s.context}.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/40 font-mono text-xs text-muted-foreground">
                  {s.role
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">{s.role}</div>
                  <div className="text-xs text-muted-foreground">Coming soon</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}