'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-whitepurple w-full py-1 px-4 sticky top-0 z-50">
      {/* Skip to main content — first focusable element on the page */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-darkpurple focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="container mx-auto flex justify-between items-center h-[100px]">
        <Link href="/" className="flex items-center space-x-2" aria-label="jCode Studio — home">
          <Image src="/logos/jCode Logo.png" alt="" width={200} height={200} aria-hidden="true" />
        </Link>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/about" className="text-darkpurple hover:text-lightpurple">About</Link></li>
            <li><Link href="/web-projects" className="text-darkpurple hover:text-lightpurple">Web Projects</Link></li>
            <li><Link href="/design" className="text-darkpurple hover:text-lightpurple">Design</Link></li>
            <li><Link href="/services" className="text-darkpurple hover:text-lightpurple">Services</Link></li>
            <li><Link href="/apps" className="text-darkpurple hover:text-lightpurple">Apps</Link></li>
            <li><Link href="/contact" className="text-darkpurple hover:text-lightpurple">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 items-center">
            <li><Link href="/about" className="font-vietnam text-darkpurple hover:text-lightpurple">About</Link></li>
            <li><Link href="/web-projects" className="text-darkpurple hover:text-lightpurple">Web Projects</Link></li>
            <li><Link href="/design" className="text-darkpurple hover:text-lightpurple">Design</Link></li>
            <li><Link href="/services" className="text-darkpurple hover:text-lightpurple">Services</Link></li>
            <li><Link href="/apps" className="text-darkpurple hover:text-lightpurple">Apps</Link></li>
            <li><Link href="/contact" className="text-darkpurple hover:text-lightpurple">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
