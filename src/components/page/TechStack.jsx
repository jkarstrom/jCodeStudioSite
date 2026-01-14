'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaFigma
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVercel
} from 'react-icons/si';

const technologies = [
  { name: 'React', color: 'bg-sky', icon: FaReact, iconColor: '#61DAFB' },
  { name: 'Next.js', color: 'bg-lavender', icon: SiNextdotjs, iconColor: '#000000' },
  { name: 'Tailwind CSS', color: 'bg-mint', icon: SiTailwindcss, iconColor: '#06B6D4' },
  { name: 'JavaScript', color: 'bg-peach', icon: SiJavascript, iconColor: '#F7DF1E' },
  { name: 'TypeScript', color: 'bg-powder', icon: SiTypescript, iconColor: '#3178C6' },
  { name: 'Python', color: 'bg-sage', icon: FaPython, iconColor: '#3776AB' },
  { name: 'Figma', color: 'bg-rose', icon: FaFigma, iconColor: '#F24E1E' },
  { name: 'Vercel', color: 'bg-periwinkle', icon: SiVercel, iconColor: '#000000' },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-whitepurple to-powder">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-darkpurple mb-4 font-vietnam">
          Tools &amp; Technologies
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          The modern stack I use to bring ideas to life — fast, accessible, and built to scale.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`${tech.color} rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-default`}
            >
              <tech.icon className="text-4xl mb-2" style={{ color: tech.iconColor }} />
              <p className="font-vietnam font-semibold text-darkpurple">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
