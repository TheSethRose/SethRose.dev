"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ContentCard } from "@/components/ui/content-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Code, Server, Bot, Github, Database, Globe } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { ProjectData } from "@/lib/types"
import { GitHubHeatmap } from "@/components/GitHubHeatmap"

// Map of icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Code,
  Server,
  Bot,
  Github,
  Database,
  Globe
}

// Fallback projects in case API fails
const fallbackProjects: ProjectData[] = [
  {
    title: "Large Project Example",
    description: "This is an example of a large project card with a longer description. It demonstrates how a large card would appear in the projects section with multiple lines of text.\n\nLarge cards can include multiple paragraphs and provide more detailed information about the project, its features, and implementation details.",
    tags: ["TypeScript", "React", "NextJS", "TailwindCSS", "API"],
    url: "https://github.com/example/large-project",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Bot",
    size: "large"
  },
  {
    title: "Medium Project Example",
    description: "This is an example of a medium project card with a moderate description length that fits within the allocated space.",
    tags: ["Python", "FastAPI", "Database"],
    url: "https://github.com/example/medium-project",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Server",
    size: "medium"
  },
  {
    title: "Small Project Example",
    description: "",
    tags: ["JavaScript", "Utility"],
    url: "https://github.com/example/small-project",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Code",
    size: "small"
  }
]

export function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const response = await fetch('/api/github')

        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }

        const data = await response.json()
        setProjects(data.projects)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects')
        setProjects(fallbackProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Define the layout configuration for different card sizes
  const layoutConfig = {
    large: "sm:col-span-2 sm:row-span-2",
    medium: "sm:col-span-2 sm:row-span-1",
    small: "sm:col-span-1 sm:row-span-1"
  }

  // Skeleton loading cards with different sizes
  const renderSkeletonCards = () => {
    // Create an array of different sized skeleton cards
    const skeletonSizes = ['large', 'medium', 'medium', 'small', 'small', 'small'];

    return (
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {skeletonSizes.map((size, index) => (
          <div key={`skeleton-${index}`} className={layoutConfig[size as keyof typeof layoutConfig]}>
            <Skeleton
              className={`w-full ${
                size === 'large' ? 'h-[400px]' :
                size === 'medium' ? 'h-[250px]' :
                'h-[200px]'
              }`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Featured Projects</Typography>
        <Typography as="p" variant="sectionSubtitle">Open-source solutions I&apos;ve developed</Typography>

        {loading ? (
          renderSkeletonCards()
        ) : (
          <>
            {/* Organic Mosaic Projects Layout with mixed card sizes */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
              {projects.map((project, index) => {
                // Convert icon string names to actual components
                const IconComponent = iconMap[project.icon] || Globe;
                const UrlIconComponent = project.urlIcon ? iconMap[project.urlIcon] : undefined;

                return (
                  <div key={index} className={layoutConfig[project.size]}>
                    <ContentCard
                      title={project.title}
                      icon={IconComponent}
                      description={project.description}
                      tags={project.tags}
                      url={project.url}
                      urlIcon={UrlIconComponent}
                      urlText={project.urlText}
                      size={project.size}
                    />
                  </div>
                );
              })}
            </div>

            {error && (
              <div className="mt-4 text-center text-[var(--color-neutral-400)]">
                <p>{error}</p>
              </div>
            )}
          </>
        )}

        {/* GitHub Contribution Heatmap */}
        <div className="mt-16 rounded-xl bg-[var(--color-background)] p-6 shadow-sm">
          <GitHubHeatmap username="TheSethRose" />
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

