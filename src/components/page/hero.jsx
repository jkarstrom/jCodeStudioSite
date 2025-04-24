'use client';

import { Typewriter } from 'react-simple-typewriter';
import ClientOnly from '../ClientOnly';

export default function Hero() {
  return (
    <section
      className="px-6 py-10 md:py-16 flex flex-col justify-center items-center text-center bg-pur"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      <h1 className="text-3xl md:text-6xl leading-tight font-vietnam text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <ClientOnly>
          <Typewriter
            words={[
              "Hey, I’m Joan and Welcome to jCode Studio.",
              "Welcome to jCode Studio.",
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
        </ClientOnly>
      </h1>

      <p className="mt-4 md:mt-6 text-base md:text-xl font-vietnam text-gray-700 max-w-md md:max-w-xl">
        Building beautiful, functional digital experiences — with a touch of magic ✨
      </p>
    </section>
  );
}