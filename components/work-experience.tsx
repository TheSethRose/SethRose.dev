import { Briefcase } from "lucide-react"

export function WorkExperience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Professional journey and contributions</p>

        <div className="mt-8 space-y-12">
          {/* Experience 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col items-center">
              <div className="p-4 rounded-full border-2 border-[var(--color-accent-600)]">
                <Briefcase className="h-6 w-6 text-[var(--color-accent-600)]" />
              </div>
              <div className="hidden md:block h-full w-0.5 mx-auto mt-4 bg-[var(--color-dark-700)]"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">Senior ServiceNow Developer</h3>
              </div>

              <div className="mt-2">
                <p className="text-sm font-bold text-[var(--color-neutral-400)]">
                  General Dynamics Information Technology (GDIT) • Full-time
                </p>
                <p className="text-sm text-[var(--color-neutral-400)]">November 2020 — Present</p>
              </div>

              <div className="mt-4 space-y-2 text-[var(--color-neutral-300)]">
                <p>
                  • Manage the ServiceNow platform with skill, focusing on service automation, system integrations, and
                  bespoke product development.
                </p>
                <p>
                  • Excel in the configuration and development of ServiceNow applications and modules, adapting
                  solutions in alignment with evolving customer requirements.
                </p>
                <p>
                  • Spearhead the planning and execution of stakeholder meetings to solicit feedback on tool modules,
                  laying the groundwork for iterative development.
                </p>
                <p>
                  • Conduct in-depth technical investigations into systems architecture and design, acting as a critical
                  bridge between technical teams and stakeholders.
                </p>
                <p>
                  • Mentor junior administrators and developers, playing an active role in code reviews and new
                  development discussions.
                </p>
                <p>
                  • Developed and implemented an API interface that integrates ServiceNow with Google DialogFlow,
                  enriching customer interactions through advanced natural language processing.
                </p>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col items-center">
              <div className="p-4 rounded-full border-2 border-[var(--color-accent-600)]">
                <Briefcase className="h-6 w-6 text-[var(--color-accent-600)]" />
              </div>
              <div className="hidden md:block h-full w-0.5 mx-auto mt-4 bg-[var(--color-dark-700)]"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">ServiceNow Security Developer</h3>
              </div>

              <div className="mt-2">
                <p className="text-sm font-bold text-[var(--color-neutral-400)]">Toyota North America • Full-time</p>
                <p className="text-sm text-[var(--color-neutral-400)]">March 2019 — November 2020</p>
                <p className="text-sm text-[var(--color-neutral-400)]">Plano, Texas, United States</p>
              </div>

              <div className="mt-4 space-y-2 text-[var(--color-neutral-300)]">
                <p>
                  • Served as a ServiceNow Developer for Cybersecurity & Risk Management Division at Toyota Motors North
                  America.
                </p>
                <p>
                  • Focused on implementing and maintaining Security Incident Response and Vulnerability Management
                  modules.
                </p>
                <p>
                  • Excelled in developing and maintaining Service Portal Widgets, integrating key platforms such as
                  Qualys and Splunk with ServiceNow.
                </p>
                <p>
                  • Undertook product owner responsibilities across Agile life cycle, including backlog maintenance and
                  active participation in Agile rituals.
                </p>
                <p>
                  • Administered and managed ServiceNow CMDB information and ticket queues for CSRM, ensuring
                  streamlined operations.
                </p>
                <p>
                  • Established API Interfaces to enhance business processes, notably improving security incident
                  analysis and response time.
                </p>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col items-center">
              <div className="p-4 rounded-full border-2 border-[var(--color-accent-600)]">
                <Briefcase className="h-6 w-6 text-[var(--color-accent-600)]" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">Support Analyst / ServiceNow System Administrator</h3>
              </div>

              <div className="mt-2">
                <p className="text-sm font-bold text-[var(--color-neutral-400)]">Uber Freight • Full-time</p>
                <p className="text-sm text-[var(--color-neutral-400)]">June 2015 — March 2019</p>
                <p className="text-sm text-[var(--color-neutral-400)]">Frisco, Texas, United States</p>
              </div>

              <div className="mt-4 space-y-2 text-[var(--color-neutral-300)]">
                <p>• Spearheaded the successful company-wide development and implementation of the ITSM Module.</p>
                <p>
                  • Expertly provided general support, administration, and maintenance of the ServiceNow platform
                  ensuring seamless operations.
                </p>
                <p>
                  • Administered user accounts proficiently, encompassing group maintenance and user roles management.
                </p>
                <p>
                  • Showcased adeptness in developing and maintaining features through platform configuration and
                  customization.
                </p>
                <p>
                  • Automated user setup and ticket triage processes, achieving substantial time savings and heightened
                  productivity, translating to millions in savings.
                </p>
                <p>
                  • Established and sustained successful integrations with JIRA & OpsGenie, enhancing cross-platform
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

