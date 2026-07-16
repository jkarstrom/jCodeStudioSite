import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export const metadata = {
  title: "GGRC 2025 Annual Report — Design Case Study | jCode Studio",
  description:
    "How I designed the GGRC 2025 Annual Report as a 23-page interactive web experience — turning dense Houston crime research data into a clear, compelling visual narrative.",
};

/* ── Brand palette (from the actual report) ─────────────────────── */
const navy     = "#0d1f4a";
const navyMid  = "#132257";
const lime     = "#a8bc2e";
const cream    = "#ede8dc";
const creamDark = "#ddd7c8";

/* ── Real stats from the report cover ──────────────────────────── */
const coverStats = [
  { label: "Data Rows Processed",    value: "67M+"  },
  { label: "Data Points Processed",  value: "241M+" },
  { label: "People Reached",         value: "813K+" },
  { label: "Reports Published",      value: "41"    },
  { label: "Hours Spent Reporting",  value: "196"   },
  { label: "Monthly Crime Indexes",  value: "12"    },
  { label: "New Data Sources",       value: "5"     },
  { label: "Platform Relaunch",      value: "v2.0"  },
];

/* ── Actual TOC from the report ─────────────────────────────────── */
const chapters = [
  { n: "01–02", label: "Cover & Contents",      desc: "The opening spread and 23-page table of contents." },
  { n: "03–04", label: "Letter from our CEO",   desc: "Rania Mankarious on a year in which data did more than inform." },
  { n: "05–06", label: "Mission & Core Beliefs", desc: "Who GGRC is and the six foundations their work rests on." },
  { n: "07–08", label: "Key Metrics & Glance",  desc: "Top-line numbers and the year mapped month by month." },
  { n: "09–15", label: "Statistics · 6 Categories", desc: "Homicide, Aggravated Assault, Sexual Assault, Robbery, Weapons, and Human Trafficking." },
  { n: "16–18", label: "Impact & Stories",      desc: "Community partners, featured legislative work, and field stories." },
  { n: "19–23", label: "Goals, Donors & Team",  desc: "2026 roadmap, budget breakdown, donor recognition, and the humans behind the numbers." },
];

/* ── Design principles (grounded in the real PDF) ───────────────── */
const principles = [
  {
    n: "01",
    title: "Bold + italic as a system",
    body: "Every section heading pairs an ultra-bold sans-serif word with an italic serif phrase — \"The year, month by month.\" The contrast does dual work: the bold anchors, the italic humanizes. It became the report's most recognizable typographic signature.",
  },
  {
    n: "02",
    title: "Cream as the neutral, not white",
    body: "The background is warm cream (#ede8dc), not white. White feels sterile for this subject matter. Cream reads like paper — like something worth printing, worth keeping. It also makes the navy and lime pop without needing extra contrast.",
  },
  {
    n: "03",
    title: "Lime for data, navy for authority",
    body: "Chartreuse (#a8bc2e) is assigned specifically to numbers and highlights — stat values, tags, chart lines, accent labels. Navy is structure and credibility. The two never compete because they have separate jobs.",
  },
  {
    n: "04",
    title: "The stat grid over the hero",
    body: "The cover doesn't lead with a photo or an essay — it leads with eight numbers in a 2×4 grid. 67M+. 241M+. 813K+. The data is the hero. The design decision was to trust that those numbers were more compelling than any headline.",
  },
  {
    n: "05",
    title: "Consistent crime category treatment",
    body: "Each of the six crime categories (pages 10–15) uses the same template: large category name, a 3×3 stat grid with one cell highlighted in lime, and two sourced line charts side by side (HCDC vs. TXDPS). Consistency builds scanning speed.",
  },
  {
    n: "06",
    title: "Community impact gets its own voice",
    body: "The Community Impact spread (p.16) breaks the grid entirely — full bleed lime background, oversized quote, single attribution. Color signals a register change: this is no longer data, this is testimony.",
  },
];

/* ── Mockup component ────────────────────────────────────────────── */
function ReportMockup({ label, bg = navy, children }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div
        className="relative w-[200px] rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: bg, height: 280, border: `1px solid rgba(255,255,255,0.08)` }}
      >
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-5 flex items-center px-2.5 gap-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="pt-7 px-3.5 pb-3.5 h-full flex flex-col gap-2 overflow-hidden">
          {children}
        </div>
      </div>
      <span className="text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
    </div>
  );
}

