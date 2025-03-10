import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <FaLinkedin className="text-gray-600 hover:text-pink-500 text-2xl" />
          </Link>
          <Link href="https://github.com/yourgithub" target="_blank">
            <FaGithub className="text-gray-600 hover:text-pink-500 text-2xl" />
          </Link>
          <Link href="mailto:your@email.com">
            <FaEnvelope className="text-gray-600 hover:text-pink-500 text-2xl" />
          </Link>
        </div>
        <p className="text-gray-500 text-sm">© 2025 Joan | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;