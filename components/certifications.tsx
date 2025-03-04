import { LucideIcon, Bookmark, Star } from "lucide-react"
import { ContentCard } from "@/components/ui/content-card"
import { Typography } from "@/components/ui/typography"

type CertificationType = {
  title: string
  description?: string
  issuer?: string
  date?: string
  tags: string[]
  url?: string
  urlIcon?: LucideIcon
  urlText?: string
  icon: LucideIcon
  size: "xs" | "small" | "medium" | "large"
}

export function Certifications() {
  const certifications: CertificationType[] = [
    {
      title: "Small Example",
      issuer: "Code Academy",
      tags: [],
      url: "https://example.com",
      urlText: "View certificate",
      icon: Bookmark,
      size: "xs"
    },
    {
      title: "JavaScript Basics",
      issuer: "Web Dev Institute",
      tags: [],
      url: "https://example.com",
      urlText: "View certificate",
      icon: Star,
      size: "xs"
    },
    {
      title: "React Fundamentals",
      issuer: "Frontend Masters",
      tags: [],
      url: "https://example.com",
      urlText: "View certificate",
      icon: Bookmark,
      size: "xs"
    },
    {
      title: "UI/UX Design",
      issuer: "Design School",
      tags: [],
      url: "https://example.com",
      urlText: "View certificate",
      icon: Star,
      size: "xs"
    }
  ]

  // Layout configuration for different card sizes
  const layoutConfig = {
    xs: "col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3",
    small: "col-span-6 md:col-span-4 lg:col-span-3",
    medium: "col-span-12 md:col-span-6 lg:col-span-4",
    large: "col-span-12 md:col-span-6 lg:col-span-4"
  }

  return (
    <section id="certifications" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Certifications & Awards</Typography>
        <Typography as="p" variant="sectionSubtitle">Professional certifications, badges, and recognitions</Typography>

        <div className="mt-8 grid grid-cols-12 gap-4">
          {certifications.map((cert, index) => {
            // Format description to include issuer and date if provided
            let description = cert.description || ""
            if (!description && (cert.issuer || cert.date) && cert.size !== "xs") {
              const parts = []
              if (cert.issuer) parts.push(`Issuer: ${cert.issuer}`)
              if (cert.date) parts.push(`Date: ${cert.date}`)
              description = parts.join("\n")
            } else if (cert.issuer && !description.includes(cert.issuer) && cert.size !== "xs") {
              description = `${description}\n\nIssuer: ${cert.issuer}`
              if (cert.date) description = `${description}\nDate: ${cert.date}`
            } else if (cert.date && !description.includes(cert.date) && cert.size !== "xs") {
              description = `${description}\n\nDate: ${cert.date}`
            }

            return (
              <div key={index} className={layoutConfig[cert.size]}>
                <ContentCard
                  title={cert.title}
                  description={description}
                  issuer={cert.issuer}
                  tags={cert.tags}
                  url={cert.url}
                  urlIcon={cert.urlIcon}
                  urlText={cert.urlText}
                  icon={cert.icon}
                  size={cert.size}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
