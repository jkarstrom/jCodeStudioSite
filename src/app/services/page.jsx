'use client';

import React from 'react';

export default function ServicesPage() {
  return (
    <main className="w-full text-foreground">
      <section className="py-24 text-center px-6 scroll-smooth bg-whitepurple">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam text-transparent bg-clip-text bg-gradient-to-r from-pink via-darkpurple to-lilac">
          What I Can Help You Build
        </h1>
        <p className="text-lg text-darkpurple max-w-3xl mx-auto mb-12 font-vietnam">
          Whether you&#39;re building from scratch or improving your existing site, jCode Studio offers development, design, and strategy services to bring your project to life — with imagination and precision.
        </p>

        {/* Scroll Links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <a href="#frontend" className="text-darkpurple hover:text-green transition underline-offset-4 hover:underline">
            Frontend Dev
          </a>
          <a href="#design" className="text-darkpurple hover:text-pink transition underline-offset-4 hover:underline">
            Website Design
          </a>
          <a href="#ux" className="text-darkpurple hover:text-lilac transition underline-offset-4 hover:underline">
            UI/UX Strategy
          </a>
          <a href="#brand" className="text-darkpurple hover:text-green transition underline-offset-4 hover:underline">
            Brand Identity
          </a>
          <a href="#workshop" className="text-darkpurple hover:text-pink transition underline-offset-4 hover:underline">
            Workshops
          </a>
        </div>
      </section>

      <section className="bg-[#0d1117] text-gray-200 py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-vietnam font-bold mb-4 text-pink-400">
              <span className="text-[#58a6ff]">Frontend Development</span>
              </h2>
              <p className="font-mono text-sm bg-[#161b22] text-white p-4 rounded-lg border border-[#30363d] mb-6 shadow-inner">
              / Responsive, fast, and accessible websites<br />
              const tools = [ &quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind CSS&quot;, &quot;Python&quot;, &quot;Java&quot; ];
              </p>
              <p className="text-lg text-white leading-relaxed max-w-3xl">
              I craft maintainable, production-ready code with performance and accessibility in mind.
              Whether you’re building a sleek landing page or a complex app, I bring your ideas to life with precision and clarity.
              </p>
          </div>
      </section>

      <section className="relative py-24 px-6 w-full" style={{ background: 'linear-gradient(to bottom right, #fce7f3, #ffffff, #ede9fe)' }}>
          <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-[#2d2d2d] mb-6">
              Website Design
              </h2>
              <p className="text-lg text-[#5c5c5c] max-w-3xl mb-10">
              Aesthetics meet usability. I design engaging, user-friendly layouts that reflect your brand’s identity and guide your users with intention and delight.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#ffffff] shadow-xl rounded-3xl p-6 border" style={{ borderColor: '#ddd6fe' }}>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#ec4899' }}>Clean Layouts</h3>
                      <p className="text-[#444444]">
                      Thoughtful spacing, balance, and typography that invites users to explore. The user&#39;s journey is at the heart of every design decision.
                      </p>
                  </div>

                  <div className="bg-[#ffffff] shadow-xl rounded-3xl p-6 border" style={{ borderColor: '#f9a8d4' }}>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#8b5cf6' }}>Brand-Driven Color</h3>
                      <p className="text-[#444444]">
                      Colors that reinforce emotion and make your brand memorable and distinct.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="w-full bg-[#f9fafb] py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-[#111827] mb-6">
              UI/UX Strategy & Implementation
            </h2>
            <p className="text-lg text-[#4b5563] max-w-3xl mb-14">
              From wireframes to real-world interactions, I create digital experiences that are intuitive, accessible, and centered around the user’s journey.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              {/* Step 1 */}
              <div className="bg-white border border-[#e5e7eb] p-6 rounded-xl shadow-sm hover:shadow-md transition max-w-sm w-full">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">🔍 Research</h3>
                <p className="text-[#6b7280]">
                  Understanding user behavior, goals, and obstacles before anything else.
                </p>
              </div>

              {/* Arrow */}
              <div className="text-2xl text-gray-400 transform md:rotate-0 rotate-90 select-none">
                →
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-[#e5e7eb] p-6 rounded-xl shadow-sm hover:shadow-md transition max-w-sm w-full">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">📐 Wireframing</h3>
                <p className="text-[#6b7280]">
                  Sketching out intuitive interfaces and streamlined user flows before diving into design.
                </p>
              </div>

              {/* Arrow */}
              <div className="text-2xl text-gray-400 transform md:rotate-0 rotate-90 select-none">
                →
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-[#e5e7eb] p-6 rounded-xl shadow-sm hover:shadow-md transition max-w-sm w-full">
                <h3 className="text-xl font-semibold text-[#111827] mb-2">🧪 Implementation</h3>
                <p className="text-[#6b7280]">
                  Turning structure into reality — clean, accessible code meets thoughtful interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#faf7ff] py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start relative">

            {/* Fun Visual Bubble */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink rounded-full opacity-30 animate-bounce-slow"></div>

            {/* Text Side */}
            <div className="flex-1">
              <h2 className="text-5xl mb-6 font-fredoka text-[#581c87] uppercase tracking-tight leading-tight">
                Brand Identity
                <span className="block text-[#dd64bc] font-caveat text-4xl normal-case mt-2"> & Visual Direction</span>
              </h2>
              <p className="font-fredoka text-lg text-[#4b5563] mb-8">
                More than a logo — it&#39;s your energy, your voice, your vibe.
                I craft brand systems that look amazing *and* work hard, creating emotional connections with your audience.
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎨</span> Typography Systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🖌️</span> Color Palettes & Emotional Branding
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔖</span> UI Kits & Reusable Components
                </li>
              </ul>
            </div>

            {/* Color "Swatches" Side */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              {/* Swatch 1 */}
              <div className="relative bg-[#fbcfe8] h-40 shadow-lg hover:scale-105 transition group">
                <span className="absolute bottom-2 right-2 text-xs text-gray-700 font-mono bg-white/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #fbcfe8
                </span>
              </div>

              {/* Swatch 2 */}
              <div className="relative bg-[#ddd6fe] h-40 shadow-lg hover:scale-105 transition group">
                <span className="absolute bottom-2 right-2 text-xs text-gray-700 font-mono bg-white/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #ddd6fe
                </span>
              </div>

              {/* Swatch 3 */}
              <div className="relative bg-[#e9d5ff] h-40 shadow-lg hover:scale-105 transition group">
                <span className="absolute bottom-2 right-2 text-xs text-gray-700 font-mono bg-white/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #e9d5ff
                </span>
              </div>

              {/* Swatch 4 */}
              <div className="relative bg-[#fef3c7] h-40 shadow-lg hover:scale-105 transition group">
                <span className="absolute bottom-2 right-2 text-xs text-gray-700 font-mono bg-white/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #fef3c7
                </span>
              </div>
            </div>

          </div>
        </section>

      <section className="w-full bg-[#fef9f6] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-vietnam font-bold text-[#7c3aed] mb-6 leading-tight">
              Online Presence Workshops
            </h2>
            <p className="text-lg text-[#4b5563] mb-6">
              Your digital presence matters. Let&#39;s work together to craft a website, brand voice, and strategy that reflect who you are — and connect with your audience in an authentic way.
            </p>
            <p className="text-md text-[#6b7280]">
              These collaborative workshops are designed to uncover your story, define your goals, and sharpen your online messaging — setting you up for growth and success.
            </p>
          </div>

          {/* Visual Steps */}
          <div className="flex-1 grid grid-cols-1 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-purple-200 text-purple-700 rounded-full p-3 font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#374151]">Discover Your Story</h3>
                <p className="text-sm text-[#6b7280]">Identify your unique voice, mission, and goals through guided discussion.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-pink-200 text-pink-700 rounded-full p-3 font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#374151]">Define the Strategy</h3>
                <p className="text-sm text-[#6b7280]">Build a clear, actionable plan that aligns your messaging with your audience’s needs.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-yellow-200 text-yellow-700 rounded-full p-3 font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#374151]">Launch with Confidence</h3>
                <p className="text-sm text-[#6b7280]">Bring your new identity to life — online, on brand, and with purpose.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}