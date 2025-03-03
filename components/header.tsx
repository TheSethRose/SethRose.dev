"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">&nbsp;</div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

