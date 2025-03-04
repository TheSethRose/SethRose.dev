import { Code, Terminal, Cpu, Award, Zap, Database, Server, Globe, BrainCircuit, Shield, Wrench } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { SkillCard } from "@/components/ui/skill-card"

export function Skills() {
  // ServiceNow & Enterprise skills (most important)
  const servicenowSkills = [
    "ServiceNow Development",
    "ITSM Implementation",
    "Workflow Automation",
    "System Integration",
    "CMDB Configuration",
    "Platform Administration",
    "Service Portal"
  ]

  // AI & ML skills (growing importance)
  const aiSkills = [
    "LLM Integration",
    "Agent Development",
    "Reasoning Systems",
    "LangChain",
    "Llama Models",
    "Prompt Engineering",
    "NowAssist"
  ]

  // Programming languages
  const programmingSkills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "PowerShell"
  ]

  // Web development skills
  const webSkills = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "ShadCN UI",
    "REST APIs",
    "FastAPI"
  ]

  // DevOps & Tools
  const devopsSkills = [
    "Docker",
    "Git",
    "CI/CD",
    "MCP",
    "Ollama",
    "Headless Browser"
  ]

  // Cloud & Infrastructure
  const cloudSkills = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Vercel",
    "Netlify"
  ]

  // Certifications and awards
  const certifications = [
    { name: "Configure the CMDB (Micro-Certification)", issuer: "ServiceNow" },
    { name: "Star Developer Super Badge", issuer: "Now Creator" },
    { name: "Star Administrator Super Badge", issuer: "Now Creator" },
    { name: "Star Business Process Analyst Super Badge", issuer: "Now Creator" }
  ]

  return (
    <section id="skills" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Skills</Typography>
        <Typography as="p" variant="sectionSubtitle">Technologies and expertise I bring to the table</Typography>

        {/* Mosaic Skills Layout */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* First Row */}
          {/* ServiceNow Skills - Large card spanning 8 columns */}
          <div className="md:col-span-8">
            <SkillCard
              title="ServiceNow & Enterprise"
              icon={Server}
              variant="skill"
              skills={servicenowSkills}
              size="large"
            />
          </div>

          {/* AI & ML Skills - Medium card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="AI & Machine Learning"
              icon={BrainCircuit}
              variant="skill"
              skills={aiSkills}
              size="medium"
            />
          </div>

          {/* Second Row */}
          {/* Programming Languages - Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Programming Languages"
              icon={Terminal}
              variant="skill"
              skills={programmingSkills}
              size="small"
            />
          </div>

          {/* Web Development - Medium card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="Web Development"
              icon={Globe}
              variant="skill"
              skills={webSkills}
              size="medium"
            />
          </div>

          {/* DevOps & Tools - Medium card spanning 4 columns */}
          <div className="md:col-span-4">
            <SkillCard
              title="DevOps & Tools"
              icon={Wrench}
              variant="skill"
              skills={devopsSkills}
              size="medium"
            />
          </div>

          {/* Third Row */}
          {/* Cloud & Infrastructure - Small card spanning 4 columns */}
          <div className="md:col-span-4 md:col-start-5">
            <SkillCard
              title="Cloud & Infrastructure"
              icon={Zap}
              variant="skill"
              skills={cloudSkills}
              size="small"
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <Typography as="h3" variant="h3" className="mb-6">Certifications & Awards</Typography>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg border border-[var(--color-dark-800)] bg-[var(--color-dark-900)]/30 p-4 transition-all duration-300 hover:border-[var(--color-dark-700)] hover:bg-[var(--color-dark-900)]/50 hover:shadow-md hover:translate-y-[-2px]"
              >
                <div className="flex items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-dark-800)] text-[var(--color-accent-600)] mr-3 transition-colors duration-300 group-hover:bg-[var(--color-dark-700)]">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[var(--color-neutral-200)]">{cert.name}</h4>
                    <p className="text-xs text-[var(--color-neutral-400)] mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

