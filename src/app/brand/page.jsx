import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Brand Guide | jCode Studio LLC™",
  description: "The visual identity, typography, color system, and brand voice of jCode Studio LLC™.",
};

/* ─── Brand Data ──────────────────────────────────────────────── */

const taglines = [
  {
    line: "Built to feel.\nDesigned to last.",
    tag: "Recommended",
    rationale: "Covers both halves of the studio — development and design — in one crisp contrast. "Feel" carries double meaning: emotional resonance and tactile quality. "Last" speaks to longevity and craft over shortcuts.",
    best: "Hero headlines, business cards, pitch decks",
    highlight: true,
  },
  {
    line: "Where creativity\ncompiles.",
    tag: "Playful",
    rationale: "A developer's pun that rewards the right audience. "Compiles" is a coding term that doubles as "comes together." Fun, clever, and memorable — especially with a technical or startup crowd.",
    best: "Social bios, conference badges, casual contexts",
    highlight: false,
  },
  {
    line: "Your vision,\nprecisely built.",
    tag: "Client-first",
    rationale: "Centers the client and positions jCode Studio as a precise, reliable execution partner. "Precisely" signals craft without arrogance. Works well in service-oriented or proposal contexts.",
    best: "Proposals, service pages, client-facing decks",
    highlight: false,
  },
];

const colorPalette = [
  {
    group: "Brand",
    swatches: [
      { name: "Brand", token: "brand", hex: "#5e4875", text: "white", role: "Primary — buttons, links, key UI" },
      { name: "Brand Vivid", token: "brand-vivid", hex: "#7B4FA0", text: "white", role: "CTAs, hover states, accents" },
      { name: "Brand Light", token: "brand-light", hex: "#faf7ff", text: "#5e4875", role: "Page backgrounds, hero sections" },
    ],
  },
  {
    group: "Warm Accents",
    swatches: [
      { name: "Pink", token: "pink", hex: "#eedbe6", text: "#5e4875", role: "Soft highlights, decorative blobs" },
      { name: "Rose", token: "rose", hex: "#f5d5e0", text: "#5e4875", role: "Card backgrounds, warm sections" },
      { name: "Blush", token: "blush", hex: "#fce4ec", text: "#5e4875", role: "Hover backgrounds, testimonials" },
      { name: "Peach", token: "peach", hex: "#ffe5d9", text: "#5e4875", role: "Warm section washes" },
    ],
  },
  {
    group: "Cool Accents",
    swatches: [
      { name: "Lavender", token: "lavender", hex: "#e8e0f0", text: "#5e4875", role: "Section backgrounds, card fills" },
      { name: "Lilac", token: "lilac", hex: "#d6d6e9", text: "#5e4875", role: "Dividers, borders, neutral fills" },
      { name: "Periwinkle", token: "periwinkle", hex: "#c5cae9", text: "#5e4875", role: "Illustrations, skill chips" },
      { name: "Sky", token: "sky", hex: "#d6eaf8", text: "#5e4875", role: "Info callouts, cool washes" },
    ],
  },
  {
    group: "Neutrals",
    swatches: [
      { name: "Ink", token: "ink", hex: "#2d2438", text: "white", role: "Body text, dark UI" },
      { name: "Cream", token: "cream", hex: "#F5F3EE", text: "#5e4875", role: "Warm off-white backgrounds" },
      { name: "Grey", token: "grey", hex: "#f1f2f2", text: "#5e4875", role: "Subtle section dividers" },
      { name: "White", token: "white", hex: "#ffffff", text: "#5e4875", role: "Card surfaces, clean bg" },
    ],
  },
];

