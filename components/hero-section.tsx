import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="about" className="section pt-24 md:pt-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="md:max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl gradient-text">Seth Rose</h1>
            <p className="text-xl text-[var(--color-neutral-400)] mt-3">Senior ServiceNow Engineer & AI Solutions Consultant</p>
            <p className="mt-6 text-[var(--color-neutral-400)] leading-relaxed">
              I've spent over a decade cutting through the jargon to deliver straightforward, scalable solutions. My
              career revolves around empowering teams to rethink the way they tackle complex problems, leveraging AI and
              automation to replace clunky processes with precision and simplicity. My focus is on delivering
              enterprise-grade solutions that are as functional as they are forward-thinking.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
            <div className="relative h-36 w-36 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-[var(--color-accent-700)] shadow-lg transition-all duration-300 hover:border-[var(--color-accent-600)] hover:shadow-xl">
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

