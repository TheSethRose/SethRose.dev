import Link from "next/link"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ContentCard } from "@/components/ui/content-card"
import { Code, Server, Bot, Github } from "lucide-react"
import { LucideIcon } from "lucide-react"

type ProjectType = {
  title: string
  description: string
  tags: string[]
  url?: string
  urlIcon?: LucideIcon
  urlText?: string
  icon: LucideIcon
  size: "small" | "medium" | "large"
}

export function Projects() {
  const projects: ProjectType[] = [
    {
      title: "Large Project Example",
      description: "This is an example of a large project card with a longer description. It demonstrates how a large card would appear in the projects section with multiple lines of text.\n\nLarge cards can include multiple paragraphs and provide more detailed information about the project, its features, and implementation details.",
      tags: ["TypeScript", "React", "NextJS", "TailwindCSS", "API"],
      url: "https://github.com/example/large-project",
      urlIcon: Github,
      urlText: "View on GitHub",
      icon: Bot,
      size: "large"
    },
    {
      title: "Medium Project Example",
      description: "This is an example of a medium project card with a moderate description length that fits within the allocated space.",
      tags: ["Python", "FastAPI", "Database"],
      url: "https://github.com/example/medium-project",
      urlIcon: Github,
      urlText: "View on GitHub",
      icon: Server,
      size: "medium"
    },
    {
      title: "Small Project Example",
      description: "",
      tags: ["JavaScript", "Utility"],
      url: "https://github.com/example/small-project",
      urlIcon: Github,
      urlText: "View on GitHub",
      icon: Code,
      size: "small"
    }
  ]

  // Define the layout configuration for different card sizes
  const layoutConfig = {
    large: "sm:col-span-2 sm:row-span-2",
    medium: "sm:col-span-2 sm:row-span-1",
    small: "sm:col-span-1 sm:row-span-1"
  }

  return (
    <section id="projects" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Featured Projects</Typography>
        <Typography as="p" variant="sectionSubtitle">Open-source solutions I&apos;ve developed</Typography>

        {/* Organic Mosaic Projects Layout with mixed card sizes */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index} className={layoutConfig[project.size]}>
              <ContentCard
                title={project.title}
                icon={project.icon}
                description={project.description}
                tags={project.tags}
                url={project.url}
                urlIcon={project.urlIcon}
                urlText={project.urlText}
                size={project.size}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="https://github.com/TheSethRose" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

