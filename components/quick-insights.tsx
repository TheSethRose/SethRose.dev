import { ArrowRight } from "lucide-react"

export function QuickInsights() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="section-title">Key Areas of Focus</h2>
        <p className="section-subtitle">Transforming process chaos into elegant automations</p>

        <div className="mt-10 grid gap-6 content-spacing">
          <div className="insight">
            <ArrowRight className="h-6 w-6 shrink-0 mt-0.5 text-[var(--color-accent-600)]" />
            <p className="text-[var(--color-neutral-300)]">
              <span>Senior ServiceNow Engineer at General Dynamics IT (GDIT)</span> – Government contractor specializing
              in ServiceNow development and service automation.
            </p>
          </div>

          <div className="insight">
            <ArrowRight className="h-6 w-6 shrink-0 mt-0.5 text-[var(--color-accent-600)]" />
            <p className="text-[var(--color-neutral-300)]">
              <span>AI Solutions Consultant</span> – Developing AI-driven solutions to enhance decision-making and
              unlock operational efficiencies.
            </p>
          </div>

          <div className="insight">
            <ArrowRight className="h-6 w-6 shrink-0 mt-0.5 text-[var(--color-accent-600)]" />
            <p className="text-[var(--color-neutral-300)]">
              <span>Natural Language Processing & LLMs</span> – Implementing NLP and large language models to deliver
              user-first innovations.
            </p>
          </div>

          <div className="insight">
            <ArrowRight className="h-6 w-6 shrink-0 mt-0.5 text-[var(--color-accent-600)]" />
            <p className="text-[var(--color-neutral-300)]">
              <span>Full-Stack Development</span> – Building scalable, API-driven systems with Python, JavaScript,
              TypeScript, React, Next.js, and Docker.
            </p>
          </div>

          <div className="insight">
            <ArrowRight className="h-6 w-6 shrink-0 mt-0.5 text-[var(--color-accent-600)]" />
            <p className="text-[var(--color-neutral-300)]">
              <span>Technical Leadership</span> – Guiding technical discussions and mentoring junior developers,
              nurturing a culture of growth and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

