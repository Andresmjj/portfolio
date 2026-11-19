import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Evidence from './components/Evidence'
import Journey from './components/Journey'
import ProjectsCarousel from './components/ProjectsCarousel'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>

      <ScrollProgress />
      <Header />

      <main id="contenido" className="overflow-x-clip">
        <Hero />
        <Evidence />
        <Journey />
        <ProjectsCarousel />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
