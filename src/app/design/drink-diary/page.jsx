import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Drink Diary — UI/UX Case Study | jCode Studio",
  description:
    "The full UI/UX design story behind Drink Diary — user personas, wireframes, competitor analysis, color philosophy, and the crayon logo concept.",
};

/* ─── Data ─────────────────────────────────────────────────────── */

const personas = [
  {
    name: "Maya, 26",
    role: "The Aesthetic Documenter",
    bio: "Freelance photographer who lives for a beautiful latte. She photographs every drink before she sips it, posts to Instagram Stories, then forgets what it was called six months later.",
    goals: ["Remember where she found that perfect matcha", "Build a visual archive of her drink aesthetic", "Share discoveries with friends without losing them in DMs"],
    frustrations: ["Instagram is too noisy — drinks get buried", "Notes apps have no structure or beauty", "She wants a dedicated space that *gets* her"],
    color: "#687D31",
    bg: "#f0f5e8",
    initial: "M",
  },
  {
    name: "Jordan, 31",
    role: "The Curious Sipper",
    bio: "Product manager who travels for work and wants to remember the wines, cocktails, and craft beers he discovers. Has a running note in his phone that is completely unmanageable.",
    goals: ["Log drinks with enough detail to find them again", "Track spend and patterns over time", "Discover new things based on his taste history"],
    frustrations: ["Vivino is wine-only and dry", "Untappd feels like a sports bar app", "Generic note-taking has no drink-specific context"],
    color: "#6F4E37",
    bg: "#f5ede6",
    initial: "J",
  },
  {
    name: "Priya, 23",
    role: "The Social Butterfly",
    bio: "Recent grad who goes out with her friend group every weekend and always wants to know what everyone is drinking. She loves sharing recommendations but hates the friction of texting back and forth.",
    goals: ["See what her friends are ordering in real time", "Give and receive drink recommendations easily", "Feel like there is a home for her drink personality"],
    frustrations: ["No app combines logging *and* social in one", "Privacy concerns with apps that ask for too much", "Wants a vibe, not a database"],
    color: "#9B5E7A",
    bg: "#f5eaf0",
    initial: "P",
  },
];

const competitors = [
  {
    name: "Vivino",
    icon: "🍷",
    what: "The gold standard for wine logging with a massive community and label scanner.",
    gap: "Wine only. The UI feels like a wine shop catalogue — functional but cold. Zero social warmth, and no room for coffee, cocktails, or anything outside wine.",
    score: { social: 2, visual: 3, breadth: 1, vibe: 2 },
  },
  {
    name: "Untappd",
    icon: "🍺",
    what: "Huge community for craft beer with badges, check-ins, and venue discovery.",
    gap: "Beer only, and the design language feels dated and masculine. The badge system is fun but overwhelming — it prioritizes volume over experience.",
    score: { social: 4, visual: 2, breadth: 1, vibe: 2 },
  },
  {
    name: "Instagram",
    icon: "📸",
    what: "Where most people currently share their drinks — massive reach, beautiful format.",
    gap: "Drinks get buried in the algorithm and your own feed. There's no structure, no memory, no way to find that amazing negroni you posted 14 months ago. It's not built for this.",
    score: { social: 5, visual: 5, breadth: 5, vibe: 3 },
  },
  {
    name: "Drink Diary",
    icon: "📖",
    what: "Visual, social, and personal — built for every drink, every person.",
    gap: null,
    score: { social: 5, visual: 5, breadth: 5, vibe: 5 },
    highlight: true,
  },
];

const drinkDiaryGreen = "#19350C";
const drinkDiaryOlive = "#687D31";

/* ─── Small helpers ─────────────────────────────────────────────── */

function ScoreBar({ label, value, highlight }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-16 shrink-0 font-medium" style={{ color: highlight ? "#fff" : "#6b7280" }}>{label}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: highlight ? "rgba(255,255,255,0.15)" : "#e5e7eb" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${value * 20}%`,
            background: highlight ? "#a8c96e" : drinkDiaryOlive,
          }}
        />
      </div>
      <span className="w-4 text-right font-mono" style={{ color: highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>{value}/5</span>
    </div>
  );
}

ScoreBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  highlight: PropTypes.bool,
};

/* ─── Wireframe phone component ─────────────────────────────────── */

