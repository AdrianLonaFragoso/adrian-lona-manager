import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Reveal, Section } from "./section";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Engineers led" },
  { value: 20, suffix: "+", label: "Technical interviews" },
  { value: 30, suffix: "%", label: "Performance improvement" },
  { value: 40, suffix: "%", label: "Faster frontend delivery" },
  { value: 50, suffix: "+", label: "Contributors coordinated" },
];

export function Metrics() {
  return (
    <Section
      id="metrics"
      eyebrow="Impact"
      title="Measurable outcomes across teams and platforms."
      description="A decade of engineering leadership translated into velocity, reliability, and business results."
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05}>
            <div className="h-full bg-surface/60 p-8">
              <div className="font-display text-5xl tracking-tight text-foreground sm:text-6xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
      >
        <span>Multiple enterprise platforms shipped</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>Millions of users supported</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>Global B2B and B2C footprint</span>
      </motion.div>
    </Section>
  );
}
