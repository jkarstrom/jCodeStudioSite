'use client';

import React from 'react';
import { motion } from 'framer-motion';

const adventures = [
  {
    emoji: '💻',
    title: 'Frontend Development',
    description: 'Clean, responsive, and accessible websites built with React & Next.js — tailored for performance and modern user expectations.',
    href: '/projects',
  },
  {
    emoji: '🎨',
    title: 'UX/UI Design & Strategy',
    description: 'From wireframes to polished interfaces, I design with usability, accessibility, and aesthetics in mind to guide users naturally.',
    href: '/services',
  },
  {
    emoji: '✨',
    title: 'Brand Identity & Visual Direction',
    description: 'Let’s define your look and feel — from logo and color palette to type system and creative strategy — to tell your story effectively.',
    href: '/services',
  },
];

export default function AdventureCards() {
  return (
    <section className="py-20 px-6 bg-whitepurple font-vietnam text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-darkpurple mb-4">
          What will we create together?
        </h2>
        <p className="text-gray-700 text-lg">
          Whether you’re launching something new or leveling up an existing project, I offer design + development expertise that brings clarity and confidence to your digital vision.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {adventures.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 text-left space-y-4 border border-lightpurple hover:shadow-lg transition"
          >
            <div className="text-4xl">{item.emoji}</div>
            <h3 className="text-xl font-semibold text-darkpurple">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}