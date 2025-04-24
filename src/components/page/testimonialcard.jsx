'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, name, title, color = 'bg-lightpurple' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-2xl p-6 shadow-lg transition ${color} text-foreground max-w-md mx-auto`}
    >
      <p className="text-lg font-vietnam font-light italic mb-4 leading-relaxed">
        “{quote}”
      </p>
      <div className="mt-4 border-t border-foreground/10 pt-3">
        <p className="font-vietnam text-md">{name}</p>
        <p className="text-sm text-foreground/80">{title}</p>
      </div>
    </motion.div>
  );
}