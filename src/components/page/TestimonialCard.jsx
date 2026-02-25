'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function TestimonialCard({ quote, name, title, color = 'bg-lightpurple', initials = '?' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative h-full flex flex-col justify-between rounded-2xl p-8 shadow-lg transition overflow-hidden ${color} text-black w-full`}
    >
      {/* Decorative background quote mark */}
      <span
        className="absolute -top-4 -left-2 font-fredoka text-[10rem] leading-none text-darkpurple/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="relative z-10 mb-4">
        <span className="text-darkpurple text-lg tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>

      {/* Quote text */}
      <div className="relative z-10 flex-1">
        <p className="text-base font-vietnam font-normal italic leading-relaxed text-black/80">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Attribution row with avatar badge */}
      <div className="relative z-10 mt-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-darkpurple flex items-center justify-center flex-shrink-0 shadow-md">
          <span className="font-fredoka text-white text-base font-semibold tracking-wide">
            {initials}
          </span>
        </div>
        <div className="text-left">
          <p className="font-vietnam text-sm font-semibold text-darkpurple">{name}</p>
          <p className="text-xs text-black/60">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  initials: PropTypes.string,
};