ReportMockup.propTypes = {
  label: PropTypes.string.isRequired,
  bg: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/* Mockup primitives */
const M = {
  bar:    ({ w = "w-full", h = "h-1.5", color = "" } = {}) =>
    <div className={`${w} ${h} rounded shrink-0`} style={{ background: color || "rgba(255,255,255,0.12)" }} />,
  lbar:   ({ w = "w-full", h = "h-1.5" } = {}) =>
    <div className={`${w} ${h} rounded shrink-0`} style={{ background: lime, opacity: 0.7 }} />,
  stat:   ({ value, label, highlight = false } = {}) => (
    <div className="flex flex-col gap-0.5 shrink-0 rounded-lg p-2" style={{ background: highlight ? lime : "rgba(255,255,255,0.06)" }}>
      <div className="font-mono text-base font-bold leading-none" style={{ color: highlight ? navy : lime }}>{value}</div>
      <div className="text-[7px] uppercase tracking-widest" style={{ color: highlight ? "rgba(13,31,74,0.7)" : "rgba(255,255,255,0.4)" }}>{label}</div>
    </div>
  ),
  label:  ({ text } = {}) =>
    <div className="text-[7px] font-bold tracking-widest uppercase shrink-0 px-1.5 py-0.5 rounded-full w-fit" style={{ background: lime, color: navy }}>{text}</div>,
  divider: () => <div className="w-full h-px shrink-0" style={{ background: "rgba(255,255,255,0.08)" }} />,
  spacer:  () => <div className="flex-1" />,
  chart:  ({ bars = [40, 60, 50, 80, 55, 70, 65, 75, 45, 85, 60, 50] } = {}) => (
    <div className="flex items-end gap-0.5 h-10 w-full shrink-0">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === bars.indexOf(Math.max(...bars)) ? lime : "rgba(255,255,255,0.2)" }} />
      ))}
    </div>
  ),
  creambg: ({ children } = {}) => (
    <div className="rounded-lg p-2 flex flex-col gap-1.5 shrink-0" style={{ background: cream }}>
      {children}
    </div>
  ),
};

