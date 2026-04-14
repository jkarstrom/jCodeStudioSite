'use client';

import React from 'react';

const marqueItems = [
  'Frontend Development', '✦', 'Website Design', '✦',
  'UI/UX Strategy', '✦', 'Brand Identity', '✦',
  'Online Presence Workshops', '✦', 'React & Next.js', '✦',
  'Tailwind CSS', '✦', 'Figma', '✦', 'Mobile Design', '✦',
];

export default function ServicesPage() {
  return (
    <main className="w-full text-black overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 bg-whitepurple text-center overflow-hidden">

        {/* Background ghost text */}
        <p
          className="absolute inset-0 flex items-center justify-center font-fredoka font-bold pointer-events-none select-none leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            WebkitTextStroke: '1.5px rgba(94,72,117,0.07)',
            color: 'transparent',
          }}
          aria-hidden="true"
        >
          Services
        </p>

        {/* Floating blobs */}
        <div className="absolute -top-12 -right-12 w-56 h-56 bg-pink rounded-full opacity-30 blur-3xl animate-float pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-lilac rounded-full opacity-30 blur-3xl animate-bounce-slow pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-darkpurple/10 text-darkpurple text-sm font-semibold px-4 py-1.5 rounded-full mb-8 font-vietnam">
            jCode Studio — Services
          </div>
          <h1 className="font-fredoka font-bold text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-darkpurple via-pink to-lilac leading-tight">
            What I Can Help<br />You Build
          </h1>
          <p className="text-lg text-darkpurple/80 max-w-2xl mx-auto font-vietnam leading-relaxed">
            From concept to launch — development, design, and strategy services
            crafted with imagination and precision.
          </p>
        </div>
      </section>

      {/* ── Marquee strip ────────────────────────────────────── */}
      <div className="w-full bg-darkpurple py-3 overflow-hidden flex">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...marqueItems, ...marqueItems].map((item, i) => (
            <span key={i} className="font-vietnam text-sm font-semibold text-white/70 shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Frontend Development ──────────────────────────────── */}
      <section
        id="frontend"
        className="relative py-28 px-6 bg-[#080c14]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
      >
        {/* Glow orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #58a6ff 0%, transparent 70%)' }} />
        <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#58a6ff] text-xs font-bold tracking-widest uppercase mb-4 font-vietnam">01 — Frontend</p>
            <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Frontend<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a78bfa]">
                Development
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-vietnam">
              Maintainable, production-ready code with performance and accessibility in mind.
              Whether it&apos;s a sleek landing page or a complex app, I bring your ideas to
              life with precision and clarity.
            </p>
          </div>

          {/* Terminal card */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: '0 0 60px rgba(88,166,255,0.08)' }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 bg-[#161b22] px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-white/30 text-xs font-mono">services.js</span>
            </div>
            {/* Code body */}
            <div className="bg-[#0d1117] p-6 font-mono text-sm leading-7">
              <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">stack</span> <span className="text-white/50">=</span> <span className="text-[#a5d6ff]">[</span></p>
              <p className="pl-6"><span className="text-[#a5d6ff]">&quot;React&quot;</span><span className="text-white/30">,</span></p>
              <p className="pl-6"><span className="text-[#a5d6ff]">&quot;Next.js&quot;</span><span className="text-white/30">,</span></p>
              <p className="pl-6"><span className="text-[#a5d6ff]">&quot;Tailwind CSS&quot;</span><span className="text-white/30">,</span></p>
              <p className="pl-6"><span className="text-[#a5d6ff]">&quot;Python&quot;</span><span className="text-white/30">,</span></p>
              <p className="pl-6"><span className="text-[#a5d6ff]">&quot;Java&quot;</span><span className="text-white/30">,</span></p>
              <p><span className="text-[#a5d6ff]">]</span><span className="text-white/30">;</span></p>
              <p className="mt-2"><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">delivery</span> <span className="text-white/50">=</span> <span className="text-[#a5d6ff]">&quot;pixel-perfect&quot;</span><span className="text-white/30">;</span></p>
              <p className="mt-2 text-white/20">{'//'} fast · accessible · scalable</p>
              <p className="mt-2 flex items-center gap-1">
                <span className="text-[#27c93f]">▶</span>
                <span className="text-white/60"> ready to ship</span>
                <span className="inline-block w-2 h-4 bg-[#58a6ff]/70 ml-1 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Website Design ────────────────────────────────────── */}
      <section
        id="design"
        className="relative pt-36 pb-28 px-6"
        style={{ background: 'linear-gradient(135deg, #faf7ff 0%, #fce7f3 50%, #ede9fe 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-darkpurple/40 text-xs font-bold tracking-widest uppercase mb-3 font-vietnam">02 — Design</p>
            <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-darkpurple leading-tight">
              Website Design
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">

            {/* Big card */}
            <div className="col-span-2 row-span-2 rounded-3xl bg-darkpurple p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase font-vietnam">Craft</p>
              <div>
                <h3 className="font-fredoka font-bold text-3xl text-white mb-3">Aesthetics meet usability</h3>
                <p className="text-white/60 font-vietnam leading-relaxed text-sm">
                  I design engaging, user-friendly layouts that reflect your brand&apos;s identity
                  and guide users with intention and delight.
                </p>
              </div>
            </div>

            {/* Pill card */}
            <div className="rounded-3xl bg-pink/40 p-6 flex flex-col justify-between border border-pink">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-darkpurple font-vietnam text-sm">User-Centered Layouts</h3>
                <p className="text-darkpurple/60 text-xs mt-1 font-vietnam">Every decision starts with the user&apos;s journey.</p>
              </div>
            </div>

            {/* Pill card */}
            <div className="rounded-3xl bg-lilac/60 p-6 flex flex-col justify-between border border-lilac">
              <span className="text-2xl">🖼️</span>
              <div>
                <h3 className="font-semibold text-darkpurple font-vietnam text-sm">Brand-Driven Color</h3>
                <p className="text-darkpurple/60 text-xs mt-1 font-vietnam">Colors that reinforce emotion and build memory.</p>
              </div>
            </div>

            {/* Wide card */}
            <div className="col-span-2 md:col-span-1 rounded-3xl bg-white/80 backdrop-blur-sm p-6 flex flex-col justify-between border border-white shadow-sm">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-semibold text-darkpurple font-vietnam text-sm">Motion & Micro-interactions</h3>
                <p className="text-darkpurple/60 text-xs mt-1 font-vietnam">Subtle animation that makes interfaces feel alive.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── UI/UX Strategy ────────────────────────────────────── */}
      <section
        id="ux"
        className="relative py-28 px-6 bg-darkpurple overflow-hidden"
        style={{ clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)' }}
      >
        {/* Background number */}
        <p
          className="absolute -right-8 top-1/2 -translate-y-1/2 font-fredoka font-bold pointer-events-none select-none"
          style={{ fontSize: '28vw', WebkitTextStroke: '1px rgba(255,255,255,0.04)', color: 'transparent' }}
          aria-hidden="true"
        >03</p>

        <div className="max-w-5xl mx-auto py-12">
          <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 font-vietnam">03 — Process</p>
          <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
            UI/UX Strategy<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-lavender">
              & Implementation
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mb-16 font-vietnam leading-relaxed">
            From wireframes to real-world interactions — experiences that are intuitive,
            accessible, and centered around the user&apos;s journey.
          </p>

          {/* Connected process rail */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-0 relative">

            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {[
              { num: '01', label: 'Research', body: 'Understanding user behavior, goals, and obstacles before anything else. Empathy is the foundation.' },
              { num: '02', label: 'Wireframing', body: 'Sketching out intuitive interfaces and streamlined user flows before diving into visual design.' },
              { num: '03', label: 'Implementation', body: 'Turning structure into reality — clean, accessible code meets thoughtful interaction design.' },
            ].map(({ num, label, body }, i) => (
              <div key={num} className="flex-1 flex flex-col items-center text-center px-6 mb-10 md:mb-0 group">
                {/* Circle */}
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 bg-white/5 group-hover:border-pink/50 group-hover:bg-pink/10 transition-all duration-300">
                  <span className="font-fredoka font-bold text-2xl text-white/60 group-hover:text-white transition-colors duration-300">{num}</span>
                </div>
                <h3 className="font-fredoka font-bold text-xl text-white mb-3">{label}</h3>
                <p className="text-white/50 text-sm font-vietnam leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Identity ────────────────────────────────────── */}
      <section id="brand" className="relative pt-36 pb-28 px-6 bg-[#faf8f6] overflow-hidden">

        {/* Ghost label */}
        <p
          className="absolute -left-4 top-1/2 -translate-y-1/2 font-fredoka font-bold pointer-events-none select-none -rotate-90 origin-center"
          style={{ fontSize: '12vw', WebkitTextStroke: '1px rgba(94,72,117,0.05)', color: 'transparent', whiteSpace: 'nowrap' }}
          aria-hidden="true"
        >Brand</p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-darkpurple/40 text-xs font-bold tracking-widest uppercase mb-4 font-vietnam">04 — Identity</p>
            <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-darkpurple leading-tight mb-6">
              Brand Identity<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]">
                & Visual Direction
              </span>
            </h2>
            <p className="text-darkpurple/60 text-lg mb-8 font-vietnam leading-relaxed">
              More than a logo — it&apos;s your energy, your voice, your vibe.
              I craft brand systems that look amazing <em>and</em> work hard.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '🎨', label: 'Typography Systems' },
                { icon: '🖌️', label: 'Color Palettes & Emotional Branding' },
                { icon: '🔖', label: 'UI Kits & Reusable Components' },
              ].map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-white shadow-sm border border-darkpurple/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                    {icon}
                  </span>
                  <span className="font-vietnam font-medium text-darkpurple">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Swatch wall */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { hex: '#fbcfe8', name: 'Blush' },
              { hex: '#ddd6fe', name: 'Lavender' },
              { hex: '#e9d5ff', name: 'Lilac' },
              { hex: '#fef3c7', name: 'Champagne' },
              { hex: '#c5f0d8', name: 'Sage' },
              { hex: '#bfdbfe', name: 'Sky' },
            ].map(({ hex, name }) => (
              <div
                key={hex}
                className="relative h-32 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 cursor-default group overflow-hidden"
                style={{ backgroundColor: hex }}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-mono bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-gray-700 inline-block">{hex}</p>
                </div>
                <p className="absolute top-3 left-3 text-xs font-semibold font-vietnam text-black/30">{name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Workshops ─────────────────────────────────────────── */}
      <section
        id="workshop"
        className="relative py-32 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2d1b4e 0%, #5e4875 50%, #3b1f5c 100%)',
          clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #ec4899 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto pt-8 grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 font-vietnam">05 — Workshops</p>
            <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
              Online Presence<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-lavender">
                Workshops
              </span>
            </h2>
            <p className="text-white/60 text-lg font-vietnam leading-relaxed">
              Let&apos;s craft a website, brand voice, and strategy that reflect who you are
              and connect with your audience in an authentic way.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {[
              { n: '1', label: 'Discover Your Story', body: 'Identify your unique voice, mission, and goals through guided discussion.', color: 'from-pink to-rose' },
              { n: '2', label: 'Define the Strategy', body: 'Build a clear, actionable plan that aligns your messaging with your audience\'s needs.', color: 'from-lilac to-lavender' },
              { n: '3', label: 'Launch with Confidence', body: 'Bring your new identity to life — online, on brand, and with purpose.', color: 'from-periwinkle to-sky' },
            ].map(({ n, label, body, color }) => (
              <div key={n} className="relative group">
                {/* Gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-30 group-hover:opacity-60 transition-opacity duration-300 blur-[1px]`} />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 flex items-center gap-5 border border-white/10">
                  <div className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-fredoka font-bold text-white text-lg`}>
                    {n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white font-vietnam">{label}</h3>
                    <p className="text-white/50 text-sm font-vietnam mt-0.5">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-whitepurple text-center relative overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-20 pointer-events-none blur-3xl" style={{ background: 'radial-gradient(ellipse, #ddd6fe 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-darkpurple mb-4 leading-tight">
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-darkpurple/60 text-lg mb-8 font-vietnam leading-relaxed">
            Whether you have a full vision or just a spark of an idea — let&apos;s talk.
          </p>
          <a
            href="/contact"
            className="inline-block bg-darkpurple text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-pink hover:text-darkpurple transition-all duration-300 hover:shadow-xl font-vietnam"
          >
            Let&apos;s Connect
          </a>
        </div>
      </section>

    </main>
  );
}
