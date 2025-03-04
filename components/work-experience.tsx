import { Briefcase } from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"

export function WorkExperience() {
  const experiences = [
    {
      title: "Senior ServiceNow Developer",
      company: "General Dynamics Information Technology (GDIT)",
      type: "Full-time",
      period: "November 2020 — Present",
      location: "",
      responsibilities: [
        "Manage the ServiceNow platform with skill, focusing on service automation, system integrations, and bespoke product development.",
        "Excel in the configuration and development of ServiceNow applications and modules, adapting solutions in alignment with evolving customer requirements.",
        "Spearhead the planning and execution of stakeholder meetings to solicit feedback on tool modules, laying the groundwork for iterative development.",
        "Conduct in-depth technical investigations into systems architecture and design, acting as a critical bridge between technical teams and stakeholders.",
        "Mentor junior administrators and developers, playing an active role in code reviews and new development discussions.",
        "Developed and implemented an API interface that integrates ServiceNow with Google DialogFlow, enriching customer interactions through advanced natural language processing."
      ]
    },
    {
      title: "ServiceNow Security Developer",
      company: "Toyota North America",
      type: "Full-time",
      period: "March 2019 — November 2020",
      location: "Plano, Texas, United States",
      responsibilities: [
        "Served as a ServiceNow Developer for Cybersecurity & Risk Management Division at Toyota Motors North America.",
        "Focused on implementing and maintaining Security Incident Response and Vulnerability Management modules.",
        "Excelled in developing and maintaining Service Portal Widgets, integrating key platforms such as Qualys and Splunk with ServiceNow.",
        "Undertook product owner responsibilities across Agile life cycle, including backlog maintenance and active participation in Agile rituals.",
        "Administered and managed ServiceNow CMDB information and ticket queues for CSRM, ensuring streamlined operations.",
        "Established API Interfaces to enhance business processes, notably improving security incident analysis and response time."
      ]
    },
    {
      title: "Support Analyst / ServiceNow System Administrator",
      company: "Uber Freight",
      type: "Full-time",
      period: "June 2015 — March 2019",
      location: "Frisco, Texas, United States",
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

        <div className="mt-8 space-y-8">
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
                <div className="mt-3 space-y-1.5 text-[var(--color-neutral-300)]">
                  {exp.responsibilities.map((resp, i) => (
                    <p key={i} className="text-sm">• {resp}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

