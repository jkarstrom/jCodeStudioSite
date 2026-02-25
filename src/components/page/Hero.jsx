'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ClientOnly from '../ClientOnly';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen px-6 py-12 md:py-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-whitepurple via-powder to-lavender overflow-hidden">

      {/* Floating decorative shapes */}
      <div className="absolute w-48 h-48 bg-pink opacity-30 rounded-full top-[-50px] left-[-50px] animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute w-32 h-32 bg-periwinkle opacity-40 rounded-full bottom-[-30px] right-[-40px] animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute w-24 h-24 bg-sky opacity-40 rounded-full top-[20%] right-[10%] animate-[float_7s_ease-in-out_infinite]"></div>
      <div className="absolute w-20 h-20 bg-rose opacity-30 rounded-full bottom-[30%] left-[5%] animate-[float_9s_ease-in-out_infinite]"></div>
      <div className="absolute w-16 h-16 bg-lavender opacity-35 rounded-full top-[60%] right-[20%] animate-[float_5s_ease-in-out_infinite]"></div>
      <div className="absolute w-28 h-28 bg-peach opacity-25 rounded-full top-[10%] left-[30%] animate-[float_10s_ease-in-out_infinite]"></div>
      <h1 className="text-3xl md:text-6xl leading-tight font-vietnam text-darkpurple">
        <ClientOnly>
          <div className="bg-white/70 rounded-lg px-4 py-2 inline-block text-darkpurple text-shadow-sm">
            <Typewriter
              words={[
                "Hey, I’m Joan and welcome to jCode Studio.",
                "I hope you're having a great day so far.",
                "Explore our site and see what we can do for you.",
                "You're still here? Scroll down already!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>
        </ClientOnly>
      </h1>

      <p className="mt-4 md:mt-6 text-base md:text-xl font-vietnam text-gray-700 max-w-md md:max-w-xl">
        Making the web a more beautiful (and functional) place.
      </p>
    </section>
  );
}