import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export const metadata = {
  title: "The Safe Space for Students — UI/UX Case Study | jCode Studio",
  description:
    "The full design story behind The Safe Space for Students — a gamified, child-first web app built for Crime Stoppers of Houston. Space theme, safety education, and 15k+ users in week one.",
};

/* ─── Brand tokens ─────────────────────────────────────────────── */

const spaceNavy   = "#0B1A3A";
const starBlue    = "#1E3A5F";
const cosmicBlue  = "#4A7CB5";
const nebulaGlow  = "#2D4A8A";
const starGold    = "#F59E0B";
const launchGreen = "#059669";
const crimeRed    = "#DC2626";

/* ─── Data ─────────────────────────────────────────────────────── */

const personas = [
  {
    name: "Marcus, 9",
    role: "The Explorer",
    bio: "Third grader who loves video games and anything with points, badges, and rewards. His attention span is short but his competitive streak is long. He needs to feel like he’s winning.",
    goals: ["Earn every badge on the platform", "Beat his friends’ scores", "Find out what’s behind the locked bonus content"],
    frustrations: ["Walls of text — he’ll click away in 4 seconds", "No immediate feedback or reward", "Anything that feels like homework"],
    color: cosmicBlue,
    bg: "#EFF6FF",
    initial: "M",
  },
  {
    name: "Aisha, 13",
    role: "The Helper",
    bio: "Middle schooler who actually cares about her community and takes safety seriously, but would never admit it out loud. She uses the platform to help her younger siblings and shares resources on her school group chat.",
    goals: ["Understand how to handle unsafe situations", "Share resources without it feeling ‘cringe’", "Feel like she’s making an impact"],
    frustrations: ["Platforms that feel babyish", "Preachy, lecture-y tone", "No way to share or interact with friends"],
    color: "#7C3AED",
    bg: "#F5F3FF",
    initial: "A",
  },
  {
    name: "Coach Rivera",
    role: "The Facilitator",
    bio: "PE teacher and after-school program coordinator at a Houston middle school. He uses Safe Space with his students as a structured activity and reports engagement numbers to his principal.",
    goals: ["Something students will actually engage with", "Easy to assign and track class-wide progress", "Curriculum-aligned safety content"],
    frustrations: ["Programs that require hours of setup", "Engagement metrics he can’t share upward", "Anything that looks like a 1990s worksheet"],
    color: "#B45309",
    bg: "#FFFBEB",
    initial: "R",
  },
];

const principles = [
  {
    n: "01",
    title: "The name came first",
    body: "Before a single pixel was drawn, the name “Safe Space” existed. That name is what unlocked everything. Safe → protection → cosmos → outer space. The space metaphor wasn’t a theme we applied — it was a world that the name already lived in.",
  },
  {
    n: "02",
    title: "Children are not small adults",
    body: "Every interaction was designed for a child’s mental model. Larger tap targets. Fewer words. Progress celebrated loudly. Iconography before labels. The design assumes no prior experience with anything — and rewards curiosity immediately.",
  },
  {
    n: "03",
    title: "Gamification with purpose",
    body: "Points, badges, and streaks aren’t decoration. Each mechanic is tied directly to a learning outcome. You don’t earn a badge for visiting — you earn it for completing a safety topic. Motivation and education are the same loop.",
  },
  {
    n: "04",
    title: "Trust through brand alignment",
    body: "Crime Stoppers of Houston’s red and yellow were deliberately present in the design. Institutional color anchors trust. Students (and parents) see the brand and understand this is a real, serious program — wrapped in a delightful experience.",
  },
  {
    n: "05",
    title: "Interactive over passive",
    body: "Static content teaches nothing at this age. Every resource is wrapped in an interaction: a quiz, a drag-and-drop, a scenario choice. The platform asks “what would you do?” more than it says “here’s what to do.”",
  },
  {
    n: "06",
    title: "Celebrate completion loudly",
    body: "Confetti. Stars. Sound. Animations on unlock. A child completing a safety module deserves a moment — and that moment reinforces the behavior. Delight is a design requirement, not a nice-to-have.",
  },
];

