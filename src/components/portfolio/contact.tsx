import { Calendar, Download, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal, Section } from "./section";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "jadrianlf@gmail.com",
    href: "mailto:jadrianlf@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "adrian-lona",
    href: "https://www.linkedin.com/in/adrian-lona-726486a1/",
  },
  {
    icon: Calendar,
    label: "Book a call",
    value: "Calendly — coming soon",
    href: "#contact",
  },
  {
    icon: Download,
    label: "Resume",
    value: "PDF · Updated July 2026",
    href: "#contact",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Querétaro, Mexico · Remote",
    href: "#contact",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build the next engineering organization."
      description="Open to Engineering Manager, Head of Engineering, Director of Engineering, Principal / Staff Engineer, and startup CTO conversations."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.04}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-surface/50 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border/60 bg-background/40 text-accent-blue">
                <c.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-base text-foreground">{c.value}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background text-[11px] font-bold">
            AL
          </span>
          <span>© {new Date().getFullYear()} Adrian Lona · Engineering Leadership</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Designed by Adrian Lona
        </div>
      </div>
    </footer>
  );
}
