"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Nav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="primary-bg text-white p-2 md:px-8 mb-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Logo */}
        <div className="space-x-2 flex items-center justify-between w-full md:w-auto">
          <Image
            src="/brand.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          {/* Hamburger (Mobile only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  space-x-6 text-xl font-medium">
          {path !== "/" && (
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          )}
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300 transition">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden w-full flex flex-col backdrop-blur-2xl items-end  ">
            {path !== "/" && (
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white transition w-full"
              >
                Home
              </Link>
            )}
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
