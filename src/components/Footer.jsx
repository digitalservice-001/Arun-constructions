"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const pathname = usePathname();

  return (
    // <div className="primary-bg text-white p-6 mt-8 w-full">
    //   <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-24">
    //     {/* Quick Links */}
    //     <div className="flex flex-col items-start space-y-4">
    //       <h3 className="text-lg font-bold">Quick Links</h3>
    //       {pathname !== "/" && (
    //         <Link href="/" className="hover:text-gray-300 transition">
    //           Home
    //         </Link>
    //       )}
    //       <Link href="/projects" className="hover:text-gray-300 transition">
    //         Projects
    //       </Link>
    //       <Link href="/contact-us" className="hover:text-gray-300 transition">
    //         Contact Us
    //       </Link>
    //       <Link href="/#services" className="hover:text-gray-300 transition">
    //         Our Services
    //       </Link>
    //     </div>

    //     {/* Contact Info */}
    //     <div className="flex flex-col space-y-4">
    //       <h3 className="text-lg font-bold">Contact Info</h3>
    //       <div className="flex items-start">
    //         <Mail className="mr-3 mt-1" />
    //         <Link
    //           href="mailto:arunconstructionsvadavallicbe@gmail.com"
    //           className="hover:text-gray-300 transition break-all"
    //         >
    //           arunconstructionsvadavallicbe@gmail.com
    //         </Link>
    //       </div>
    //       <div className="flex items-start">
    //         <Phone className="mr-3 mt-1" />
    //         <Link href="tel:+917358803892" className="hover:text-gray-300 transition">
    //           +91 7358803892
    //         </Link>
    //       </div>
    //       <div className="flex items-start">
    //         <MapPin className="mr-3 mt-1 flex-shrink-0" />
    //         <p className="text-sm leading-snug">
    //           Block-1 Flat-1, Saravana's Lakshminarayana Apartment,<br />
    //           Koothandavar Kovil Street, Vadavalli,<br />
    //           Coimbatore - 641041
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="container mx-auto mt-6 pt-4 border-t border-gray-300 text-center text-sm">
    //     <p>© 2025 . All rights reserved.</p>
    //   </div>
    // </div>
    <div className="primary-bg text-white py-8 px-4 sm:px-6 mt-8 w-full">
      <div className="container mx-auto lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-4">
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
          <Link href="/#services" className="hover:text-gray-300 transition">
            Our Services
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Contact Info</h3>
          <div className="flex items-start">
            <Mail className="mr-3 mt-1 flex-shrink-0" />
            <Link
              href="mailto:arunconstructionsvadavallicbe@gmail.com"
              className="hover:text-gray-300 transition break-all"
            >
              arunconstructionsvadavallicbe@gmail.com
            </Link>
          </div>
          <div className="flex items-start">
            <Phone className="mr-3 mt-1 flex-shrink-0" />
            <Link
              href="tel:+917358803892"
              className="hover:text-gray-300 transition"
            >
              +91 7358803892
            </Link>
          </div>
          <div className="flex items-start">
            <MapPin className="mr-3 mt-1 flex-shrink-0" />
            <p className="text-sm leading-snug">
              Block-1 Flat-1, Saravana's Lakshminarayana Apartment,
              <br />
              Koothandavar Kovil Street, Vadavalli,
              <br />
              Coimbatore - 641041
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-6 pt-4 border-t border-gray-300 text-center text-sm">
        <p>© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
