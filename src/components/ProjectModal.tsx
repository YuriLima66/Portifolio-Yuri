import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '../data/projects'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative bg-white dark:bg-black rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden pointer-events-auto border-2 border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-orange-600 dark:hover:border-orange-500 transition-all duration-300 text-black dark:text-white p-3"
                aria-label="Fechar modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Image Header */}
              <div 
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="space-y-6">
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Tecnologias Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Ver Projeto
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
