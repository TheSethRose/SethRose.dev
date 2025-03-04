"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-[var(--color-dark-950)]/95 shadow-md">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="header-nav-link">
              Home
            </Link>
            <Link href="#work-experience" className="header-nav-link">
              Experience
            </Link>
            <Link href="#projects" className="header-nav-link">
              Projects
            </Link>
            <Link href="#skills" className="header-nav-link">
              Skills
            </Link>
            <Link href="#education" className="header-nav-link">
              Education
            </Link>
            <Link href="#contact" className="header-nav-link">
              Contact
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="rounded-md p-2 text-white hover:bg-[var(--color-dark-800)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-dark-800)] bg-[var(--color-dark-950)]/95 shadow-lg">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="space-y-1 py-4">
              <Link
                href="#"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#work-experience"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#education"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#contact"
                className="block py-2 header-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

