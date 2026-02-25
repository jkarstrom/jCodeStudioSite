import React from "react";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-whitepurple py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://linkedin.com/in/joan-karstrom/" target="_blank" aria-label="LinkedIn profile">
            <FaLinkedin className="text-darkpurple hover:text-lightpurple text-2xl" />
          </Link>
          <Link href="https://github.com/jkarstrom" target="_blank" aria-label="GitHub profile">
            <FaGithub className="text-darkpurple hover:text-lightpurple  text-2xl" />
          </Link>
          <Link href="mailto:jcodestudio@email.com" aria-label="Send an email">
            <FaEnvelope className="text-darkpurple hover:text-lightpurple  text-2xl" />
          </Link>
        </div>
        <p className="text-darkpurple text-sm">© 2025 Joan | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;