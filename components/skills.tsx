import { LucideIcon, Server, Globe2 } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { ContentCard } from "@/components/ui/content-card"

type SkillType = {
  title: string
  description?: string
  tags: string[]
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
      title: "Large Skill Example",
      description: "This is an example of a large skill card with a longer description. It demonstrates how a large card would appear in the skills section with multiple lines of text.",
      tags: ["Development", "Scripting", "Workflows", "APIs", "Automation"],
      url: "https://example.com/large-skill",
      urlIcon: Globe2,
      urlText: "Visit website",
      icon: Server,
      size: "large"
    },
    {
      title: "Medium Skill Example",
      description: "This is an example of a medium skill card.",
      tags: ["Python", "JavaScript", "TypeScript"],
      url: "https://example.com/medium-skill",
      urlIcon: Globe2,
      urlText: "Visit website",
      icon: Server,
      size: "medium"
    },
    {
      title: "Small Skill Example",
      tags: ["Docker", "Git"],
      // No URL provided for this example to demonstrate optional URL
      icon: Server,
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
    <section id="skills" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Skills</Typography>
        <Typography as="p" variant="sectionSubtitle">Technologies and expertise I bring to the table</Typography>

        {/* Organic Mosaic Layout with mixed card sizes */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={index} className={layoutConfig[skill.size]}>
              <ContentCard
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                tags={skill.tags}
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

