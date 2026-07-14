import { motion } from "motion/react";
import { ArrowUpRight, Download, MessageCircle } from "lucide-react";

function ParticleField() {
  const nodes = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
        {nodes.map((i) => {
          const left = (i * 83) % 100;
          const top = (i * 47) % 100;
          const delay = (i % 7) * 0.4;
          const size = 3 + (i % 4);
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -12, 0] }}
              transition={{ duration: 6 + (i % 5), repeat: Infinity, delay }}
              className="absolute rounded-full bg-accent-blue"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                boxShadow: "0 0 12px currentColor",
                color: "var(--accent-blue)",
              }}
            />
          );
        })}
      </div>
      {/* connecting arcs */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-blue)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M0,120 C200,60 400,180 800,100",
          "M0,300 C250,220 500,380 800,320",
          "M0,500 C220,440 480,560 800,480",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#line)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-40 sm:pb-32">
      <ParticleField />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="-mx-6 mb-6 w-[calc(100%+3rem)] md:hidden"
        >
          <img
            src="/adri2.png"
            alt="Adrian Lona"
            className="h-[65dvh] w-full object-cover object-top"
          />
        </motion.div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-[auto_1fr] md:gap-x-12 md:gap-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block md:row-span-4"
          >
            <img
              src="/adri2.png"
              alt="Adrian Lona"
              className="h-full w-full rounded-2xl object-cover ring-1 ring-border/60 shadow-lg md:w-52 lg:w-60"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
              </span>
              Available for Engineering Leadership roles
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            Adrian Lona
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-4xl text-balance font-display text-5xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Engineering Leader building{" "}
            <span className="relative inline-block">
              <em className="not-italic bg-gradient-to-br from-foreground via-foreground to-accent-blue bg-clip-text text-transparent">
                scalable software
              </em>
            </span>{" "}
            and <em className="not-italic italic text-muted-foreground">high-performing teams.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance"
          >
            Software Engineering Lead with 10+ years delivering enterprise platforms, leading
            engineering organizations, defining technical strategy, mentoring engineers, and
            building cloud-native applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3 md:col-span-2"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/adrian-lona-2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/40"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground/70 md:col-span-2"
          >
            <span>Currently</span>
            <span className="text-foreground/80 normal-case tracking-normal">
              Software Engineering Lead · MSC Industrial Supply
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="text-foreground/80 normal-case tracking-normal">Querétaro, MX</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
