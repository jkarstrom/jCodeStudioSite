'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function TestimonialCard({ quote, name, title, color = 'bg-lightpurple' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`h-full flex flex-col justify-between rounded-2xl p-6 shadow-lg transition ${color} text-foreground w-full`}
    >
      <div className="flex-1 flex items-center justify-center">
        <p className="text-lg font-vietnam font-light italic leading-relaxed text-center">
          “{quote}”
        </p>
      </div>

      <div className="mt-6 border-t border-foreground/10 pt-3 text-center">
        <p className="font-vietnam text-md font-semibold">{name}</p>
        <p className="text-sm text-foreground/80">{title}</p>
      </div>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};