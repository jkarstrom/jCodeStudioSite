'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2018',
    label: 'Education',
    labelColor: '#7c3aed',
    labelBg: '#f3eeff',
    dotFrom: '#a78bfa',
    dotTo: '#7c3aed',
    emoji: '🎓',
    title: 'Chapman University — CS & Business',
    description:
      'Started a dual-track B.S. in Computer Science and Business Administration. Joined Girls Who Code, the Korean American Student Association, and played on the softball team.',
  },
  {
    year: '2021',
    label: 'Study Abroad',
    labelColor: '#0ea5e9',
    labelBg: '#e0f2fe',
    dotFrom: '#38bdf8',
    dotTo: '#0ea5e9',
    emoji: '🌏',
    title: 'Yonsei University — Seoul, South Korea',
    description:
      'Exchange student at Yonsei University with a game development internship in Seoul. Served concurrently as VP of the Korean American Student Association at Chapman.',
  },
  {
    year: '2023',
    label: 'Milestone',
    labelColor: '#ec4899',
    labelBg: '#fce7f3',
    dotFrom: '#f472b6',
    dotTo: '#ec4899',
    emoji: '🏅',
    title: 'Graduated Chapman + Google PM Certification',
    description:
      'Earned my B.S. in Computer Science & Business Administration. Immediately pursued professional development — completing the Google Project Management certification to round out the technical foundation with structured delivery skills.',
  },
  {
    year: '2024',
    label: 'Career',
    labelColor: '#16a34a',
    labelBg: '#dcfce7',
    dotFrom: '#4ade80',
    dotTo: '#16a34a',
    emoji: '🚀',
    title: 'Founded jCode Studio LLC',
    description:
      'Launched my own digital studio offering full-stack web development and UX/UI design. First contracts included Mental Freedom® and LifeFit Matrix for Olver International. Completed Google UX Design certifications and became Head Softball Coach at Lake Forest Academy.',
  },
  {
    year: '2025',
    label: 'Impact',
    labelColor: '#d97706',
    labelBg: '#fef3c7',
    dotFrom: '#fbbf24',
    dotTo: '#d97706',
    emoji: '⚡',
    title: 'Safe Space for Students — 15k Users in Week One',
    description:
      'Designed and built The Safe Space for Students for Crime Stoppers of Houston and The John M. O\'Quinn Foundation — the largest project I\'d taken on in scope, complexity, and civic impact. 15,000+ users in the first week. Also designed the GGRC 2025 Annual Report and was named ISL Head Softball Coach of the Year at Lake Forest Academy.',
  },
  {
    year: '2026',
    label: 'Launch',
    labelColor: '#7c3aed',
    labelBg: '#f3eeff',
    dotFrom: '#c084fc',
    dotTo: '#7c3aed',
    emoji: '📱',
    title: 'My Drink Diary — App Store Launch',
    description:
      'Solo-designed and developed My Drink Diary: an iOS social drink-logging app built with React Native, Expo, and Firebase. Handled everything from concept and UX to branding, development, and the App Store launch. Continuing contracted work with Crime Stoppers of Houston and the GGRC.',
  },
];

export default function JourneyTimeline() {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-vietnam font-bold text-darkpurple mb-3 text-center md:text-left tracking-tight">
        The jCode Journey
      </h2>
      <p className="text-black/50 text-base font-vietnam mb-12 text-center md:text-left">
        From Chapman&apos;s CS labs to App Store launches — the full story.
      </p>

      <div className="relative pl-6 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-darkpurple/30 via-darkpurple/60 to-darkpurple/20" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[33px] md:-left-[41px] top-5 w-5 h-5 rounded-full border-[3px] border-white shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${item.dotFrom}, ${item.dotTo})`,
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 6, boxShadow: '0 12px 32px rgba(124,58,237,0.10)' }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-darkpurple/10 px-6 py-5 shadow-sm"
              >
                {/* Top row: year + label badge + emoji */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-vietnam font-bold text-darkpurple text-lg leading-none">
                    {item.year}
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ color: item.labelColor, background: item.labelBg }}
                  >
                    {item.label}
                  </span>
                  <span className="ml-auto text-xl">{item.emoji}</span>
                </div>

                <h3 className="text-base md:text-lg font-vietnam font-semibold text-darkpurple mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End cap */}
        <div className="relative mt-8 pl-0">
          <div
            className="absolute -left-[33px] md:-left-[41px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #f472b6, #7c3aed)' }}
          />
          <p className="text-darkpurple/40 text-xs font-vietnam font-semibold tracking-widest uppercase pl-1">
            Still writing the story →
          </p>
        </div>
      </div>
    </section>
  );
}
