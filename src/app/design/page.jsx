import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UI/UX Design | jCode Studio",
  description:
    "UI/UX design work by Joan Karstrom — Figma prototypes, user flows, wireframes, and product design case studies.",
};

const tools = [
  "Figma", "FigJam", "Prototyping", "Wireframing",
  "User Research", "Design Systems", "Accessibility",
];

const designWork = [
  {
    title: "Drink Diary",
    category: "Mobile App Design",
    description:
      "End-to-end product design for a social drink logging iOS app — from concept and user flows to high-fidelity Figma screens and a full component library.",
    tags: ["iOS", "Figma", "Mobile", "Design System"],
    accentColor: "#ffe5d9",
    accentLight: "#fce4ec",
    link: "/design/drink-diary",
    linkLabel: "View Case Study",
  },
  {
    title: "The Safe Space for Students",
    category: "Web App Design",
    description:
      "Designed the full gamified UI for a mission-driven student engagement platform — including onboarding, dashboard, and gamification flows.",
    tags: ["Web", "Figma", "Gamification", "UX Research"],
    accentColor: "#d6eaf8",
    accentLight: "#e3f2fd",
    link: "/design/safe-space",
    linkLabel: "View Case Study",
  },
  {
    title: "GGRC Data Portal",
    category: "Data UX Design",
    description:
      "Designed an accessible, filterable crime data dashboard — balancing information density with clarity for a broad public audience.",
    tags: ["Dashboard", "Data Viz", "Accessibility", "Figma"],
    accentColor: "#c8f0e8",
    accentLight: "#d4e8d1",
    link: "/design/ggrc-site",
    linkLabel: "View Case Study",
  },
  {
    title: "GGRC 2025 Annual Report",
    category: "Editorial Design",
    description:
      "Designed the GGRC's 2025 annual report as an interactive web experience — turning dense crime research data into a clear, compelling visual narrative.",
    tags: ["Editorial", "Data Viz", "Web", "Typography"],
    accentColor: "#e8e0f0",
    accentLight: "#c5cae9",
    link: "/design/ggrc-annual-report",
    linkLabel: "View Case Study",
  },
];

export default function DesignPage() {
  const [featured, ...rest] = designWork;

  return (
    <main className="w-full font-vietnam text-foreground">

      {/* Hero — tight editorial split */}
      <section className="pt-14 pb-10 px-6 md:px-16 bg-whitepurple relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 90% 30%, #eedbe6 0%, transparent 50%), radial-gradient(ellipse at 5% 100%, #d6d6e9 0%, transparent 45%)",
            opacity: 0.5,
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-darkpurple" />
            <span className="text-darkpurple text-xs font-bold tracking-[0.15em] uppercase">
              UI/UX Design
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-20">
            <h1 className="font-fredoka font-bold text-h1 text-darkpurple leading-[1.05] shrink-0">
              Designed<br />with Intent.
            </h1>
            <p className="text-body-lg text-darkpurple max-w-xs leading-relaxed pb-1">
              Good design is invisible — it removes friction, guides attention,
              and makes complex things feel simple.
            </p>
          </div>
        </div>
      </section>

      {/* Projects — bento grid */}
      <section
        className="py-10 px-6 md:px-16"
        style={{ background: "linear-gradient(to bottom, #faf7ff, #ffffff 60%, #fce7f3)" }}
      >
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Featured card */}
          <Link
            href={featured.link}
            className="group block bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-darkpurple/10 hover:border-darkpurple/30 hover:-translate-y-1"
          >
            <div className="md:grid md:grid-cols-[45%_55%]">
              <div
                className="h-56 md:h-auto min-h-[360px] flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${featured.accentColor} 0%, ${featured.accentLight} 100%)`,
                }}
              >
                <span
                  className="font-fredoka font-bold text-[11rem] text-darkpurple/10 select-none absolute leading-none"
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="relative z-10 text-center px-6">
                  <span className="font-fredoka font-bold text-2xl text-darkpurple tracking-wide block mb-2">
                    {featured.category}
                  </span>
                  <span className="text-darkpurple text-xs font-bold tracking-widest uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 group-hover:text-brand-vivid transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-body-base mb-8 leading-relaxed max-w-md">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-lightpurple px-3 py-1.5 rounded-full text-darkpurple border border-darkpurple/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-darkpurple font-semibold group-hover:gap-4 transition-all duration-300">
                  {featured.linkLabel}{" "}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary cards — 3-column grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((item, i) => (
              <Link
                key={item.title}
                href={item.link}
                className="group block bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-darkpurple/10 hover:border-darkpurple/30 hover:-translate-y-1"
              >
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${item.accentColor} 0%, ${item.accentLight} 100%)`,
                  }}
                >
                  <span
                    className="font-fredoka font-bold text-[6rem] text-darkpurple/10 select-none absolute leading-none"
                    aria-hidden="true"
                  >
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 font-fredoka font-bold text-lg text-darkpurple tracking-wide text-center px-4">
                    {item.category}
                  </span>
                </div>
                <div className="p-7 flex flex-col">
                  <h2 className="font-fredoka font-bold text-h4 text-darkpurple mb-2 group-hover:text-brand-vivid transition-colors leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-body-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-lightpurple px-3 py-1 rounded-full text-darkpurple border border-darkpurple/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-darkpurple font-semibold mt-auto group-hover:gap-3 transition-all duration-300 text-sm">
                    {item.linkLabel}{" "}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Tools — dual marquee */}
      <section className="py-12 bg-darkpurple overflow-hidden">
        <p className="text-center text-white/40 text-xs font-bold tracking-widest uppercase mb-5">
          Design Toolkit
        </p>
        <div className="space-y-3">
          <div className="flex overflow-hidden">
            <div className="flex gap-4 animate-marquee whitespace-nowrap shrink-0">
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-white/60 border border-white/20 px-5 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex gap-4 animate-marquee whitespace-nowrap shrink-0" aria-hidden>
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-white/60 border border-white/20 px-5 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap shrink-0">
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-white/30 border border-white/10 px-5 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap shrink-0" aria-hidden>
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-white/30 border border-white/10 px-5 py-2 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-lilac text-center">
        <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4">
          Need a Design Partner?
        </h2>
        <p className="text-gray-700 text-body-base mb-8 max-w-md mx-auto leading-relaxed">
          Whether you&apos;re starting from scratch or refining an existing
          product, I&apos;d love to help you think through the experience.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-darkpurple text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-ink hover:shadow-xl transition-all duration-300"
        >
          Let&apos;s Connect
        </Link>
      </section>

    </main>
  );
}
