"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [activeItem, setActiveItem] = useState<string>("#")

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#work-experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setActiveItem(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/95 shadow-md border-border">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Desktop Navigation using NavigationMenu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-secondary/80 px-3",
                        activeItem === item.href && "text-accent after:bg-accent after:h-[2px] after:w-full after:bottom-0 after:left-0 after:absolute after:content-['']"
                      )}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation using Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-border">
                <SheetHeader>
                  <SheetTitle className="text-left text-foreground">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "py-2.5 px-3 rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                        activeItem === item.href && "text-accent bg-secondary/70"
                      )}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

