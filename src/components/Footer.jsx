import React from "react";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-whitepurple py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://linkedin.com/in/joan-karstrom/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <FaLinkedin className="text-darkpurple hover:text-lightpurple text-2xl" aria-hidden="true" />
          </Link>
          <Link
            href="https://github.com/jkarstrom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
          >
            <FaGithub className="text-darkpurple hover:text-lightpurple text-2xl" aria-hidden="true" />
          </Link>
          <Link
            href="mailto:info@jcodestudio.com"
            aria-label="Send an email to joan@jcodestudio.com"
          >
            <FaEnvelope className="text-darkpurple hover:text-lightpurple text-2xl" aria-hidden="true" />
          </Link>
        </div>
        <p className="text-darkpurple text-sm">© 2026 jCode Studio LLC™ | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