function WireframePhone({ label, children }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="relative w-[160px] rounded-[28px] border-[3px] border-[#2d2d2d]/30 bg-white shadow-xl overflow-hidden" style={{ height: 320 }}>
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#2d2d2d]/20 rounded-full z-10" />
        <div className="pt-7 px-3 pb-3 h-full flex flex-col gap-2 overflow-hidden">
          {children}
        </div>
      </div>
      <span className="text-xs font-medium text-[#19350C]/60 font-vietnam tracking-wide">{label}</span>
    </div>
  );
}

WireframePhone.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/* Wireframe primitives */
const WF = {
  bar: ({ w = "w-full", h = "h-2.5", rounded = "rounded", opacity = "bg-gray-200" } = {}) => (
    <div className={`${w} ${h} ${rounded} ${opacity} shrink-0`} />
  ),
  img: ({ h = "h-20", label = "" } = {}) => (
    <div className={`w-full ${h} rounded-xl bg-gray-100 shrink-0 flex items-center justify-center`}>
      <span className="text-[9px] text-gray-400 font-vietnam">{label}</span>
    </div>
  ),
  row: ({ children } = {}) => <div className="flex items-center gap-1.5">{children}</div>,
  circle: ({ size = "w-6 h-6", color = "bg-gray-200" } = {}) => <div className={`${size} rounded-full ${color} shrink-0`} />,
  pill: ({ w = "w-12", color = "bg-gray-200" } = {}) => <div className={`${w} h-4 rounded-full ${color} shrink-0`} />,
  card: ({ children, color = "bg-gray-50" } = {}) => <div className={`w-full rounded-xl ${color} p-2 shrink-0 flex flex-col gap-1.5`}>{children}</div>,
  spacer: () => <div className="flex-1" />,
  dot: ({ color = "bg-gray-300" } = {}) => <div className={`w-1 h-1 rounded-full ${color}`} />,
};

/* ─── Page ──────────────────────────────────────────────────────── */