export default function GGRCAnnualReportCaseStudy() {
  return (
    <main className="w-full font-vietnam text-foreground overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 overflow-hidden text-center"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${navyMid} 60%, #1e3575 100%)` }}
      >
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${lime}, transparent 70%)` }} />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle, ${cream}, transparent 70%)` }} />

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
            Editorial Design · Case Study
          </div>
          <h1 className="font-fredoka font-bold text-5xl md:text-7xl text-white mb-4 leading-tight">
            GGRC 2025<br />Annual Report
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            A 23-page web-native annual report for the Glenda Gordy Research Center —
            67M+ rows of crime data, six offense categories, one year of public safety work made readable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Editorial Design", "Data Visualization", "Web", "Typography", "Figma"].map((t) => (
              <span key={t} className="text-xs font-medium bg-white/10 text-white/70 border border-white/20 px-4 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real cover stats ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ background: cream }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: navy }}>The Numbers Behind The Report</span>
          </div>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: navy }}>
            The data <em className="not-italic" style={{ color: lime }}>speaks first.</em>
          </h2>
          <p className="text-lg max-w-2xl mb-14 leading-relaxed" style={{ color: `${navy}99` }}>
            The report cover leads with numbers, not prose. Eight stats in a grid — the design decision was to trust that the data was more compelling than any headline written about it.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {coverStats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{ background: i === 0 || i === 2 ? navyMid : navy }}
              >
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: `${lime}` }}>
                  {s.label}
                </span>
                <span className="font-fredoka font-bold text-3xl md:text-4xl leading-none" style={{ color: cream }}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Brief ────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>The Brief</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: navy }}>
            Crime data that people<br />actually want to read.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-lg" style={{ color: `${navy}99` }}>
            <p>
              The Glenda Gordy Research Center publishes rigorous crime research out of Crime Stoppers of Houston — but a PDF buried in a file download isn&apos;t how people engage with information anymore. The 2025 Annual Report needed to live on the web and be readable by anyone from a state legislator to a curious Houston resident.
            </p>
            <p>
              The challenge was both scope and tone: six crime categories, 23 pages, millions of data points — all of it had to be structured and visualized so that it was genuinely compelling without trivializing serious subject matter. Authority and accessibility at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Report Structure ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ background: navy }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>Information Architecture</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            23 pages. Structure first.
          </h2>
          <p className="text-lg max-w-2xl mb-14 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Before a single color was chosen, the report was mapped as a reading journey — from opening impact to closing gratitude, with a clear hierarchy of information at every level.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((ch) => (
              <div
                key={ch.label}
                className="rounded-2xl p-6 flex gap-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="font-mono text-xs font-bold shrink-0 mt-0.5 pt-1" style={{ color: lime }}>
                  {ch.n}
                </span>
                <div>
                  <h3 className="font-fredoka font-bold text-lg text-white mb-1">{ch.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Layout Mockups ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>Design Language</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: navy }}>
            How it actually looks
          </h2>
          <p className="max-w-2xl mb-14 text-lg leading-relaxed" style={{ color: `${navy}80` }}>
            Every page type — stat spread, crime category, pull quote, data chart — was designed as a reusable template. Solve it once. Apply it consistently.
          </p>

          <div
            className="flex gap-6 overflow-x-auto pb-4 justify-start md:justify-center rounded-3xl p-8"
            style={{ background: `linear-gradient(135deg, #0a1535, ${navyMid})` }}
          >

            {/* Cover */}
            <ReportMockup label="Cover">
              <div className="flex flex-col gap-0.5">
                <M.bar w="w-20" h="h-1" color="rgba(237,232,220,0.2)" />
              </div>
              <div className="flex flex-col mt-1">
                <div className="font-fredoka font-bold text-3xl leading-none" style={{ color: cream }}>2025</div>
                <div className="text-xs italic leading-tight" style={{ color: lime }}>annual</div>
                <div className="font-fredoka font-bold text-2xl leading-none" style={{ color: cream }}>report.</div>
              </div>
              <M.spacer />
              <div className="grid grid-cols-2 gap-1">
                {[["67M+","Rows"],["241M+","Points"],["813K+","Reached"],["41","Reports"]].map(([v,l]) => (
                  <M.stat key={l} value={v} label={l} />
                ))}
              </div>
            </ReportMockup>

            {/* Stat Category */}
            <ReportMockup label="Crime Category">
              <M.label text="Category 01 of 06" />
              <div className="font-fredoka font-bold text-xl leading-tight" style={{ color: cream }}>Homicide.</div>
              <M.divider />
              <div className="grid grid-cols-3 gap-1">
                <M.stat value="423"   label="Cases"     />
                <M.stat value="417"   label="Offenses"  />
                <M.stat value="70.2%" label="Known"     highlight />
                <M.stat value="337"   label="Firearms"  />
                <M.stat value="69"    label="Capital"   />
                <M.stat value="-28.9%"label="vs prior"  />
              </div>
              <M.chart bars={[56,42,42,34,32,31,28,24,36,49,43,26]} />
            </ReportMockup>

            {/* Contents */}
            <ReportMockup label="Contents" bg={cream}>
              <div className="font-fredoka font-bold text-2xl leading-tight" style={{ color: navy }}>Contents.</div>
              <div className="text-[8px] italic leading-tight mb-1" style={{ color: `${navy}80` }}>Twenty-three pages, six categories of data.</div>
              {["01  Cover","03  Letter from CEO","05  Our Mission","07  Key Metrics","09  Statistics","16  Community Impact","19  2026 Goals","23  Thank You"].map((line) => (
                <div key={line} className="flex items-center justify-between" style={{ borderTop: `1px solid ${creamDark}`, paddingTop: 2 }}>
                  <span className="text-[8px]" style={{ color: navy }}>{line}</span>
                </div>
              ))}
            </ReportMockup>

            {/* Community Impact */}
            <ReportMockup label="Impact Spread" bg={lime}>
              <div className="flex-1" />
              <div className="font-fredoka font-bold text-4xl leading-none" style={{ color: navy }}>&ldquo;</div>
              <div className="text-[9px] font-bold leading-relaxed" style={{ color: navy }}>
                The data has opened the eyes of the entire general public.
              </div>
              <M.divider />
              <div className="text-[7px] font-bold uppercase tracking-widest" style={{ color: `${navy}99` }}>Council Member Willie Davis</div>
              <div className="flex-1" />
            </ReportMockup>

            {/* 2026 Goals */}
            <ReportMockup label="2026 Goals">
              <M.label text="Looking Ahead" />
              <div className="font-fredoka font-bold text-2xl leading-tight" style={{ color: cream }}>
                2026 <span style={{ color: lime }}>goals.</span>
              </div>
              <M.divider />
              {["01 — Reach · Increase community reach","02 — Visibility · New digital products","03 — Resources · Data infrastructure","04 — Platform · Strengthen & test","05 — Sources · New data feeds"].map((g) => (
                <div key={g} className="text-[8px] py-1" style={{ color: "rgba(255,255,255,0.5)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {g}
                </div>
              ))}
            </ReportMockup>

          </div>
          <p className="text-center text-xs text-gray-400 mt-5">Page layout mockups — actual design uses the navy / lime / cream system throughout</p>
        </div>
      </section>

      {/* ── Color & Type ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ background: cream }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: navy, opacity: 0.5 }}>Visual Identity</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-4 leading-tight" style={{ color: navy }}>
            Three colors. <em className="not-italic" style={{ color: lime }}>One system.</em>
          </h2>
          <p className="text-lg max-w-2xl mb-16 leading-relaxed" style={{ color: `${navy}80` }}>
            The entire 23-page report runs on exactly three colors. Every layout decision — foreground, background, accent, highlight — is covered by this system with no exceptions.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                hex: navy,
                name: "GGRC Navy",
                code: "#0d1f4a",
                on: cream,
                desc: "Structure, authority, and type. The primary brand color — dark enough to anchor everything, rich enough to feel premium rather than corporate.",
                tags: ["Authority", "Structure", "Brand"],
              },
              {
                hex: lime,
                name: "Research Lime",
                code: "#a8bc2e",
                on: navy,
                desc: "Numbers and highlights only. Every stat value, every category tag, every chart peak lands in lime. It carries meaning — when you see lime, you see data.",
                tags: ["Data", "Emphasis", "Action"],
              },
              {
                hex: cream,
                name: "Warm Cream",
                code: "#ede8dc",
                on: navy,
                textColor: navy,
                desc: "The background. Not white — warm cream reads like paper, like something worth printing. It softens the contrast between navy and lime without losing legibility.",
                tags: ["Background", "Warmth", "Paper"],
              },
            ].map((c) => (
              <div key={c.hex} className="rounded-3xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
                <div className="h-32 flex items-center justify-center" style={{ background: c.hex }}>
                  <p className="font-mono text-sm" style={{ color: c.on, opacity: 0.5 }}>{c.code}</p>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: navy }}>{c.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: `${navy}80` }}>{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: c.hex, color: c.on }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Palette strip */}
          <div className="rounded-2xl overflow-hidden h-10 flex shadow-md mb-4">
            {[[navy,"Navy"],[navyMid,""],["#1e3575",""],[lime,"Lime"],["#c5d94a",""],["#d4e870",""],[cream,"Cream"],[creamDark,""]].map(([hex, label]) => (
              <div key={hex} className="flex-1 relative group cursor-default" style={{ background: hex }}>
                {label && (
                  <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 text-white text-[8px] text-center py-0.5 font-mono">{label}</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs mb-16" style={{ color: `${navy}60` }}>Full palette — hover each swatch</p>

          {/* Typography */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 bg-white shadow-md">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>Display Treatment</p>
              <div className="mb-3">
                <span className="font-fredoka font-bold text-4xl" style={{ color: navy }}>Bold</span>
                {" "}
                <span className="text-4xl italic font-light" style={{ color: `${navy}70`, fontFamily: "Georgia, serif" }}>italic serif.</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: `${navy}80` }}>
                Every section heading pairs an ultra-bold sans-serif word with an italic serif phrase. &ldquo;The year, <em>month by month.</em>&rdquo; — The bold anchors, the italic humanizes. It became the report&apos;s most recognizable typographic signature.
              </p>
            </div>
            <div className="rounded-3xl p-8 bg-white shadow-md">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>Stat Treatment</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[["67M+","Data Rows"],["813K+","People Reached"]].map(([v,l]) => (
                  <div key={l} className="rounded-xl p-3" style={{ background: navy }}>
                    <div className="font-fredoka font-bold text-2xl" style={{ color: lime }}>{v}</div>
                    <div className="text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(237,232,220,0.5)" }}>{l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: `${navy}80` }}>
                Stat cards: lime number on navy. Highlighted cells invert to lime background with navy text. The contrast system is strict — lime always carries the data signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Principles ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: lime }}>Design Principles</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl mb-14 leading-tight" style={{ color: navy }}>
            The decisions behind every page
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map(({ n, title, body }) => (
              <div key={n} className="flex gap-5">
                <div className="shrink-0 font-fredoka font-bold text-3xl leading-none mt-1" style={{ color: lime, opacity: 0.4 }}>
                  {n}
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-xl mb-2" style={{ color: navy }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${navy}70` }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${navy}, ${navyMid})` }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${lime}, transparent 70%)` }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Read the report
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            The full 2025 Annual Report is live — 23 pages of crime research, data design, and Houston public safety work all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://theglendagordyresearchcenter.com/ggrc-2025-report"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-sm"
              style={{ background: lime, color: navy }}
            >
              View the 2025 Report →
            </a>
            <Link
              href="/design"
              className="inline-block font-semibold px-8 py-4 rounded-full border-2 border-white/25 text-white hover:bg-white/10 transition-all duration-300 text-sm"
            >
              ← All Design Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
