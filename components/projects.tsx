import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Innovative solutions I've developed</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="project-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">AI-Powered Documentation API</h3>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <Github className="h-5 w-5 text-[var(--color-accent-600)]" />
                </Link>
              </div>
            </div>
            <p className="text-[var(--color-neutral-400)] mb-4">
              A Python-based web scraper that collects and updates programming documentation for multiple languages,
              accessible via API or local MCP servers.
            </p>
            <div className="mt-4">
              <span className="tag">Python</span>
              <span className="tag">Tauri</span>
              <span className="tag">TypeScript</span>
              <span className="tag">REST API</span>
              <span className="tag">Markdown</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">MCP Server for AI Agents</h3>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <Github className="h-5 w-5 text-[var(--color-accent-600)]" />
                </Link>
              </div>
            </div>
            <p className="text-[var(--color-neutral-400)] mb-4">
              A Model Context Protocol server designed for AI agents to retrieve structured technical data in real-time.
            </p>
            <div className="mt-4">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">AI Model Integration</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">ServiceNow API Integration</h3>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/sponsors/TheSethRose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <Github className="h-5 w-5 text-[var(--color-accent-600)]" />
                </Link>
              </div>
            </div>
            <p className="text-[var(--color-neutral-400)] mb-4">
              Developed an API interface that integrates ServiceNow with Google DialogFlow, enriching customer
              interactions through advanced natural language processing.
            </p>
            <div className="mt-4">
              <span className="tag">ServiceNow</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Google DialogFlow</span>
              <span className="tag">API Integration</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="border-[var(--color-dark-700)] hover:border-[var(--color-accent-700)] hover:bg-[var(--color-dark-800)]">
            <Link href="https://github.com/sponsors/TheSethRose" target="_blank" rel="noopener noreferrer">
              View all projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