export default function DrinkDiaryCaseStudy() {
  return (
    <main className="w-full font-vietnam text-foreground overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden text-center" style={{ background: `linear-gradient(135deg, ${drinkDiaryGreen} 0%, #2d4a1a 60%, #3a5a20 100%)` }}>
        {/* Blob orbs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${drinkDiaryOlive}, transparent 70%)` }} />
        <div className="absolute bottom-0 -left-12 w-56 h-56 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #a8c96e, transparent 70%)" }} />

        {/* Back link */}
        <div className="absolute top-6 left-6">
          <Link href="/design" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/70 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all">
            ← Design
          </Link>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            UI/UX Case Study
          </div>

          {/* Crayon-style logo mark */}
          <div className="relative mx-auto mb-8 w-24 h-24 rounded-[22px] overflow-hidden shadow-2xl">
            <Image src="/images/icon.png" alt="Drink Diary icon" fill className="object-cover" />
          </div>

          <h1 className="font-fredoka font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
            Drink Diary
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            A deep dive into the design thinking behind a social drink logging app —
            from messy first sketches to a final product that feels like your favourite corner café.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {["iOS Mobile App", "End-to-End Design", "Figma", "React Native", "User Research"].map(t => (
              <span key={t} className="text-xs font-medium bg-white/10 text-white/70 border border-white/20 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Brief ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>The Brief</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: drinkDiaryGreen }}>
            Everyone has a drink<br />they wish they remembered.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed text-lg">
            <p>
              There&apos;s no good place to log a beautiful matcha latte, a natural wine you found at a farmers market, or the perfect espresso from that tiny shop in Barcelona — and then actually <em>find it again</em>. Instagram buries it. Notes apps forget the context. Vivino only cares about wine.
            </p>
            <p>
              Drink Diary was designed to fill that gap: a personal, visual, and social log that works for <em>every</em> drink, for everyone — built with the warmth of a handwritten journal and the usability of a modern app.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Crayon Logo Story ─────────────────────────────────── */}
      <section className="py-24 px-6 overflow-hidden relative" style={{ background: drinkDiaryGreen }}>
        {/* Grain texture overlay suggestion */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>Logo Concept</p>
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              A crayon.<br />On purpose.
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              The Drink Diary logo was designed to feel <em>made</em>, not manufactured. The mark is intentionally imperfect — edges that don&apos;t quite close, fills that bleed slightly outside the lines, a texture that says <em>someone drew this</em>.
            </p>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              That&apos;s the crayon philosophy. A crayon drawing has character that a laser print never will. It&apos;s warm, a little messy, and completely human. It&apos;s the visual equivalent of a handwritten order on a chalkboard at your favourite neighbourhood café.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              In a world of slick, rounded app icons that all look the same, Drink Diary&apos;s icon is meant to make you pause — and smile. It looks like it belongs on a coffee shop pin board, doodled on a napkin, or stamped on a tote bag.
            </p>
          </div>

          {/* Visual: icon + descriptors */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-[36px] overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 80px rgba(168,201,110,0.2)" }}>
                <Image src="/images/icon.png" alt="Drink Diary icon" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              {/* Descriptive callouts */}
              <div className="absolute -right-24 top-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">imperfect edges ↙</div>
              <div className="absolute -left-28 bottom-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">↘ handmade texture</div>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { word: "Quirky", desc: "Not corporate. Never sterile." },
                { word: "Warm", desc: "Like a favourite mug." },
                { word: "Cozy", desc: "Corner booth energy." },
                { word: "Honest", desc: "What you see is what you get." },
              ].map(({ word, desc }) => (
                <div key={word} className="bg-white/8 border border-white/10 rounded-2xl p-4 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <p className="font-fredoka font-bold text-xl text-white mb-1">{word}</p>
                  <p className="text-white/50 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Color Story ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>Color Philosophy</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: drinkDiaryGreen }}>
            Why green and brown?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            Every color in Drink Diary was chosen to evoke a feeling, not just look nice.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Dark green */}
            <div className="rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{ background: drinkDiaryGreen }}>
                <p className="font-fredoka font-bold text-7xl text-white/10 select-none absolute">G</p>
                <p className="font-mono text-sm text-white/50 relative z-10">#19350C</p>
              </div>
              <div className="p-6 bg-[#f5f4f0]">
                <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: drinkDiaryGreen }}>Forest Green</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deep, grounding, and ancient — the color of old forest floors and antique botanical prints. It anchors the app and signals that Drink Diary takes your taste seriously, without taking itself too seriously.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Earthy", "Trustworthy", "Natural"].map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{ background: drinkDiaryGreen }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Olive green */}
            <div className="rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{ background: drinkDiaryOlive }}>
                <p className="font-fredoka font-bold text-7xl text-white/10 select-none absolute">O</p>
                <p className="font-mono text-sm text-white/50 relative z-10">#687D31</p>
              </div>
              <div className="p-6 bg-[#f5f4f0]">
                <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: drinkDiaryOlive }}>Olive & Sage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Where forest green is depth, olive is light. It&apos;s the color of new growth on old vines, of herbs hanging in a kitchen window, of the chalkboard specials at a farmers market. It brings life and warmth.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Fresh", "Botanical", "Alive"].map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{ background: drinkDiaryOlive }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Brown / coffee */}
            <div className="rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{ background: "#6F4E37" }}>
                <p className="font-fredoka font-bold text-7xl text-white/10 select-none absolute">B</p>
                <p className="font-mono text-sm text-white/50 relative z-10">#6F4E37</p>
              </div>
              <div className="p-6 bg-[#f5f4f0]">
                <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: "#6F4E37" }}>Coffee & Clay</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Coffee brown is the heartbeat of the app — warm, familiar, and rooted in the ritual of drinking. It appears in drink category tags and illustrations, anchoring every screen to the physical act of holding a warm mug.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Cozy", "Familiar", "Ritual"].map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full text-white" style={{ background: "#6F4E37" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Combined palette */}
          <div className="mt-12 rounded-3xl overflow-hidden h-16 flex shadow-lg">
            {[
              ["#19350C", "Forest"],
              ["#2d4a1a", ""],
              ["#687D31", "Olive"],
              ["#a8c96e", ""],
              ["#6F4E37", "Coffee"],
              ["#A0522D", ""],
              ["#D4A030", "Amber"],
              ["#f5f0e8", "Cream"],
            ].map(([hex, label]) => (
              <div key={hex} className="flex-1 relative group" style={{ background: hex }}>
                {label && (
                  <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 text-white text-[9px] text-center py-1 font-mono">
                    {label}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 font-vietnam">Full palette — hover each swatch</p>
        </div>
      </section>

      {/* ── User Personas ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f5f4f0" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>User Research</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: drinkDiaryGreen }}>
            Who is Drink Diary for?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            Three personas emerged from user interviews and competitive research — each with a different relationship to drinks and discovery.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="px-6 pt-8 pb-6 flex items-center gap-4" style={{ background: p.bg }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-fredoka font-bold text-2xl text-white shrink-0" style={{ background: p.color }}>
                    {p.initial}
                  </div>
                  <div>
                    <p className="font-fredoka font-bold text-xl" style={{ color: p.color }}>{p.name}</p>
                    <p className="text-xs font-semibold text-gray-500 tracking-wide">{p.role}</p>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col gap-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{p.bio}</p>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: p.color }}>Goals</p>
                    <ul className="space-y-1.5">
                      {p.goals.map(g => (
                        <li key={g} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 w-3 h-3 rounded-full" style={{ background: p.color, opacity: 0.5 }} />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Frustrations</p>
                    <ul className="space-y-1.5">
                      {p.frustrations.map(f => (
                        <li key={f} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="mt-0.5 shrink-0">✕</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wireframes ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>Design Process</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: drinkDiaryGreen }}>
            From sketch to screen
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            Wireframes were kept intentionally rough — the goal was flow and hierarchy, not aesthetics. Aesthetics came after the structure was proven.
          </p>

          {/* Wireframe row */}
          <div className="flex gap-8 overflow-x-auto pb-4 justify-start md:justify-center">

            {/* Onboarding */}
            <WireframePhone label="Onboarding">
              <WF.img h="h-16" label="splash art" />
              <WF.spacer />
              <WF.bar w="w-3/4" h="h-4" rounded="rounded-lg" opacity="bg-gray-300 mx-auto" />
              <WF.bar w="w-1/2" h="h-2.5" opacity="bg-gray-200 mx-auto" />
              <div className="mt-2 w-full h-8 rounded-xl bg-gray-800" />
              <div className="w-full h-8 rounded-xl border-2 border-gray-200" />
            </WireframePhone>

            {/* Home Feed */}
            <WireframePhone label="Home Feed">
              <WF.row>
                <WF.circle size="w-7 h-7" color="bg-gray-300" />
                <WF.bar w="w-16" h="h-2.5" />
                <WF.spacer />
                <WF.circle size="w-7 h-7" color="bg-gray-200" />
              </WF.row>
              {/* Feed items */}
              {[1, 2].map(i => (
                <WF.card key={i}>
                  <WF.row>
                    <WF.circle size="w-5 h-5" color="bg-gray-300" />
                    <div className="flex flex-col gap-1 flex-1">
                      <WF.bar w="w-16" h="h-1.5" />
                      <WF.bar w="w-10" h="h-1.5" opacity="bg-gray-100" />
                    </div>
                  </WF.row>
                  <WF.img h="h-14" label="" />
                  <WF.bar w="w-3/4" h="h-1.5" />
                  <WF.bar w="w-1/2" h="h-1.5" opacity="bg-gray-100" />
                </WF.card>
              ))}
            </WireframePhone>

            {/* Log a Drink */}
            <WireframePhone label="Log a Drink">
              <WF.bar w="w-1/2" h="h-3" rounded="rounded-lg" opacity="bg-gray-300" />
              <WF.img h="h-24" label="photo area" />
              <WF.bar w="w-full" h="h-6" rounded="rounded-lg" opacity="bg-gray-100" />
              {/* Category row */}
              <div className="flex gap-1.5 flex-wrap">
                {["☕", "🍵", "🍷", "🍸"].map(e => (
                  <div key={e} className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-sm">{e}</div>
                ))}
              </div>
              <WF.bar w="full" h="h-6" rounded="rounded-lg" opacity="bg-gray-100" />
              <WF.spacer />
              <div className="w-full h-8 rounded-xl bg-gray-800" />
            </WireframePhone>

            {/* Stats */}
            <WireframePhone label="Stats">
              <WF.bar w="w-1/2" h="h-3" rounded="rounded-lg" opacity="bg-gray-300" />
              {/* Toggle */}
              <div className="flex w-full h-6 rounded-full bg-gray-100 overflow-hidden">
                <div className="flex-1 bg-gray-300 rounded-full" />
                <div className="flex-1" />
                <div className="flex-1" />
              </div>
              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-1.5">
                {[1, 2].map(i => (
                  <div key={i} className="bg-gray-50 rounded-xl p-2">
                    <WF.bar w="w-full" h="h-2" opacity="bg-gray-200" />
                    <WF.bar w="w-8" h="h-5" rounded="rounded-md" opacity="bg-gray-300 mt-1" />
                  </div>
                ))}
              </div>
              {/* Bar chart */}
              <div className="flex items-end gap-1 h-14 w-full">
                {[60, 40, 80, 55, 70, 45, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-gray-200" style={{ height: `${h}%` }} />
                ))}
              </div>
            </WireframePhone>

            {/* Profile */}
            <WireframePhone label="Profile">
              <div className="flex flex-col items-center gap-1.5">
                <WF.circle size="w-12 h-12" color="bg-gray-300" />
                <WF.bar w="w-16" h="h-2.5" opacity="bg-gray-300 mx-auto" />
                <WF.bar w="w-10" h="h-1.5" opacity="bg-gray-200 mx-auto" />
              </div>
              {/* Stats row */}
              <div className="flex justify-around">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <WF.bar w="w-6" h="h-3" opacity="bg-gray-300" />
                    <WF.bar w="w-8" h="h-1.5" opacity="bg-gray-100" />
                  </div>
                ))}
              </div>
              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-md bg-gray-100" />
                ))}
              </div>
            </WireframePhone>

          </div>
          <p className="text-center text-xs text-gray-400 mt-6 font-vietnam">Low-fidelity wireframes — structural layout, no visual polish</p>
        </div>
      </section>

      {/* ── Competitor Analysis ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f5f4f0" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>Competitive Landscape</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: drinkDiaryGreen }}>
            What&apos;s already out there — and where it falls short
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            The market has excellent vertical solutions. But no app combines broad drink coverage, beautiful visual logging, and a social layer that doesn&apos;t feel bolted on.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {competitors.map((c) => (
              <div
                key={c.name}
                className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={c.highlight
                  ? { background: `linear-gradient(135deg, ${drinkDiaryGreen}, #2d4a1a)`, boxShadow: `0 20px 60px rgba(25,53,12,0.25)` }
                  : { background: "#fff", border: "1px solid #e5e5e0" }
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <h3 className="font-fredoka font-bold text-xl" style={{ color: c.highlight ? "#fff" : drinkDiaryGreen }}>
                      {c.name}
                      {c.highlight && <span className="ml-2 text-xs font-vietnam bg-white/15 text-white/70 px-2 py-0.5 rounded-full align-middle">this app</span>}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: c.highlight ? "rgba(255,255,255,0.7)" : "#6b7280" }}>{c.what}</p>
                {c.gap && <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#b45309" }}>Gap: {c.gap}</p>}
                <div className="space-y-2.5">
                  <ScoreBar label="Social" value={c.score.social} highlight={c.highlight} />
                  <ScoreBar label="Visual" value={c.score.visual} highlight={c.highlight} />
                  <ScoreBar label="Breadth" value={c.score.breadth} highlight={c.highlight} />
                  <ScoreBar label="Vibe" value={c.score.vibe} highlight={c.highlight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Principles ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: drinkDiaryOlive }}>Design Principles</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-16 leading-tight" style={{ color: drinkDiaryGreen }}>
            The rules that shaped every screen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "01", title: "Cozy over clinical", body: "The app should feel like sitting in your favourite café, not filling out a spreadsheet. Warmth, rounded corners, and earthy tones over sharp edges and cold greys." },
              { n: "02", title: "Photo first", body: "The photo is the centrepiece of every log. Everything else — category, location, price — is context that supports the image, not the other way around." },
              { n: "03", title: "Social without oversharing", body: "Your phone number lets you sign in. Your username is what the world sees. Privacy by default, connection by choice. The feed shows vibes, not personal data." },
              { n: "04", title: "Fast logging wins", body: "If logging a drink takes more than 30 seconds, users stop doing it. Every flow was optimised until it hit that target. Speed is a design value, not just engineering." },
              { n: "05", title: "Delight in the details", body: "Background removal on-device. Staggered gallery animations. Micro-haptics on log confirmation. None of these are required — all of them matter." },
              { n: "06", title: "Every drink counts", body: "Matcha, beer, kombucha, orange juice — Drink Diary doesn&apos;t have a hierarchy of worthy drinks. The UI treats every entry with the same care." },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-5 group">
                <div className="shrink-0 font-fredoka font-bold text-3xl leading-none mt-1" style={{ color: drinkDiaryOlive, opacity: 0.4 }}>{n}</div>
                <div>
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: drinkDiaryGreen }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTAs ─────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${drinkDiaryGreen}, #2d4a1a)` }}>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse, #a8c96e, transparent 70%)" }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            See the finished product
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            From crayon logo to final screens — explore the live app page or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apps/drink-diary"
              className="inline-block font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 bg-white text-[#19350C] hover:bg-[#f0f5e8]"
            >
              View App Page →
            </Link>
            <Link
              href="/design"
              className="inline-block font-semibold px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              ← All Design Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
