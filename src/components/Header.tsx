"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "https://www.linkedin.com/in/irke-konzolo/recent-activity/all/" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolling ? "py-3 backdrop-blur-md bg-black/60" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Text Logo */}
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-wide text-white cursor-pointer">
            IRKE KONZOLO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium transition-all duration-200 ${
                pathname === link.path
                  ? "text-white font-semibold border-b-2 border-x-purple-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <button className="bg-transparent border text-white border-purple-900 text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-800 transition-all">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 text-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-600">
          <span className="text-xl font-bold tracking-wide">IRKE KONZOLO</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-medium transition-all ${
                pathname === link.path
                  ? "text-white font-semibold border-b-2 border-white"
                  : "hover:text-gray-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all">
              Get in Touch
            </button>
          </Link>
        </nav>
      </div>
    </header>











  );
}
