import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('sobre')
  const [isDark, setIsDark] = useState(() => {
    // Verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // Verifica preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Aplica o tema ao carregar
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Salva no localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre', 'projetos']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header activeSection={activeSection} />
      <main className="flex-1 pt-20 md:pt-24 w-full flex flex-col">
        <About />
        <Projects />
      </main>
      <SocialLinks fixed />
      <Footer />
    </div>
  )
}

export default App

