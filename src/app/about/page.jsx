'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiSparkles, HiHeart } from 'react-icons/hi';
import { FaUniversalAccess, FaPalette, FaLaptopCode } from 'react-icons/fa';
import JourneyTimeline from '@/components/page/JourneyTimeline';
import TechStack from '@/components/page/TechStack';

const skills = [
  {
    icon: FaLaptopCode,
    title: 'Web Development',
    description: 'Clean, scalable React/Next.js code built for performance and polish.',
    color: 'bg-sky',
    iconColor: '#0ea5e9',
  },
  {
    icon: FaPalette,
    title: 'UX + UI Design',
    description: 'User-first designs that balance function and aesthetic with Figma, wireframes, and flows.',
    color: 'bg-rose',
    iconColor: '#ec4899',
  },
  {
    icon: FaUniversalAccess,
    title: 'Accessibility',
    description: 'Inclusive, thoughtful interfaces that work for everyone across all devices.',
    color: 'bg-mint',
    iconColor: '#14b8a6',
  },
];

const approaches = [
  {
    icon: HiHeart,
    text: 'Focus on user experience from start to finish',
    color: 'text-rose',
  },
  {
    icon: HiSparkles,
    text: 'Build accessible, responsive, and joyful products',
    color: 'text-peach',
  },
  {
    icon: HiCode,
    text: 'Collaborate like a creative partner, not just a coder',
    color: 'text-sky',
  },
];

export default function About() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-whitepurple via-powder to-mint">
        {/* Floating decorative shapes */}
        <div className="absolute w-40 h-40 bg-pink opacity-30 rounded-full top-[-30px] left-[-30px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute w-28 h-28 bg-mint opacity-40 rounded-full bottom-[10%] right-[-20px] animate-[float_8s_ease-in-out_infinite]" />
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
                <span className="font-bold text-darkpurple">jCode Studio</span>.
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-vietnam font-bold text-darkpurple mb-12 text-center"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`${skill.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <skill.icon
                  className="text-5xl mb-4"
                  style={{ color: skill.iconColor }}
                />
                <h3 className="text-xl font-vietnam font-bold text-darkpurple mb-3">
                  {skill.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* My Approach Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-vietnam font-bold text-darkpurple mb-12 text-center"
          >
            My Approach
          </motion.h2>

          <div className="space-y-6">
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 bg-gradient-to-r from-whitepurple to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-white shadow-sm`}>
                  <item.icon className={`text-3xl ${item.color}`} />
                </div>
                <p className="text-lg text-black font-vietnam">
                  {item.text}
                </p>
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
    </main>
  );
}