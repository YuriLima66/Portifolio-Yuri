import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'React.js', 'Node.js', 'TypeScript', 'Python', 'PHP', 
    'JavaScript', 'MySQL', 'Express.js', 'SCRUM', 'Kanban'
  ]

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div
            className="relative flex justify-center w-full order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-orange-600 dark:bg-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800 group-hover:border-orange-600 dark:group-hover:border-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/imagens/imagem portifólio.jpeg" 
                  alt="Yuri Lima" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 w-full text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Yuri Lima
              </motion.h1>
              <motion.div
                className="h-1 w-24 bg-orange-600 dark:bg-orange-500 rounded-full mb-6 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Desenvolvedor Full Stack
              </motion.p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
              >
                Sou desenvolvedor Full Stack com experiência na criação de soluções personalizadas e eficientes. 
                Tenho sólida formação em linguagens como Python, PHP e JavaScript, além de trabalhar com frameworks 
                como React.js, Node.js e Express.js.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
              >
                Ao longo da minha carreira, desenvolvi diversos projetos web, incluindo sistemas de gerenciamento 
                de processos e e-commerce, sempre focando em entregar soluções que atendam às necessidades dos 
                clientes e melhorem a eficiência dos seus processos.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
              >
                Tenho experiência em integrar APIs RESTful, trabalhar com bancos de dados MySQL e utilizar 
                metodologias ágeis como SCRUM e Kanban para garantir entregas rápidas e de qualidade.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 text-center lg:text-left">
                Principais Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-800 hover:border-orange-600 dark:hover:border-orange-500"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
