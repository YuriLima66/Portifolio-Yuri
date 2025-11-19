import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BsFileEarmarkPdf } from 'react-icons/bs'

interface SocialLinksProps {
  fixed?: boolean
}

const SocialLinks = ({ fixed = false }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5511949501078',
      icon: FaWhatsapp,
      color: '#25D366'
    },
    {
      name: 'Email',
      url: 'mailto:yrflima@gmail.com',
      icon: HiMail,
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yuri-lima-2377a5283/',
      icon: FaLinkedin,
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/YuriLima66',
      icon: FaGithub,
      color: '#FFFFFF'
    },
    {
      name: 'Currículo',
      url: '/cv/YURI FERNANDO LIMA.pdf',
      icon: BsFileEarmarkPdf,
      color: '#4285F4'
    }
  ]

  if (!fixed) {
    return null
  }

  return (
    <motion.aside
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white dark:bg-black backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 group"
            style={{ 
              color: link.color,
            }}
            whileHover={{ 
              scale: 1.15, 
              x: -8,
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = link.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = ''
            }}
          >
            <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        )
      })}
    </motion.aside>
  )
}

export default SocialLinks
