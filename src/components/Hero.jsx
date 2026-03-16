import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Full-Stack Developer',
  'AI / ML Engineer',
  'Entrepreneur in Progress',
  'Building at VJTI Mumbai',
]

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayd] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayd(target.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayd(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Top status bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-10 font-mono text-xs text-gray-500 border border-gray-800 rounded-full px-4 py-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#10f0a0] animate-pulse2" />
        <span>FY IT @ VJTI Mumbai</span>
        <span className="text-gray-700">|</span>
        <span>Roll No: 251080012</span>
        <span className="text-gray-700">|</span>
        <span className="text-[#06d6f7]">Open to Internships</span>
      </motion.div>

      {/* Main name */}
      <div className="text-center mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-[#06d6f7] text-sm tracking-[0.3em] uppercase mb-3"
        >
          &lt; Hello, World /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none"
        >
          <span
            className="glitch-text text-white"
            data-text="SHRIYANS"
          >
            SHRIYANS
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06d6f7] via-[#a855f7] to-[#10f0a0]">
            BHARUKA
          </span>
        </motion.h1>
      </div>

      {/* Typing role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="font-mono text-lg md:text-xl text-gray-400 mb-10 h-8 flex items-center"
      >
        <span className="text-[#a855f7]">~/</span>&nbsp;
        <span className="text-white">{displayed}</span>
        <span className="typing-cursor" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-gray-400 text-base md:text-lg text-center max-w-xl mb-12 leading-relaxed"
      >
        I build things that <span className="text-[#06d6f7]">think</span>. From AI trading systems to full-stack
        platforms — turning ambitious ideas into real products.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex flex-wrap gap-4 justify-center mb-16"
      >
        <button
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-[#06d6f7] text-black font-display font-bold text-sm tracking-widest rounded-full hover:bg-white transition-all hover:shadow-lg hover:shadow-[#06d6f7]/30"
        >
          VIEW PROJECTS
        </button>
        <a
          href="mailto:shriyansbharuka@gmail.com"
          className="px-8 py-3 border border-[#06d6f7]/40 text-[#06d6f7] font-display font-bold text-sm tracking-widest rounded-full hover:border-[#06d6f7] hover:bg-[#06d6f7]/10 transition-all"
        >
          CONTACT ME
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex gap-5 mb-20"
      >
        {[
          { icon: FiGithub, href: 'https://github.com/ShriyansBharuka', label: 'GitHub' },
          { icon: FiLinkedin, href: 'https://www.linkedin.com/in/shriyans-bharuka/', label: 'LinkedIn' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#06d6f7] transition-colors group"
          >
            <Icon size={18} className="group-hover:scale-110 transition-transform" />
            <span>{label}</span>
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-600 hover:text-[#06d6f7] transition-colors"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 font-mono text-xs text-gray-800 leading-6 select-none hidden lg:block">
        <div>01 // INIT</div>
        <div>02 // LOAD_STACK</div>
        <div>03 // BUILD()</div>
        <div>04 // DEPLOY ✓</div>
      </div>
      <div className="absolute top-24 right-8 font-mono text-xs text-gray-800 leading-6 select-none text-right hidden lg:block">
        <div>VJTI_IT_FY</div>
        <div>MUMBAI_2025</div>
        <div>BATCH_2029</div>
      </div>
    </section>
  )
}

export default Hero
