"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between z-50 fixed top-0  bg-white  items-center px-2 sm:px-8 py-2 bg-transparent  w-full">
      {/* Logo */}
      <Link href={"/"} className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Riyan Infotech Logo"
          width={120}
          height={50}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-black text-lg">
        <Link href="/" className="hover:scale-105 duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:scale-105 duration-300">
          About
        </Link>
        <Link
          href="/#services"
          className="hover:scale-105 duration-300"
        >
          Services
        </Link>
        <Link href="/blogs" className="hover:scale-105 duration-300">
          Blogs
        </Link>
        <Link href="/contact" className="hover:scale-105 duration-300">
          Contact
        </Link>
      </div>

      {/* Call to Action Button (Always Visible) */}
      <Link
        href="/get-started"
        className="hidden md:block bg-themeColor text-textSecondary px-6 sm:px-8 py-1 hover:scale-105 duration-300 rounded-full sm:text-lg font-medium transition"
      >
        Get Started
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-6 text-lg`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Mobile Nav Links */}
        <Link
          href="/"
          className="hover:scale-105 duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:scale-105 duration-300"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/services"
          className="hover:scale-105 duration-300"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/blogs"
          className="hover:scale-105 duration-300"
          onClick={() => setIsOpen(false)}
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="hover:scale-105 duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
