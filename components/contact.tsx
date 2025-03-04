import Link from "next/link"
import { Mail, Linkedin, Github, Twitter, AtSign, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Get in touch with me</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link href="mailto:hi@sethrose.dev" className="hover:text-[var(--color-accent-600)] transition-colors">
                  hi@sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link href="mailto:linkedin@sethrose.dev" className="hover:text-[var(--color-accent-600)] transition-colors">
                  linkedin@sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link
                  href="https://www.linkedin.com/in/sethlrose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-600)] transition-colors"
                >
                  linkedin.com/in/sethlrose
                </Link>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-600)] transition-colors"
                >
                  github.com/sponsors/TheSethRose
                </Link>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link
                  href="https://x.com/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-600)] transition-colors"
                >
                  x.com/TheSethRose
                </Link>
              </div>
              <div className="flex items-center">
                <AtSign className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link
                  href="https://bsky.app/profile/sethrose.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-600)] transition-colors"
                >
                  bsky.app/profile/sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-3 text-[var(--color-accent-600)]" />
                <Link
                  href="https://www.sethrose.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-600)] transition-colors"
                >
                  www.sethrose.dev
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-[var(--color-neutral-400)]">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out to me through the contact form or via my social media profiles.
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="bg-[var(--color-dark-900)] border-[var(--color-dark-800)] focus:border-[var(--color-accent-600)]" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" className="bg-[var(--color-dark-900)] border-[var(--color-dark-800)] focus:border-[var(--color-accent-600)]" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-[var(--color-dark-900)] border-[var(--color-dark-800)] focus:border-[var(--color-accent-600)]" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="bg-[var(--color-dark-900)] border-[var(--color-dark-800)] focus:border-[var(--color-accent-600)]" />
              </div>

              <Button type="submit" className="w-full bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

