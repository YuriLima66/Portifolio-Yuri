import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    // Aplica o tema ao carregar
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Salva no localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [])

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

