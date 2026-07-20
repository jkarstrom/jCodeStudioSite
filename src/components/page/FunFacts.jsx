'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function FactCard({ emoji, tag, headline, detail, bg, span = '', delay = 0, decoration = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${bg} ${span}`}
    >
      {decoration && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          {decoration}
        </div>
      )}
      <div className="relative z-10 p-7 flex flex-col gap-3 min-h-[200px]">
        <span className="text-5xl leading-none" aria-hidden="true">{emoji}</span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-darkpurple font-vietnam mb-1">
            {tag}
          </p>
          <h3 className="text-lg md:text-xl font-bold text-darkpurple font-vietnam mb-1.5">
            {headline}
          </h3>
          <p className="text-sm text-black font-vietnam leading-relaxed">{detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

FactCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  span: PropTypes.string,
  delay: PropTypes.number,
  decoration: PropTypes.node,
};

export default function FunFacts() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-darkpurple font-vietnam mb-3">
            Beyond the portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-darkpurple font-vietnam">
            A little more about me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">

          {/* Row 1: Science Fair (wide) + Korea */}
          <FactCard
            emoji="🏆"
            tag="Origin Story"
            headline="Illinois State Science Fair"
            detail="Won 1st place in 7th grade — and was the only girl competing in the computer science category. That moment lit a fire."
            bg="bg-peach"
            span="md:col-span-2"
            delay={0}
            decoration={
              <>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #b45309 1.5px, transparent 1.5px)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <span className="absolute -right-3 -bottom-4 text-[9rem] leading-none opacity-10 -rotate-12">
                  🏆
                </span>
              </>
            }
          />

          <FactCard
            emoji="🇰🇷"
            tag="World Traveler"
            headline="안녕하세요!"
            detail="Lived in South Korea for a full year, studied at Yonsei University in Seoul, and still speaks the language."
            bg="bg-sky"
            delay={0.05}
            decoration={
              <span className="absolute right-3 bottom-2 font-fredoka font-bold text-[4.5rem] leading-none text-darkpurple opacity-10">
                안녕
              </span>
            }
          />

          {/* Row 2: Kiwi + Matcha + Books */}
          <FactCard
            emoji="🐱"
            tag="Fur Baby"
            headline="Cat Mom to Kiwi"
            detail="My kitten Kiwi is the unofficial mascot of jCode Studio. She supervises every design review from my desk."
            bg="bg-lavender"
            delay={0.1}
            decoration={
              <>
                <span className="absolute top-3 right-4 text-[4rem] leading-none opacity-10 rotate-12">🐾</span>
                <span className="absolute bottom-4 left-3 text-[3rem] leading-none opacity-10 -rotate-12">🐾</span>
              </>
            }
          />

          <FactCard
            emoji="🍵"
            tag="Café Connoisseur"
            headline="Matcha Devotee"
            detail="My drink of choice, always. On a lifelong quest to find the perfect matcha latte in every city I visit."
            bg="bg-mint"
            delay={0.15}
            decoration={
              <span className="absolute -right-3 -bottom-3 text-[7rem] leading-none opacity-10 -rotate-12">
                🍵
              </span>
            }
          />

          <FactCard
            emoji="📚"
            tag="Bookworm"
            headline="50 Books, One Year"
            detail="My 2026 reading goal. Fiction, design, tech, and everything in between — every book is a new perspective."
            bg="bg-powder"
            delay={0.2}
            decoration={
              <span className="absolute right-2 -bottom-2 font-fredoka font-bold text-[7rem] leading-none text-darkpurple opacity-[0.06]">
                50
              </span>
            }
          />

          {/* Row 3: Green Thumb + Softball (wide) */}
          <FactCard
            emoji="🌿"
            tag="Plant Parent"
            headline="Certified Green Thumb"
            detail="My home is a mini jungle. Every plant has a name and — knock on wood — they are all thriving."
            bg="bg-sage"
            delay={0.25}
            decoration={
              <>
                <span className="absolute -top-1 -right-1 text-[5rem] leading-none opacity-10 rotate-12">🌱</span>
                <span className="absolute bottom-3 right-10 text-[3rem] leading-none opacity-10 -rotate-6">🪴</span>
              </>
            }
          />

          <FactCard
            emoji="⚾"
            tag="Coach"
            headline="High School Softball Coach"
            detail="Head coach for a high school softball team and ISL Coach of the Year. Same passion, different field."
            bg="bg-rose"
            span="md:col-span-2"
            delay={0.3}
            decoration={
              <>
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #5e4875 0, #5e4875 2px, transparent 0, transparent 50%)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <span className="absolute right-5 -bottom-4 text-[8rem] leading-none opacity-10 -rotate-12">
                  ⚾
                </span>
              </>
            }
          />

        </div>
      </div>
    </section>
  );
}
