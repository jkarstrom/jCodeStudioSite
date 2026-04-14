'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ClientOnly from '../ClientOnly';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen px-6 py-12 md:py-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-whitepurple via-powder to-lavender overflow-hidden">

      {/* Floating decorative shapes */}
      <div className="absolute w-48 h-48 bg-pink opacity-30 rounded-full top-[-50px] left-[-50px] animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute w-32 h-32 bg-periwinkle opacity-40 rounded-full bottom-[-30px] right-[-40px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute w-24 h-24 bg-sky opacity-40 rounded-full top-[20%] right-[10%] animate-[float_7s_ease-in-out_infinite]" />
      <div className="absolute w-20 h-20 bg-rose opacity-30 rounded-full bottom-[30%] left-[5%] animate-[float_9s_ease-in-out_infinite]" />
      <div className="absolute w-16 h-16 bg-lavender opacity-35 rounded-full top-[60%] right-[20%] animate-[float_5s_ease-in-out_infinite]" />
      <div className="absolute w-28 h-28 bg-peach opacity-25 rounded-full top-[10%] left-[30%] animate-[float_10s_ease-in-out_infinite]" />

      {/* Ghost headline */}
      <p
        className="absolute inset-0 flex items-center justify-center font-fredoka font-bold pointer-events-none select-none leading-none whitespace-nowrap"
        style={{
          fontSize: 'clamp(5rem, 18vw, 14rem)',
          WebkitTextStroke: '1.5px rgba(94,72,117,0.05)',
          color: 'transparent',
        }}
        aria-hidden="true"
      >
        jCode
      </p>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">

        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 bg-darkpurple/8 text-darkpurple text-label uppercase tracking-widest font-bold px-4 py-2 rounded-full border border-darkpurple/10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
          Available for new projects
        </div>

        {/* Typewriter headline */}
        <h1 className="font-vietnam text-h1 text-darkpurple leading-tight">
          <ClientOnly>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block text-darkpurple shadow-sm border border-white/60">
              <Typewriter
                words={[
                  "Hey, I'm Joan — welcome to jCode Studio.",
                  "I hope you're having a great day so far.",
                  "Explore the site and see what we can do.",
                  "You're still here? Scroll down already!",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>
          </ClientOnly>
        </h1>

        {/* Tagline */}
        <p className="font-fredoka font-bold text-h2 text-transparent bg-clip-text leading-tight" style={{ backgroundImage: 'linear-gradient(135deg, #5e4875 0%, #7B4FA0 50%, #ec4899 100%)' }}>
          Built to feel. Designed to last.
        </p>

        {/* Sub-tagline */}
        <p className="text-body-lg text-darkpurple/60 max-w-lg leading-relaxed">
          Frontend development and UX design that puts craft first — from concept to launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="/web-projects"
            className="inline-block bg-darkpurple text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-brand-vivid hover:shadow-xl transition-all duration-300 font-vietnam"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-darkpurple/30 text-darkpurple font-semibold px-8 py-4 rounded-full hover:border-darkpurple hover:bg-darkpurple/5 transition-all duration-300 font-vietnam"
          >
            Let&apos;s Connect
          </a>
        </div>

      </div>
    </section>
  );
}
