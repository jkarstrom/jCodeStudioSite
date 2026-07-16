import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "GGRC Site — UX Design Case Study | jCode Studio",
  description:
    "How I designed theglendagordyresearchcenter.com — turning dense public crime data into a trustworthy, accessible experience for Houston residents and policymakers.",
};

/* ─── Brand tokens ───────────────────────────────────────────────── */

const navy    = "#0d1f4a";
const navyMid = "#132257";
const lime    = "#a8bc2e";
const white   = "#ffffff";

/* ─── Data ─────────────────────────────────────────────────────────── */

const challenges = [
  {
    number: "01",
    title: "Authority vs. Approachability",
    body: "Government crime data needs to feel credible and serious — but if it feels cold and bureaucratic, residents tune it out. The site had to walk a very deliberate line between institutional trust and genuine openness.",
  },
  {
    number: "02",
    title: "Information Density",
    body: "The GGRC tracks 6 felony categories, 3M+ case records, and 10+ years of data. Surfacing that without overwhelming a first-time visitor required clear hierarchy and progressive disclosure — leading with meaning, not numbers.",
  },
  {
    number: "03",
    title: "Multiple Audiences, One Entry Point",
    body: "The site serves Houston residents, journalists, researchers, and city officials. Each comes with different vocabulary and goals. Navigation had to be flat enough for anyone to get oriented in seconds.",
  },
  {
    number: "04",
    title: "Data ≠ Dashboard",
    body: "The portal (the interactive data tool) lives at a separate subdomain. The main site's job was to tell the story behind the data — why it matters, who collects it, and what it means for the community.",
  },
];

const designDecisions = [
  {
    title: "Dark hero with the skyline",
    body: "Houston at night under a navy overlay immediately signals place and gravity. The dark canvas earns the site authority before a single word is read. Lime headings break through without softening the gravitas.",
  },
  {
    title: "Lime = action and data, never decoration",
    body: "Chartreuse lime is only used for stat callouts, primary CTAs, and key labels. It&apos;s never used for body text or backgrounds. That restraint keeps it meaningful — when lime appears, something important is there.",
  },
  {
    title: "Stat bar as the first proof point",
    body: "Immediately below the hero fold sits a row of four numbers: 10+ years, 6 categories, 3M+ records, monthly updates. These aren&apos;t vanity metrics — they establish that the research is ongoing, rigorous, and real.",
  },
  {
    title: "Two CTAs, clearly differentiated",
    body: "&ldquo;Explore Dashboards&rdquo; takes the filled lime treatment for users ready to dig into data. &ldquo;Our Work&rdquo; is outlined for those who want context first. The hierarchy matches user intent, not visual preference.",
  },
];

const stats = [
  { value: "10+",     label: "Years of crime data" },
  { value: "6",       label: "Felony categories tracked" },
  { value: "3M+",     label: "Case records analyzed" },
  { value: "Monthly", label: "Data updates" },
];

const pages = [
  { label: "Home",               desc: "Skyline hero, stat bar, intro to the GGRC mission" },
  { label: "Our Work",           desc: "Research projects, dashboards, and published reports" },
  { label: "Terminology",        desc: "Plain-language glossary of crime categories and legal terms" },
  { label: "Emerging Trends",    desc: "Editorially framed data stories for non-expert readers" },
  { label: "Donors & Partners",  desc: "Credibility-building acknowledgement of funding and affiliates" },
  { label: "Contact",            desc: "Research inquiries, media requests, and community questions" },
];

/* ─── Browser Mockup ────────────────────────────────────────────── */

function BrowserMockup({ label, dark, children }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div
        className="w-full rounded-xl overflow-hidden shadow-2xl border"
        style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)" }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2.5"
          style={{ background: dark ? "#1a1a2e" : "#e8e8e8" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
          <div
            className="ml-2 flex-1 rounded px-2 py-0.5 text-[9px] font-mono"
            style={{
              background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
              color: dark ? "rgba(255,255,255,0.3)" : "#888",
            }}
          >
            theglendagordyresearchcenter.com
          </div>
        </div>
        {/* Screen */}
        <div style={{ background: dark ? navy : "#f5f6f8" }}>
          {children}
        </div>
      </div>
      <span className="text-xs font-semibold tracking-wide" style={{ color: `${lime}` }}>
        {label}
      </span>
    </div>
  );
}

