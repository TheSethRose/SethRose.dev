import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-12 md:py-16 border-t border-border">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground mt-2">Academic background and certifications</p>

        <div className="mt-8 space-y-8">
          {/* Education 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col items-center">
              <div className="p-4 rounded-full border-2 border-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">High School Diploma</h3>
              <p className="text-muted-foreground">Leonard High School</p>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>2000 — 2004</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Development */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-secondary mr-4 mt-0.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">ServiceNow System Administrator Training</p>
                <p className="text-sm text-muted-foreground">ServiceNow • 2018</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-secondary mr-4 mt-0.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Advanced ServiceNow Development</p>
                <p className="text-sm text-muted-foreground">ServiceNow • 2019</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 rounded-full bg-secondary mr-4 mt-0.5">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">AI & Machine Learning Fundamentals</p>
                <p className="text-sm text-muted-foreground">Self-directed learning • 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

