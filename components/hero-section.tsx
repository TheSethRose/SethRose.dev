import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Seth Rose</h1>
            <p className="text-xl text-[var(--color-neutral-400)] mt-2">Senior ServiceNow Engineer & AI Solutions Consultant</p>
            <p className="mt-6 text-[var(--color-neutral-400)]">
              I've spent over a decade cutting through the jargon to deliver straightforward, scalable solutions. My
              career revolves around empowering teams to rethink the way they tackle complex problems, leveraging AI and
              automation to replace clunky processes with precision and simplicity. My focus is on delivering
              enterprise-grade solutions that are as functional as they are forward-thinking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://github.com/sponsors/TheSethRose"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-button"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sethlrose/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-button"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/TheSethRose"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-button"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hi@sethrose.dev"
                aria-label="Email"
                className="social-button"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-[var(--color-accent-700)] shadow-lg transition-all duration-300 hover:border-[var(--color-accent-600)] hover:shadow-xl">
              <Image
                src="/headshot.png?height=200&width=200"
                alt="Seth Rose"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

