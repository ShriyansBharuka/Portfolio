import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiLayers, FiCpu, FiActivity, FiZap } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Lynx Fashions',
    subtitle: 'Business Management System',
    description:
      'Full-stack BMS for a uniform manufacturing company. Features RBAC, enquiry/quotation/order management, PDF generation, and role-based module access. Deployed on Vercel + Render with MongoDB Atlas.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Python', 'Vercel', 'RBAC', 'PDF Gen'],
    github: 'https://github.com/ShriyansBharuka',
    live: 'https://lynxfashions.vercel.app',
    icon: FiLayers,
    accent: '#06d6f7',
    status: 'Live',
  },
  {
    id: 2,
    title: 'WarPulse',
    subtitle: 'Real-Time War Intelligence Dashboard',
    description:
      'A real-time war intelligence dashboard built and deployed during the Iran-Israel-US conflict news cycle. Live news ticker, faction tracker, and market impact data — all in a single HTML file.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GNews API', 'Vercel', 'GitHub Pages'],
    github: 'https://github.com/ShriyansBharuka',
    live: 'https://warpulse-flax.vercel.app',
    icon: FiActivity,
    accent: '#ff2d6b',
    status: 'Live',
  },
  {
    id: 3,
    title: 'AI Power Theft Detection',
    subtitle: 'ML-Based Anomaly Detection System',
    description:
      'ML-based smart grid security system targeting TBI funding and patent eligibility. Detects theft patterns using Random Forest, XGBoost, and Isolation Forest on smart meter data with real-time alerts.',
    tags: ['Python', 'XGBoost', 'Random Forest', 'FastAPI', 'React', 'Smart Grid'],
    github: 'https://github.com/ShriyansBharuka',
    live: null,
    icon: FiCpu,
    accent: '#10f0a0',
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'CogniTask',
    subtitle: 'Cognitive-Aware Task Scheduler',
    description:
      'Built at HackXcelerate 2026 — a task scheduler that adapts to your cognitive bandwidth. Uses Google Gemini API to dynamically re-prioritize tasks based on mental load estimation.',
    tags: ['React', 'Flask', 'Google Gemini API', 'Python', 'Hackathon'],
    github: 'https://github.com/ShriyansBharuka',
    live: null,
    icon: FiZap,
    accent: '#a855f7',
    status: 'Hackathon',
  },
]

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const Icon = project.icon

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--x', `${x}%`)
    card.style.setProperty('--y', `${y}%`)
    const rotX = ((e.clientY - rect.top) / rect.height - 0.5) * -8
    const rotY = ((e.clientX - rect.left) / rect.width - 0.5) * 8
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card relative glass rounded-2xl p-6 h-full flex flex-col gap-4 overflow-hidden transition-transform duration-100"
        style={{ border: `1px solid ${project.accent}25` }}
      >
        {/* Holographic shine */}
        <div className="card-shine" />

        {/* Top row */}
        <div className="flex items-start justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}40` }}
          >
            <Icon size={18} style={{ color: project.accent }} />
          </div>
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full border"
            style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-bold text-xl text-white mb-1">{project.title}</h3>
          <p className="font-mono text-xs" style={{ color: project.accent }}>{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded bg-gray-900 text-gray-500 border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 border-t border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-gray-500 hover:text-white transition-colors"
          >
            <FiGithub size={13} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs transition-colors"
              style={{ color: project.accent }}
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>

        {/* Glow corner */}
        <div
          className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20"
          style={{ background: project.accent }}
        />
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-line font-mono text-xs text-[#a855f7] tracking-[0.3em] uppercase mb-4">
            02 / Projects
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Things I've shipped<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ff2d6b]">into the real world</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ShriyansBharuka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-[#06d6f7] transition-colors"
          >
            <FiGithub size={15} />
            More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
