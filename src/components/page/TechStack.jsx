'use client';

import React from 'react';
import PropTypes from 'prop-types';
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
  SiVercel,
  SiFramer,
  SiGithub,
  SiNodedotjs,
  SiAngular,
} from 'react-icons/si';

const technologies = [
  { name: 'React',         color: 'bg-sky',         icon: FaReact,       iconColor: '#61DAFB' },
  { name: 'Next.js',       color: 'bg-lavender',    icon: SiNextdotjs,   iconColor: '#ffffff' },
  { name: 'Tailwind CSS',  color: 'bg-powder',      icon: SiTailwindcss, iconColor: '#06B6D4' },
  { name: 'JavaScript',    color: 'bg-peach',       icon: SiJavascript,  iconColor: '#F7DF1E' },
  { name: 'Framer Motion', color: 'bg-whitepurple', icon: SiFramer,      iconColor: '#0055FF' },
  { name: 'GitHub',        color: 'bg-lilac',       icon: SiGithub,      iconColor: '#24292e' },
  { name: 'TypeScript',    color: 'bg-powder',      icon: SiTypescript,  iconColor: '#3178C6' },
  { name: 'Python',        color: 'bg-sage',        icon: FaPython,      iconColor: '#3776AB' },
  { name: 'Figma',         color: 'bg-rose',        icon: FaFigma,       iconColor: '#F24E1E' },
  { name: 'Vercel',        color: 'bg-periwinkle',  icon: SiVercel,      iconColor: '#5e4875' },
  { name: 'Node.js',       color: 'bg-sage',        icon: SiNodedotjs,   iconColor: '#339933' },
  { name: 'Angular',       color: 'bg-pink',        icon: SiAngular,     iconColor: '#DD0031' },
];

const row1 = technologies.slice(0, 6);
const row2 = technologies.slice(6, 12);

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max ${reverse ? 'animate-[marquee-reverse_28s_linear_infinite]' : 'animate-[marquee_28s_linear_infinite]'}`}>
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className={`${tech.color} rounded-2xl p-5 shadow-md flex flex-col items-center justify-center gap-2 flex-shrink-0 w-36 h-32`}
          >
            <tech.icon className="text-4xl" style={{ color: tech.iconColor }} />
            <p className="font-vietnam font-semibold text-darkpurple text-sm text-center leading-tight">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

MarqueeRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  reverse: PropTypes.bool,
};

export default function TechStack() {
  return (
    <section className="py-20 bg-darkpurple overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-vietnam">
          Tools &amp; Technologies
        </h2>
        <p className="text-lavender text-lg max-w-2xl mx-auto">
          The modern stack I use to bring ideas to life — fast, accessible, and built to scale.
        </p>
      </div>

      {/* Screen-reader-accessible list — visual marquee is hidden from AT */}
      <p className="sr-only">
        Technologies: {technologies.map(t => t.name).join(', ')}
      </p>

      <div className="flex flex-col gap-4" aria-hidden="true">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
