'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-pur">
      <h1 className="text-4xl md:text-6xl font-vietnam text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <Typewriter
          words={[
            "Hey, I’m Joan.",
            "Welcome to jCode Studio.",
            "Where imagination meets implementation.",
            "Explore our site and see what we can do for you.",
          ]}
          loop={0} // 0 = no loop
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h1>

      <p className="mt-6 text-lg font-vietnam md:text-xl text-gray-700 max-w-xl">
        Building beautiful, functional digital experiences — with a touch of magic ✨
      </p>
    </section>
  );
}