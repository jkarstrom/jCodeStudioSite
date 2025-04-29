'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="h-full flex flex-1 flex-col justify-center items-center px-6 py-20 bg-whitepurple text-center w-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam text-darkpurple">
        Get in Touch
      </h1>

      <div className="max-w-2xl text-gray-700 font-vietnam mb-10 md:mb-14 px-4 md:px-0">
        <p className="text-lg leading-relaxed">
            Whether you&apos;re starting a new project, refreshing your online presence, or simply exploring ideas —
            I&apos;d love to collaborate with you.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            Please include a few details like your project goals, timeline, and any inspiration you have in mind.
            Let&apos;s create something incredible together.
        </p>
    </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Email Button */}
        <a 
          href="mailto:joan@jcodestudio.com" 
          className="bg-pink text-darkpurple font-semibold py-3 px-6 rounded-lg shadow hover:bg-lightpurple transition"
        >
          Send Me an Email!
        </a>

        {/* LinkedIn Button */}
        <Link
          href="https://www.linkedin.com/in/joan-karstrom/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-darkpurple text-white py-3 px-6 rounded-lg shadow hover:bg-lilac transition"
        >
          <FaLinkedin className="text-2xl" />
          Connect on LinkedIn
        </Link>
      </div>
    </section>
  );
}