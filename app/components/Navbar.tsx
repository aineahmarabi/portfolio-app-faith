'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'About', 'Services', 'Contact']

  useEffect(() => {
    const observers = new Map()

    navItems.forEach(item => {
      const section = document.getElementById(item.toLowerCase())
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.toLowerCase())
            }
          },
          {
            threshold: 0.5, // Trigger when 50% of the section is visible
          }
        )

        observer.observe(section)
        observers.set(item, observer)
      }
    })

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <nav className="fixed w-full bg-black py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="text-red-600">Faith</span>
            <span className="text-white">Kajuju</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-white hover:text-red-600 transition-colors relative group ${
                activeSection === item.toLowerCase() ? 'text-red-600' : ''
              }`}
            >
              {item}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
                  activeSection === item.toLowerCase() 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-white hover:text-red-600 transition-colors relative group ${
                    activeSection === item.toLowerCase() ? 'text-red-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
                      activeSection === item.toLowerCase() 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}