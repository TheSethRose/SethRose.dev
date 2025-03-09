import { LucideIcon, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ReactMarkdown from "react-markdown"
import { ReactNode } from "react"

interface TagProps {
  name: string
  className?: string
}

interface CardProps {
  title: string | ReactNode
  icon: LucideIcon
  description?: string | ReactNode
  issuer?: string
  tags?: Array<string | TagProps>
  url?: string
  urlIcon?: LucideIcon
  urlText?: string
  className?: string
  size?: "xs" | "small" | "medium" | "large"
}

export function ContentCard({
  title,
  icon: Icon,
  description,
  issuer,
  tags = [],
  url,
  urlIcon: UrlIconProp,
  urlText = "View resource",
  className,
  size = "medium"
}: CardProps) {
  // Default URL icon if URL is provided but no icon is specified
  const UrlIcon = url && !UrlIconProp ? ExternalLink : UrlIconProp || ExternalLink;

  // Determine padding based on size
  const cardPadding = {
    xs: "p-2.5",
    small: "p-4",
    medium: "p-5",
    large: "p-6"
  }[size];

  // Icon sizes
  const iconSize = {
    xs: "h-6 w-6",
    small: "h-8 w-8",
    medium: "h-9 w-9",
    large: "h-10 w-10"
  }[size];

  const iconInnerSize = {
    xs: "h-3 w-3",
    small: "h-4 w-4",
    medium: "h-4.5 w-4.5",
    large: "h-5 w-5"
  }[size];

  // Text sizes
  const titleSize = {
    xs: "text-sm",
    small: "text-base",
    medium: "text-lg",
    large: "text-xl"
  }[size];

  const descriptionSize = {
    xs: "text-xs",
    small: "text-xs",
    medium: "text-sm",
    large: "text-sm"
  }[size];

  // Line clamp settings based on size
  const lineClampClass = {
    xs: "line-clamp-1",
    small: "line-clamp-2",
    medium: "line-clamp-2",
    large: "line-clamp-12"
  }[size];

  // Render title based on type
  const renderTitle = () => {
    if (typeof title === 'string') {
      return (
        <h3 className={cn(
          "font-semibold transition-colors duration-200",
          "text-card-foreground group-hover:text-accent",
          titleSize
        )}>
          {title}
        </h3>
      );
    }
    return (
      <h3 className={cn(
        "font-semibold transition-colors duration-200",
        titleSize
      )}>
        {title}
      </h3>
    );
  };

  // Render description based on type
  const renderDescription = () => {
    if (!description) return null;

    if (typeof description === 'string') {
      return (
        <div className="markdown-content">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2">{children}</p>,
              strong: ({ children }) => <span className="font-semibold text-foreground">{children}</span>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {children}
                </a>
              )
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      );
    }
    return description;
  };

  return (
    <div className={cn(
      "group flex h-full flex-col justify-between rounded-xl transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]",
      "border border-border bg-card dark:bg-gradient-to-br dark:from-[#161b22] dark:to-[#0d1117] hover:border-accent/30 shadow-sm",
      cardPadding,
      className
    )}>
      <div>
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex items-center justify-center rounded-md transition-colors duration-300",
              "bg-secondary/80 text-accent group-hover:bg-accent/10 group-hover:text-accent",
              iconSize
            )}>
              <Icon className={iconInnerSize} />
            </div>
            <div>
              {renderTitle()}
              {size === "xs" && issuer && (
                <p className="text-xs text-muted-foreground line-clamp-1">{issuer}</p>
              )}
            </div>
          </div>

          {/* URL link with icon if provided */}
          {url && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={size === "xs" ? "h-5 w-5 -mr-1" : size === "small" ? "h-7 w-7" : "h-8 w-8"}
                    asChild
                  >
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <UrlIcon className={size === "xs" ? "h-3.5 w-3.5" : "h-5 w-5"} />
                      <span className="sr-only">{urlText}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{urlText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Description - only shown for medium and large cards */}
        {description && size !== "xs" && size !== "small" && (
          <div className={cn(
            "mt-2",
            "text-foreground/90",
            lineClampClass,
            descriptionSize,
            size === "large" ? "whitespace-pre-line" : ""
          )}>
            {renderDescription()}
          </div>
        )}
      </div>

      {/* Tags - not shown for xs size */}
      {tags.length > 0 && size !== "xs" && (
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {tags.map((tag, index) => {
            // Handle both string tags and object tags
            const tagName = typeof tag === 'string' ? tag : tag.name;
            const tagClassName = typeof tag === 'string' ? undefined : tag.className;

            // Calculate responsive styling based on text length and card size
            const isLongText = tagName.length > 8;
            const fontSize = size === "small" ? "text-[10px]" : "text-xs";

            return (
              <Badge
                key={index}
                variant="outline"
                className={cn(
                  "transition-colors duration-200",
                  "bg-secondary/50 dark:bg-[#30363d]/50 hover:bg-accent/10 hover:text-accent border-border text-muted-foreground",
                  size === "small" ? "py-0 px-1.5" : "py-0.5 px-2",
                  fontSize,
                  isLongText && size === "small" ? "leading-tight" : "",
                  tagClassName
                )}
              >
                {tagName}
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
