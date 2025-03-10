import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white w-screen shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-pink-500">Joan's Portfolio</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link></li>
            <li><Link href="/projects" className="text-gray-700 hover:text-pink-500">Projects</Link></li>
            <li><Link href="/services" className="text-gray-700 hover:text-pink-500">Services</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}