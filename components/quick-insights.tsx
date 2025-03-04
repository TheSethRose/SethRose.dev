import { ArrowRight } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function QuickInsights() {
  const insights = [
    {
      title: "Senior ServiceNow Engineer at General Dynamics IT (GDIT)",
      description: "Government contractor specializing in ServiceNow development and service automation."
    },
    {
      title: "AI Solutions Consultant",
      description: "Developing AI-driven solutions to enhance decision-making and unlock operational efficiencies."
    },
    {
      title: "Natural Language Processing & LLMs",
      description: "Implementing NLP and large language models to deliver user-first innovations."
    },
    {
      title: "Full-Stack Development",
      description: "Building scalable, API-driven systems with Python, JavaScript, TypeScript, React, Next.js, and Docker."
    },
    {
      title: "Technical Leadership",
      description: "Guiding technical discussions and mentoring junior developers, nurturing a culture of growth and innovation."
    }
  ]

  return (
    <section className="section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <Typography as="h2" variant="sectionTitle">Key Areas of Focus</Typography>
        <Typography as="p" variant="sectionSubtitle">Transforming process chaos into elegant automations</Typography>

        <div className="mt-8 grid gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 py-2 px-1 hover:bg-[var(--color-dark-900)]/30 rounded-md transition-all duration-200">
              <ArrowRight className="h-5 w-5 shrink-0 mt-1 text-[var(--color-accent-600)]" />
              <div>
                <h3 className="text-base font-semibold text-[var(--color-accent-500)]">
                  {insight.title}
                </h3>
                <p className="text-[var(--color-neutral-300)] mt-1 text-sm">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

