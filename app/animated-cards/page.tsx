import { AnimatedCardsDemo } from "@/components/animated-cards-demo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AnimatedCardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
              Animated Content Cards
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
              Scroll down to see content cards that animate in with a text scramble effect as you scroll.
            </p>
          </div>
        </section>

        {/* First set of cards */}
        <AnimatedCardsDemo />

        {/* Spacer */}
        <div className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Keep Scrolling</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More animated cards will appear as you continue to scroll down.
            </p>
          </div>
        </div>

        {/* Second set of cards */}
        <AnimatedCardsDemo />
      </main>
      <Footer />
    </div>
  )
}
