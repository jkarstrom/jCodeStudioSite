'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center bg-whitepurple text-center px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vietnam text-darkpurple">
        Get in Touch
      </h1>
      
      <p className="text-lg text-gray-700 max-w-xl mb-8 font-vietnam">
        I&apos;d love to hear from you!  
        Please include your name, project details, timeline, and any ideas you want to bring to life.
      </p>

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