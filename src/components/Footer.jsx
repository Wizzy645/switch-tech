import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3B60] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Brief */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4">Swich Tech</h2>
          <p className="text-sm text-gray-200">
            Powering transformation through technology, infrastructure, logistics & innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/#hero" className="hover:text-white transition">Home</Link></li>
  <li><Link href="/#services" className="hover:text-white transition">Services</Link></li>
  <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
  <li><Link href="/#about" className="hover:text-white transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 40 Aswan Street, Wuse Zone 3, Abuja
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> swichtechng@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 812 345 6789
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center gap-3">
        <p>&copy; {new Date().getFullYear()} Swich Tech Nig. Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white"><Facebook size={16} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={16} /></a>
          <a href="#" className="hover:text-white"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
