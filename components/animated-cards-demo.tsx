"use client"

import { Code, FileText, Lightbulb, Rocket, Zap } from "lucide-react"
import { AnimatedContentCard } from "@/components/ui/animated-content-card"

export function AnimatedCardsDemo() {
  const cards = [
    {
      title: "Scroll-Triggered Animations",
      icon: Zap,
      description: "Cards animate in as you scroll down the page, creating a dynamic and engaging user experience.",
      tags: ["Animation", "UX", "Framer Motion"],
      url: "#",
    },
    {
      title: "Text Scramble Effect",
      icon: Code,
      description: "Text appears with a cool scramble effect, as if it's being decoded in real-time.",
      tags: ["Typography", "Animation", "React"],
      url: "#",
    },
    {
      title: "Staggered Reveal",
      icon: Rocket,
      description: "Cards appear in sequence with a slight delay between each one, creating a pleasing visual flow.",
      tags: ["Animation", "Design", "Performance"],
      url: "#",
    },
    {
      title: "Customizable Options",
      icon: Lightbulb,
      description: "Adjust animation speed, scramble behavior, and other parameters to suit your needs.",
      tags: ["Configuration", "Flexibility", "API"],
      url: "#",
    },
    {
      title: "Responsive Design",
      icon: FileText,
      description: "Works beautifully on all screen sizes, from mobile to desktop.",
      tags: ["Responsive", "Mobile", "Desktop"],
      url: "#",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Animated Content Cards</h2>
        <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
          Scroll down to see the cards animate in with a text scramble effect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <AnimatedContentCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              tags={card.tags}
              url={card.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