const typeScale = [
  { label: "Display", class: "font-fredoka font-bold", size: "text-display", sample: "Creative Vision", note: "Fredoka Bold — hero moments only" },
  { label: "H1", class: "font-fredoka font-bold", size: "text-h1", sample: "Web Projects", note: "Fredoka Bold — page titles" },
  { label: "H2", class: "font-fredoka font-bold", size: "text-h2", sample: "What I can build", note: "Fredoka Bold — section headings" },
  { label: "H3", class: "font-fredoka font-bold", size: "text-h3", sample: "Frontend Development", note: "Fredoka Bold — card headings" },
  { label: "H4", class: "font-vietnam font-bold", size: "text-h4", sample: "Project Overview", note: "Be Vietnam Pro Bold — sub-headings" },
  { label: "Body LG", class: "font-vietnam font-normal", size: "text-body-lg", sample: "Accessible, responsive digital experiences crafted with care.", note: "Be Vietnam Pro 400 — intro text" },
  { label: "Body", class: "font-vietnam font-normal", size: "text-body-base", sample: "Clean, maintainable code built for the long haul — not just the demo.", note: "Be Vietnam Pro 400 — paragraphs" },
  { label: "Body SM", class: "font-vietnam font-normal", size: "text-body-sm", sample: "Updated March 2026 — Last reviewed by Joan Karstrom", note: "Be Vietnam Pro 400 — secondary text" },
  { label: "Caption", class: "font-vietnam font-medium", size: "text-caption", sample: "React · Next.js · Tailwind CSS · Figma", note: "Be Vietnam Pro 500 — tags, chips" },
  { label: "Label", class: "font-vietnam font-bold uppercase tracking-widest", size: "text-label", sample: "Featured Project", note: "Be Vietnam Pro 700 — eyebrow labels" },
];

const brandPillars = [
  {
    letter: "C",
    word: "Craft",
    body: "Everything at jCode Studio is made with deliberate attention. No templates, no shortcuts. Every pixel, every line of code, every word is considered.",
    color: "#5e4875",
    bg: "#faf7ff",
  },
  {
    letter: "C",
    word: "Clarity",
    body: "Complexity is inevitable. Confusion is not. The studio's job is to translate messy problems into clean, intuitive experiences — on screen and off.",
    color: "#7B4FA0",
    bg: "#f5f0fa",
  },
  {
    letter: "C",
    word: "Character",
    body: "jCode Studio work has a personality. Warm, a little playful, deeply professional. Never generic. Never forgettable.",
    color: "#ec4899",
    bg: "#fce7f3",
  },
  {
    letter: "C",
    word: "Connection",
    body: "Technology is always in service of people. Every project is ultimately about creating a moment of genuine connection between a user and an idea.",
    color: "#0ea5e9",
    bg: "#e0f2fe",
  },
];

