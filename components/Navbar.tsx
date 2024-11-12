'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ModeToggle } from '@/components/ToggleMode';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent rendering theme-dependent elements until the component has mounted
  if (!mounted) return null;

  return (
    <header className="flex items-center justify-between px-5 py-4">
      <h1 className="text-2xl font-bold text-[#033060] dark:text-white">Habit Tracker</h1>
      
      {/* Desktop Links */}
      <nav className="hidden md:flex items-center space-x-4 ml-auto text-xl">
        <Link className="text-[#033060] dark:text-gray-300 hover:text-[#184f8a] dark:hover:text-gray-100" href="/">Home</Link>
        <Link className="text-[#033060] dark:text-gray-300 hover:text-[#184f8a] dark:hover:text-gray-100" href="/progress">Progress</Link>
        <ModeToggle />
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-[#033060] hover:text-[#184f8a]'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-[#033060] hover:text-[#184f8a]'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <nav className="flex flex-col items-center mt-4 space-y-3 text-lg text-[#033060] dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg md:hidden">
          <Link className="hover:text-[#184f8a] dark:hover:text-gray-100" href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:text-[#184f8a] dark:hover:text-gray-100" href="/progress" onClick={() => setIsOpen(false)}>Progress</Link>
          <ModeToggle />
        </nav>
      )}
    </header>
  );
};

export default Navbar;




