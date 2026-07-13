import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Metrics } from "@/components/portfolio/metrics";
import { Projects } from "@/components/portfolio/projects";
import { Leadership } from "@/components/portfolio/leadership";
import { AI } from "@/components/portfolio/ai";
import { Stack } from "@/components/portfolio/stack";
import { Timeline } from "@/components/portfolio/timeline";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Writing } from "@/components/portfolio/writing";
import { Contact, Footer } from "@/components/portfolio/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Adrian Lona — Software Engineering Lead with 10+ years scaling engineering organizations, defining technical strategy, and delivering enterprise platforms at MSC Industrial Supply, Kavak, Cemex, and Midas.",
      },
      {
        property: "og:title",
        content: "Adrian Lona — Engineering Leader & Software Architect",
      },
      {
        property: "og:description",
        content:
          "Engineering Leader building scalable software and high-performing teams. Enterprise architecture · AI-augmented engineering · Cloud strategy.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Adrian Lona",
          jobTitle: "Software Engineering Lead",
          description:
            "Engineering Leader building scalable software and high-performing teams.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Querétaro",
            addressCountry: "MX",
          },
          email: "mailto:jadrianlf@gmail.com",
          sameAs: ["https://www.linkedin.com/in/adrian-lona-726486a1/"],
          knowsAbout: [
            "Engineering Leadership",
            "Software Architecture",
            "Enterprise Design Systems",
            "AI Engineering",
            "Cloud Strategy",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Projects />
        <Leadership />
        <AI />
        <Stack />
        <Timeline />
        <Testimonials />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
