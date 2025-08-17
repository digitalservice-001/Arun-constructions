"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const pathname = usePathname();
  console.log(pathname, "path-----");
  return (
    <div className="primary-bg text-white p-4 mt-8  w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg font-bold">Quick Links</h3>

            {pathname !== "/" && (
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            )}

            <Link href="/projects" className="hover:text-gray-300 transition">
              Projects
            </Link>

            <Link href="/contact-us" className="hover:text-gray-300 transition">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <span>
              <Mail className="inline mr-2" />
              <Link href={"mailto:arunconstructionsvadavallicbe@gmail.com"}>arunconstructionsvadavallicbe@gmail.com</Link>
            </span>
            <span>
              <Phone className="inline mr-2" />
              <Link href="tel:+917358803892">+91 7358803892</Link>
            </span>
            <span className="flex  items-center md:flex space-x-2">
              <MapPin className="inline mr-2" />
              <p>
                Block-1 Flat-1 Saravana's Lakshminarayana Apartment,Koothandavar
                Kovil Street, Vadavalli, Coimbatore-641041
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center space-y-4 border-t border-gray-300 pt-4">
        <p className="text-center">© 2025 MyApp. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
