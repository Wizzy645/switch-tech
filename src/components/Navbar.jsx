"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#0B3B60] to-[#00B4D8] bg-clip-text text-transparent"
        >
          Swich Tech
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  <Link href="/#hero" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Home</Link>
  <Link href="/#services" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Services</Link>
  <Link href="/#contact" className="text-[#1A1A1A] hover:text-[#00B4D8] transition">Contact</Link>
</nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0B3B60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <a href="#hero" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Home</a>
          <a href="#services" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Services</a>
          <a href="#contact" className="block text-[#1A1A1A] hover:text-[#00B4D8]">Contact</a>
        </div>
      )}
    </header>
  );
}
