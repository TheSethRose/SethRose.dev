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
            <div className="md:max-w-2xl p-8 bg-secondary dark:bg-transparent border-2 border-accent/20 dark:border-transparent rounded-lg mt-4 shadow-md dark:shadow-none">
              <Typography as="h1" variant="gradient" className="text-5xl font-extrabold tracking-tight lg:text-6xl">
                Seth Rose
              </Typography>
              <p className="text-xl mt-4 font-medium text-foreground">
                Senior Software Developer & AI Engineer
              </p>
              <p className="mt-8 leading-relaxed text-foreground">
                I&apos;ve spent over a decade cutting through the jargon to deliver straightforward, scalable solutions. My
                career revolves around empowering teams to rethink the way they tackle complex problems, leveraging AI and
                automation to replace clunky processes with precision and simplicity. My focus is on delivering
                enterprise-grade solutions that are as functional as they are forward-thinking.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-secondary border-0 hover:bg-secondary/80 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110" asChild>
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
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-secondary border-0 hover:bg-secondary/80 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110" asChild>
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
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-secondary border-0 hover:bg-secondary/80 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110" asChild>
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
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-secondary border-0 hover:bg-secondary/80 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110" asChild>
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
                      <Button variant="accent" size="icon" className="rounded-full h-10 w-10 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-110">
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
              <Avatar className="h-52 w-52 md:h-64 md:w-64 border-4 border-accent/50 shadow-xl transition-all duration-300 hover:border-accent hover:shadow-2xl rounded-full overflow-hidden">
                <AvatarImage src="/headshot.png?height=300&width=300" alt="Seth Rose" className="object-cover" />
                <AvatarFallback className="text-5xl">SR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width band section */}
      <section className="w-full py-10 md:py-12 border-t border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex items-center justify-center gap-10 md:gap-16 py-4">
              <div className="h-16 w-48 relative">
                <Image
                  src="/gdit.svg"
                  alt="GDIT"
                  fill
                  className="object-contain invert dark:invert-0"
                />
              </div>
              <div className="h-16 w-48 relative">
                <Image
                  src="/toyota.svg"
                  alt="Toyota"
                  fill
                  className="object-contain invert dark:invert-0"
                />
              </div>
              <div className="h-16 w-36 relative">
                <Image
                  src="/uber.svg"
                  alt="Uber"
                  fill
                  className="object-contain invert dark:invert-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

