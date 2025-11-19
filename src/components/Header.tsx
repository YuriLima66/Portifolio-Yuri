import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  activeSection: string
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-white/98 dark:bg-black/98 backdrop-blur-lg shadow-md border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-white dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Menu Items - Left Side */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 ml-6 md:ml-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="list-none"
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`relative text-sm md:text-base font-medium transition-all duration-300 px-4 py-2 rounded-md ${
                    activeSection === item.id
                      ? 'text-orange-600 dark:text-orange-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 dark:bg-orange-500 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!activeSection.includes(item.id) && (
                    <motion.span
                      className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-orange-600 dark:bg-orange-500 rounded-full -translate-x-1/2"
                      whileHover={{ width: '80%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Logo - Center */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold text-black dark:text-white cursor-pointer select-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('sobre')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yuri Lima
          </motion.div>

          {/* Right Side - Mobile Menu Button */}
          <div className="flex items-center ml-auto">
            <button
              className="md:hidden flex flex-col gap-1.5 p-4 z-50 transition-all duration-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <motion.span
                className="w-6 h-0.5 bg-black dark:bg-white rounded transition-all duration-300"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black dark:bg-white rounded transition-all duration-300"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black dark:bg-white rounded transition-all duration-300"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.ul
                  className="absolute top-0 left-0 h-full w-3/4 max-w-sm bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col items-start justify-start gap-2 px-6 pt-24 shadow-2xl"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="list-none w-full"
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.id)
                        }}
                        className={`relative block text-lg font-medium transition-all duration-300 px-6 py-4 rounded-lg w-full ${
                          activeSection === item.id
                            ? 'text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <motion.span
                            className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 dark:bg-orange-500 rounded-r-full"
                            layoutId="activeSectionMobile"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Header
