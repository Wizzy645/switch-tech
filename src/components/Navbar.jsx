"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          <Image
            src="/logo2.png"
            alt="Swich Tech Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#hero" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Home</Link>
          <Link href="/#services" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Services</Link>
          <Link href="/#contact" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#0B3B60] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 transition-all duration-200">
          <a href="/#hero" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Home</a>
          <a href="/#services" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Services</a>
          <a href="/#contact" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Contact</a>
        </div>
      )}
    </header>
  );
}