const voiceExamples = [
  {
    context: "Hero headline",
    do: "Built to feel. Designed to last.",
    dont: "Welcome to jCode Studio — Your Full-Service Web Development Agency",
  },
  {
    context: "CTA button",
    do: "Let's Connect",
    dont: "Submit Inquiry",
  },
  {
    context: "Error state",
    do: "Something went sideways — let's fix it.",
    dont: "Error 500: Internal Server Error",
  },
  {
    context: "Project description",
    do: "A gamified platform that reached 15k students in its first week.",
    dont: "A web application built using React and Next.js for Crime Stoppers of Houston.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function BrandPage() {
  return (
    <main className="w-full font-vietnam text-foreground">

      {/* ── Cover ────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #2d2438 0%, #5e4875 60%, #7B4FA0 100%)" }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #e8e0f0, transparent 70%)" }} />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fce4ec, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mx-auto mb-8 w-20 h-20 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/logos/jCode Logo.png" alt="jCode Studio logo" width={80} height={80} className="object-cover w-full h-full" />
          </div>
          <p className="text-white/40 text-label uppercase tracking-widest mb-6">Brand Identity Guide</p>
          <h1 className="font-fredoka font-bold text-h1 text-white mb-4 leading-tight">
            jCode Studio LLC™
          </h1>
          <p className="text-white/60 text-body-lg max-w-xl mx-auto leading-relaxed">
            The visual language, voice, and values behind the studio — a living reference for how jCode Studio looks, sounds, and shows up.
          </p>
        </div>
      </section>

      {/* ── Taglines ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-3">01 — Tagline</p>
          <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 leading-tight">
            Brand Tagline
          </h2>
          <p className="text-body-lg text-darkpurple/60 max-w-2xl mb-16 leading-relaxed">
            Three directions — each with a distinct personality. The recommended option is deployed across the site. The others are available for specific contexts.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {taglines.map((t) => (
              <div
                key={t.tag}
                className="rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                style={t.highlight
                  ? { background: "linear-gradient(135deg, #5e4875, #7B4FA0)", boxShadow: "0 20px 60px rgba(94,72,117,0.25)" }
                  : { background: "#fff", border: "1px solid #e5e2ee" }
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-label uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                    style={t.highlight
                      ? { background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }
                      : { background: "#f5f0fa", color: "#7B4FA0" }
                    }
                  >{t.tag}</span>
                </div>

                <p
                  className="font-fredoka font-bold text-h3 leading-tight whitespace-pre-line"
                  style={{ color: t.highlight ? "#fff" : "#5e4875" }}
                >
                  {t.line}
                </p>

                <p className="text-body-sm leading-relaxed flex-1" style={{ color: t.highlight ? "rgba(255,255,255,0.65)" : "#6b7280" }}>
                  {t.rationale}
                </p>

                <div className="pt-3 border-t" style={{ borderColor: t.highlight ? "rgba(255,255,255,0.15)" : "#f0edf7" }}>
                  <p className="text-label uppercase tracking-widest mb-1" style={{ color: t.highlight ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>Best for</p>
                  <p className="text-caption" style={{ color: t.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{t.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Color System ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-3">02 — Color</p>
          <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 leading-tight">
            Color System
          </h2>
          <p className="text-body-lg text-darkpurple/60 max-w-2xl mb-16 leading-relaxed">
            A purple-forward palette rooted in warmth and creativity. Brand purple anchors every surface; the warm and cool accent families add depth and emotion.
          </p>

          <div className="space-y-12">
            {colorPalette.map((group) => (
              <div key={group.group}>
                <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-5">{group.group}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.swatches.map((s) => (
                    <div key={s.hex} className="group rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                      <div className="h-20 w-full relative" style={{ background: s.hex }}>
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="font-semibold text-body-sm text-darkpurple mb-0.5">{s.name}</p>
                        <p className="font-mono text-caption text-gray-400 mb-2">{s.hex}</p>
                        <p className="text-label text-gray-400 uppercase tracking-wide leading-relaxed">{s.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-3">03 — Typography</p>
          <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 leading-tight">
            Type System
          </h2>

          {/* Font intros */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-darkpurple/10">
              <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-4">Display & Headings</p>
              <p className="font-fredoka font-bold text-5xl text-darkpurple leading-tight mb-4">Fredoka</p>
              <p className="text-body-sm text-gray-500 leading-relaxed">
                Rounded, expressive, and full of personality. Fredoka is used exclusively at Bold weight for headlines and display moments. It gives the studio its warmth and approachability — the typeface equivalent of a firm handshake and a genuine smile.
              </p>
              <div className="flex gap-2 mt-5 flex-wrap">
                {["Bold 700 only", "Headlines", "Display", "CTAs"].map(t => (
                  <span key={t} className="text-label uppercase tracking-widest bg-darkpurple/8 text-darkpurple px-3 py-1 rounded-full" style={{ background: "#f0edf7" }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-darkpurple/10">
              <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-4">Body & UI</p>
              <p className="font-vietnam font-semibold text-4xl text-darkpurple leading-tight mb-4">Be Vietnam Pro</p>
              <p className="text-body-sm text-gray-500 leading-relaxed">
                Clean, modern, and highly legible at every weight. Be Vietnam Pro handles everything Fredoka doesn&apos;t — paragraphs, labels, navigation, tags, and UI text. Used across weights 400–700 to create hierarchy within running text.
              </p>
              <div className="flex gap-2 mt-5 flex-wrap">
                {["400 Regular", "500 Medium", "600 SemiBold", "700 Bold"].map(t => (
                  <span key={t} className="text-label uppercase tracking-widest text-darkpurple px-3 py-1 rounded-full" style={{ background: "#f0edf7" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Type scale */}
          <div className="space-y-0 divide-y divide-darkpurple/8">
            {typeScale.map((step) => (
              <div key={step.label} className="py-7 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 group hover:bg-white/60 -mx-4 px-4 rounded-2xl transition-colors duration-200">
                <div className="shrink-0 w-20">
                  <span className="text-label uppercase tracking-widest text-darkpurple/30 font-bold">{step.label}</span>
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className={`${step.class} ${step.size} text-darkpurple leading-none truncate`}>
                    {step.sample}
                  </p>
                </div>
                <div className="shrink-0 md:text-right">
                  <p className="text-caption text-gray-400">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Pillars ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-3">04 — Values</p>
          <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 leading-tight">
            The Four C&apos;s
          </h2>
          <p className="text-body-lg text-darkpurple/60 max-w-xl mb-16 leading-relaxed">
            Every decision at jCode Studio runs through these four principles. They&apos;re not aspirational — they&apos;re operational.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {brandPillars.map((p) => (
              <div key={p.word} className="rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300" style={{ background: p.bg, border: `1px solid ${p.color}20` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-fredoka font-bold text-3xl text-white shrink-0" style={{ background: p.color }}>
                    {p.letter}
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-h3 leading-none" style={{ color: p.color }}>{p.word}</h3>
                  </div>
                </div>
                <p className="text-body-base text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voice & Tone ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-label uppercase tracking-widest text-darkpurple/40 mb-3">05 — Voice</p>
          <h2 className="font-fredoka font-bold text-h2 text-darkpurple mb-4 leading-tight">
            Voice & Tone
          </h2>
          <p className="text-body-lg text-darkpurple/60 max-w-xl mb-6 leading-relaxed">
            jCode Studio writes like a skilled creative talking to a smart human — never a robot talking to a search engine.
          </p>

          {/* Voice attributes */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              { word: "Warm", opp: "not cold" },
              { word: "Direct", opp: "not blunt" },
              { word: "Confident", opp: "not arrogant" },
              { word: "Playful", opp: "not silly" },
              { word: "Human", opp: "not corporate" },
            ].map(({ word, opp }) => (
              <div key={word} className="bg-white rounded-2xl px-5 py-3 border border-darkpurple/10 flex items-center gap-3">
                <span className="font-fredoka font-bold text-h4 text-darkpurple">{word}</span>
                <span className="text-caption text-gray-400">{opp}</span>
              </div>
            ))}
          </div>

          {/* Do / Don't table */}
          <div className="space-y-4">
            {voiceExamples.map((ex) => (
              <div key={ex.context} className="bg-white rounded-2xl overflow-hidden border border-darkpurple/8">
                <div className="px-6 py-3 border-b border-darkpurple/8 bg-darkpurple/3">
                  <p className="text-label uppercase tracking-widest text-darkpurple/50 font-bold">{ex.context}</p>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-darkpurple/8">
                  <div className="px-6 py-5 flex gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <p className="text-body-sm text-gray-700 leading-relaxed">{ex.do}</p>
                  </div>
                  <div className="px-6 py-5 flex gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">✕</span>
                    <p className="text-body-sm text-gray-400 leading-relaxed line-through">{ex.dont}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage Summary ─────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2d2438, #5e4875)" }}>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-label uppercase tracking-widest text-white/30 mb-6">Living Document</p>
          <h2 className="font-fredoka font-bold text-h2 text-white mb-4 leading-tight">
            This guide grows with the studio.
          </h2>
          <p className="text-body-lg text-white/60 mb-10 leading-relaxed">
            As jCode Studio LLC™ evolves, so will this document. Colors get refined, voice gets sharper, and new components get documented here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block bg-white text-darkpurple font-semibold px-8 py-4 rounded-full hover:bg-lavender transition-all duration-300 shadow-lg">
              Back to Home
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
              Work Together
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
