"use client"

import { useEffect, useState } from "react"
import { Typography } from "@/components/ui/typography"
import { ContentCard } from "@/components/ui/content-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Code, Server, Bot, Github, Database, Globe } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { ProjectData } from "@/lib/types"
import { GitHub } from "@/components/GitHub"

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
    title: "Agent-Chat",
    description: "AI-powered conversational agent using Llama 3.2 model and Phidata framework. Built for efficient interactions with minimal interface overhead. Focuses on practical responses to user queries.",
    tags: ["Python", "Llama", "AI", "LLM", "Phidata"],
    url: "https://github.com/TheSethRose/Agent-Chat",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Bot",
    size: "large"
  },
  {
    title: "ServiceNow-KB-Extractor",
    description: "Python utility that extracts knowledge base articles from ServiceNow and converts them to markdown. Streamlines documentation management and improves content portability across platforms.",
    tags: ["Python", "ServiceNow", "Automation", "Markdown"],
    url: "https://github.com/TheSethRose/ServiceNow-KB-Extractor",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Server",
    size: "medium"
  },
  {
    title: "Referral System",
    description: "Automated solution for managing referral processes. Reduced manual effort through strategic automation, demonstrating tangible ROI through quantifiable efficiency gains.",
    tags: ["JavaScript", "Automation", "Web Scraping"],
    url: "https://github.com/TheSethRose",
    urlIcon: "Github",
    urlText: "View Profile",
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
        <Typography as="p" variant="sectionSubtitle">Technical solutions with real-world impact</Typography>

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

        {/* GitHub Component */}
        <GitHub username="TheSethRose" />

      </div>
    </section>
  )
}