const safetyTopics = [
  { icon: "🚨", label: "Bullying", color: "#DC2626" },
  { icon: "🔑", label: "Online Safety", color: "#7C3AED" },
  { icon: "🚑", label: "Emergency Response", color: "#EA580C" },
  { icon: "🤝", label: "Conflict Resolution", color: "#059669" },
  { icon: "🗣️", label: "Speaking Up", color: cosmicBlue },
  { icon: "📞", label: "Trusted Adults", color: starGold },
];

/* ─── Wireframe browser component ──────────────────────────────── */

function WireframeBrowser({ label, children }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="w-[240px] rounded-xl border-2 border-[#2d2d2d]/20 bg-white shadow-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="h-7 bg-gray-100 border-b border-gray-200 flex items-center gap-1.5 px-3">
          <div className="w-2 h-2 rounded-full bg-red-300" />
          <div className="w-2 h-2 rounded-full bg-yellow-300" />
          <div className="w-2 h-2 rounded-full bg-green-300" />
          <div className="flex-1 mx-2 h-3 bg-gray-200 rounded-sm" />
        </div>
        <div className="p-3 flex flex-col gap-2" style={{ minHeight: 240 }}>
          {children}
        </div>
      </div>
      <span className="text-xs font-medium font-vietnam tracking-wide" style={{ color: `${spaceNavy}80` }}>{label}</span>
    </div>
  );
}

WireframeBrowser.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/* Wireframe primitives */
const WF = {
  bar: ({ w = "w-full", h = "h-2", rounded = "rounded", color = "bg-gray-200" } = {}) => (
    <div className={`${w} ${h} ${rounded} ${color} shrink-0`} />
  ),
  box: ({ h = "h-12", label = "", color = "bg-gray-100" } = {}) => (
    <div className={`w-full ${h} rounded-lg ${color} shrink-0 flex items-center justify-center`}>
      <span className="text-[9px] text-gray-400 font-vietnam">{label}</span>
    </div>
  ),
  row: ({ children } = {}) => <div className="flex items-center gap-1.5 shrink-0">{children}</div>,
  badge: ({ color = "bg-gray-200", w = "w-10" } = {}) => <div className={`${w} h-4 rounded-full ${color} shrink-0`} />,
  grid: ({ cols = 3, items = 6, color = "bg-gray-100", h = "h-10" } = {}) => (
    <div className={`grid gap-1.5 shrink-0`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className={`${h} rounded-lg ${color}`} />
      ))}
    </div>
  ),
  nav: () => (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 shrink-0">
      <div className="w-12 h-3 rounded bg-gray-300" />
      <div className="flex gap-2">
        {[1, 2, 3].map(i => <div key={i} className="w-8 h-2 rounded bg-gray-200" />)}
      </div>
    </div>
  ),
  progress: ({ pct = 60, color = "bg-blue-300" } = {}) => (
    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden shrink-0">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
    </div>
  ),
  spacer: () => <div className="flex-1" />,
};

/* ─── Score bar ─────────────────────────────────────────────────── */

