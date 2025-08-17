import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <div className="primary-bg text-white p-2 md:px-8 mb-0">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-9 md:space-y-0 md:space-x-8">
                <div className="space-x-2 flex items-center mx-auto md:mx-0">
                    <Image
                        src="/brand.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
                    <Link href="/contact-us" className="hover:text-gray-300 transition">Contact Us</Link>
                </nav>
            </div>
        </div>

    )
}
