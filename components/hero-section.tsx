import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export function HeroSection() {
  return (
    <>
      <section id="about" className="relative pt-20 pb-16 md:py-24 lg:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-30 bg-gradient-to-b from-background via-background to-background/95"></div>

        {/* Decorative circles - scattered throughout */}
        <div className="absolute -left-20 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-[hsl(210,70%,50%)] opacity-[0.04]"></div>
        <div className="absolute -right-16 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-[hsl(221,83%,53%)] opacity-[0.03]"></div>
        <div className="absolute left-1/4 top-1/3 -z-10 h-[25rem] w-[25rem] rounded-full bg-[hsl(220,10%,18%)] opacity-[0.06]"></div>
        <div className="absolute -bottom-20 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-[hsl(210,70%,50%)] opacity-[0.04]"></div>
        <div className="absolute -bottom-24 -right-20 -z-10 h-[35rem] w-[35rem] rounded-full bg-[hsl(220,10%,15%)] opacity-[0.05]"></div>

        {/* Accent glow */}
        <div className="absolute top-1/4 left-0 -z-10 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-[hsl(210,70%,50%)] opacity-[0.07] blur-[12rem]"></div>
        <div className="absolute top-1/3 right-0 -z-10 h-[35rem] w-[35rem] translate-x-1/2 rounded-full bg-[hsl(221,83%,53%)] opacity-[0.07] blur-[12rem]"></div>

        {/* Content container */}
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 relative">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Content: Takes up 3/5 on desktop */}
            <div className="lg:col-span-3 space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                <span className="text-accent">Seth</span>{" "}
                <span className="text-foreground">Rose</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Senior Software Developer & AI Engineer
              </h2>

              <p className="mt-8 leading-relaxed text-foreground/80 max-w-prose">
                Over a decade cutting through jargon to deliver straightforward, scalable solutions. I help teams reimagine complex problems by replacing inefficient processes with precision engineering and automation. My focus: building enterprise-grade solutions that deliver results without unnecessary complexity.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-accent"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sethlrose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://x.com/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-accent"
                >
                  <Twitter className="h-5 w-5" />
                </a>

                <a
                  href="mailto:hi@sethrose.dev"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-accent"
                >
                  <Mail className="h-5 w-5" />
                </a>

                <a
                  href="#resume"
                  aria-label="Resume"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-accent relative group"
                >
                  <FileText className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-accent rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>

            {/* Image: Takes up 2/5 on desktop */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end relative">
              {/* Decorative circles around image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full bg-[hsl(220,10%,18%)] opacity-[0.12]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[hsl(210,70%,50%)] opacity-[0.07]"></div>

              {/* Small accent circles */}
              <div className="absolute -top-16 right-16 h-28 w-28 rounded-full bg-[hsl(210,70%,50%)] opacity-[0.08]"></div>
              <div className="absolute -bottom-20 -left-20 h-32 w-32 rounded-full bg-[hsl(221,83%,53%)] opacity-[0.09]"></div>
              <div className="absolute -top-24 -right-24 h-40 w-40 rounded-full bg-[hsl(220,10%,15%)] opacity-[0.08]"></div>

              {/* Main image */}
              <div className="relative">
                <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full overflow-hidden">
                  <Image
                    src="/headshot.png"
                    alt="Seth Rose"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-accent/30 dark:ring-accent/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo section */}
      <section className="py-8 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-base md:text-lg uppercase font-light tracking-widest text-muted-foreground/60 mb-8">
            Notable Organizations I've Contributed To
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-x-[8vw] gap-y-10">
            <Image
              src="/gdit.svg"
              alt="GDIT"
              width={160}
              height={53}
              className="object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 invert dark:invert-0"
            />

            <Image
              src="/toyota.svg"
              alt="Toyota"
              width={140}
              height={44}
              className="object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 invert dark:invert-0"
            />

            <Image
              src="/uber.svg"
              alt="Uber"
              width={70}
              height={23}
              className="object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 invert dark:invert-0"
            />
          </div>
        </div>
      </section>
    </>
  )
}

