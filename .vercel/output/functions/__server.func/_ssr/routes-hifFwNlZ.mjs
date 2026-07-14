import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Bot, C as Compass, D as Calendar, E as ChartLine, M as ArrowUpRight, O as Brain, S as Cpu, T as ChevronDown, _ as Lightbulb, a as Sun, b as GitBranch, c as Rocket, d as MessageSquare, f as MessageCircle, g as Linkedin, h as Mail, i as Target, j as Award, k as Braces, l as Quote, m as MapPin, n as Workflow, o as Sparkles, p as Menu, r as Users, s as ShieldCheck, t as X, u as Moon, v as HeartHandshake, w as Cloud, x as Download, y as GraduationCap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hifFwNlZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const [isDark, setIsDark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setIsDark(document.documentElement.classList.contains("dark"));
	}, []);
	const toggle = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": "Toggle theme",
		onClick: toggle,
		className: "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-foreground/80 transition-all hover:text-foreground hover:border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })]
	});
}
var links = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#leadership",
		label: "Leadership"
	},
	{
		href: "#ai",
		label: "AI"
	},
	{
		href: "#stack",
		label: "Stack"
	},
	{
		href: "#timeline",
		label: "Timeline"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 12);
			const h = document.documentElement;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? window.scrollY / total * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border/60" : "bg-transparent"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-light.svg",
							alt: "Adrian Lona",
							className: "h-6 w-auto sm:h-7 dark:hidden"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-dark.svg",
							alt: "Adrian Lona",
							className: "h-6 w-auto hidden sm:h-7 dark:block"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-1",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hidden sm:inline-flex items-center rounded-full border border-border/70 bg-surface/60 px-4 py-1.5 text-sm text-foreground transition-all hover:border-foreground/40",
								children: "Let's talk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMenuOpen(!menuOpen),
								className: "flex md:hidden p-2 text-muted-foreground transition-colors hover:text-foreground",
								"aria-label": menuOpen ? "Close menu" : "Open menu",
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-px w-full bg-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px bg-accent-blue transition-[width] duration-150",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .2 },
				className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden",
				onClick: () => setMenuOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					type: "spring",
					damping: 25,
					stiffness: 200
				},
				className: "fixed right-0 top-16 z-50 flex h-[calc(100dvh-4rem)] w-72 flex-col border-l border-border/60 bg-background p-6 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setMenuOpen(false),
						className: "rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
						children: l.label
					}, l.href))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto border-t border-border/60 pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setMenuOpen(false),
						className: "inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90",
						children: "Let's talk"
					})
				})]
			})] }) })
		]
	});
}
function ParticleField() {
	const nodes = Array.from({ length: 14 }, (_, i) => i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid-bg",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
				children: nodes.map((i) => {
					const left = i * 83 % 100;
					const top = i * 47 % 100;
					const delay = i % 7 * .4;
					const size = 3 + i % 4;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { opacity: 0 },
						animate: {
							opacity: [
								.15,
								.6,
								.15
							],
							y: [
								0,
								-12,
								0
							]
						},
						transition: {
							duration: 6 + i % 5,
							repeat: Infinity,
							delay
						},
						className: "absolute rounded-full bg-accent-blue",
						style: {
							left: `${left}%`,
							top: `${top}%`,
							width: size,
							height: size,
							boxShadow: "0 0 12px currentColor",
							color: "var(--accent-blue)"
						}
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full opacity-30",
				viewBox: "0 0 800 600",
				preserveAspectRatio: "none",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "line",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--accent-blue)",
							stopOpacity: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "50%",
							stopColor: "var(--accent-blue)",
							stopOpacity: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--accent-blue)",
							stopOpacity: "0"
						})
					]
				}) }), [
					"M0,120 C200,60 400,180 800,100",
					"M0,300 C250,220 500,380 800,320",
					"M0,500 C220,440 480,560 800,480"
				].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d,
					fill: "none",
					stroke: "url(#line)",
					strokeWidth: "1",
					initial: { pathLength: 0 },
					animate: { pathLength: 1 },
					transition: {
						duration: 3 + i,
						repeat: Infinity,
						repeatType: "reverse",
						delay: i * .5
					}
				}, i))]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden pt-20 pb-24 sm:pt-40 sm:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "-mx-6 mb-6 w-[calc(100%+3rem)] md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/adri2.png",
					alt: "Adrian Lona",
					className: "h-[65dvh] w-full object-cover object-top"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:grid md:grid-cols-[auto_1fr] md:gap-x-12 md:gap-y-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: "hidden md:block md:row-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/adri2.png",
							alt: "Adrian Lona",
							className: "h-full w-full rounded-2xl object-cover ring-1 ring-border/60 shadow-lg md:w-52 lg:w-60"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						className: "max-w-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" })]
							}), "Available for Engineering Leadership roles"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut",
							delay: .05
						},
						className: "font-display text-5xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl",
						children: "Adrian Lona"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut",
							delay: .1
						},
						className: "max-w-4xl text-balance font-display text-5xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl",
						children: [
							"Engineering Leader building",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic bg-gradient-to-br from-foreground via-foreground to-accent-blue bg-clip-text text-transparent",
									children: "scalable software"
								})
							}),
							" ",
							"and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic italic text-muted-foreground",
								children: "high-performing teams."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut",
							delay: .15
						},
						className: "max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance",
						children: "Software Engineering Lead with 10+ years delivering enterprise platforms, leading engineering organizations, defining technical strategy, mentoring engineers, and building cloud-native applications."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut",
							delay: .2
						},
						className: "mt-6 flex flex-wrap items-center gap-3 md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90",
								children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/adrian-lona-2026.pdf",
								download: true,
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Let's Talk"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							ease: "easeOut",
							delay: .25
						},
						className: "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground/70 md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Currently" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/80 normal-case tracking-normal",
								children: "Software Engineering Lead · MSC Industrial Supply"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/80 normal-case tracking-normal",
								children: "Querétaro, MX"
							})
						]
					})
				]
			})]
		})]
	});
}
function Section({ id, eyebrow, title, description, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `relative py-24 sm:py-32 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [(eyebrow || title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "mb-14 max-w-3xl",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }), eyebrow]
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance",
						children: description
					})
				]
			}), children]
		})
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay,
			ease: "easeOut"
		},
		className,
		children
	});
}
var pillars = [
	{
		icon: Award,
		label: "MBA",
		detail: "Business Administration"
	},
	{
		icon: Users,
		label: "10+ Years",
		detail: "Engineering Leadership"
	},
	{
		icon: Compass,
		label: "Enterprise Architecture",
		detail: "System & solution design"
	},
	{
		icon: Cpu,
		label: "AI-Augmented Engineering",
		detail: "Copilot · Claude · OpenAI"
	},
	{
		icon: Cloud,
		label: "Cloud Strategy",
		detail: "AWS · Vercel · CI/CD"
	},
	{
		icon: Brain,
		label: "Technical Vision",
		detail: "Cross-functional leadership"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "I lead engineering organizations to deliver enterprise software at scale.",
		description: "Strategic Software Engineering Leader and MBA graduate. I bridge product vision and architectural execution — scaling teams, defining technical strategy, and shipping platforms trusted by millions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 transition-all hover:border-foreground/20 hover:bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
								className: "h-5 w-5",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-medium tracking-tight text-foreground",
							children: p.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" })
					]
				})
			}, p.label))
		})
	});
}
function Counter({ value, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const duration = 1600;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(value * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [n, suffix]
	});
}
var metrics = [
	{
		value: 10,
		suffix: "+",
		label: "Years experience"
	},
	{
		value: 10,
		suffix: "+",
		label: "Engineers led"
	},
	{
		value: 20,
		suffix: "+",
		label: "Technical interviews"
	},
	{
		value: 30,
		suffix: "%",
		label: "Performance improvement"
	},
	{
		value: 40,
		suffix: "%",
		label: "Faster frontend delivery"
	},
	{
		value: 50,
		suffix: "+",
		label: "Contributors coordinated"
	}
];
function Metrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "metrics",
		eyebrow: "Impact",
		title: "Measurable outcomes across teams and platforms.",
		description: "A decade of engineering leadership translated into velocity, reliability, and business results.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-3",
			children: metrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full bg-surface/60 p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl tracking-tight text-foreground sm:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: m.value,
							suffix: m.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm text-muted-foreground",
						children: m.label
					})]
				})
			}, m.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			whileInView: { opacity: 1 },
			viewport: { once: true },
			transition: {
				duration: .6,
				delay: .2
			},
			className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Multiple enterprise platforms shipped" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Millions of users supported" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global B2B and B2C footprint" })
			]
		})]
	});
}
var earlierRoles = [
	{
		company: "End to End Management",
		role: "Senior Web Designer",
		period: "Jul 2017 — Nov 2017",
		skills: [
			"HTML",
			"CSS",
			"SCSS",
			"UX/UI",
			"Android",
			"Visual Studio",
			"E‑learning"
		]
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
			"Git"
		]
	},
	{
		company: "Especialistas Contacto Directo",
		role: "Webmaster",
		period: "Sep 2015 — Nov 2015",
		skills: [
			"WordPress",
			"CMS",
			"HTML",
			"CSS",
			"Social Media",
			"Email Marketing"
		]
	},
	{
		company: "Descuentos en Viajes",
		role: "Frontend Web Developer",
		period: "Aug 2014 — Nov 2014",
		skills: [
			"WordPress",
			"CMS",
			"SEO",
			"HTML",
			"CSS",
			"Social Media",
			"Email Marketing"
		]
	},
	{
		company: "AlfasolucionesMéxico",
		role: "Layout Designer",
		period: "Jan 2013 — Jul 2014",
		skills: [
			"HTML",
			"CSS",
			"SCSS",
			"UX/UI",
			"Social Media",
			"Email Marketing",
			"Graphic Design"
		]
	}
];
function EarlierRoles() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "group flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface/30 px-6 py-4 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: open ? "Show less" : "View earlier roles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				transition: {
					duration: .35,
					ease: "easeInOut"
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3",
					children: earlierRoles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/50 bg-surface/40 px-6 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-widest text-muted-foreground/70",
									children: r.period
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-display text-lg tracking-tight text-foreground",
									children: r.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: r.role
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: r.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border/60 bg-background/30 px-2.5 py-0.5 text-[11px] text-muted-foreground",
								children: s
							}, s))
						})]
					}, r.company))
				})
			})
		})]
	});
}
var projects = [
	{
		company: "MSC Industrial Supply",
		role: "Software Engineering Lead",
		timeline: "2024 — Present",
		problem: "A multi-billion dollar distributor with fragmented frontend delivery and inconsistent enterprise UX across business units.",
		solution: "Full-stack modernization with a unified Enterprise Design System and Node.js service layer.",
		leadership: "Directing 10 engineers across estimation, sprint execution, and architectural review with Product.",
		architecture: "Stencil JS · React · Node.js · Express · Prisma · PostgreSQL · Vercel",
		impact: [
			"30% system performance improvement",
			"40% faster frontend delivery",
			"Automated CI/CD with reduced production incidents"
		],
		stack: [
			"Node.js",
			"React",
			"Stencil JS",
			"PostgreSQL",
			"GitHub Actions",
			"Vercel"
		],
		accent: "from-sky-400/40 to-blue-500/10",
		diagram: [
			"React / Stencil JS",
			"Design System",
			"Node.js / Express",
			"Prisma ORM",
			"PostgreSQL",
			"Vercel"
		]
	},
	{
		company: "Cemex",
		role: "Software Engineering Specialist",
		timeline: "2023 — 2024",
		problem: "A global building-materials leader modernizing a legacy B2B portal serving thousands of enterprise customers.",
		solution: "Resilient Angular architecture with enterprise-grade Web Components and accessibility compliance.",
		leadership: "Cross-functional knowledge transfer programs elevating the regional engineering team.",
		architecture: "Angular · Stencil.js · Web Components · Strapi",
		impact: [
			"Legacy modules migrated to modern architecture",
			"Global accessibility & performance compliance",
			"Regional team upskilled on modern tooling"
		],
		stack: [
			"Angular",
			"Stencil.js",
			"Web Components",
			"TypeScript",
			"Strapi"
		],
		accent: "from-emerald-400/40 to-teal-500/10",
		diagram: [
			"Angular Portal",
			"Web Components",
			"Strapi CMS",
			"Design System",
			"A11y Standards",
			"CI/CD"
		]
	},
	{
		company: "Midas Technologies",
		role: "Frontend Tech Lead",
		timeline: "2023",
		problem: "Early-stage fintech needed scalable UX/UI architecture for crypto and gaming platforms across mobile and desktop.",
		solution: "Unified React and React Native architecture with reusable primitives and web-map integrations.",
		leadership: "Partnered with executive leadership on product roadmaps and technical feasibility for fintech launches.",
		architecture: "React · React Native · Web Maps · Design System",
		impact: [
			"Cross-platform delivery from a shared foundation",
			"Roadmap alignment across product & engineering",
			"SEO initiatives driving organic growth"
		],
		stack: [
			"React",
			"React Native",
			"TypeScript",
			"Mapbox",
			"Design Systems"
		],
		accent: "from-amber-400/40 to-orange-500/10",
		diagram: [
			"React Web",
			"React Native",
			"Design System",
			"Web Maps API",
			"API Layer",
			"CI/CD"
		]
	},
	{
		company: "Kavak",
		role: "Technical Lead",
		timeline: "2019 — 2022",
		problem: "LATAM's first unicorn needed to expand into new markets while scaling engineering culture and standards.",
		solution: "Internationalization framework, monorepo migration, and governed design system for a 50+ engineer platform.",
		leadership: "20+ interviews, weekly 1-on-1s, formal performance reviews, and frontend engineering standards.",
		architecture: "Next.js · React · Strapi CMS · Storybook · Monorepo (Nx/Turborepo) · Angular · Stencil JS",
		impact: [
			"Launched in Brazil, Chile & Argentina",
			"100% UI consistency across web ecosystem",
			"Reduced build times for 50+ contributors"
		],
		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"Storybook",
			"Strapi",
			"AWS",
			"Angular",
			"Stencil JS"
		],
		accent: "from-violet-400/40 to-fuchsia-500/10",
		diagram: [
			"Next.js App",
			"Strapi CMS",
			"Monorepo (Nx)",
			"Storybook DS",
			"i18n Framework",
			"AWS"
		]
	},
	{
		company: "Teknei",
		role: "UX Engineer",
		timeline: "2018 — 2019",
		problem: "Early corporate digital transformation in Mexico, needing modern UX and scalable frontend delivery.",
		solution: "Modern JavaScript and jQuery interfaces with a strong UX focus, bridging design and frontend development.",
		leadership: "Technical execution aligned to business strategy, driving frontend best practices within an enterprise services environment.",
		architecture: "JavaScript · jQuery · HTML/CSS · UX Design · Performance · A11y",
		impact: [
			"Corporate platform interfaces modernized",
			"Technical alignment across business & engineering",
			"Foundation for scalable frontend delivery"
		],
		stack: [
			"JavaScript",
			"jQuery",
			"HTML/CSS",
			"UX Design",
			"Performance",
			"A11y"
		],
		accent: "from-slate-400/40 to-zinc-500/10",
		diagram: [
			"JavaScript / jQuery",
			"HTML/CSS UI",
			"UX Design",
			"Performance",
			"A11y",
			"Production"
		]
	}
];
function ArchitectureDiagram({ boxes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 220",
		className: "h-full w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "dg",
				x1: "0",
				x2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0",
					stopColor: "var(--accent-blue)",
					stopOpacity: "0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "var(--accent-blue)",
					stopOpacity: "0.05"
				})]
			}) }),
			[
				{
					x: 30,
					y: 30,
					w: 100,
					h: 40
				},
				{
					x: 30,
					y: 90,
					w: 100,
					h: 40
				},
				{
					x: 30,
					y: 150,
					w: 100,
					h: 40
				},
				{
					x: 170,
					y: 60,
					w: 100,
					h: 40
				},
				{
					x: 170,
					y: 120,
					w: 100,
					h: 40
				},
				{
					x: 300,
					y: 90,
					w: 80,
					h: 40
				}
			].slice(0, boxes.length).map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: b.x,
				y: b.y,
				width: b.w,
				height: b.h,
				rx: "8",
				fill: "url(#dg)",
				stroke: "currentColor",
				strokeOpacity: "0.25"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: b.x + b.w / 2,
				y: b.y + b.h / 2 + 4,
				textAnchor: "middle",
				className: "fill-current",
				fontSize: "10",
				opacity: "0.75",
				children: boxes[i]
			})] }, i)),
			[
				"M130,50 L170,80",
				"M130,110 L170,80",
				"M130,110 L170,140",
				"M130,170 L170,140",
				"M270,80 L300,110",
				"M270,140 L300,110"
			].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.3",
				strokeDasharray: "3 3"
			}, i))
		]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "work",
		eyebrow: "Latest Work",
		title: "Five engineering stories that shaped my career.",
		description: "From enterprise platforms to early-stage startups — the last five roles that defined my leadership and technical journey.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					whileHover: { y: -3 },
					transition: { duration: .3 },
					className: "group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-8 shadow-elegant lg:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-70` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 lg:grid-cols-[1.2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border/70 px-2.5 py-0.5",
									children: p.timeline
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.role })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-4xl tracking-tight text-foreground sm:text-5xl",
								children: p.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-8 grid gap-6 sm:grid-cols-2",
								children: [
									{
										k: "Opportunity",
										v: p.problem
									},
									{
										k: "Solution",
										v: p.solution
									},
									{
										k: "Leadership",
										v: p.leadership
									},
									{
										k: "Architecture",
										v: p.architecture
									}
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-widest text-muted-foreground/80",
									children: row.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1.5 text-sm leading-relaxed text-foreground/90",
									children: row.v
								})] }, row.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs text-muted-foreground",
									children: s
								}, s))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-background/30 p-4 text-foreground/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Architecture" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: "system.diagram"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/9]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureDiagram, { boxes: p.diagram })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: p.impact.map((imp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm text-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" }), imp]
									}, imp))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground",
									children: ["Case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})]
					})]
				})
			}, p.company))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EarlierRoles, {})]
	});
}
var items$1 = [
	{
		icon: Sparkles,
		title: "Engineering Culture",
		body: "High-trust teams built on transparency, ownership, and craft."
	},
	{
		icon: Users,
		title: "Hiring",
		body: "Rigorous, humane technical interviews aligned to business outcomes."
	},
	{
		icon: GraduationCap,
		title: "Mentorship",
		body: "Coaching engineers from IC to senior — with structured growth paths."
	},
	{
		icon: ChartLine,
		title: "Career Development",
		body: "Clear ladders, feedback loops, and formal performance reviews."
	},
	{
		icon: MessageSquare,
		title: "1-on-1s",
		body: "Weekly conversations that surface blockers and unlock momentum."
	},
	{
		icon: Target,
		title: "Technical Roadmaps",
		body: "Strategy translated into quarterly, executable engineering plans."
	},
	{
		icon: HeartHandshake,
		title: "Stakeholder Communication",
		body: "Trusted partner to Product, Design, and Executive leadership."
	},
	{
		icon: Rocket,
		title: "Agile Leadership",
		body: "Sprint execution tuned for predictability and sustained velocity."
	},
	{
		icon: ShieldCheck,
		title: "Engineering Excellence",
		body: "Standards, reviews, and quality gates that scale with headcount."
	},
	{
		icon: Compass,
		title: "Delivery Predictability",
		body: "Estimation and delivery frameworks trusted by the business."
	}
];
function Leadership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "leadership",
		eyebrow: "Engineering Leadership",
		title: "Leadership philosophy, expressed as operating principles.",
		description: "Great engineering organizations are built deliberately — through culture, clarity, and craft. These are the practices I bring to every team I lead.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: items$1.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 6 * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
								className: "h-4.5 w-4.5",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium tracking-tight text-foreground",
							children: it.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: it.body
					})]
				})
			}, it.title))
		})
	});
}
var capabilities = [
	{
		icon: Bot,
		title: "AI-Augmented Development",
		body: "Integrated GitHub Copilot, Claude and OpenAI into engineering workflows to multiply developer output."
	},
	{
		icon: Workflow,
		title: "Agentic Workflows",
		body: "Designed and deployed agentic patterns for automated code analysis and living documentation."
	},
	{
		icon: Braces,
		title: "Prompt Engineering",
		body: "Standardized technical prompt libraries for system design, test generation, and legacy refactors."
	},
	{
		icon: Lightbulb,
		title: "AI-Assisted Architecture",
		body: "Rapid-prototype architectural reviews and impact analysis for faster, data-driven decisions."
	},
	{
		icon: GitBranch,
		title: "AI-Driven SDLC",
		body: "Bottleneck analysis across PR review and CI/CD — measurable acceleration end to end."
	},
	{
		icon: Sparkles,
		title: "Developer Productivity",
		body: "Benchmarked and rolled out AI tooling as a strategic capability, not a novelty."
	}
];
function AI() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "ai",
		eyebrow: "AI Engineering",
		title: "Engineering in the AI era.",
		description: "Treating AI as a strategic capability across the software delivery lifecycle — from architecture to production.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-border/60 bg-surface/50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-accent-blue/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3",
					children: capabilities.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -2 },
							className: "h-full bg-surface/60 p-8 backdrop-blur-sm transition-colors hover:bg-surface/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/40 text-accent-blue",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
										className: "h-5 w-5",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium tracking-tight text-foreground",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.body
								})
							]
						})
					}, c.title))
				})
			]
		})
	});
}
var groups = {
	Leadership: [
		"Hiring",
		"1-on-1s",
		"Performance Reviews",
		"Mentorship",
		"OKRs",
		"Agile/Scrum"
	],
	Architecture: [
		"System Design",
		"Microservices",
		"Micro-frontends",
		"REST",
		"GraphQL",
		"Solution Architecture"
	],
	Frontend: [
		"React",
		"Next.js",
		"Angular",
		"TypeScript",
		"Stencil JS",
		"Storybook",
		"Web Components"
	],
	Backend: [
		"Node.js",
		"Express",
		"Prisma",
		"PostgreSQL",
		"REST APIs",
		"GraphQL"
	],
	Cloud: [
		"AWS",
		"Vercel",
		"CDN",
		"Edge Runtime"
	],
	DevOps: [
		"GitHub Actions",
		"CI/CD",
		"Docker",
		"Git",
		"Security"
	],
	AI: [
		"GitHub Copilot",
		"Claude",
		"OpenAI",
		"Prompt Engineering",
		"Agentic Workflows"
	],
	Product: [
		"Product Strategy",
		"Stakeholder Management",
		"SDLC",
		"Estimation"
	],
	Design: [
		"Design Systems",
		"Figma",
		"UX Strategy",
		"Accessibility"
	]
};
var keys = Object.keys(groups);
function Stack() {
	const [active, setActive] = (0, import_react.useState)(keys[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "stack",
		eyebrow: "Tech Stack",
		title: "A modern, opinionated toolkit — from leadership to production.",
		description: "Grouped by discipline. Selected for reliability, developer experience, and long-term maintainability.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap gap-2",
			children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setActive(k),
				className: `rounded-full border px-4 py-1.5 text-sm transition-all ${active === k ? "border-foreground bg-foreground text-background" : "border-border/60 bg-surface/40 text-muted-foreground hover:text-foreground"}`,
				children: k
			}, k))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .35 },
			className: "flex flex-wrap gap-2",
			children: groups[active].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "group relative rounded-xl border border-border/60 bg-surface/50 px-4 py-2.5 text-sm text-foreground/90 transition-all hover:border-foreground/30 hover:-translate-y-0.5",
				children: t
			}, t))
		}, active) })]
	});
}
var items = [
	{
		company: "MSC Industrial Supply",
		role: "Software Engineering Lead",
		period: "Jan 2024 — Present",
		highlights: [
			"Directing 10 engineers on enterprise-scale delivery.",
			"Full-stack modernization: Node.js, Express, Prisma, PostgreSQL.",
			"Enterprise Design System with Stencil JS + React.",
			"CI/CD standardized on GitHub Actions and Vercel."
		]
	},
	{
		company: "Midas Technologies",
		role: "Frontend Tech Lead",
		period: "Jan 2023 — Dec 2023",
		highlights: [
			"UX/UI architecture for crypto and gaming platforms.",
			"React and React Native at scale — mobile and desktop.",
			"Roadmap partnership with executive leadership."
		]
	},
	{
		company: "Cemex",
		role: "Software Engineering Specialist",
		period: "Jan 2023 — Dec 2024",
		highlights: [
			"Modernized Cemex Go platform with Angular + Web Components.",
			"Global accessibility & performance compliance.",
			"Cross-functional knowledge transfer on Stencil.js and Strapi."
		]
	},
	{
		company: "Kavak.com",
		role: "Technical Lead",
		period: "Jan 2019 — Dec 2022",
		highlights: [
			"20+ interviews · weekly 1-on-1s · formal performance reviews.",
			"Internationalization framework + Strapi CMS for LATAM expansion.",
			"Strategic monorepo migration for 50+ contributors.",
			"Storybook-based Design System governance."
		]
	},
	{
		company: "Teknei",
		role: "UX Engineer",
		period: "Jan 2018 — Dec 2019",
		highlights: ["Corporate interfaces on Java Spring MVC + modern JS.", "Technical execution aligned to business strategy."]
	},
	{
		company: "Web Maps",
		role: "Web Design Leader",
		period: "Jan 2016 — Dec 2017",
		highlights: ["Managed a creative engineering team & design interns.", "SEO and marketing engineering driving user growth."]
	}
];
function Timeline() {
	const [open, setOpen] = (0, import_react.useState)(items[0].company);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "timeline",
		eyebrow: "Timeline",
		title: "A decade of engineering leadership.",
		description: "From creative engineering to leading multi-million dollar platforms — a compounding journey of scale and craft.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-4 top-0 bottom-0 w-px bg-border sm:left-6",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: items.map((it, i) => {
					const isOpen = open === it.company;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-10 sm:pl-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 transition-colors sm:left-4.5 ${isOpen ? "border-accent-blue bg-accent-blue" : "border-border bg-background"}`,
								style: { left: "0.65rem" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : it.company),
								className: "group w-full rounded-2xl border border-border/60 bg-surface/40 p-6 text-left transition-all hover:border-foreground/20 hover:bg-surface/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: it.period
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 font-display text-2xl tracking-tight text-foreground",
											children: it.company
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-sm text-muted-foreground",
											children: it.role
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-foreground" : ""}` })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
										initial: {
											opacity: 0,
											height: 0
										},
										animate: {
											opacity: 1,
											height: "auto"
										},
										exit: {
											opacity: 0,
											height: 0
										},
										transition: { duration: .3 },
										className: "mt-6 space-y-2 overflow-hidden",
										children: it.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3 text-sm text-foreground/90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" }), h]
										}, h))
									})
								})]
							})]
						})
					}, it.company);
				})
			})]
		})
	});
}
var slots = [
	{
		name: "Isaac Roldan",
		role: "Product Manager | Grupo Salinas",
		text: "Adrian brings a rare combination of technical depth and product-minded strategy. He doesn't just build systems — he architects solutions that align with business goals and scale across teams."
	},
	{
		name: "Angel Solis",
		role: "CTO | Entersol",
		text: "Working with Adrian across engineering, product, and ops was seamless. He drives alignment, unblocks teams, and delivers at pace without cutting corners on quality."
	},
	{
		name: "Ricardo Martínez",
		role: "Technical Leader | Kavak",
		text: "Adrian raised the bar for engineering craft in our org. His code reviews, architectural guidance, and one-on-one mentorship helped an entire generation of engineers level up."
	},
	{
		name: "Benajmin Martínez",
		role: "Head of Dev OPS | Kavak",
		text: "When we needed to scale from a handful of teams to dozens, Adrian designed the operating model, the platform strategy, and the hiring plan that made it possible."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		eyebrow: "Recommendations",
		title: "What leaders, peers, and product partners say.",
		description: "Endorsements are on their way — reserved slots for managers, peers, and product leadership.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: slots.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-6 top-6 h-8 w-8 text-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "text-base leading-relaxed text-foreground/80",
							children: s.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/40 font-mono text-xs text-muted-foreground",
								children: s.role.split(" ").map((w) => w[0]).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-foreground",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: s.role
							})] })]
						})
					]
				})
			}, s.role))
		})
	});
}
var posts = [
	{
		tag: "Engineering Leadership",
		title: "Scaling from Senior IC to Engineering Manager without losing craft.",
		read: "8 min read"
	},
	{
		tag: "Software Architecture",
		title: "Enterprise Design Systems as an architectural investment.",
		read: "10 min read"
	},
	{
		tag: "AI Engineering",
		title: "Agentic workflows in the real SDLC — what actually moves the needle.",
		read: "12 min read"
	},
	{
		tag: "Management",
		title: "The 1-on-1 operating manual for high-performing engineering teams.",
		read: "7 min read"
	},
	{
		tag: "Developer Productivity",
		title: "Monorepos, DX, and the true cost of build times.",
		read: "9 min read"
	},
	{
		tag: "Scaling Teams",
		title: "Hiring engineers with signal, not theatre.",
		read: "6 min read"
	}
];
function Writing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "writing",
		eyebrow: "Writing",
		title: "Notes on engineering leadership.",
		description: "Long-form essays on architecture, management, and AI engineering — coming soon.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group h-full rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.tag }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.read })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-medium leading-snug text-foreground text-balance",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground",
							children: ["Coming soon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					]
				})
			}, p.title))
		})
	});
}
var cards = [
	{
		icon: Mail,
		label: "Email",
		value: "jadrianlf@gmail.com",
		href: "mailto:jadrianlf@gmail.com"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "adrian-lona",
		href: "https://www.linkedin.com/in/adrian-lona-726486a1/"
	},
	{
		icon: Calendar,
		label: "Book a call",
		value: "Calendly — coming soon",
		href: "#contact"
	},
	{
		icon: Download,
		label: "Resume",
		value: "PDF · Updated July 2026",
		href: "#contact"
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Querétaro, Mexico · Remote",
		href: "#contact"
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Let's build the next engineering organization.",
		description: "Open to Engineering Manager, Head of Engineering, Director of Engineering, Principal / Staff Engineer, and startup CTO conversations.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					target: c.href.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "group flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-surface/50 p-6 transition-all hover:border-foreground/20 hover:bg-surface/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl border border-border/60 bg-background/40 text-accent-blue",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
							className: "h-5 w-5",
							strokeWidth: 1.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-base text-foreground",
							children: c.value
						})]
					})]
				})
			}, c.label))
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-7 w-7 place-items-center rounded-md bg-foreground text-background text-[11px] font-bold",
					children: "AL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Adrian Lona · Engineering Leadership"
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: "Designed by Adrian Lona"
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metrics, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leadership, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AI, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Writing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
