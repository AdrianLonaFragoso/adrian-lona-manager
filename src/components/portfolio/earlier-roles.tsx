import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

type EarlierRole = {
  company: string;
  role: string;
  period: string;
  skills: string[];
};

const earlierRoles: EarlierRole[] = [
  {
    company: "End to End Management",
    role: "Senior Web Designer",
    period: "Jul 2017 — Nov 2017",
    skills: ["HTML", "CSS", "SCSS", "UX/UI", "Android", "Visual Studio", "E‑learning"],
  },
  {
    company: "WebMaps",
    role: "Web Design Leader",
    period: "Nov 2015 — Jul 2017",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "jQuery",
      "UX/UI",
      "SEO",
      "Digital Marketing",
      "Git",
    ],
  },
  {
    company: "Especialistas Contacto Directo",
    role: "Webmaster",
    period: "Sep 2015 — Nov 2015",
    skills: ["WordPress", "CMS", "HTML", "CSS", "Social Media", "Email Marketing"],
  },
  {
    company: "Descuentos en Viajes",
    role: "Frontend Web Developer",
    period: "Aug 2014 — Nov 2014",
    skills: ["WordPress", "CMS", "SEO", "HTML", "CSS", "Social Media", "Email Marketing"],
  },
  {
    company: "AlfasolucionesMéxico",
    role: "Layout Designer",
    period: "Jan 2013 — Jul 2014",
    skills: ["HTML", "CSS", "SCSS", "UX/UI", "Social Media", "Email Marketing", "Graphic Design"],
  },
];

export function EarlierRoles() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface/30 px-6 py-4 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
      >
        <span>{open ? "Show less" : "View earlier roles"}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid gap-3">
              {earlierRoles.map((r) => (
                <div
                  key={r.company}
                  className="rounded-2xl border border-border/50 bg-surface/40 px-6 py-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground/70">
                        {r.period}
                      </div>
                      <div className="mt-0.5 font-display text-lg tracking-tight text-foreground">
                        {r.company}
                      </div>
                      <div className="text-sm text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border/60 bg-background/30 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
