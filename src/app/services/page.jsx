'use client';

import React from 'react';

export default function ServicesPage() {
  return (
    <main className="w-full text-foreground">
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam">
          What I Can Help You Build
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you&#39;re building from scratch or improving your existing site, jCode Studio offers development, design, and strategy services to bring your project to life.
        </p>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-vietnam font-bold text-[#3b0764] mb-8 tracking-tight uppercase">
            Brand Identity & Visual Direction
          </h2>

          <p className="text-lg text-[#4b5563] max-w-3xl mb-16">
            Your brand is more than just a logo — it’s a voice, a visual language, and a feeling. I help bring that language to life through type, color, and creative systems that align with your mission.
          </p>

          <div className="grid md:grid-cols-3 gap-6 font-vietnam">
            <div className="bg-[#e9d5ff] text-[#581c87] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold uppercase mb-2">Typography Systems</h3>
              <p className="text-[#4b5563]">Defining font styles and hierarchy to maintain consistency and clarity across your site.</p>
            </div>

            <div className="bg-[#fbcfe8] text-[#9d174d] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold uppercase mb-2">Color Palettes</h3>
              <p className="text-[#4b5563]">Building out bold and soft color schemes to express emotion and aesthetic range.</p>
            </div>

            <div className="bg-[#ddd6fe] text-[#4c1d95] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold uppercase mb-2">Design Systems</h3>
              <p className="text-[#4b5563]">Creating UI kits and reusable components to ensure a consistent experience at every touchpoint.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}