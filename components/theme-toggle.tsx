"use client"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all duration-300 border-0
                dark:bg-[var(--color-dark-800)] dark:hover:bg-[var(--color-dark-700)] dark:text-[var(--color-neutral-200)] dark:hover:text-white 
                bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:border-[var(--color-dark-800)] dark:bg-[var(--color-dark-900)] border-[var(--light-card-border)] bg-[var(--light-card-bg)]">
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="dark:hover:bg-[var(--color-dark-800)] hover:bg-[var(--light-badge-bg)] cursor-pointer"
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="dark:hover:bg-[var(--color-dark-800)] hover:bg-[var(--light-badge-bg)] cursor-pointer"
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="dark:hover:bg-[var(--color-dark-800)] hover:bg-[var(--light-badge-bg)] cursor-pointer"
              >
                <Laptop className="h-4 w-4 mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

