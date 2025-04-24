'use client';

import { motion } from 'framer-motion';

const adventures = [
  {
    emoji: '💻',
    title: 'Build a Stunning Website',
    description: 'Take a look at current and past projects',
    href: '/projects',
  },
  {
    emoji: '🎨',
    title: 'Design a Bold Brand Identity',
    description: 'Fonts, colors, layout — let’s define your visual vibe.',
    href: '/services',
  },
  {
    emoji: '🧠',
    title: 'Craft a Seamless User Experience',
    description: 'UX research, wireframes, and flows for apps that feel right. ',
    href: '/contact',
  },
];

export default function AdventureCards() {
  return (
    <section className="py-20 px-6 bg-pink font-vietnam text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
        What will we create together?
      </h2>

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
            className="bg-white rounded-2xl shadow-lg p-6 text-left space-y-3 hover:shadow-2xl transition"
          >
            <div className="text-4xl">{item.emoji}</div>
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-darkpurple">{item.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}