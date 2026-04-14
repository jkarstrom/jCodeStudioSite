import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UI/UX Design | jCode Studio",
  description:
    "UI/UX design work by Joan Karstrom — Figma prototypes, user flows, wireframes, and product design case studies.",
};

const tools = ["Figma", "FigJam", "Prototyping", "Wireframing", "User Research", "Design Systems", "Accessibility"];

const designWork = [
  {
    title: "Drink Diary",
    category: "Mobile App Design",
    description:
      "End-to-end product design for a social drink logging iOS app — from concept and user flows to high-fidelity Figma screens and a full component library.",
    tags: ["iOS", "Figma", "Mobile", "Design System"],
    accentColor: "#19350C",
    accentLight: "#687D31",
    link: "/design/drink-diary",
    linkLabel: "View Case Study",
  },
  {
    title: "The Safe Space for Students",
    category: "Web App Design",
    description:
      "Designed the full gamified UI for a mission-driven student engagement platform — including onboarding, dashboard, and gamification flows.",
    tags: ["Web", "Figma", "Gamification", "UX Research"],
    accentColor: "#1e3a5f",
    accentLight: "#4a7cb5",
    link: "/web-projects/safespace-students",
    linkLabel: "View Project",
  },
  {
    title: "GGRC Data Portal",
    category: "Data UX Design",
    description:
      "Designed an accessible, filterable crime data dashboard — balancing information density with clarity for a broad public audience.",
    tags: ["Dashboard", "Data Viz", "Accessibility", "Figma"],
    accentColor: "#2d1b4e",
    accentLight: "#7b5ea8",
    link: "/web-projects/ggrc-site",
    linkLabel: "View Project",
  },
];

export default function DesignPage() {
  return (
    <main className="w-full font-vietnam text-foreground">

      {/* Hero */}
      <section className="py-24 text-center px-6 bg-whitepurple relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink rounded-full opacity-20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 -left-10 w-36 h-36 bg-lilac rounded-full opacity-25 blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-darkpurple/10 text-darkpurple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          UI/UX Design
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink via-darkpurple to-lilac">
          Designed with Intent
        </h1>
        <p className="text-lg text-darkpurple max-w-2xl mx-auto leading-relaxed">
          Good design is invisible — it removes friction, guides attention, and makes complex things feel simple. Here&apos;s how I approach it.
        </p>
      </section>

      {/* Design Work */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(to bottom, #faf7ff, #ffffff, #fce7f3)' }}>
        <div className="max-w-6xl mx-auto space-y-8">
          {designWork.map((item, i) => (
            <div
              key={item.title}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-darkpurple hover:-translate-y-1"
            >
              <div className="md:grid md:grid-cols-[1fr_2fr]">
                {/* Color swatch side */}
                <div
                  className="h-48 md:h-auto min-h-[14rem] flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${item.accentColor}, ${item.accentLight})` }}
                >
                  <span className="font-fredoka font-bold text-8xl text-white/10 select-none absolute">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative z-10 font-fredoka font-bold text-2xl text-white/80 tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black group-hover:text-darkpurple transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gradient-to-r from-lightpurple to-pink px-3 py-1.5 rounded-full text-black border border-darkpurple/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-darkpurple font-medium group-hover:gap-3 transition-all duration-300 w-fit"
                  >
                    <span>{item.linkLabel}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-6 bg-darkpurple">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-6">Design Toolkit</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm font-medium text-white/70 border border-white/20 px-5 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-lilac text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-darkpurple mb-4">
          Need a Design Partner?
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
          Whether you&apos;re starting from scratch or refining an existing product, I&apos;d love to help you think through the experience.
        </p>
        <a
          href="/contact"
          className="inline-block bg-darkpurple text-white font-medium px-8 py-4 rounded-full shadow-lg hover:bg-pink hover:text-black transition-all duration-300 hover:shadow-xl"
        >
          Let&apos;s Connect
        </a>
      </section>

    </main>
  );
}
