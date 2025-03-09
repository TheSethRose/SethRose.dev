"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { ContentCard } from "@/components/ui/content-card"
import { ScrambleReveal } from "@/components/ui/scramble-reveal"

interface AnimatedCardProps {
  title: string
  icon: LucideIcon
  description?: string
  issuer?: string
  tags?: Array<string | { name: string; className?: string }>
  url?: string
  urlIcon?: LucideIcon
  urlText?: string
  className?: string
  size?: "xs" | "small" | "medium" | "large"
  index?: number
  threshold?: number
}

export function AnimatedContentCard({
  title,
  icon,
  description,
  issuer,
  tags,
  url,
  urlIcon,
  urlText,
  className,
  size = "medium",
  index = 0,
  threshold = 0.1,
}: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once: true
  })

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={index}
    >
      <ContentCard
        title={<ScrambleReveal
          text={title}
          scrambleSpeed={20}
          maxIterations={5}
          sequential={true}
          revealDirection="start"
          className="text-card-foreground"
          scrambledClassName="text-accent/70"
        />}
        icon={icon}
        description={description ?
          <ScrambleReveal
            text={description}
            scrambleSpeed={10}
            maxIterations={3}
            sequential={true}
            revealDirection="start"
            className="text-foreground/90"
            scrambledClassName="text-muted-foreground"
          /> : undefined
        }
        issuer={issuer}
        tags={tags}
        url={url}
        urlIcon={urlIcon}
        urlText={urlText}
        className={className}
        size={size}
      />
    </motion.div>
  )
}
