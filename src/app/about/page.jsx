'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiHeart } from 'react-icons/hi';
import { FaUniversalAccess, FaPalette, FaLaptopCode, FaCheck } from 'react-icons/fa';
import { SiGoogle, SiMeta } from 'react-icons/si';
import JourneyTimeline from '@/components/page/JourneyTimeline';
import TechStack from '@/components/page/TechStack';
import FunFacts from '@/components/page/FunFacts';

const skills = [
  {
    icon: FaLaptopCode,
    title: 'Web Development',
    description:
      "I build clean, performant, and scalable web apps with React and Next.js — writing code that's easy to maintain, fast to load, and a joy to use.",
    color: 'bg-sky',
    iconColor: '#0ea5e9',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'REST APIs'],
  },
  {
    icon: FaPalette,
    title: 'UX + UI Design',
    description:
      'I design with users in mind — mapping flows, building wireframes, and crafting interfaces that look beautiful and feel effortless from the first click.',
    color: 'bg-rose',
    iconColor: '#ec4899',
    tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: FaUniversalAccess,
    title: 'Accessibility',
    description:
      'I bake accessibility into every layer of the product — from semantic HTML to keyboard navigation — so no one gets left behind.',
    color: 'bg-lavender',
    iconColor: '#7c3aed',
    tags: ['WCAG 2.1 AA', 'ARIA', 'Keyboard Nav', 'Screen Readers', 'Color Contrast'],
  },
];

const approaches = [
  {
    icon: HiHeart,
    headline: 'User First, Always',
    text: 'Every decision I make starts with the person using it. Before any design or code, I map flows, uncover friction, and look for moments where the experience can genuinely delight someone.',
    iconBg: 'bg-rose',
    bar: 'bg-rose',
  },
  {
    icon: FaUniversalAccess,
    headline: 'Accessible by Default',
    text: "I hold myself to WCAG standards on every project — not because I have to, but because building for everyone makes the product better. Inclusive design isn't an add-on; it's the work.",
    iconBg: 'bg-lavender',
    bar: 'bg-periwinkle',
  },
  {
    icon: HiCode,
    headline: 'Creative Partner, Not Just a Coder',
    text: "I push back when something doesn't serve the user, bring ideas nobody asked for, and treat every project like I have a real stake in its success — because I do.",
    iconBg: 'bg-sky',
    bar: 'bg-sky',
  },
];

const certificates = [
  {
    issuer: 'Google',
    icon: SiGoogle,
    iconColor: '#4285F4',
    iconBg: 'bg-sky',
    accentBorder: 'border-sky',
    title: 'Google UX Design Certificate',
    courses: [
      'Foundations of User Experience (UX) Design',
      'Start the UX Design Process: Empathize, Define, and Ideate',
      'Build Wireframes and Low-Fidelity Prototypes',
      'Conduct UX Research and Test Early Concepts',
    ],
  },
  {
    issuer: 'Meta',
    icon: SiMeta,
    iconColor: '#0082fb',
    iconBg: 'bg-powder',
    accentBorder: 'border-periwinkle',
    title: 'Meta Front-End Developer Certificate',
    courses: [
      'Introduction to Front-End Development',
      'Programming with JavaScript',
    ],
  },
];

