'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
    {
      year: '2019',
      title: 'Started studying Computer Science',
      description: 'Majored in CS & Business at Chapman University. First exposure to full stack dev.',
    },
    {
      year: '2021',
      title: 'Studied Abroad in South Korea',
      description: 'Landed a game development internship in Seoul and took classes at Yonsei University.',
    },
    {
      year: '2022',
      title: 'First Developer Job',
      description: 'Worked as a full stack engineer building internal tools and client-facing dashboards.',
    },
    {
      year: '2023',
      title: 'Started jCode Studio',
      description: 'Began freelancing in web development, UX design, and building digital experiences.',
    },
  ];
  
  export default function JourneyTimeline() {
    return (
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">My Journey</h2>
        <div className="border-l-2 border-pink pl-6 space-y-12 relative">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: '#faf7ff' }}
              className="relative rounded-lg px-4 py-3 hover:shadow-md transition cursor-default"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.45rem] top-1 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
  
              <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }