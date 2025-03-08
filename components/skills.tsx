import { LucideIcon, Server, Globe2, Code, Database, BookOpen, Users, Briefcase, Layers, GitBranch, Workflow, Bot } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { ContentCard } from "@/components/ui/content-card"

// Define a type for skill source
type SkillSource = "professional" | "self-taught"

// Update SkillType to include source
type SkillType = {
  title: string
  description?: string
  tags: Array<{
    name: string
    source: SkillSource
  }>
  url?: string
  urlIcon?: LucideIcon
  urlText?: string
  icon: LucideIcon
  size: "small" | "medium" | "large"
}

export function Skills() {
  // Single array for all skills
  const skills: SkillType[] = [
    {
      title: "ServiceNow Platform",
      description: "Extensive experience implementing and managing ServiceNow platform solutions across multiple modules, with a focus on process automation and system integration.",
      tags: [
        { name: "ServiceNow Platform", source: "professional" },
        { name: "ITSM Solutions", source: "professional" },
        { name: "ITOM Solutions", source: "professional" },
        { name: "HR Solutions", source: "professional" },
        { name: "ITBM Solutions", source: "professional" },
        { name: "SecOps Solutions", source: "professional" },
        { name: "Service Portal", source: "professional" },
        { name: "ServiceNow Administrator", source: "professional" }
      ],
      icon: Briefcase,
      size: "medium"
    },
    {
      title: "Process Management",
      description: "Expert in implementing and optimizing IT service management processes following industry best practices.",
      tags: [
        { name: "Change Management", source: "professional" },
        { name: "Problem Management", source: "professional" },
        { name: "Incident Management", source: "professional" },
        { name: "Service Catalog", source: "professional" },
        { name: "Knowledge Management", source: "professional" },
        { name: "Release Management", source: "professional" },
        { name: "SDLC", source: "professional" },
        { name: "Configuration Management", source: "professional" }
      ],
      icon: Workflow,
      size: "medium"
    },
    {
      title: "Technical Skills",
      description: "Strong technical foundation with expertise in system design, development, and administration.",
      tags: [
        { name: "Software Development", source: "professional" },
        { name: "Technical Documentation", source: "professional" },
        { name: "Enterprise Systems", source: "professional" },
        { name: "System Administration", source: "professional" },
        { name: "Report Development", source: "professional" },
        { name: "Data Analysis", source: "professional" },
        { name: "Dashboard Creation", source: "professional" },
        { name: "API Integration", source: "professional" }
      ],
      icon: Code,
      size: "medium"
    },
    {
      title: "Web Development",
      description: "Expertise in modern web development technologies and frameworks.",
      tags: [
        { name: "React", source: "self-taught" },
        { name: "Next.js", source: "self-taught" },
        { name: "TypeScript", source: "self-taught" },
        { name: "JavaScript", source: "self-taught" },
        { name: "HTML/CSS", source: "self-taught" },
        { name: "Tailwind CSS", source: "self-taught" },
        { name: "Responsive Design", source: "self-taught" },
        { name: "UI/UX Design", source: "self-taught" }
      ],
      icon: Globe2,
      size: "medium"
    },
    {
      title: "Solution Architecture",
      description: "Experience designing and implementing enterprise-level technical solutions.",
      tags: [
        { name: "Technical Architecture", source: "professional" },
        { name: "Solution Design", source: "professional" },
        { name: "CMDB Management", source: "professional" },
        { name: "System Integrations", source: "professional" },
        { name: "SLA Management", source: "professional" },
        { name: "IT Service Management", source: "professional" },
        { name: "Security Modules", source: "professional" },
        { name: "Workflow Automation", source: "professional" }
      ],
      icon: Server,
      size: "medium"
    },
    {
      title: "Integration Experience",
      description: "Skilled in connecting systems and platforms to create seamless workflows and data exchange.",
      tags: [
        { name: "Google DialogFlow", source: "professional" },
        { name: "Qualys Integration", source: "professional" },
        { name: "Splunk Integration", source: "professional" },
        { name: "JIRA Integration", source: "professional" },
        { name: "OpsGenie Integration", source: "professional" },
        { name: "REST APIs", source: "professional" },
        { name: "GraphQL", source: "self-taught" },
        { name: "Webhook Development", source: "self-taught" }
      ],
      icon: Layers,
      size: "medium"
    },
    {
      title: "AI & Machine Learning",
      description: "Expertise in AI technologies and machine learning applications.",
      tags: [
        { name: "MCP Servers", source: "self-taught" },
        { name: "Claude", source: "self-taught" },
        { name: "Cursor", source: "self-taught" },
        { name: "Grok3", source: "self-taught" },
        { name: "XAI", source: "self-taught" },
        { name: "LLM", source: "self-taught" }
      ],
      icon: Bot,
      size: "medium"
    },
    {
      title: "Backend Technologies",
      description: "Backend development skills for building robust server-side applications.",
      tags: [
        { name: "Node.js", source: "self-taught" },
        { name: "Express.js", source: "self-taught" },
        { name: "Python", source: "self-taught" },
        { name: "API Development", source: "self-taught" },
        { name: "MongoDB", source: "self-taught" },
        { name: "PostgreSQL", source: "self-taught" },
        { name: "Firebase", source: "self-taught" },
        { name: "Authentication", source: "self-taught" }
      ],
      icon: Database,
      size: "medium"
    },
    {
      title: "DevOps & Tools",
      description: "Self-taught DevOps practices and development tools for efficient software delivery.",
      tags: [
        { name: "Git", source: "self-taught" },
        { name: "GitHub", source: "self-taught" },
        { name: "Docker", source: "self-taught" },
        { name: "CI/CD", source: "self-taught" },
        { name: "Automation", source: "self-taught" },
        { name: "Headless Browser", source: "self-taught" },
        { name: "Network Analysis", source: "self-taught" },
        { name: "VS Code", source: "self-taught" }
      ],
      icon: GitBranch,
      size: "medium"
    },
    {
      title: "Methodologies & Leadership",
      description: "Proficient in modern development methodologies and project management approaches.",
      tags: [
        { name: "SCRUM", source: "professional" },
        { name: "Agile Methodologies", source: "professional" },
        { name: "Production Deployment", source: "professional" },
        { name: "Project Management", source: "professional" },
        { name: "ServiceNow Certification", source: "professional" },
        { name: "Team Leadership", source: "professional" },
        { name: "Product Ownership", source: "professional" },
        { name: "Stakeholder Collaboration", source: "professional" }
      ],
      icon: BookOpen,
      size: "medium"
    },
    {
      title: "Soft Skills",
      description: "Strong interpersonal and communication skills that enhance team collaboration and project success.",
      tags: [
        { name: "Requirements Analysis", source: "professional" },
        { name: "Collaboration", source: "professional" },
        { name: "Teamwork", source: "professional" },
        { name: "Communication Skills", source: "professional" },
        { name: "Problem Solving", source: "professional" },
        { name: "Technical Writing", source: "professional" },
        { name: "Presentation Skills", source: "professional" },
        { name: "Time Management", source: "self-taught" }
      ],
      icon: Users,
      size: "medium"
    }
  ]

  // Define the layout configuration for different card sizes
  const layoutConfig = {
    large: "sm:col-span-2 sm:row-span-2",
    medium: "sm:col-span-2 sm:row-span-1",
    small: "sm:col-span-1 sm:row-span-1"
  }

  return (
    <section id="skills" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Skills</Typography>
        <Typography as="p" variant="sectionSubtitle">Technologies and expertise I bring to the table</Typography>

        {/* Skill source legend */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm dark:text-[var(--color-neutral-300)] text-gray-600">Professionally Learned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm dark:text-[var(--color-neutral-300)] text-gray-600">Personally Learned</span>
          </div>
        </div>

        {/* Organic Mosaic Layout with mixed card sizes */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={index} className={layoutConfig[skill.size]}>
              <ContentCard
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                tags={skill.tags.map(tag => ({
                  name: tag.name,
                  className: tag.source === "professional"
                    ? "dark:bg-blue-900/70 dark:text-blue-100 dark:border-blue-700 bg-blue-100 text-blue-800 border-blue-300"
                    : "dark:bg-green-900/70 dark:text-green-100 dark:border-green-700 bg-green-100 text-green-800 border-green-300"
                }))}
                url={skill.url}
                urlIcon={skill.urlIcon}
                urlText={skill.urlText}
                size={skill.size}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

