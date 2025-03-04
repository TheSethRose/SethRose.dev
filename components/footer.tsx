import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-[var(--color-neutral-500)]">
              &copy; {new Date().getFullYear()} Seth Rose. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/sponsors/TheSethRose"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-[var(--color-neutral-500)] hover:text-[var(--color-accent-600)] transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sethlrose/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-[var(--color-neutral-500)] hover:text-[var(--color-accent-600)] transition-colors" />
            </Link>
            <Link href="https://x.com/TheSethRose" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-[var(--color-neutral-500)] hover:text-[var(--color-accent-600)] transition-colors" />
            </Link>
            <Link href="mailto:hi@sethrose.dev" aria-label="Email">
              <Mail className="h-5 w-5 text-[var(--color-neutral-500)] hover:text-[var(--color-accent-600)] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

