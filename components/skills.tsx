import { Code, Terminal, Cpu, Award } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and expertise I bring to the table</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Technical Skills */}
          <div className="skill-card">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-[var(--color-accent-600)]" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <ul className="space-y-2 text-[var(--color-neutral-400)]">
              <li>• ServiceNow Development – Advanced scripting, workflow automation, and integrations</li>
              <li>• AI & Machine Learning – Model integration, natural language processing, and automation</li>
              <li>• API Development – RESTful services, backend optimizations, and system integrations</li>
              <li>• Software Architecture – Scalable, high-performance application design</li>
              <li>• Automation & Scripting – Python, JavaScript, TypeScript, and workflow automation</li>
              <li>• ITSM – IT Service Management implementation and optimization</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="skill-card">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-[var(--color-accent-600)]" />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Python</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>JavaScript</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>TypeScript</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>SQL</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>PowerShell</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-card">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-6 w-6 text-[var(--color-accent-600)]" />
              <h3 className="text-xl font-semibold">Tools & Platforms</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>ServiceNow</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>LangChain</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>FastAPI</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Docker</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Git</span>
                  <div className="w-32 h-2 bg-[var(--color-dark-800)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-600)]" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start p-4 border border-[var(--color-dark-800)] rounded-lg bg-[var(--color-dark-900)]">
              <div className="p-2 rounded-full bg-[var(--color-dark-800)] mr-4 mt-0.5">
                <Award className="h-5 w-5 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <p className="font-medium">Configure the CMDB (Micro-Certification)</p>
                <p className="text-sm text-[var(--color-neutral-400)]">ServiceNow</p>
              </div>
            </div>
            <div className="flex items-start p-4 border border-[var(--color-dark-800)] rounded-lg bg-[var(--color-dark-900)]">
              <div className="p-2 rounded-full bg-[var(--color-dark-800)] mr-4 mt-0.5">
                <Award className="h-5 w-5 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <p className="font-medium">Star Developer Super Badge</p>
                <p className="text-sm text-[var(--color-neutral-400)]">Now Creator</p>
              </div>
            </div>
            <div className="flex items-start p-4 border border-[var(--color-dark-800)] rounded-lg bg-[var(--color-dark-900)]">
              <div className="p-2 rounded-full bg-[var(--color-dark-800)] mr-4 mt-0.5">
                <Award className="h-5 w-5 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <p className="font-medium">Star Administrator Super Badge</p>
                <p className="text-sm text-[var(--color-neutral-400)]">Now Creator</p>
              </div>
            </div>
            <div className="flex items-start p-4 border border-[var(--color-dark-800)] rounded-lg bg-[var(--color-dark-900)]">
              <div className="p-2 rounded-full bg-[var(--color-dark-800)] mr-4 mt-0.5">
                <Award className="h-5 w-5 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <p className="font-medium">Star Business Process Analyst Super Badge</p>
                <p className="text-sm text-[var(--color-neutral-400)]">Now Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

