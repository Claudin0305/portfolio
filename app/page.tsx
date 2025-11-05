// app/page.tsx
import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experiences'
import Hero from '@/components/hero'
import Projects from '@/components/project'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="space-y-20 py-12">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
