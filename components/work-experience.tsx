"use client"

import { Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function WorkExperience() {
  // Track which experience details are expanded
  const [expandedDetails, setExpandedDetails] = useState<number[]>([])

  const toggleDetails = (index: number) => {
    setExpandedDetails(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const experiences = [
    {
      title: "Senior ServiceNow Developer",
      company: "General Dynamics Information Technology",
      type: "Full-time",
      period: "November 2020 — Present (4 years 5 months)",
      location: "",
      highlights: [
        "ServiceNow Platform Management",
        "Workflow Automation",
        "Stakeholder Collaboration",
        "Technical Leadership",
        "Google DialogFlow Integration"
      ],
      responsibilities: [
        "Manage the ServiceNow platform with skill, focusing on service automation, system integrations, and bespoke product development, and demonstrated expertise in workflow automation and process orchestration, instrumental in complex problem-solving scenarios.",
        "Excel in the configuration and development of ServiceNow applications and modules, adapting solutions in alignment with evolving customer requirements and showcasing a nimble, solution-focused mindset dedicated to delivering tangible results.",
        "Spearhead the planning and execution of stakeholder meetings to solicit feedback on tool modules, laying the groundwork for iterative development and feedback-centric enhancements, and cementing my reputation as a leader in collaborative, user-focused engineering.",
        "Conduct in-depth technical investigations into systems architecture and design, acting as a critical bridge between technical teams and stakeholders and underscoring my comprehensive grasp of complex system infrastructures.",
        "Mentor junior administrators and developers, playing an active role in code reviews and new development discussions, and fostered an environment of continuous learning and collective advancement.",
        "Developed and implemented an API interface that integrates ServiceNow with Google DialogFlow, enriching customer interactions through advanced natural language processing and marking a significant stride towards the adoption of cutting-edge integrative technologies."
      ]
    },
    {
      title: "ServiceNow Security Developer",
      company: "Toyota North America",
      type: "Full-time",
      period: "March 2019 — November 2020 (1 year 9 months)",
      location: "Plano, Texas, United States",
      highlights: [
        "Security Incident Response",
        "Vulnerability Management",
        "Service Portal Development",
        "API Integration",
        "Agile Product Ownership"
      ],
      responsibilities: [
        "Served as a ServiceNow Developer for Cybersecurity & Risk Management Division at Toyota Motors North America, focusing on implementing and maintaining Security Incident Response and Vulnerability Management modules.",
        "Excelled in developing and maintaining Service Portal Widgets, integrating key platforms such as Qualys and Splunk with ServiceNow.",
        "Undertook product owner responsibilities across Agile life cycle, including backlog maintenance and active participation in Agile rituals.",
        "Administered and managed ServiceNow CMDB information and ticket queues for CSRM, ensuring streamlined operations.",
        "Established API Interfaces to enhance business processes, notably improving security incident analysis and response time.",
        "Engaged in upgrading Security modules to newer versions as required, ensuring system up-to-dateness and effectiveness."
      ]
    },
    {
      title: "Support Analyst / ServiceNow System Administrator",
      company: "Uber Freight",
      type: "Full-time",
      period: "June 2015 — March 2019 (3 years 10 months)",
      location: "Frisco, Texas, United States",
      highlights: [
        "ITSM Implementation",
        "Platform Administration",
        "Process Automation",
        "Cross-Platform Integration",
        "User Management"
      ],
      responsibilities: [
        "Spearheaded the successful company-wide development and implementation of the ITSM Module.",
        "Expertly provided general support, administration, and maintenance of the ServiceNow platform ensuring seamless operations.",
        "Administered user accounts proficiently, encompassing group maintenance and user roles management.",
        "Showcased adeptness in developing and maintaining features through platform configuration and customization.",
        "Automated user setup and ticket triage processes, achieving substantial time savings and heightened productivity, translating to millions in savings.",
        "Established and sustained successful integrations with JIRA & OpsGenie, enhancing cross-platform functionality."
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Work Experience</Typography>
        <Typography as="p" variant="sectionSubtitle">Professional journey and contributions</Typography>

        <div className="mt-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5">
              <div className="flex md:flex-col items-center">
                <div className="p-3 rounded-full border-2 border-[var(--color-accent-600)]">
                  <Briefcase className="h-5 w-5 text-[var(--color-accent-600)]" />
                </div>
                {index < experiences.length - 1 && (
                  <Separator orientation="vertical" className="hidden md:block h-full w-0.5 mx-auto mt-3 bg-gradient-to-b from-[var(--color-accent-700)] to-[var(--color-dark-800)]" />
                )}
              </div>

              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <div className="mt-1">
                  <p className="text-sm font-bold text-[var(--color-neutral-400)]">
                    {exp.company} • {exp.type}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-400)]">{exp.period}</p>
                  {exp.location && <p className="text-sm text-[var(--color-neutral-400)]">{exp.location}</p>}
                </div>

                {/* Key highlights section with updated badge styling */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.highlights.map((highlight, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={cn(
                        "bg-[var(--color-dark-800)]/50 hover:bg-[var(--color-accent-700)] hover:text-white border-[var(--color-dark-700)] text-[var(--color-neutral-200)]",
                        "py-0.5 px-2 text-xs"
                      )}
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Toggle button for details with updated text */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleDetails(index)}
                  className="mt-3 text-[var(--color-accent-500)] hover:text-[var(--color-accent-400)] hover:bg-[var(--color-dark-700)]"
                >
                  {expandedDetails.includes(index) ? (
                    <>Hide details <ChevronUp className="ml-1 h-4 w-4" /></>
                  ) : (
                    <>Learn more <ChevronDown className="ml-1 h-4 w-4" /></>
                  )}
                </Button>

                {/* Detailed responsibilities (collapsible) */}
                {expandedDetails.includes(index) && (
                  <div className="mt-3 space-y-2.5 text-[var(--color-neutral-300)] pl-2 border-l-2 border-[var(--color-dark-700)]">
                    {exp.responsibilities.map((resp, i) => (
                      <p key={i} className="text-sm leading-relaxed">• {resp}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

