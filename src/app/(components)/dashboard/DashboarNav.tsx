'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/stats', label: 'Stats' },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full border-t border-neutral-300 bg-white flex justify-around py-2 text-sm md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-neutral-800 hover:font-medium ${
              pathname === link.href ? 'font-bold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center gap-6 py-4 border-t border-neutral-300 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-neutral-800 hover:font-medium ${
              pathname === link.href ? 'font-bold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
