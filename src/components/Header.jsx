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
      <div className="container mx-auto flex justify-between items-center h-[100px]">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logos/jCode Logo.png" alt="jCode Studio Logo" width={200} height={200} />
          <span className="sr-only">jCode Studio Logo</span>
        </Link>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/about" className="text-darkpurple hover:text-lightpurple">About</Link></li>
            <li><Link href="/projects" className="text-darkpurple hover:text-lightpurple">Projects</Link></li>
            <li><Link href="/services" className="text-darkpurple hover:text-lightpurple">Services</Link></li>
            <li><Link href="/contact" className="text-darkpurple hover:text-lightpurple">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 items-center">
            <li><Link href="/about" className="font-vietnam text-darkpurple hover:text-lightpurple">About</Link></li>
            <li><Link href="/projects" className="text-darkpurple hover:text-lightpurple">Projects</Link></li>
            <li><Link href="/services" className="text-darkpurple hover:text-lightpurple">Services</Link></li>
            <li><Link href="/contact" className="text-darkpurple hover:text-lightpurple">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}