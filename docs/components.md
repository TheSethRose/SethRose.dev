# Components

This document provides an overview of the UI components used in the application.

## Table of Contents

- [Layout Components](#layout-components)
  - [Header](#header)
  - [Footer](#footer)
  - [Hero Section](#hero-section)
- [Navigation Components](#navigation-components)
  - [Navigation Menu](#navigation-menu)
  - [Theme Toggle](#theme-toggle)
- [Form Components](#form-components)
  - [Button](#button)
  - [Input](#input)
  - [Textarea](#textarea)
- [Data Display Components](#data-display-components)
  - [Card](#card)
  - [Table](#table)
  - [WorkExperience](#workexperience)
  - [Projects](#projects)
- [Utility Components](#utility-components)
  - [Theme Provider](#theme-provider)

## Layout Components

### Header

The Header component is the main navigation component for the application. It provides navigation links, theme switching functionality, and a mobile menu for responsive design.

#### Usage

```tsx
import { Header } from "@/components/header"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page content */}
      </main>
    </div>
  )
}
```

#### Features

- **Navigation Links**: Provides links to main sections of the application
- **Theme Toggle**: Allows users to switch between light and dark themes
- **Mobile Menu**: Responsive menu for mobile devices
- **Sticky Positioning**: Header stays fixed at the top of the viewport during scrolling

#### Implementation Details

The Header component is implemented as a client component to enable interactive functionality like the mobile menu toggle. It uses React's `useState` hook to manage the mobile menu state.

### Footer

The Footer component appears at the bottom of every page and contains copyright information, links, and other footer content.

#### Usage

```tsx
import { Footer } from "@/components/footer"

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{/* Page content */}</main>
      <Footer />
    </div>
  )
}
```

#### Features

- **Copyright Information**: Displays the current year and copyright notice
- **Links**: Provides links to important pages and resources
- **Responsive Design**: Adapts to different screen sizes

### Hero Section

The Hero Section component is the main introductory section of the application. It displays the user's profile information, a brief bio, and social media links.

#### Usage

```tsx
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Other sections */}
    </main>
  )
}
```

#### Features

- **Profile Information**: Displays the user's name and professional title
- **Bio**: Shows a brief professional summary
- **Social Media Links**: Provides links to GitHub, LinkedIn, Twitter, and email
- **Profile Image**: Displays a circular profile image
- **Responsive Layout**: Adapts to different screen sizes

## Navigation Components

### Navigation Menu

The Navigation Menu component provides a way for users to navigate through the application.

#### Usage

```tsx
import { NavigationMenu } from "@/components/ui/navigation-menu"

export function Example() {
  return (
    <NavigationMenu>
      {/* Navigation items */}
    </NavigationMenu>
  )
}
```

### Theme Toggle

The Theme Toggle component provides a user interface for switching between light, dark, and system color themes in the application.

#### Usage

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export function Layout() {
  return (
    <div>
      <ThemeToggle />
      {/* Other content */}
    </div>
  )
}
```

#### Features

- **Theme Switching**: Allows users to switch between light, dark, and system themes
- **Visual Indicators**: Shows sun/moon icons to represent the current theme
- **Dropdown Menu**: Provides a dropdown menu with theme options
- **Animated Transitions**: Smooth animations when switching between themes

## Form Components

### Button

The Button component is a versatile UI element for triggering actions or navigation.

#### Usage

```tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-4">
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  )
}
```

#### Variants

The Button component supports the following variants:

- **default**: Primary action button with background color
- **destructive**: For destructive actions like delete or remove
- **outline**: Button with a border and transparent background
- **secondary**: Less prominent button for secondary actions
- **ghost**: Button with no background or border until hovered
- **link**: Button that looks like a text link

#### Sizes

The Button component supports the following sizes:

- **default**: Standard size (h-9, px-4, py-2)
- **sm**: Small size (h-8, px-3)
- **lg**: Large size (h-10, px-6)
- **icon**: Square button for icons (size-9)

### Input

The Input component is used for collecting user input in a form.

#### Usage

```tsx
import { Input } from "@/components/ui/input"

export function Example() {
  return (
    <Input
      type="email"
      placeholder="Email"
      required
    />
  )
}
```

### Textarea

The Textarea component is used for collecting multi-line user input in a form.

#### Usage

```tsx
import { Textarea } from "@/components/ui/textarea"

export function Example() {
  return (
    <Textarea
      placeholder="Type your message here."
      required
    />
  )
}
```

## Data Display Components

### Card

The Card component is used to display content in a contained card format.

#### Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
```

### Table

The Table component is used to display tabular data.

#### Usage

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Example() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

### WorkExperience

The WorkExperience component displays professional experience in a timeline format with expandable details.

#### Usage

```tsx
import { WorkExperience } from "@/components/work-experience"

export default function Experience() {
  return (
    <main>
      <WorkExperience />
    </main>
  )
}
```

#### Features

- **Timeline Layout**: Displays work experience in a vertical timeline format
- **Expandable Details**: Toggle button to show/hide detailed responsibilities
- **Highlight Badges**: Key skills and technologies displayed as badges
- **Responsive Design**: Adapts to different screen sizes with appropriate layout changes
- **Visual Indicators**: Uses icons and separators to enhance the timeline visualization

#### Implementation Details

The WorkExperience component is implemented as a client component using React's `useState` hook to manage the expanded state of each experience entry. It uses Lucide React icons and several ShadCN UI components including Typography, Separator, Badge, and Button.

### Projects

The Projects component displays GitHub repositories in a responsive mosaic grid layout with different card sizes.

#### Usage

```tsx
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  )
}
```

#### Features

- **GitHub Integration**: Fetches and displays real GitHub repositories
- **Mosaic Grid Layout**: Organizes projects in a visually appealing grid with different card sizes
- **Loading State**: Shows a loading spinner while fetching data
- **Error Handling**: Falls back to example projects if GitHub API fails
- **Responsive Design**: Adapts to different screen sizes with appropriate layout changes
- **Dynamic Card Sizing**: Determines card size based on repository metrics (stars, forks, description length)
- **Automatic Icon Selection**: Chooses appropriate icons based on repository language and topics

#### Implementation Details

The Projects component is implemented as a client component using React's `useState` and `useEffect` hooks to fetch and manage GitHub repository data. It uses the Next.js App Router API route for data fetching with caching and revalidation. The component includes loading and error states for better user experience.

#### GitHub Integration Setup

To enable the GitHub integration:

1. Create a GitHub personal access token at https://github.com/settings/tokens
2. Copy the `.env.local.example` file to `.env.local` and add your token
3. Restart the development server

The integration uses the native fetch API to retrieve repository data and caches it for one hour to minimize API requests.

## Utility Components

### Theme Provider

The Theme Provider component is a wrapper that enables theme functionality throughout the application.

#### Usage

```tsx
// In app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Props

The ThemeProvider component accepts all props from the `next-themes` ThemeProviderProps interface:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| attribute | string | 'data-theme' | HTML attribute to apply the theme with |
| defaultTheme | string | 'system' | Default theme name |
| enableSystem | boolean | false | Whether to switch between dark and light based on system preference |
| storageKey | string | 'theme' | Key used to store theme preference in localStorage |
