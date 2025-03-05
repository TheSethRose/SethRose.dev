import { LucideIcon, Award, Star, Bookmark, BadgeCheck, Shield, Bot, Cpu, FileCode, Users, Workflow, Database, Lightbulb, Zap } from "lucide-react"
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
    // Main certifications - first row
    {
      title: "ServiceNow Certified System Administrator",
      description: "Official ServiceNow certification validating expertise in platform administration, user management, and core functionality configuration.",
      issuer: "ServiceNow",
      tags: ["System Administration", "Platform", "Core"],
      url: "https://www.servicenow.com/services/training-and-certification/certified-system-administrator.html",
      urlText: "View certification",
      icon: Award,
      size: "medium"
    },
    {
      title: "ServiceNow Delta Certifications",
      description: "Maintained certification through multiple ServiceNow releases with completed Delta certifications for Orlando, New York, Paris, Quebec, and Rome releases.",
      issuer: "ServiceNow",
      tags: ["System Administration", "Platform Updates", "Continuous Learning"],
      url: "https://www.servicenow.com/services/training-and-certification.html",
      urlText: "View certification",
      icon: Award,
      size: "medium"
    },

    // Super Badges - second row
    {
      title: "Star Administrator Super Badge",
      description: "Prestigious credential demonstrating advanced platform administration capabilities including UI customization, notification systems, and reporting.",
      issuer: "ServiceNow",
      tags: ["Administration", "Advanced", "Super Badge"],
      url: "https://nowlearning.servicenow.com/lxp",
      urlText: "View badge",
      icon: Star,
      size: "small"
    },
    {
      title: "Star Developer Super Badge",
      description: "Advanced credential showcasing technical development skills in ServiceNow, including Flow Designer implementation and IntegrationHub configurations.",
      issuer: "ServiceNow",
      tags: ["Development", "Flow Designer", "IntegrationHub"],
      url: "https://nowlearning.servicenow.com/lxp",
      urlText: "View badge",
      icon: Star,
      size: "small"
    },
    {
      title: "Star Business Process Analyst Super Badge",
      description: "Specialized credential highlighting ability to align technical solutions with business needs and design Service Catalog offerings to meet organizational requirements.",
      issuer: "ServiceNow",
      tags: ["Business Analysis", "Service Catalog", "Process Design"],
      url: "https://nowlearning.servicenow.com/lxp",
      urlText: "View badge",
      icon: Star,
      size: "small"
    },

    // ITSM & Platform - third row
    {
      title: "ITSM Implementation",
      issuer: "ServiceNow",
      tags: [],
      icon: Workflow,
      size: "xs"
    },
    {
      title: "CMDB Configuration",
      issuer: "ServiceNow",
      tags: [],
      icon: Database,
      size: "xs"
    },
    {
      title: "Knowledge Management",
      issuer: "ServiceNow",
      tags: [],
      icon: Lightbulb,
      size: "xs"
    },
    {
      title: "Flow Designer",
      issuer: "ServiceNow",
      tags: [],
      icon: Zap,
      size: "xs"
    },

    // AI & Security - fourth row
    {
      title: "Virtual Agent",
      issuer: "ServiceNow",
      tags: [],
      icon: Bot,
      size: "xs"
    },
    {
      title: "Agent Intelligence",
      issuer: "ServiceNow",
      tags: [],
      icon: Cpu,
      size: "xs"
    },
    {
      title: "Security Incident Response",
      issuer: "ServiceNow",
      tags: [],
      icon: Shield,
      size: "xs"
    },
    {
      title: "Vulnerability Response",
      issuer: "ServiceNow",
      tags: [],
      icon: Shield,
      size: "xs"
    },

    // Additional expertise - fifth row
    {
      title: "HR Service Delivery",
      issuer: "ServiceNow",
      tags: [],
      icon: Users,
      size: "xs"
    },
    {
      title: "IntegrationHub",
      issuer: "ServiceNow",
      tags: [],
      icon: FileCode,
      size: "xs"
    },
    {
      title: "Domain Separation",
      issuer: "ServiceNow",
      tags: [],
      icon: BadgeCheck,
      size: "xs"
    },
    {
      title: "SIM Methodology",
      issuer: "ServiceNow",
      tags: [],
      icon: Bookmark,
      size: "xs"
    }
  ]

  // Layout configuration for different card sizes - adjusted for better mosaic layout
  const layoutConfig = {
    xs: "col-span-6 sm:col-span-3 md:col-span-3",
    small: "col-span-12 sm:col-span-6 md:col-span-4",
    medium: "col-span-12 md:col-span-6",
    large: "col-span-12"
  }

  return (
    <section id="certifications" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">ServiceNow Certifications</Typography>
        <Typography as="p" variant="sectionSubtitle">Professional certifications, badges, and specialized knowledge areas</Typography>

        <div className="mt-8 grid grid-cols-12 gap-3">
          {/* Main certifications - first row */}
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-3">
              {certifications.slice(0, 2).map((cert, index) => (
                <div key={`main-${index}`} className={layoutConfig[cert.size]}>
                  <ContentCard
                    title={cert.title}
                    description={cert.description}
                    issuer={cert.issuer}
                    tags={cert.tags}
                    url={cert.url}
                    urlIcon={cert.urlIcon}
                    urlText={cert.urlText}
                    icon={cert.icon}
                    size={cert.size}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Super Badges - second row */}
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-3">
              {certifications.slice(2, 5).map((cert, index) => (
                <div key={`badge-${index}`} className={layoutConfig[cert.size]}>
                  <ContentCard
                    title={cert.title}
                    description={cert.description}
                    issuer={cert.issuer}
                    tags={cert.tags}
                    url={cert.url}
                    urlIcon={cert.urlIcon}
                    urlText={cert.urlText}
                    icon={cert.icon}
                    size={cert.size}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Knowledge Areas - grouped by category */}
          <div className="col-span-12 mt-2">
            <Typography as="h3" className="text-lg font-semibold mb-3">Specialized Knowledge Areas</Typography>

            {/* ITSM & Platform */}
            <div className="grid grid-cols-12 gap-3 mb-3">
              {certifications.slice(5, 9).map((cert, index) => (
                <div key={`itsm-${index}`} className={layoutConfig[cert.size]}>
                  <ContentCard
                    title={cert.title}
                    issuer={cert.issuer}
                    icon={cert.icon}
                    size={cert.size}
                  />
                </div>
              ))}
            </div>

            {/* AI & Security */}
            <div className="grid grid-cols-12 gap-3 mb-3">
              {certifications.slice(9, 13).map((cert, index) => (
                <div key={`security-${index}`} className={layoutConfig[cert.size]}>
                  <ContentCard
                    title={cert.title}
                    issuer={cert.issuer}
                    icon={cert.icon}
                    size={cert.size}
                  />
                </div>
              ))}
            </div>

            {/* Additional expertise */}
            <div className="grid grid-cols-12 gap-3">
              {certifications.slice(13).map((cert, index) => (
                <div key={`additional-${index}`} className={layoutConfig[cert.size]}>
                  <ContentCard
                    title={cert.title}
                    issuer={cert.issuer}
                    icon={cert.icon}
                    size={cert.size}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
