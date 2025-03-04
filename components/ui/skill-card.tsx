import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SkillWithLevel {
  name: string
  level: number
}

interface ProjectInfo {
  title: string
  description: string
  tags: string[]
  githubUrl: string
}

interface SkillCardProps {
  title: string
  icon: LucideIcon
  variant: "list" | "progress" | "skill" | "project"
  skills?: string[] | SkillWithLevel[]
  projectInfo?: ProjectInfo
  className?: string
  size?: "small" | "medium" | "large"
}

export function SkillCard({
  title,
  icon: Icon,
  variant,
  skills,
  projectInfo,
  className,
  size = "medium"
}: SkillCardProps) {
  // Determine padding and spacing based on size
  const cardPadding = {
    small: "p-3",
    medium: "p-4",
    large: "p-5"
  }[size];

  const iconSize = {
    small: "h-8 w-8",
    medium: "h-9 w-9",
    large: "h-10 w-10"
  }[size];

  const iconInnerSize = {
    small: "h-4 w-4",
    medium: "h-4.5 w-4.5",
    large: "h-5 w-5"
  }[size];

  const titleMargin = {
    small: "mb-3",
    medium: "mb-4",
    large: "mb-5"
  }[size];

  const contentGap = {
    small: "gap-x-1.5 gap-y-2",
    medium: "gap-x-2 gap-y-2.5",
    large: "gap-x-2.5 gap-y-3"
  }[size];

  // Consistent text sizes regardless of card size
  const titleSize = "text-lg";
  const descriptionSize = "text-sm";
  const badgeTextSize = "text-xs";

  // For project variant
  if (variant === "project" && projectInfo) {
    // Project-specific icon sizes
    const iconContainerSize = {
      small: "h-7 w-7",
      medium: "h-8 w-8",
      large: "h-9 w-9"
    }[size];

    const iconProjectSize = {
      small: "h-3.5 w-3.5",
      medium: "h-4 w-4",
      large: "h-5 w-5"
    }[size];

    // Line clamp settings based on size
    const lineClampClass = {
      small: "line-clamp-2",
      medium: "line-clamp-3",
      large: "line-clamp-3"
    }[size];

    return (
      <div className={cn(
        "group flex h-full flex-col rounded-lg border border-[var(--color-dark-800)] bg-transparent transition-all duration-300 hover:border-[var(--color-dark-700)] hover:bg-[var(--color-dark-900)]/50 hover:shadow-md hover:translate-y-[-2px]",
        cardPadding,
        className
      )}>
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex items-center justify-center rounded-md bg-[var(--color-dark-800)] text-[var(--color-accent-600)] transition-colors duration-300 group-hover:bg-[var(--color-dark-700)] group-hover:text-[var(--color-accent-500)]",
              iconContainerSize
            )}>
              <Icon className={iconProjectSize} />
            </div>
            <h3 className="font-semibold text-[var(--color-neutral-100)] group-hover:text-[var(--color-accent-500)] transition-colors duration-200 text-lg">
              {projectInfo.title}
            </h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className={size === "small" ? "h-7 w-7" : "h-8 w-8"} asChild>
                  <Link href={projectInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-[var(--color-accent-600)]" />
                    <span className="sr-only">GitHub repository</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className={cn(
          "mt-2 flex-grow text-[var(--color-neutral-400)]",
          lineClampClass,
          descriptionSize
        )}>
          {projectInfo.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {projectInfo.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-[var(--color-dark-800)]/50 text-xs text-[var(--color-neutral-200)] hover:bg-[var(--color-accent-700)] hover:text-white border-[var(--color-dark-700)]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-lg border border-[var(--color-dark-800)] bg-[var(--color-dark-900)]/30 transition-all duration-300 hover:border-[var(--color-dark-700)] hover:bg-[var(--color-dark-900)]/50 hover:shadow-md hover:translate-y-[-2px]",
      cardPadding,
      className
    )}>
      <div className={cn("flex items-center gap-2.5", titleMargin)}>
        <div className={cn("flex items-center justify-center rounded-md bg-[var(--color-dark-800)] text-[var(--color-accent-600)] transition-colors duration-300 group-hover:bg-[var(--color-dark-700)] group-hover:text-[var(--color-accent-500)]", iconSize)}>
          <Icon className={iconInnerSize} />
        </div>
        <h3 className={cn("font-semibold text-[var(--color-neutral-100)]", titleSize)}>{title}</h3>
      </div>

      <div>
        {variant === "list" && (
          <ul className="space-y-2 text-[var(--color-neutral-400)]">
            {(skills as string[]).map((skill, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-[var(--color-accent-600)] mr-2 transition-transform duration-300 group-hover:translate-x-0.5">•</span>
                <span className={`transition-colors duration-300 group-hover:text-[var(--color-neutral-300)] ${descriptionSize}`}>{skill}</span>
              </li>
            ))}
          </ul>
        )}

        {variant === "progress" && (
          <div className="space-y-4">
            {(skills as SkillWithLevel[]).map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-medium text-[var(--color-neutral-300)] transition-colors duration-300 group-hover:text-[var(--color-neutral-200)] ${descriptionSize}`}>{skill.name}</span>
                  <span className={`text-[var(--color-neutral-400)] transition-colors duration-300 group-hover:text-[var(--color-neutral-300)] ${badgeTextSize}`}>{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2 bg-[var(--color-dark-800)] transition-all duration-300 group-hover:bg-[var(--color-dark-700)]"
                  indicatorClassName="bg-[var(--color-accent-600)] transition-all duration-300 group-hover:bg-[var(--color-accent-500)]"
                />
              </div>
            ))}
          </div>
        )}

        {variant === "skill" && (
          <div className={cn("flex flex-wrap items-start", contentGap)}>
            {(skills as string[]).map((skill, index) => {
              // Calculate natural-looking variations for a more organic flow
              const isLongText = skill.length > 12;
              const isShortText = skill.length < 8;

              // Determine padding based on text length
              const padding = isLongText
                ? "px-2.5 py-1.25"
                : isShortText
                  ? "px-2 py-1"
                  : "px-2.5 py-1";

              return (
                <span
                  key={index}
                  className={`inline-flex items-center justify-center rounded-full bg-[var(--color-dark-800)] ${padding} ${badgeTextSize} font-medium text-[var(--color-neutral-300)] transition-all duration-300 hover:bg-[var(--color-dark-700)] hover:text-white hover:shadow-sm hover:-translate-y-0.5`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}
