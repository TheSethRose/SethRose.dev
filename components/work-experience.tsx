"use client"

import { Briefcase, ChevronDown, ExternalLink, Building, Calendar, MapPin } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export function WorkExperience() {
  // Track which experience is shown in the modal
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  // Track calculated job durations
  const [experiences, setExperiences] = useState(() => {
    // Initialize with calculated periods
    return initialExperiences.map(exp => {
      if (exp.endDate === "Present") {
        const startDate = new Date(exp.startDate)
        const duration = calculateDuration(startDate, new Date())

        return {
          ...exp,
          formattedPeriod: `${formatDate(exp.startDate)} — Present (${duration})`
        }
      } else {
        const startDate = new Date(exp.startDate)
        const endDate = new Date(exp.endDate)
        const duration = calculateDuration(startDate, endDate)

        return {
          ...exp,
          formattedPeriod: `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)} (${duration})`
        }
      }
    });
  })

  // Format a date as "Month YYYY"
  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()
  }

  // Calculate the duration between two dates in years and months
  function calculateDuration(startDate: Date, endDate: Date): string {
    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = endDate.getMonth() - startDate.getMonth()

    if (months < 0) {
      months += 12
      years -= 1
    }

    const yearText = years === 1 ? "year" : "years"
    const monthText = months === 1 ? "month" : "months"

    if (years === 0) {
      return `${months} ${monthText}`
    } else if (months === 0) {
      return `${years} ${yearText}`
    } else {
      return `${years} ${yearText} ${months} ${monthText}`
    }
  }

  const openExperienceModal = (index: number) => {
    setSelectedExperience(index)
  }

  const closeExperienceModal = () => {
    setSelectedExperience(null)
  }

  // Format responsibility text for better readability
  const formatResponsibility = (resp: string | { title: string, text: string }) => {
    // Handle both string and object formats
    const text = typeof resp === 'string' ? resp : resp.text
    const title = typeof resp === 'string' ? '' : resp.title

    if (!text) {
      return {
        title: title || '',
        text: ''
      }
    }

    return {
      title: title || '',
      text: text
    }
  }

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
                {/* Clickable job title with icon indicator */}
                <button
                  onClick={() => openExperienceModal(index)}
                  className="group flex items-center gap-1.5 hover:text-[var(--color-accent-500)] transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-left">{exp.title}</h3>
                  <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>

                <div className="mt-1">
                  <p className="text-sm font-bold text-[var(--color-neutral-400)]">
                    {exp.company} • {exp.type}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-400)]">
                    {exp.formattedPeriod || `${formatDate(exp.startDate)} — ${exp.endDate === "Present" ? "Present" : formatDate(exp.endDate)}`}
                  </p>
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
              </div>
            </div>
          ))}
        </div>

        {/* Experience Details Modal */}
        {selectedExperience !== null && (
          <Dialog open={selectedExperience !== null} onOpenChange={closeExperienceModal}>
            <DialogContent
              width="w-[75%] max-h-[80vh]"
              className="overflow-y-auto bg-[var(--color-dark-900)] border-[var(--color-dark-700)]"
            >
              <DialogHeader className="pb-0 border-b-0">
                <DialogTitle className="text-2xl font-bold">
                  {experiences[selectedExperience].title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-2 mb-3 pb-3">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Company logo/icon placeholder */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-md bg-[var(--color-accent-900)]/30 border border-[var(--color-accent-700)]/30 flex items-center justify-center">
                    <Building className="h-8 w-8 text-[var(--color-accent-500)]" />
                  </div>

                  {/* Company and job details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[var(--color-neutral-100)]">
                      {experiences[selectedExperience].company}
                    </h3>
                    <p className="text-sm text-[var(--color-neutral-400)]">
                      {experiences[selectedExperience].type}
                    </p>

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-4 text-sm">
                      <div className="flex items-center gap-1.5 text-[var(--color-neutral-300)]">
                        <Calendar className="h-4 w-4 text-[var(--color-accent-500)]" />
                        <span>
                          {experiences[selectedExperience].formattedPeriod ||
                            `${formatDate(experiences[selectedExperience].startDate)} — ${
                              experiences[selectedExperience].endDate === "Present"
                                ? "Present"
                                : formatDate(experiences[selectedExperience].endDate)
                            }`
                          }
                        </span>
                      </div>

                      {experiences[selectedExperience].location && (
                        <div className="flex items-center gap-1.5 text-[var(--color-neutral-300)]">
                          <MapPin className="h-4 w-4 text-[var(--color-accent-500)]" />
                          <span>{experiences[selectedExperience].location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-[var(--color-accent-500)] flex items-center">
                  <span>Key Skills</span>
                  <div className="h-px flex-1 bg-[var(--color-dark-700)] ml-3"></div>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedExperience].highlights.map((highlight, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-[var(--color-dark-800)] text-[var(--color-accent-400)] border-[var(--color-accent-700)] border-opacity-30 hover:bg-[var(--color-accent-900)] hover:bg-opacity-50 py-1 px-3"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-[var(--color-accent-500)] flex items-center">
                  <span>Responsibilities & Achievements</span>
                  <div className="h-px flex-1 bg-[var(--color-dark-700)] ml-3"></div>
                </h4>

                {/* Formatted responsibilities */}
                <div className="space-y-6">
                  {experiences[selectedExperience].responsibilities.map((resp, respIndex) => {
                    const formatted = formatResponsibility(resp)
                    return (
                      <div
                        key={respIndex}
                        className="border-l-2 border-[var(--color-accent-700)] border-opacity-30 hover:border-[var(--color-accent-500)] pl-4 py-2 transition-all rounded-r bg-[var(--color-dark-800)] bg-opacity-30 hover:bg-[var(--color-dark-800)] hover:bg-opacity-50"
                      >
                        <h5 className="text-md font-medium text-[var(--color-neutral-100)] flex items-center">
                          <span className="text-[var(--color-accent-500)]">{formatted.title}</span>
                        </h5>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-neutral-300)]">
                          {formatted.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <DialogFooter className="mt-8 pt-4 border-t border-[var(--color-dark-700)]">
                <Button variant="accent" onClick={closeExperienceModal}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}

// Initial experiences data
const initialExperiences = [
  {
    title: "Senior ServiceNow Developer",
    company: "General Dynamics Information Technology",
    type: "Full-time",
    startDate: "2020-11-01",
    endDate: "Present",
    formattedPeriod: "", // Will be calculated
    location: "",
    highlights: [
      "ServiceNow Platform",
      "ITSM Solutions",
      "Workflow Automation",
      "Process Orchestration",
      "System Integrations",
      "Solution Development",
      "Technical Architecture",
      "Stakeholder Collaboration",
      "Team Leadership",
      "Google DialogFlow",
      "API Integration"
    ],
    responsibilities: [
      {
        title: "Platform Management",
        text: "Manage the ServiceNow platform with skill, focusing on service automation, system integrations, and bespoke product development, and demonstrated expertise in workflow automation and process orchestration, instrumental in complex problem-solving scenarios."
      },
      {
        title: "Solution Development",
        text: "Excel in the configuration and development of ServiceNow applications and modules, adapting solutions in alignment with evolving customer requirements and showcasing a nimble, solution-focused mindset dedicated to delivering tangible results."
      },
      {
        title: "Stakeholder Engagement",
        text: "Spearhead the planning and execution of stakeholder meetings to solicit feedback on tool modules, laying the groundwork for iterative development and feedback-centric enhancements, and cementing my reputation as a leader in collaborative, user-focused engineering."
      },
      {
        title: "Technical Analysis",
        text: "Conduct in-depth technical investigations into systems architecture and design, acting as a critical bridge between technical teams and stakeholders and underscoring my comprehensive grasp of complex system infrastructures."
      },
      {
        title: "Team Leadership",
        text: "Mentor junior administrators and developers, playing an active role in code reviews and new development discussions, and fostered an environment of continuous learning and collective advancement."
      },
      {
        title: "Integration Development",
        text: "Developed and implemented an API interface that integrates ServiceNow with Google DialogFlow, enriching customer interactions through advanced natural language processing and marking a significant stride towards the adoption of cutting-edge integrative technologies."
      }
    ]
  },
  {
    title: "ServiceNow Security Developer",
    company: "Toyota North America",
    type: "Full-time",
    startDate: "2019-03-01",
    endDate: "2020-11-01",
    formattedPeriod: "", // Will be calculated
    location: "Plano, Texas, United States",
    highlights: [
      "SecOps Solutions",
      "Security Incident Response",
      "Vulnerability Management",
      "Service Portal Widgets",
      "CMDB Management",
      "API Integration",
      "Agile Methodologies",
      "Product Ownership",
      "Qualys Integration",
      "Splunk Integration",
      "System Administration"
    ],
    responsibilities: [
      {
        title: "Security Operations",
        text: "Served as a ServiceNow Developer for Cybersecurity & Risk Management Division at Toyota Motors North America, focusing on implementing and maintaining Security Incident Response and Vulnerability Management modules."
      },
      {
        title: "UI Development",
        text: "Excelled in developing and maintaining Service Portal Widgets, integrating key platforms such as Qualys and Splunk with ServiceNow."
      },
      {
        title: "Product Ownership",
        text: "Undertook product owner responsibilities across Agile life cycle, including backlog maintenance and active participation in Agile rituals."
      },
      {
        title: "System Administration",
        text: "Administered and managed ServiceNow CMDB information and ticket queues for CSRM, ensuring streamlined operations."
      },
      {
        title: "API Development",
        text: "Established API Interfaces to enhance business processes, notably improving security incident analysis and response time."
      },
      {
        title: "System Upgrades",
        text: "Engaged in upgrading Security modules to newer versions as required, ensuring system up-to-dateness and effectiveness."
      }
    ]
  },
  {
    title: "Support Analyst / ServiceNow System Administrator",
    company: "Uber Freight",
    type: "Full-time",
    startDate: "2015-06-01",
    endDate: "2019-03-01",
    formattedPeriod: "", // Will be calculated
    location: "Frisco, Texas, United States",
    highlights: [
      "ITSM Implementation",
      "ServiceNow Administrator",
      "Platform Configuration",
      "Platform Customization",
      "Incident Management",
      "Process Automation",
      "User Management",
      "System Administration",
      "JIRA Integration",
      "OpsGenie Integration",
      "Ticket Triage Automation"
    ],
    responsibilities: [
      {
        title: "ITSM Implementation",
        text: "Spearheaded the successful company-wide development and implementation of the ITSM Module."
      },
      {
        title: "Platform Support",
        text: "Expertly provided general support, administration, and maintenance of the ServiceNow platform ensuring seamless operations."
      },
      {
        title: "User Management",
        text: "Administered user accounts proficiently, encompassing group maintenance and user roles management."
      },
      {
        title: "Feature Development",
        text: "Showcased adeptness in developing and maintaining features through platform configuration and customization."
      },
      {
        title: "Process Automation",
        text: "Automated user setup and ticket triage processes, achieving substantial time savings and heightened productivity, translating to millions in savings."
      },
      {
        title: "System Integration",
        text: "Established and sustained successful integrations with JIRA & OpsGenie, enhancing cross-platform functionality."
      }
    ]
  }
]

