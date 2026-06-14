// src/App.jsx

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import BottomNav from "./components/BottomNav"
import Timeline from "./components/Timeline"
import Services from "./sections/Services"

function App() {
  return (
    <main>

      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <BottomNav />
    </main>
  )
}

export default App