BrowserMockup.propTypes = {
  label: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

/* ─── Page ─────────────────────────────────────────────────────── */

export default function GGRCSiteCaseStudy() {
  return (
    <main className="w-full font-vietnam text-foreground overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 overflow-hidden text-center"
        style={{ background: `linear-gradient(145deg, ${navy} 0%, ${navyMid} 60%, #0a172e 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 75% 20%, ${lime}22 0%, transparent 55%), radial-gradient(ellipse at 20% 90%, ${lime}11 0%, transparent 50%)`,
          }}
        />

        <div className="absolute top-6 left-6">
          <Link
            href="/design"
            className="inline-flex items-center gap-2 text-white/50 px-4 py-2 rounded-full text-sm border border-white/10 hover:border-white/25 hover:text-white/80 transition-all"
          >
            ← Design
          </Link>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase border"
            style={{ color: lime, borderColor: `${lime}40`, background: `${lime}12` }}
          >
            UX Design Case Study
          </div>

          <h1 className="font-fredoka font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
            GGRC Site
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-3">
            The Glenda Gordy Research Center
          </p>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed mb-10">
            Making public crime data for Greater Houston feel trustworthy, accessible, and
            genuinely useful — for residents, journalists, and policymakers alike.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Web Design", "UX Strategy", "Data Presentation", "Figma", "Next.js", "Tailwind"].map(t => (
              <span
                key={t}
                className="text-xs font-medium px-4 py-1.5 rounded-full border"
                style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Brief ────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            The Brief
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: navy }}>
            A public face for rigorous research.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-body-base leading-relaxed">
            <p>
              Crime Stoppers of Houston and The Glenda Gordy Research Center needed more than a
              website — they needed a public institution. The site had to establish credibility
              for an organization whose work depends on public trust, while making years of
              complex crime data feel genuinely accessible.
            </p>
            <p>
              I designed and developed the full front end, building a visual system that could
              carry serious research content without feeling bureaucratic — and a navigation
              architecture that serves a wide audience from first-time visitors to policy professionals.
            </p>
          </div>

          {/* Stat row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-lg" style={{ background: navy }}>
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center py-8 px-4 text-center" style={{ background: navyMid }}>
                <span className="font-fredoka font-bold text-3xl md:text-4xl mb-1" style={{ color: lime }}>
                  {value}
                </span>
                <span className="text-white/40 text-xs leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero Mockup ──────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: navy }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-12 text-center" style={{ color: lime }}>
            Homepage Design
          </p>

          <BrowserMockup label="theglendagordyresearchcenter.com" dark>
            {/* Nav */}
            <div
              className="flex items-center justify-between px-6 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-red-500/80" />
                <div className="flex flex-col gap-0.5">
                  <div className="w-20 h-1.5 rounded-full bg-white/20" />
                  <div className="w-28 h-1 rounded-full" style={{ background: lime, opacity: 0.5 }} />
                </div>
              </div>
              <div className="hidden md:flex gap-6">
                {["Our Work", "About Us", "Terminology", "Emerging Crime Trends", "Donors & Contributors", "Contact"].map(n => (
                  <div key={n} className="h-1.5 rounded-full bg-white/20" style={{ width: `${n.length * 4.5}px` }} />
                ))}
              </div>
              <div className="h-5 w-28 rounded-sm border border-white/20 flex items-center justify-center">
                <div className="text-[8px] text-white/30 font-medium">RETURN TO CRIME STOPPERS →</div>
              </div>
            </div>

            {/* Hero */}
            <div className="relative" style={{ height: 240, background: "linear-gradient(to bottom, rgba(13,31,74,0.7) 0%, rgba(13,31,74,0.9) 100%)" }}>
              <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #0a1730 100%)" }} />
              <div className="relative z-10 flex flex-col justify-center h-full px-8">
                <div className="text-[10px] font-bold tracking-widest mb-2" style={{ color: lime }}>HOUSTON, TEXAS</div>
                <div className="font-fredoka font-bold text-xl text-white mb-2 leading-tight">
                  The Glenda Gordy<br />Research Center
                </div>
                <div className="text-white/40 text-[10px] max-w-xs mb-5 leading-relaxed">
                  Transparent, accessible crime data for Greater Houston — empowering residents, leaders, and policymakers to make informed decisions.
                </div>
                <div className="flex gap-3">
                  <div className="px-4 py-1.5 rounded text-[9px] font-bold" style={{ background: lime, color: navy }}>
                    Explore Dashboards
                  </div>
                  <div className="px-4 py-1.5 rounded text-[9px] font-medium text-white border border-white/30">
                    Our Work
                  </div>
                </div>
              </div>
            </div>

            {/* Stat bar */}
            <div className="grid grid-cols-4" style={{ background: navyMid, borderTop: `2px solid ${lime}22` }}>
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-4 border-r border-white/5 last:border-r-0">
                  <span className="font-fredoka font-bold text-sm" style={{ color: lime }}>{value}</span>
                  <span className="text-white/30 text-[8px] text-center mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>
      </section>

      {/* ── Design Challenges ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            Design Challenges
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-14 leading-tight" style={{ color: navy }}>
            The problems worth solving.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map(({ number, title, body }) => (
              <div
                key={number}
                className="rounded-2xl p-8 border"
                style={{ borderColor: `${navy}14`, background: "#f8f9fb" }}
              >
                <span className="font-mono text-xs font-bold mb-4 block" style={{ color: `${lime}` }}>
                  {number}
                </span>
                <h3 className="font-fredoka font-bold text-xl mb-3" style={{ color: navy }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Page Architecture ─────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f0f2f7" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            Information Architecture
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: navy }}>
            Six pages. No dead ends.
          </h2>
          <p className="text-gray-500 text-body-base mb-14 max-w-2xl leading-relaxed">
            Every top-level page has a distinct audience and a clear exit — either into the data portal,
            a research artifact, or a contact point. The flat nav structure means no user ever needs
            more than one click to orient themselves.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {pages.map(({ label, desc }, i) => (
              <div
                key={label}
                className="rounded-2xl p-6 border bg-white"
                style={{ borderColor: `${navy}12` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
                    style={{ background: navy, color: lime }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-fredoka font-bold text-base" style={{ color: navy }}>
                    {label}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inner Page Mockup ─────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: navyMid }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-12 text-center" style={{ color: lime }}>
            Our Work Page
          </p>

          <BrowserMockup label="theglendagordyresearchcenter.com/our-work" dark>
            {/* Page header */}
            <div className="px-8 pt-10 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="text-[9px] font-bold tracking-widest mb-2" style={{ color: lime }}>OUR WORK</div>
              <div className="font-fredoka font-bold text-xl text-white mb-1">Research &amp; Dashboards</div>
              <div className="text-white/30 text-[10px] max-w-sm">Published reports, interactive data tools, and ongoing crime research for Greater Houston.</div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-3 gap-4 p-6">
              {["Monthly Crime Index", "Felony Category Dashboard", "Annual Report 2025"].map((card, i) => (
                <div key={card} className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="h-16 flex items-center justify-center" style={{ background: i === 2 ? `${lime}22` : "rgba(255,255,255,0.03)" }}>
                    <span className="font-mono text-[18px]" style={{ color: i === 2 ? lime : "rgba(255,255,255,0.15)" }}>
                      {i === 0 ? "📈" : i === 1 ? "📊" : "📋"}
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="h-2 rounded bg-white/20 mb-1.5 w-4/5" />
                    <div className="h-1.5 rounded bg-white/10 w-3/5" />
                    <div className="mt-3 flex items-center gap-1">
                      <div className="h-4 w-16 rounded-sm text-[7px] flex items-center justify-center font-medium" style={{ background: lime, color: navy }}>
                        View →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>
      </section>

      {/* ── Design Decisions ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            Design Decisions
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-14 leading-tight" style={{ color: navy }}>
            Every choice has a reason.
          </h2>

          <div className="space-y-6">
            {designDecisions.map(({ title, body }, i) => (
              <div key={title} className="flex gap-6 md:gap-10 items-start">
                <span
                  className="font-mono text-xs font-bold shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                  style={{ background: `${lime}20`, color: lime }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: navy }}>{title}</h3>
                  <p className="text-gray-500 text-body-base leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Color & Type ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            Color &amp; Typography
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-14 leading-tight" style={{ color: navy }}>
            A two-color system built on trust.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { hex: navy,    name: "Deep Navy",  role: "Structure, authority, all backgrounds. The dominant color — reads as institutional without being sterile." },
              { hex: lime,    name: "Chartreuse Lime", role: "Data, action, signal. Used only for stat values, CTAs, and critical labels. Never decorative." },
              { hex: white,   name: "White",      role: "Clarity and breathing room. Text on dark backgrounds. Keeps content readable against dense navy." },
            ].map(({ hex, name, role }) => (
              <div key={name} className="rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <div className="h-24" style={{ background: hex, border: hex === white ? "1px solid #e5e7eb" : "none" }} />
                <div className="p-5 bg-white">
                  <p className="font-mono text-xs text-gray-400 mb-1">{hex}</p>
                  <p className="font-fredoka font-bold text-base mb-2" style={{ color: navy }}>{name}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 md:p-10 border" style={{ background: navy, borderColor: `${lime}20` }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: `${lime}80` }}>
              Typography
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-fredoka font-bold text-4xl text-white mb-2">Fredoka</p>
                <p className="text-white/40 text-sm mb-1">Headlines &amp; display type</p>
                <p className="text-white/25 text-xs">Bold weight only. Approachable geometry that avoids feeling overly official — balances the authority of the navy palette.</p>
              </div>
              <div>
                <p className="text-white text-xl font-semibold mb-2">Be Vietnam Pro</p>
                <p className="text-white/40 text-sm mb-1">Body copy &amp; navigation</p>
                <p className="text-white/25 text-xs">Clean, legible at small sizes. Works across data labels, glossary entries, and long-form research summaries without fatigue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcome ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: navy }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>
            Outcome
          </p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
            Public trust starts with design.
          </h2>
          <p className="text-white/40 text-body-base max-w-2xl mx-auto leading-relaxed mb-16">
            The GGRC site gives one of Houston&apos;s most important research institutions a presence
            that matches the rigor of its work. Residents can understand what the data means.
            Journalists can find what they need. Policymakers can cite the source.
            That&apos;s what good civic design looks like.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { label: "Accessible", body: "Clear language, high contrast, logical nav — anyone can get oriented in under 30 seconds." },
              { label: "Authoritative", body: "Navy visual system and institutional tone establish credibility before content is read." },
              { label: "Extensible", body: "The design system scales: new reports, dashboards, and trend pages slot in without breaking coherence." },
            ].map(({ label, body }) => (
              <div key={label} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${lime}18` }}>
                <p className="font-fredoka font-bold text-lg mb-2" style={{ color: lime }}>{label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshot ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-8 text-center" style={{ color: lime }}>
            Live Site
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-black/5">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#e8e8e8]">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
              <div className="ml-3 flex-1 bg-white/60 rounded px-3 py-1 text-[10px] text-gray-400 font-mono">
                theglendagordyresearchcenter.com
              </div>
            </div>
            <Image
              src="/images/GGRC-Site.png"
              alt="GGRC site homepage — live design"
              width={1200}
              height={700}
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" style={{ background: "#f0f2f7" }}>
        <h2 className="font-fredoka font-bold text-h2 mb-4" style={{ color: navy }}>
          See it live.
        </h2>
        <p className="text-gray-500 text-body-base mb-10 max-w-sm mx-auto leading-relaxed">
          The full site is public — explore the dashboards, read the research, or just see how
          the design holds up in the wild.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://theglendagordyresearchcenter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: navy, color: white }}
          >
            Visit GGRC Site →
          </a>
          <Link
            href="/design"
            className="inline-block font-semibold px-8 py-4 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: `${navy}30`, color: navy }}
          >
            ← Back to Design
          </Link>
        </div>
      </section>

    </main>
  );
}
