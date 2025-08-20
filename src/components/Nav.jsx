// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";

// export default function Nav() {
//   const path = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen, setIsMenuOpen]);
//   return (
//     <div className="primary-bg text-white md:px-8 mb-0">
//       <div className="container p-2  mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
//         {/* Logo */}
//         <div className="space-x-2 flex items-center justify-between w-full md:w-auto">
//           <Image
//             src="/brand.jpg"
//             alt="Logo"
//             width={50}
//             height={50}
//             className="rounded-full"
//           />

//           {/* Hamburger (Mobile only) */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-white focus:outline-none"
//           >
//             {isMenuOpen ? (
//               // Close Icon (X)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               // Hamburger Icon
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex  space-x-6 text-xl font-medium">
//           {path !== "/" && (
//             <Link href="/" className="hover:text-white transition">
//               Home
//             </Link>
//           )}
//           <Link href="/projects" className="hover:text-gray-300 transition">
//             Projects
//           </Link>
//           <Link href="/contact-us" className="hover:text-gray-300 transition">
//             Contact Us
//           </Link>
//         </nav>

//         {/* Mobile Navigation Dropdown */}
//         {/* {isMenuOpen && (
//           <div className="md:hidden w-full bg-amber-400 flex flex-col backdrop-blur-2xl items-end  ">
//             {path !== "/" && (
//               <Link
//                 href="/"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-white transition "
//               >
//                 Home
//               </Link>
//             )}
//             <Link
//               href="/projects"
//               onClick={() => setIsMenuOpen(false)}
//               className="hover:text-gray-300 transition"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/contact-us"
//               onClick={() => setIsMenuOpen(false)}
//               className="hover:text-gray-300 transition"
//             >
//               Contact Us
//             </Link>
//           </div>
//         )} */}
//       </div>
//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="md:hidden fixed inset-0 w-full h-screen bg-black/30 backdrop-blur-lg flex flex-col items-end px-6 py-4 space-y-4 z-50 animate-slide-down transition-all duration-500 ease-in-out"
//         >
//           <div className="w-full max-w-xs bg-white/90 rounded-xl shadow-xl p-6 space-y-4">
//             {path !== "/" && (
//               <Link
//                 href="/"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 transform hover:translate-x-1"
//               >
//                 Home
//               </Link>
//             )}
//             <Link
//               href="/projects"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 transform hover:translate-x-1"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/contact-us"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 transform hover:translate-x-1"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Nav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [isMenuOpen]);

  // Function to determine active link class
  // const getLinkClass = (href) => {
  //   const isActive = path === href;
  //   return `transition ${
  //     isActive ? "text-primary" : "text-gray-800 hover:text-blue-500"
  //   }`;
  // };

  return (
    <div className="primary-bg text-white md:px-8 mb-0">
      <div className="container p-2 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
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
        <nav className="hidden md:flex space-x-6 text-xl font-semibold">
          {path !== "/" && (
            <Link
              href="/"
              className={`hover:text-gray-300 transition ${
                path === "/" ? "text-white border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
          )}
          <Link
            href="/projects"
            className={` transition ${
              path === "/projects" ? "text-[#BA994D]" : ""
            }`}
            style={
              path === "/projects" ? { textShadow: "0 0 10px #BA994D" } : {}
            }
          >
            Projects
          </Link>
          <Link
            href="/contact-us"
            // className={`hover:text-gray-300 transition ${
            //   path === "" ? "text-white border-b-2 border-white" : ""
            // }`}
            className={` transition ${
              path === "/contact-us" ? "text-[#BA994D]" : ""
            }`}
            style={
              path === "/contact-us" ? { textShadow: "0 0 10px #BA994D" } : {}
            }
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 w-full h-screen bg-black/30 backdrop-blur-lg flex flex-col items-end px-6 py-4 space-y-4 z-50 animate-slide-down transition-all duration-500 ease-in-out"
        >
          <div className="w-full max-w-xs text-white primary-bg rounded-xl shadow-xl p-6 space-y-4 relative">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-3 right-3 text-white hover:text-blue-500 focus:outline-none"
              aria-label="Close menu"
            >
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
            </button>

            {path !== "/" && (
              <Link
                href="/"
                onClick={closeMenu}
                className={`block text-lg font-semibold `}
              >
                Home
              </Link>
            )}
            <Link
              href="/projects"
              onClick={closeMenu}
              className={` block transition text-lg font-semibold  ${
                path === "/projects" ? "text-[#BA994D]" : ""
              }`}
              // className={`block text-lg font-semibold `}
              style={
                path === "/projects" ? { textShadow: "0 0 10px #BA994D" } : {}
              }
              >
              Projects
            </Link>
            <Link
              href="/contact-us"
              onClick={closeMenu}
              // className={`block text-white text-lg font-semibold `}
              className={`block transition text-lg font-semibold  ${
                path === "/contact-us" ? "text-[#BA994D]" : ""
              }`}
              // className={`block text-lg font-semibold `}
              style={
                path === "/contact-us" ? { textShadow: "0 0 10px #BA994D" } : {}
              }
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
