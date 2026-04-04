import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import Skills from './components/Skills'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundAnimation />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <div className="mx-auto w-full max-w-[min(80vw,72rem)] px-4 py-6 sm:px-6 lg:px-8">
            <Hero />

            <div className="mt-3 grid gap-4 lg:grid-cols-12 lg:items-start">
              <div className="space-y-4 lg:col-span-4">
                <Education />
                <Skills />
              </div>

              <div className="lg:col-span-8 mt-5">
                <Experience />
              </div>
            </div>

            <Contact />
          </div>
        </main>

        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
