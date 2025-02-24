'use client';
// app/components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the dropdown menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#242021] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-bold font-caveat">Different...</div>

        {/* Menu Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 text-2xl font-caveat">Home</Link>
          <Link href="/menus" className="text-white hover:text-yellow-300 text-2xl font-caveat">Menus</Link>
          <Link href="/events" className="text-white hover:text-yellow-300 text-2xl font-caveat">Events</Link>
          <Link href="/contact" className="text-white hover:text-yellow-300 text-2xl font-caveat">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-4xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#242021] py-4 flex flex-col space-y-4 md:hidden">
            <Link href="/" className="text-white hover:text-yellow-300 text-center text-3xl font-caveat" onClick={handleLinkClick}>Home</Link>
            <Link href="/menus" className="text-white hover:text-yellow-300 text-center text-3xl font-caveat" onClick={handleLinkClick}>Menus</Link>
            <Link href="/events" className="text-white hover:text-yellow-300 text-center text-3xl font-caveat" onClick={handleLinkClick}>Events</Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 text-center text-3xl font-caveat" onClick={handleLinkClick}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
