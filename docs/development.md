# Development Guide

This document provides information about the development workflow, standards, and best practices for the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Theme System](#theme-system)
- [GitHub Integration](#github-integration)
- [Testing](#testing)
- [Deployment](#deployment)

## Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm**: v9.6.0 or higher
- **Git**: v2.30.0 or higher

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with any necessary environment variables.

4. **Start the development server**

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components from ShadCN
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   ├── hero-section.tsx  # Hero section component
│   └── ...               # Other components
├── lib/                  # Utility functions and hooks
├── public/               # Static assets
├── docs/                 # Documentation
├── .cursor/              # Cursor IDE configuration
│   └── rules/            # Cursor rules for the project
├── .env.local            # Local environment variables
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Development Workflow

1. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**

3. **Run tests (when implemented)**

```bash
npm run test
```

4. **Update documentation**

Ensure that you update the relevant documentation to reflect your changes.

5. **Commit your changes**

```bash
git add .
git commit -m "feat: add your feature"
```

6. **Push your changes**

```bash
git push origin feature/your-feature-name
```

7. **Create a pull request**

## Coding Standards

- Use functional components with React hooks
- Use TypeScript for type safety throughout the project
- Implement ShadCN UI components with Tailwind 4 styling
- Prefer async/await for asynchronous operations
- Implement comprehensive error handling
- Use descriptive variable names with auxiliary verbs where appropriate
- Omit semicolons in JavaScript/TypeScript files
- Use server components in NextJS where appropriate for better performance
- Wrap client components in Suspense with fallbacks for loading states
- Optimize images using WebP format and implement lazy loading
- Minimize global styles; prefer modular, scoped styles with Tailwind
- Follow clean code principles for readability and maintainability

## Theme System

The project uses the `next-themes` library to implement a theme system with support for light, dark, and system themes.

### ThemeProvider

The `ThemeProvider` component is used at the root of the application to enable theme functionality:

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

### Theme Toggle

The `ThemeToggle` component allows users to switch between themes:

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header>
      {/* Other header content */}
      <ThemeToggle />
    </header>
  )
}
```

## GitHub Integration

The project includes a GitHub integration to display repositories in the Projects component. For detailed information, see [GitHub Integration](./github-integration.md).

### Setup

1. Create a GitHub personal access token
2. Add the token to your `.env.local` file:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```

### Key Components

- **Types**: `
