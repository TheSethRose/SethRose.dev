import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickInsights } from "@/components/quick-insights"
import { WorkExperience } from "@/components/work-experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        <main className="flex-1">
          <HeroSection />
          <QuickInsights />
          <WorkExperience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