function ScoreBar({ label, value, highlight }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-20 shrink-0 font-medium" style={{ color: highlight ? "#fff" : "#6b7280" }}>{label}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: highlight ? "rgba(255,255,255,0.15)" : "#e5e7eb" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value * 20}%`, background: highlight ? starGold : cosmicBlue }}
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

/* ─── Star field decoration ─────────────────────────────────────── */
const stars = [
  { x: "10%", y: "15%", s: 2 }, { x: "25%", y: "8%", s: 1.5 }, { x: "40%", y: "20%", s: 1 },
  { x: "60%", y: "10%", s: 2.5 }, { x: "75%", y: "25%", s: 1 }, { x: "88%", y: "12%", s: 2 },
  { x: "15%", y: "60%", s: 1 }, { x: "50%", y: "50%", s: 1.5 }, { x: "82%", y: "55%", s: 1 },
  { x: "35%", y: "80%", s: 2 }, { x: "65%", y: "75%", s: 1.5 }, { x: "92%", y: "80%", s: 1 },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function SafeSpaceCaseStudy() {
  return (
    <main className="w-full font-vietnam text-foreground overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 overflow-hidden text-center"
        style={{ background: `linear-gradient(135deg, ${spaceNavy} 0%, ${starBlue} 60%, ${nebulaGlow} 100%)` }}
      >
        {/* Star field */}
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none animate-pulse"
            style={{ left: s.x, top: s.y, width: s.s, height: s.s, opacity: 0.5 + (i % 3) * 0.2, animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Cosmic glow orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${cosmicBlue}, transparent 70%)` }} />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${starGold}, transparent 70%)` }} />

        {/* Back link */}
        <div className="absolute top-6 left-6">
          <Link
            href="/design"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/70 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all"
          >
            ← Design
          </Link>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            UI/UX Case Study
          </div>

          {/* Space emblem */}
          <div className="mx-auto mb-8 w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-2xl border-2 border-white/20" style={{ background: `radial-gradient(circle at 35% 35%, ${cosmicBlue}, ${spaceNavy})`, boxShadow: `0 0 60px rgba(74,124,181,0.3)` }}>
            🚀
          </div>

          <h1 className="font-fredoka font-bold text-4xl md:text-6xl text-white mb-2 leading-tight">
            The Safe Space
          </h1>
          <h2 className="font-fredoka font-bold text-2xl md:text-3xl mb-6 leading-tight" style={{ color: starGold }}>
            for Students
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            A gamified, child-first safety education platform contracted by Crime Stoppers of Houston &amp; The John M. O&apos;Quinn Foundation.
            Designed for the cosmos. Built for kids. 15,000+ users in week one.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Web App", "Gamification", "Child UX", "Figma", "Next.js", "Crime Stoppers of Houston"].map(t => (
              <span key={t} className="text-xs font-medium bg-white/10 text-white/70 border border-white/20 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Name Came First ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F8FAFF" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: cosmicBlue }}>Origin Story</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: spaceNavy }}>
            The name came first.<br />Everything else followed.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed text-lg">
            <p>
              Before any wireframe, before any color palette, before a single component — the project had a name: <em>Safe Space for Students</em>. That name wasn&apos;t a descriptor. It was a universe.
            </p>
            <p>
              Safe &rarr; protection &rarr; shelter &rarr; cosmos. The word &ldquo;space&rdquo; was already there. It didn&apos;t take a leap of creativity — it took the courage to commit fully to what the name was already pointing at. So we launched into orbit and never looked back.
            </p>
          </div>

          {/* Name breakdown visual */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            {[
              { word: '"Safe"', sub: "Protection. Shelter. Trust.", color: launchGreen },
              { word: "→", sub: "", color: "#9ca3af" },
              { word: '"Space"', sub: "Cosmos. Exploration. Wonder.", color: cosmicBlue },
              { word: "→", sub: "", color: "#9ca3af" },
              { word: "🚀 LAUNCH", sub: "The whole theme, born from two words.", color: starGold },
            ].map(({ word, sub, color }, i) => (
              <div key={i} className={`${word === "→" ? "text-2xl text-gray-300 hidden sm:block" : "flex-1 min-w-[140px] bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300"}`}>
                {word !== "→" && (
                  <>
                    <p className="font-fredoka font-bold text-xl mb-2" style={{ color }}>{word}</p>
                    <p className="text-xs text-gray-400 leading-snug">{sub}</p>
                  </>
                )}
                {word === "→" && word}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Color Philosophy ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: spaceNavy }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: starGold }}>Color Philosophy</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight text-white">
            Two systems in one palette.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mb-16 leading-relaxed">
            The colors had to serve two masters: the excitement of the space theme and the institutional trust of Crime Stoppers of Houston. Both had to win.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Space palette */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="h-8 flex items-center px-5" style={{ background: cosmicBlue }}>
                <span className="text-xs font-bold tracking-widest uppercase text-white/70">Space System</span>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-b-3xl backdrop-blur-sm">
                {[
                  { hex: spaceNavy, name: "Deep Space", desc: "The primary background. Rich, dark, authoritative — the night sky that makes every star pop." },
                  { hex: cosmicBlue, name: "Cosmic Blue", desc: "The interactive layer. Buttons, links, hover states — familiar blue signals safety and action." },
                  { hex: starGold, name: "Star Gold", desc: "Rewards, badges, and achievement moments. Gold = accomplishment in every culture." },
                ].map(({ hex, name, desc }) => (
                  <div key={hex} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl shrink-0 shadow-lg" style={{ background: hex }} />
                    <div>
                      <p className="font-semibold text-white text-sm">{name}</p>
                      <p className="text-white/40 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand / trust palette */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="h-8 flex items-center px-5" style={{ background: crimeRed }}>
                <span className="text-xs font-bold tracking-widest uppercase text-white/70">Trust System</span>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-b-3xl backdrop-blur-sm">
                {[
                  { hex: crimeRed, name: "Crime Stoppers Red", desc: "Used sparingly for institutional anchoring. It signals that a real, trusted organization is behind this — not just an app." },
                  { hex: launchGreen, name: "Safe Green", desc: "Completion states, correct answers, safe behavior moments. Green = you did it right." },
                  { hex: "#FFFFFF", name: "Pure White", desc: "Content legibility for children. No off-whites, no grey text — maximum contrast for young eyes." },
                ].map(({ hex, name, desc }) => (
                  <div key={hex} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl shrink-0 shadow-lg border border-white/10" style={{ background: hex }} />
                    <div>
                      <p className="font-semibold text-white text-sm">{name}</p>
                      <p className="text-white/40 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full palette strip */}
          <div className="mt-10 rounded-2xl overflow-hidden h-12 flex shadow-xl">
            {[spaceNavy, starBlue, nebulaGlow, cosmicBlue, "#7C3AED", crimeRed, "#EA580C", starGold, launchGreen, "#ECFDF5"].map((hex) => (
              <div key={hex} className="flex-1" style={{ background: hex }} />
            ))}
          </div>
          <p className="text-center text-xs mt-3 font-vietnam" style={{ color: "rgba(255,255,255,0.3)" }}>Full design palette — space system + trust system combined</p>
        </div>
      </section>

      {/* ── Gamification System ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: cosmicBlue }}>Gamification Design</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: spaceNavy }}>
            Make safety feel like a game.<br />Because it has to.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            You cannot lecture a nine-year-old into caring about online safety. You have to earn their attention — and then use every second of it intentionally.
          </p>

          {/* Safety topic galaxy */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-6 text-gray-400">Safety Topics — the mission areas</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {safetyTopics.map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 border-2 border-transparent hover:-translate-y-1 transition-transform duration-300 cursor-default flex items-center gap-3"
                  style={{ background: `${color}12`, borderColor: `${color}30` }}
                >
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <p className="font-fredoka font-bold text-base" style={{ color }}>{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Mission area</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gamification mechanics */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "⭐",
                title: "Points",
                body: "Every completed interaction earns stars. Reading an article? Stars. Finishing a quiz with a perfect score? Bonus stars. The currency is visible everywhere so the incentive is never abstract.",
                color: starGold,
              },
              {
                icon: "🏅",
                title: "Badges",
                body: "Topic-specific badges unlock when a full safety module is complete. They’re designed to be displayed — visible on the student’s profile as social proof within their class.",
                color: cosmicBlue,
              },
              {
                icon: "🎯",
                title: "Quizzes & Scenarios",
                body: "Static content was banned. Every safety topic ends in an interactive scenario: “what would you do if…?”. Correct choices trigger a reward animation. Wrong ones explain why — gently.",
                color: "#7C3AED",
              },
              {
                icon: "🚀",
                title: "Missions",
                body: "Topics are framed as “missions” to complete rather than lessons to read. A progress rocket travels across the page as more content is unlocked. Every student is an astronaut.",
                color: launchGreen,
              },
              {
                icon: "🔒",
                title: "Unlockable Content",
                body: "Bonus content stays locked until adjacent topics are complete. This creates a pull mechanic — students can see what’s there, they just can’t access it yet. Curiosity does the rest.",
                color: "#EA580C",
              },
              {
                icon: "🎉",
                title: "Celebration Moments",
                body: "Module completions are treated as events. Confetti, a star burst, a congratulations overlay. These moments were non-negotiable — without celebration, completion feels hollow.",
                color: crimeRed,
              },
            ].map(({ icon, title, body, color }) => (
              <div key={title} className="rounded-2xl p-6 bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-fredoka font-bold text-lg mb-2" style={{ color }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User Personas ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F8FAFF" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: cosmicBlue }}>User Research</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: spaceNavy }}>
            Designing for three different users simultaneously.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            The platform had to engage a distracted nine-year-old, feel credible to a self-conscious thirteen-year-old, and give a teacher something to show their principal.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 pt-8 pb-6 flex items-center gap-4" style={{ background: p.bg }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-fredoka font-bold text-2xl text-white shrink-0" style={{ background: p.color }}>
                    {p.initial}
                  </div>
                  <div>
                    <p className="font-fredoka font-bold text-xl" style={{ color: p.color }}>{p.name}</p>
                    <p className="text-xs font-semibold text-gray-500 tracking-wide">{p.role}</p>
                  </div>
                </div>
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
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: cosmicBlue }}>Design Process</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: spaceNavy }}>
            Building the structure before the stars.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
            Every screen was wireframed at low fidelity first — proving the flow worked for a child before adding any of the visual magic.
          </p>

          <div className="flex gap-8 overflow-x-auto pb-4 justify-start md:justify-center">

            {/* Landing / Home */}
            <WireframeBrowser label="Landing">
              <WF.nav />
              <WF.box h="h-16" label="hero banner" color="bg-blue-50" />
              <WF.bar w="w-3/4" h="h-3" color="bg-gray-300" />
              <WF.bar w="w-1/2" h="h-2" />
              <div className="w-full h-7 rounded-full bg-blue-100" />
              <WF.grid cols={3} items={3} h="h-8" color="bg-gray-100" />
            </WireframeBrowser>

            {/* Dashboard */}
            <WireframeBrowser label="Student Dashboard">
              <WF.nav />
              <div className="flex gap-2 shrink-0">
                <div className="flex-1 bg-yellow-50 rounded-xl p-2 flex flex-col gap-1">
                  <WF.bar w="w-8" h="h-2" color="bg-yellow-200" />
                  <WF.bar w="w-12" h="h-4" color="bg-yellow-300" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl p-2 flex flex-col gap-1">
                  <WF.bar w="w-8" h="h-2" color="bg-blue-200" />
                  <WF.bar w="w-10" h="h-4" color="bg-blue-300" />
                </div>
              </div>
              <WF.bar w="w-2/3" h="h-2" color="bg-gray-300" />
              <WF.progress pct={65} color="bg-blue-300" />
              <WF.grid cols={2} items={4} h="h-9" color="bg-gray-50" />
            </WireframeBrowser>

            {/* Mission / Topic */}
            <WireframeBrowser label="Mission Screen">
              <WF.nav />
              <WF.box h="h-12" label="topic header" color="bg-indigo-50" />
              <WF.progress pct={40} color="bg-indigo-300" />
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-2 items-center shrink-0">
                  <div className="w-5 h-5 rounded-full bg-gray-200 shrink-0" />
                  <WF.bar w="flex-1" h="h-2" color="bg-gray-100" />
                </div>
              ))}
              <div className="w-full h-7 rounded-full bg-blue-100 shrink-0" />
            </WireframeBrowser>

            {/* Quiz */}
            <WireframeBrowser label="Interactive Quiz">
              <WF.nav />
              <WF.bar w="w-5/6" h="h-3" color="bg-gray-300" />
              <WF.bar w="w-2/3" h="h-2" />
              <div className="grid grid-cols-1 gap-2 shrink-0">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-full h-8 rounded-xl ${i === 1 ? "bg-green-100 border border-green-300" : "bg-gray-50 border border-gray-100"}`} />
                ))}
              </div>
              <WF.spacer />
              <div className="w-full h-7 rounded-full bg-blue-200 shrink-0" />
            </WireframeBrowser>

            {/* Badges / Profile */}
            <WireframeBrowser label="Badge Gallery">
              <WF.nav />
              <div className="flex gap-3 items-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="flex flex-col gap-1.5">
                  <WF.bar w="w-16" h="h-2.5" color="bg-gray-300" />
                  <WF.bar w="w-10" h="h-1.5" />
                </div>
              </div>
              <WF.progress pct={75} color="bg-yellow-300" />
              <p className="text-[9px] text-gray-300 shrink-0">Earned badges</p>
              <WF.grid cols={4} items={8} h="h-8" color="bg-yellow-50" />
            </WireframeBrowser>

          </div>
          <p className="text-center text-xs text-gray-400 mt-6 font-vietnam">Low-fidelity wireframes — flow and hierarchy validated before the space theme was applied</p>
        </div>
      </section>

      {/* ── Design Principles ─────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: cosmicBlue }}>Design Principles</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-16 leading-tight" style={{ color: spaceNavy }}>
            The rules that shaped every screen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ n, title, body }) => (
              <div key={n} className="flex gap-5">
                <div className="shrink-0 font-fredoka font-bold text-3xl leading-none mt-1" style={{ color: cosmicBlue, opacity: 0.4 }}>{n}</div>
                <div>
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: spaceNavy }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ───────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: spaceNavy }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: starGold }}>Impact</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-16 leading-tight text-white">
            15,000 users.<br />One week.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "15,000+", label: "Users in Week 1", sub: "Organic sign-ups driven by school-level rollout and student word-of-mouth.", icon: "👥" },
              { stat: "Launched", label: "February 2026", sub: "From concept to deployed product — on time, on brief, and ready for Houston students.", icon: "📅" },
              { stat: "100%", label: "Child-safe by design", sub: "No third-party data collection. No dark patterns. No ads. Safety in the experience, not just the content.", icon: "🛡️" },
            ].map(({ stat, label, sub, icon }) => (
              <div key={label} className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors duration-300">
                <span className="text-4xl mb-4 block">{icon}</span>
                <p className="font-fredoka font-bold text-4xl text-white mb-1">{stat}</p>
                <p className="font-semibold text-sm mb-3" style={{ color: starGold }}>{label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${spaceNavy}, ${starBlue})` }}
      >
        {stars.slice(0, 6).map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ left: s.x, top: s.y, width: s.s * 1.5, height: s.s * 1.5, opacity: 0.3 }}
          />
        ))}

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${cosmicBlue}, transparent 70%)` }} />

        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            See it in the wild
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            The live platform is out in Houston classrooms right now — explore it or get in touch to talk about your next mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.thesafespaceforstudents.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 bg-white text-[#0B1A3A] hover:bg-[#EFF6FF]"
            >
              Visit Live Site →
            </a>
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
