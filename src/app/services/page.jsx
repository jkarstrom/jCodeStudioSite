'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    blurb: 'Responsive, fast, and accessible websites.',
    description:
      'Modern, maintainable code using React, Next.js, and Tailwind CSS. I turn your designs into pixel-perfect interactive experiences, optimized for all screen sizes.',
    icon: '💻',
    background: 'bg-lightpurple',
  },
  {
    title: 'Website Design',
    blurb: 'Beautiful interfaces with user-focused flows.',
    description:
      'From layout to color palette, I create clean, visually engaging websites that reflect your brand and guide users toward action.',
    icon: '🎨',
    background: 'bg-whitepurple',
  },
  {
    title: 'UI/UX Strategy & Implementation',
    blurb: 'From wireframes to real-world interactions.',
    description:
      'I help clients understand user behavior, map out flows, create wireframes, and implement them in code with accessible, delightful interactions.',
    icon: '🧠',
    background: 'bg-lightpurple',
  },
  {
    title: 'Brand Identity & Visual Direction',
    blurb: 'Your brand, your voice, your visual system.',
    description:
      'I develop digital style guides, choose fonts and colors, and create design systems that express your brand consistently across platforms.',
    icon: '📐',
    background: 'bg-whitepurple',
  },
  {
    title: 'Online Presence Workshops',
    blurb: 'Let’s get aligned on your goals and audience.',
    description:
      'Through collaborative workshops, I help you clarify your brand message, define your goals, and create a web presence that reflects your vision.',
    icon: '🌐',
    background: 'bg-lightpurple',
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full text-foreground">
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam">
          What I Can Help You Build
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you're building from scratch or improving your existing site, jCode Studio offers development, design, and strategy services to bring your project to life.
        </p>
    </section>

    <section className="bg-[#0d1117] text-gray-200 py-24 px-6 w-full">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-vietnam font-bold mb-4 text-pink-400">
            <span className="text-[#58a6ff]">Frontend Development</span>
            </h2>
            <p className="font-mono text-sm bg-[#161b22] text-white p-4 rounded-lg border border-[#30363d] mb-6 shadow-inner">
            // Responsive, fast, and accessible websites<br />
            const tools = [ "React", "Next.js", "Tailwind CSS", "Python", "Java" ];
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
                Thoughtful spacing, balance, and typography that invites users to explore.
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


    </main>
  );
}