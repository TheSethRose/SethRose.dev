import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

export function HeroSection() {
  return (
    <section id="about" className="section pt-24 md:pt-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="md:max-w-2xl">
            <Typography as="h1" variant="gradient" className="text-5xl font-extrabold tracking-tight lg:text-6xl">
              Seth Rose
            </Typography>
            <Typography as="p" variant="subtle" className="text-xl mt-3">
              Senior ServiceNow Engineer & AI Solutions Consultant
            </Typography>
            <Typography as="p" variant="subtle" className="mt-6 leading-relaxed">
              I've spent over a decade cutting through the jargon to deliver straightforward, scalable solutions. My
              career revolves around empowering teams to rethink the way they tackle complex problems, leveraging AI and
              automation to replace clunky processes with precision and simplicity. My focus is on delivering
              enterprise-grade solutions that are as functional as they are forward-thinking.
            </Typography>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-[var(--color-dark-800)] border-0 hover:bg-[var(--color-accent-700)] text-[var(--color-neutral-200)] hover:text-white transition-all duration-300 hover:scale-110" asChild>
                      <Link
                        href="https://github.com/sponsors/TheSethRose"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-[var(--color-dark-800)] border-0 hover:bg-[var(--color-accent-700)] text-[var(--color-neutral-200)] hover:text-white transition-all duration-300 hover:scale-110" asChild>
                      <Link
                        href="https://www.linkedin.com/in/sethlrose/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-[var(--color-dark-800)] border-0 hover:bg-[var(--color-accent-700)] text-[var(--color-neutral-200)] hover:text-white transition-all duration-300 hover:scale-110" asChild>
                      <Link
                        href="https://x.com/TheSethRose"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-[var(--color-dark-800)] border-0 hover:bg-[var(--color-accent-700)] text-[var(--color-neutral-200)] hover:text-white transition-all duration-300 hover:scale-110" asChild>
                      <Link
                        href="mailto:hi@sethrose.dev"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="accent" size="sm" className="ml-2 gap-2 shadow-md hover:shadow-lg">
                      <FileText className="h-4 w-4" />
                      <span>Resume</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download Resume</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Avatar className="h-36 w-36 md:h-52 md:w-52 border-4 border-[var(--color-accent-700)] shadow-lg transition-all duration-300 hover:border-[var(--color-accent-600)] hover:shadow-xl">
              <AvatarImage src="/headshot.png?height=200&width=200" alt="Seth Rose" className="object-cover" />
              <AvatarFallback className="text-4xl">SR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}

