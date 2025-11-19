import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-8 md:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Yuri Lima. Todos os direitos reservados.
          </p>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-2">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
