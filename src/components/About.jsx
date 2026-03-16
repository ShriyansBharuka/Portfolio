import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiCpu, FiZap, FiUsers } from 'react-icons/fi'

const stats = [
  { value: '95.9%', label: 'JEE Mains Percentile' },
  { value: '99.49%', label: 'MHT-CET Percentile' },
  { value: '4+', label: 'Projects Shipped' },
  { value: '4', label: 'College Committees' },
]

const committees = [
  { name: 'E-Cell', role: 'Member', color: '#06d6f7' },
  { name: 'Technovanza', role: 'Sponsorship Executive', color: '#a855f7' },
  { name: 'Digital VJTI', role: 'Member', color: '#10f0a0' },
  { name: 'Enthusia', role: 'Member', color: '#ff2d6b' },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <div className="section-line font-mono text-xs text-[#06d6f7] tracking-[0.3em] uppercase mb-4">
            01 / About Me
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            The person behind<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#06d6f7]">the keyboard</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div className="space-y-6">
            <motion.p
              custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Hey, I'm Shriyans — a first-year IT student at{' '}
              <span className="text-[#06d6f7]">VJTI Mumbai</span>, one of India's top engineering colleges.
              I'm obsessed with building products that blend AI with real-world utility.
            </motion.p>
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-gray-400 leading-relaxed"
            >
              From autonomous ML trading systems to full-stack business platforms, I like shipping things that
              actually work in production. My long-term goal? Build a startup that solves real problems using AI.
            </motion.p>
            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-gray-400 leading-relaxed"
            >
              When I'm not coding, I'm playing badminton, watching HIMYM reruns, eating out in Mumbai,
              or overthinking my next project idea at 2am.
            </motion.p>

            {/* Tags */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-2 text-gray-500 font-mono text-sm"
            >
              <FiMapPin size={14} className="text-[#ff2d6b]" />
              Aurangabad → Mumbai (VJTI Hostel, Matunga)
            </motion.div>

            {/* Committees */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="pt-4"
            >
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gray-600 uppercase tracking-widest">
                <FiUsers size={12} />
                College Committees
              </div>
              <div className="grid grid-cols-2 gap-3">
                {committees.map(c => (
                  <div
                    key={c.name}
                    className="border border-gray-800 rounded-xl p-3 hover:border-gray-600 transition-colors"
                    style={{ boxShadow: `0 0 20px ${c.color}08` }}
                  >
                    <div className="font-display font-bold text-sm" style={{ color: c.color }}>{c.name}</div>
                    <div className="font-mono text-xs text-gray-500 mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i + 2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                  className="border-gradient p-6 rounded-2xl"
                >
                  <div className="font-display font-black text-3xl text-white mb-1">{s.value}</div>
                  <div className="font-mono text-xs text-gray-500">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently working on */}
            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="glass rounded-2xl p-6 border border-[#10f0a0]/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <FiCpu size={14} className="text-[#10f0a0]" />
                <span className="font-mono text-xs text-[#10f0a0] uppercase tracking-widest">Currently Building</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'AlgoTrade ML', desc: 'Autonomous 5-layer ML trading system on Alpaca', color: '#06d6f7' },
                  { name: 'Lynx Fashions', desc: 'Full-stack BMS for uniform manufacturing', color: '#a855f7' },
                  { name: 'AI Power Theft Detection', desc: 'ML-based anomaly detection, TBI-targeted', color: '#10f0a0' },
                ].map(p => (
                  <div key={p.name} className="flex items-start gap-3">
                    <FiZap size={12} className="mt-1 flex-shrink-0" style={{ color: p.color }} />
                    <div>
                      <div className="font-mono text-sm text-white">{p.name}</div>
                      <div className="font-mono text-xs text-gray-500">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
