import Link from "next/link"
import { Mail, Linkedin, Github, Twitter, AtSign, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typography } from "@/components/ui/typography"

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle" className="text-foreground">Contact</Typography>
        <p className="mb-12 mt-6 text-lg text-foreground">Let's discuss your next project</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <Link href="mailto:hi@sethrose.dev" className="text-foreground hover:text-accent transition-colors">
                  hi@sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <Link href="mailto:linkedin@sethrose.dev" className="text-foreground hover:text-accent transition-colors">
                  linkedin@sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-accent" />
                <Link
                  href="https://www.linkedin.com/in/sethlrose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  linkedin.com/in/sethlrose
                </Link>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-accent" />
                <Link
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  github.com/sponsors/TheSethRose
                </Link>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 mr-3 text-accent" />
                <Link
                  href="https://x.com/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  x.com/TheSethRose
                </Link>
              </div>
              <div className="flex items-center">
                <AtSign className="h-5 w-5 mr-3 text-accent" />
                <Link
                  href="https://bsky.app/profile/sethrose.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  bsky.app/profile/sethrose.dev
                </Link>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-3 text-accent" />
                <Link
                  href="https://www.sethrose.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  www.sethrose.dev
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Let&apos;s Connect</h3>
              <p className="text-foreground">
                I'm interested in projects that require practical solutions to complex technical challenges. Reach out through the contact form or connect with me on professional platforms to discuss potential collaborations.
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="Your email" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Subject" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

