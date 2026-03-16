import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/40' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-lg font-bold tracking-wider"
        >
          <span className="text-[#06d6f7]">S</span>
          <span className="text-white">B</span>
          <span className="text-[#a855f7] ml-1 text-xs font-mono opacity-70">/ 251080012</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`font-mono text-sm tracking-widest uppercase transition-colors relative group ${
                  active === href ? 'text-[#06d6f7]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px bg-[#06d6f7] transition-all duration-300 w-0 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://github.com/ShriyansBharuka"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#06d6f7]/40 rounded-full text-[#06d6f7] text-sm font-mono hover:bg-[#06d6f7]/10 hover:border-[#06d6f7] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#10f0a0] animate-pulse2 inline-block" />
          GitHub
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-[#06d6f7] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#06d6f7] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#06d6f7] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-[#06d6f7]/10 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="font-mono text-sm text-gray-300 hover:text-[#06d6f7] tracking-widest uppercase w-full text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
