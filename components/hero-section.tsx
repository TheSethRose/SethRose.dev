import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Typography } from "@/components/ui/typography"

export function HeroSection() {
  return (
    <>
      <section id="about" className="section pt-28 md:pt-36">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-12 md:gap-16">
            <div className="md:max-w-2xl">
              <Typography as="h1" variant="gradient" className="text-5xl font-extrabold tracking-tight lg:text-6xl">
                Seth Rose
              </Typography>
              <Typography as="p" variant="subtle" className="text-xl mt-4">
                Senior Software Developer & AI Engineer
              </Typography>
              <Typography as="p" variant="subtle" className="mt-8 leading-relaxed">
                I&apos;ve spent over a decade cutting through the jargon to deliver straightforward, scalable solutions. My
                career revolves around empowering teams to rethink the way they tackle complex problems, leveraging AI and
                automation to replace clunky processes with precision and simplicity. My focus is on delivering
                enterprise-grade solutions that are as functional as they are forward-thinking.
              </Typography>

              <div className="mt-10 flex flex-wrap items-center gap-4">
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
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-[var(--color-accent-700)] border-0 hover:bg-[var(--color-accent-600)] text-white hover:text-white transition-all duration-300 hover:scale-110">
                        <FileText className="h-5 w-5" />
                        <span className="sr-only">Resume</span>
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
              <Avatar className="h-52 w-52 md:h-64 md:w-64 border-4 border-[var(--color-accent-700)] shadow-xl transition-all duration-300 hover:border-[var(--color-accent-600)] hover:shadow-2xl rounded-full overflow-hidden">
                <AvatarImage src="/headshot.png?height=300&width=300" alt="Seth Rose" className="object-cover" />
                <AvatarFallback className="text-5xl">SR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width band section */}
      <section className="w-full py-10 md:py-12 border-t border-[var(--color-neutral-800)] bg-[var(--color-dark-950)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="md:max-w-xs">
              <Typography as="h2" variant="subtle" className="text-2xl font-bold mb-2">
                Work Experience
              </Typography>
              <Typography as="p" variant="subtle" className="text-[var(--color-neutral-300)]">
                I have worked for the following companies
              </Typography>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-10 md:gap-16 py-4">
              <div className="h-16 w-48 relative">
                <Image
                  src="/gdit.svg"
                  alt="GDIT"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
              <div className="h-16 w-48 relative">
                <Image
                  src="/toyota.svg"
                  alt="Toyota"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
              <div className="h-16 w-36 relative">
                <Image
                  src="/uber.svg"
                  alt="Uber"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

