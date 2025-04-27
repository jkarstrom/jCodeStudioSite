import React from "react";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-whitepurple mt-10 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://linkedin.com/in/joankarstrom" target="_blank">
            <FaLinkedin className="text-darkpurple hover:text-lightpurple text-2xl" />
          </Link>
          <Link href="https://github.com/yourgithub" target="_blank">
            <FaGithub className="text-darkpurple hover:text-lightpurple  text-2xl" />
          </Link>
          <Link href="mailto:jcodestudio@email.com">
            <FaEnvelope className="text-darkpurple hover:text-lightpurple  text-2xl" />
          </Link>
        </div>
        <p className="text-darkpurple text-sm">© 2025 Joan | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;