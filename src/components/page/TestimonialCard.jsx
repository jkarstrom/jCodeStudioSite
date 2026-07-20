'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/* featured=true → larger quote, left-border accent, natural height
   default       → standard card, sized by content */
export default function TestimonialCard({
  quote,
  name,
  title,
  color = 'bg-lightpurple',
  initials = '?',
  featured = false,
  accentBorder = 'border-rose',
  badge,
}) {
  if (featured) {
    return (
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-2xl p-8 shadow-lg bg-white border-l-4 ${accentBorder} overflow-hidden`}
      >
        {/* Watermark quote glyph */}
        <span
          className="absolute -bottom-6 right-4 font-fredoka text-[9rem] leading-none text-darkpurple/[0.06] select-none pointer-events-none"
          aria-hidden="true"
        >
          &rdquo;
        </span>

        {/* Stars */}
        <div className="mb-5" aria-label="5 out of 5 stars">
          <span className="text-darkpurple text-lg tracking-wide" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>

        {/* Quote — larger, more prominent */}
        <p className="text-xl md:text-2xl font-vietnam font-medium italic leading-relaxed text-darkpurple/80 mb-8 relative z-10">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Attribution */}
        <div className="border-t border-darkpurple/10 pt-5 flex items-center gap-4 relative z-10">
          <div className="w-11 h-11 rounded-full bg-darkpurple flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="font-fredoka text-white text-sm font-semibold tracking-wide">{initials}</span>
          </div>
          <div className="flex-1 text-left">
            <p className="font-vietnam text-sm font-semibold text-darkpurple">{name}</p>
            <p className="text-xs text-black/50">{title}</p>
          </div>
          {badge && (
            <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-rose/30 text-darkpurple shrink-0">
              {badge}
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative flex flex-col rounded-2xl p-8 shadow-lg transition overflow-hidden ${color} text-black w-full`}
    >
      {/* Decorative background quote mark */}
      <span
        className="absolute -top-4 -left-2 font-fredoka text-[10rem] leading-none text-darkpurple/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="relative z-10 mb-4" aria-label="5 out of 5 stars">
        <span className="text-darkpurple text-lg tracking-wide" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
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
  featured: PropTypes.bool,
  accentBorder: PropTypes.string,
  badge: PropTypes.string,
};
