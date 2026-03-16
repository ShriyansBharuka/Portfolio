import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi'

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    handle: '@ShriyansBharuka',
    href: 'https://github.com/ShriyansBharuka',
    color: '#06d6f7',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    handle: 'shriyans-bharuka',
    href: 'https://www.linkedin.com/in/shriyans-bharuka/',
    color: '#a855f7',
  },
  {
    icon: FiMail,
    label: 'Email',
    handle: 'shriyansbharuka@gmail.com',
    href: 'mailto:shriyansbharuka@gmail.com',
    color: '#10f0a0',
  },
]

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('shriyansbharuka@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06d6f7] tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-px bg-[#06d6f7]" />
            05 / Contact
            <span className="w-8 h-px bg-[#06d6f7]" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
            Let's build something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06d6f7] via-[#a855f7] to-[#10f0a0]">
              remarkable together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Open to internships, collaborations, hackathon teams, and interesting conversations.
            I respond fast — usually within a day.
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 font-mono text-sm text-gray-600 mb-12"
        >
          <FiMapPin size={13} className="text-[#ff2d6b]" />
          VJTI Hostel, Matunga, Mumbai · Maharashtra, India
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mb-14"
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#06d6f7]/30 hover:border-[#06d6f7] hover:bg-[#06d6f7]/10 transition-all font-mono text-sm text-[#06d6f7]"
          >
            <FiMail size={16} />
            {copied ? '✓ Copied!' : 'shriyansbharuka@gmail.com'}
            <FiSend size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-all group"
                style={{ border: `1px solid ${s.color}20` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}15` }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">{s.label}</div>
                  <div className="font-mono text-xs text-gray-500 mt-0.5">{s.handle}</div>
                </div>
              </a>
            )
          })}
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-gray-800 rounded-full px-4 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#10f0a0] animate-pulse2" />
          Available for Summer 2026 Internships
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
