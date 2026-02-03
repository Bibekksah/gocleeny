"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Go Cleeny Logo" width={40} height={40} className="object-contain group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg sm:text-xl font-heading font-bold text-primary tracking-tight">Go Cleeny</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {["Home", "About Us", "Services", "Reviews", "Careers", "Franchising", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:-translate-y-0.5 relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button - Touch optimized */}
          <button
            className="md:hidden p-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors touch-target"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Rendered outside header to avoid parent constraints */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden flex flex-col">
          {/* Header Section with Logo and Close Button */}
          <div className="bg-primary flex h-16 items-center justify-between px-4 shadow-lg flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" onClick={toggleMenu}>
              <Image src="/logo.png" alt="Go Cleeny Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-heading font-bold text-white">Go Cleeny</span>
            </Link>
            <button
              className="p-2 hover:bg-white/10 text-white rounded-lg transition-colors touch-target"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links Section */}
          <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto bg-white">
            {["Home", "About Us", "Services", "Reviews", "Careers", "Franchising", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-base font-medium px-4 py-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-all touch-target border-b border-border/30 last:border-0"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}

