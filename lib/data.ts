import { fetchGitHubRepositories, mapRepositoriesToProjects } from '@/lib/github'
import { ProjectData } from '@/lib/types'
// Remove the icon imports since we'll use string names instead
// import { Code, Server, Bot, Github } from 'lucide-react'

// Fallback projects in case GitHub API fails
const fallbackProjects: ProjectData[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, and dynamic content.",
    tags: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    url: "https://github.com/TheSethRose/portfolio",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Code",
    size: "large"
  },
  {
    title: "API Service",
    description: "A RESTful API service built with Node.js and Express. Provides endpoints for data retrieval and manipulation.",
    tags: ["JavaScript", "Node.js", "Express", "API"],
    url: "https://github.com/TheSethRose/api-service",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Server",
    size: "medium"
  },
  {
    title: "Automation Bot",
    description: "A Discord bot for automating tasks and providing useful utilities for server management.",
    tags: ["Python", "Discord.py", "Automation"],
    url: "https://github.com/TheSethRose/automation-bot",
    urlIcon: "Github",
    urlText: "View on GitHub",
    icon: "Bot",
    size: "medium"
  }
]

/**
 * Fetch projects from GitHub API or return fallback data
 */
export async function getProjects(): Promise<ProjectData[]> {
  try {
    // Fetch repositories from GitHub
    const repositories = await fetchGitHubRepositories()

    // If we have repositories, map them to our project format
    if (repositories.length > 0) {
      const projects = mapRepositoriesToProjects(repositories)

      // Add the GitHub icon to all projects
      return projects.map(project => ({
        ...project,
        urlIcon: "Github"
      }))
    }

    // If no repositories were found, return fallback data
    return fallbackProjects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return fallbackProjects
  }
}
