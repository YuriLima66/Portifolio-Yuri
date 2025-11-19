import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '../data/projects'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projetos" className="min-h-screen flex items-center justify-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meus Projetos
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore alguns dos projetos que desenvolvi ao longo da minha carreira
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-md"
                onClick={() => openModal(project)}
              >
                <motion.div 
                  className="group cursor-pointer relative bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-800 hover:border-orange-600 dark:hover:border-orange-500 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div
                    className="relative h-48 md:h-56 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        className="px-6 py-3 bg-white dark:bg-black backdrop-blur-xl rounded-full border-2 border-orange-600 dark:border-orange-500 shadow-2xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm md:text-base font-bold text-orange-600 dark:text-orange-500 flex items-center gap-2">
                          Ver Detalhes
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 md:px-8 lg:px-10 pt-6 md:pt-8 pb-6 md:pb-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 md:mb-5 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 md:mb-8 line-clamp-3 flex-1 leading-relaxed px-2 md:px-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-800">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-base group-hover:gap-3 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900">
                        Ver Projeto
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Projects
