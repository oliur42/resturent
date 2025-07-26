'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { menu } from '../resource'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        {/* Top section: logo and toggle */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image
            src="https://res.cloudinary.com/dpcd3h94q/image/upload/v1753546651/Black_and_Orange_Simple_Restaurant_Logo_api84b.png"
            width={200}
            height={60}
            alt="logo"
            className="h-auto "
            priority
          />

          {/* Toggle button on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            MENU <FaBars className="ml-2" />
          </button>

          <div className="hidden md:flex justify-between items-center gap-10 ">
            <nav className="flex gap-8 text-lg gap-10">
              {menu.map((item, index) => (
                <p key={index} className="hover:text-orange-500 cursor-pointer">
                  {item}
                </p>
              ))}
            </nav>
            <div className="border border-red-700 py-2 px-6 hover:bg-orange-500 transition">
              <Link href="/">Order Online</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-gray-800 text-white px-6 py-4 space-y-3 rounded">
            {menu.map((item, index) => (
              <p key={index} className="hover:text-orange-500 cursor-pointer">
                {item}
              </p>
            ))}
            <Link href="/" className="block border border-red-700 py-2 px-4 mt-3 text-center hover:bg-orange-500 transition">
              Order Online
            </Link>
          </div>
        )}

        {/* Desktop Menu */}

      </div>
    </header>
  )
}
