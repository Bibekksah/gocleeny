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
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="Go Cleeny Logo" width={40} height={40} className="object-contain group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-heading font-bold text-primary tracking-tight">Go Cleeny</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {["Home", "About Us", "Services", "Careers", "Franchising", "Contact"].map((item) => {
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

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/5 hover:text-primary" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-10 duration-200">
          <div className="container flex h-16 items-center justify-between px-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Go Cleeny Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-heading font-bold text-primary">Go Cleeny</span>
            </Link>
            <Button variant="ghost" size="icon" className="hover:bg-red-50 hover:text-destructive" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container px-4 py-8 flex flex-col gap-2">
            {["Home", "About Us", "Services", "Careers", "Franchising", "Contact"].map((item) => {
              const href = item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-lg font-medium p-4 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors border-b border-gray-50 last:border-0"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