export default function About() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-whitepurple via-powder to-lavender">
        {/* Floating decorative shapes */}
        <div className="absolute w-40 h-40 bg-pink opacity-30 rounded-full top-[-30px] left-[-30px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute w-28 h-28 bg-periwinkle opacity-40 rounded-full bottom-[10%] right-[-20px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute w-20 h-20 bg-lavender opacity-35 rounded-full top-[20%] right-[15%] animate-[float_7s_ease-in-out_infinite]" />
        <div className="absolute w-16 h-16 bg-peach opacity-30 rounded-full bottom-[30%] left-[8%] animate-[float_9s_ease-in-out_infinite]" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                <Image
                  src="/images/profilepicture.jpg"
                  alt="Photo of Joan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-darkpurple/20 animate-[spin_20s_linear_infinite]" />
            </motion.div>

            {/* Intro Text */}
            <div className="text-center md:text-left flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-vietnam font-bold text-darkpurple mb-6"
              >
                About jCode Studio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-black leading-relaxed max-w-xl"
              >
                Hi, I&apos;m <span className="font-bold text-darkpurple">Joan</span> — the creative developer and UX designer behind{' '}
                <span className="font-bold text-darkpurple">jCode Studio LLC™</span>.
                I blend technical expertise with artistic expression to build digital experiences that feel
                as good as they look.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-darkpurple font-vietnam mb-3">
              My expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-darkpurple mb-4">
              What I Do
            </h2>
            <p className="text-lg text-black font-vietnam max-w-2xl mx-auto leading-relaxed">
              From concept to launch — I handle both the design and the code, so nothing gets lost in translation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`${skill.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <skill.icon
                  className="text-5xl mb-4"
                  style={{ color: skill.iconColor }}
                />
                <h3 className="text-xl font-vietnam font-bold text-darkpurple mb-3">
                  {skill.title}
                </h3>
                <p className="text-black leading-relaxed text-sm mb-5 flex-1">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-darkpurple text-xs font-vietnam font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Certifications Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-darkpurple font-vietnam mb-3">
              Credentials
            </p>
            <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-darkpurple mb-4">
              Certifications
            </h2>
            <p className="text-lg text-black font-vietnam max-w-2xl mx-auto leading-relaxed">
              Professional certificates that formalize the skills I use every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-whitepurple rounded-2xl overflow-hidden shadow-sm border-t-4 ${cert.accentBorder}`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${cert.iconBg} p-3 rounded-xl shrink-0`}>
                      <cert.icon
                        className="text-2xl"
                        style={{ color: cert.iconColor }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-darkpurple font-vietnam mb-0.5">
                        {cert.issuer}
                      </p>
                      <h3 className="text-base md:text-lg font-vietnam font-bold text-darkpurple leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {cert.courses.map((course) => (
                      <li key={course} className="flex items-start gap-3">
                        <FaCheck
                          className="text-darkpurple text-xs mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-black font-vietnam leading-relaxed">
                          {course}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="px-6 py-20 bg-whitepurple">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-darkpurple font-vietnam mb-3">
              How I work
            </p>
            <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-darkpurple mb-5">
              My Approach
            </h2>
            <p className="text-lg text-black font-vietnam max-w-2xl mx-auto leading-relaxed">
              Great digital experiences don&apos;t happen by accident &mdash; they&apos;re built with intention at every step.
            </p>
          </motion.div>

          <div className="space-y-5">
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl px-6 py-7 md:px-10 md:py-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-4 md:gap-8"
              >
                {/* Decorative step number */}
                <span
                  className="hidden sm:block font-fredoka font-bold text-6xl md:text-7xl text-lightpurple leading-none shrink-0 w-12 md:w-16 text-center select-none"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>

                {/* Vertical accent bar */}
                <div
                  className={`hidden sm:block h-14 md:h-16 w-1 rounded-full shrink-0 ${item.bar}`}
                  aria-hidden="true"
                />

                {/* Icon badge */}
                <div className={`${item.iconBg} p-3 md:p-4 rounded-xl shadow-sm shrink-0`}>
                  <item.icon className="text-xl md:text-2xl text-darkpurple" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-vietnam font-bold text-darkpurple text-lg md:text-xl mb-1.5">
                    {item.headline}
                  </h3>
                  <p className="text-black font-vietnam text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-whitepurple via-white to-powder">
        <div className="max-w-4xl mx-auto">
          <JourneyTimeline />
        </div>
      </section>

      {/* Fun Facts Section */}
      <FunFacts />
    </main>
  );
}