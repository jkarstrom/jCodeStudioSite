'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'Started studying Computer Science',
    description: 'Majored in CS & Business at Chapman University. First exposure to full stack development and entrepreneurship.',
  },
  {
    year: '2021',
    title: 'Studied Abroad in South Korea',
    description: 'Landed a game development internship in Seoul and took tech-focused classes at Yonsei University.',
  },
  {
    year: '2022',
    title: 'Graduated from Chapman University',
    description: 'Earned my B.S. in Computer Science and Business Administration, ready to enter the tech industry.',
  },
  {
    year: '2023',
    title: 'Full Stack Engineering Job',
    description: 'Landed a full-time role as a full stack engineer, sharpening my React, Node.js, and product development skills.',
  },
  {
    year: '2024',
    title: 'Started jCode Studio',
    description: 'Founded my own digital studio, offering web development and UX design services as a small business owner.',
  },
  {
    year: 'Present',
    title: 'Collaborations and Speaking Engagements',
    description: 'Worked with diverse clients, spoken at Professional Women’s Networking events, and featured on the "Life = Choices" podcast.',
  },
];
  
export default function JourneyTimeline() {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-GothamBlack text-purple mb-12 text-center md:text-left tracking-tight">The jCode Journey</h2>
      <div className="border-l-[3px] border-purple bg-gradient-to-br from-white via-[#fdf8ff] to-[#f5e6ff] rounded-lg pl-8 space-y-12 relative py-6 px-2 md:px-6">
         {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, backgroundColor: '#fff8fc' }}
            className="relative rounded-xl px-6 py-5 shadow-md hover:shadow-xl border border-purple/10 bg-white transition-all duration-300"
          >
            {/* Timeline dot */}
             <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple rounded-full border-[3px] border-white shadow-lg"></div>

             <h3 className="text-xl font-GothamBold text-purple">
               <span className="text-black">{item.year}</span> — {item.title}
             </h3>
             <p className="text-gray-700 mt-1 leading-relaxed">{item.description}</p>
           </motion.div>
        ))}
      </div>
     </section>
  );
}