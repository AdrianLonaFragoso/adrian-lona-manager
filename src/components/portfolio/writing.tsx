import { Reveal, Section } from "./section";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Engineering Leadership",
    title: "Scaling from Senior IC to Engineering Manager without losing craft.",
    read: "8 min read",
  },
  {
    tag: "Software Architecture",
    title: "Enterprise Design Systems as an architectural investment.",
    read: "10 min read",
  },
  {
    tag: "AI Engineering",
    title: "Agentic workflows in the real SDLC — what actually moves the needle.",
    read: "12 min read",
  },
  {
    tag: "Management",
    title: "The 1-on-1 operating manual for high-performing engineering teams.",
    read: "7 min read",
  },
  {
    tag: "Developer Productivity",
    title: "Monorepos, DX, and the true cost of build times.",
    read: "9 min read",
  },
  {
    tag: "Scaling Teams",
    title: "Hiring engineers with signal, not theatre.",
    read: "6 min read",
  },
];

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes on engineering leadership."
      description="Long-form essays on architecture, management, and AI engineering — coming soon."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.05}>
            <article className="group h-full rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span>{p.tag}</span>
                <span>{p.read}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium leading-snug text-foreground text-balance">
                {p.title}
              </h3>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Coming soon
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
