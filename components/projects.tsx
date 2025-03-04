import Link from "next/link"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { SkillCard } from "@/components/ui/skill-card"
import { Code, Server, Database, Globe, Bot, Beaker, Search, FileText, Network, Wrench, BrainCircuit, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Agent-Chat",
      description: "AI-powered conversational agent using Llama 3.2 and Phidata with reasoning and tool integration for web searches.",
      tags: ["Python", "AI", "Llama", "Reasoning", "Chatbot"],
      githubUrl: "https://github.com/TheSethRose/Agent-Chat",
      icon: Bot
    },
    {
      title: "ServiceNow-KB-Extractor",
      description: "Extracts knowledge base articles from ServiceNow instances and converts them to markdown format for easy processing.",
      tags: ["Python", "ServiceNow", "SNDevs", "NowAssist"],
      githubUrl: "https://github.com/TheSethRose/ServiceNow-KB-Extractor",
      icon: FileText
    },
    {
      title: "MCP-Server-Starter",
      description: "Model Context Protocol server starter template for building AI agent backends with TypeScript.",
      tags: ["TypeScript", "MCP", "Template", "Cursor", "Claude"],
      githubUrl: "https://github.com/TheSethRose/MCP-Server-Starter",
      icon: Server
    },
    {
      title: "Grok3-Tunnel",
      description: "Unofficial self-hosted API tunnel providing access to Grok3 through a simple REST interface.",
      tags: ["Python", "API", "Grok", "XAI"],
      githubUrl: "https://github.com/TheSethRose/Grok3-Tunnel",
      icon: Code
    },
    {
      title: "Fetch-Browser",
      description: "Headless browser MCP server enabling AI agents to fetch web content and perform Google searches without API keys.",
      tags: ["TypeScript", "MCP", "Automation", "Headless-Browser"],
      githubUrl: "https://github.com/TheSethRose/Fetch-Browser",
      icon: Search
    },
    {
      title: "SethRose.dev",
      description: "Modern portfolio website built with Next.js, React 19, TypeScript, and Tailwind CSS 4.",
      tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "ShadCN UI"],
      githubUrl: "https://github.com/TheSethRose/SethRose.dev",
      icon: Globe
    },
    {
      title: "Network-Traffic-Tool",
      description: "Tools for analyzing network traffic from applications to understand and reverse engineer API interactions.",
      tags: ["Python", "Networking", "Reverse Engineering", "API Analysis"],
      githubUrl: "https://github.com/TheSethRose/Network-Traffic-Tool",
      icon: Network
    },
    {
      title: "LLM-Tools",
      description: "Collection of tools designed to help with using Large Language Models for development and debugging.",
      tags: ["Python", "LLM", "Development", "Debugging"],
      githubUrl: "https://github.com/TheSethRose/LLM-Tools",
      icon: Wrench
    },
    {
      title: "Julep-AI-Llama",
      description: "Python application integrating Julep AI with custom Llama model endpoint, providing AI agents with persistent memory.",
      tags: ["Python", "AI", "Agents", "Julep"],
      githubUrl: "https://github.com/TheSethRose/Julep-AI-Llama",
      icon: BrainCircuit
    },
    {
      title: "CrewAI-Project-Template",
      description: "Base project setup for running CrewAI locally with Ollama, a starting point for AI agent-based applications.",
      tags: ["Python", "CrewAI", "Ollama", "AI Agents"],
      githubUrl: "https://github.com/TheSethRose/CrewAI-Project-Template",
      icon: Users
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Featured Projects</Typography>
        <Typography as="p" variant="sectionSubtitle">Open-source solutions I've developed</Typography>

        {/* Mosaic Projects Layout */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* First row */}
          {/* Agent-Chat - Large card spanning 8 columns (most important AI project) */}
          <div className="md:col-span-8">
            <SkillCard
              title="Project"
              icon={projects[0].icon}
              variant="project"
              projectInfo={{
                title: projects[0].title,
                description: projects[0].description,
                tags: projects[0].tags,
                githubUrl: projects[0].githubUrl
              }}
              size="large"
            />
          </div>

          {/* Fetch-Browser - Medium card spanning 4 columns (important for AI agents) */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[4].icon}
              variant="project"
              projectInfo={{
                title: projects[4].title,
                description: projects[4].description,
                tags: projects[4].tags,
                githubUrl: projects[4].githubUrl
              }}
              size="medium"
            />
          </div>

          {/* Second row */}
          {/* ServiceNow-KB-Extractor - Medium card spanning 6 columns (important ServiceNow tool) */}
          <div className="md:col-span-6">
            <SkillCard
              title="Project"
              icon={projects[1].icon}
              variant="project"
              projectInfo={{
                title: projects[1].title,
                description: projects[1].description,
                tags: projects[1].tags,
                githubUrl: projects[1].githubUrl
              }}
              size="medium"
            />
          </div>

          {/* MCP-Server-Starter - Medium card spanning 6 columns (important for AI development) */}
          <div className="md:col-span-6">
            <SkillCard
              title="Project"
              icon={projects[2].icon}
              variant="project"
              projectInfo={{
                title: projects[2].title,
                description: projects[2].description,
                tags: projects[2].tags,
                githubUrl: projects[2].githubUrl
              }}
              size="medium"
            />
          </div>

          {/* Third row */}
          {/* Grok3-Tunnel - Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[3].icon}
              variant="project"
              projectInfo={{
                title: projects[3].title,
                description: projects[3].description,
                tags: projects[3].tags,
                githubUrl: projects[3].githubUrl
              }}
              size="small"
            />
          </div>

          {/* Julep-AI-Llama - Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[8].icon}
              variant="project"
              projectInfo={{
                title: projects[8].title,
                description: projects[8].description,
                tags: projects[8].tags,
                githubUrl: projects[8].githubUrl
              }}
              size="small"
            />
          </div>

          {/* CrewAI-Project-Template - Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[9].icon}
              variant="project"
              projectInfo={{
                title: projects[9].title,
                description: projects[9].description,
                tags: projects[9].tags,
                githubUrl: projects[9].githubUrl
              }}
              size="small"
            />
          </div>

          {/* Fourth row */}
          {/* SethRose.dev - Medium card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[5].icon}
              variant="project"
              projectInfo={{
                title: projects[5].title,
                description: projects[5].description,
                tags: projects[5].tags,
                githubUrl: projects[5].githubUrl
              }}
              size="medium"
            />
          </div>

          {/* Network-Traffic-Tool - Medium card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[6].icon}
              variant="project"
              projectInfo={{
                title: projects[6].title,
                description: projects[6].description,
                tags: projects[6].tags,
                githubUrl: projects[6].githubUrl
              }}
              size="medium"
            />
          </div>

          {/* LLM-Tools - Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Project"
              icon={projects[7].icon}
              variant="project"
              projectInfo={{
                title: projects[7].title,
                description: projects[7].description,
                tags: projects[7].tags,
                githubUrl: projects[7].githubUrl
              }}
              size="small"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="https://github.com/TheSethRose" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

