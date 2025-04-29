import Image from 'next/image';
import React from 'react';
import { JourneyTimeline } from '@/components/page/JourneyTimeline';

export default function About() {
    return (
      <main className="px-6 py-20 max-w-4xl mx-auto text-foreground">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg md:w-60 md:h-60">
          <Image
            src="/images/profilepicture.jpg"
            alt="Photo of Joan"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About jCode Studio</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Hi, I’m Joan — the creative developer and UX designer behind <strong>jCode Studio</strong>.
            I blend technical expertise with artistic expression to build digital experiences that feel
            as good as they look.
          </p>
        </div>
      </div>
  
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2">💻 Web Development</h3>
            <p className="text-gray-600">
              Clean, scalable React/Next.js code built for performance and polish.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🎨 UX + UI Design</h3>
            <p className="text-gray-600">
              User-first designs that balance function and aesthetic with Figma, wireframes, and flows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🧠 Accessibility</h3>
            <p className="text-gray-600">
              Inclusive, thoughtful interfaces that work for everyone - throughout desktop, tablet, and mobile.
            </p>
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-700">
            React · Next.js · Tailwind CSS · Framer Motion · Figma · Node.js · GitHub · Vercel · AWS
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-bold mb-4">My Approach</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Focus on user experience from start to finish</li>
            <li>Build accessible, responsive, and joyful products</li>
            <li>Collaborate like a creative partner, not just a coder</li>
          </ul>
        </section>

        <section>
            <JourneyTimeline />
        </section>
      </main>
    );
  }