import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCode, FiStar, FiTrendingUp } from 'react-icons/fi'

const achievements = [
  {
    icon: FiStar,
    title: 'JEE Mains 2025',
    value: '95.9%ile',
    detail: 'General Rank ~66,227 · EWS Rank ~8,809',
    color: '#f59e0b',
    year: '2025',
  },
  {
    icon: FiTrendingUp,
    title: 'MHT-CET 2025',
    value: '99.49%ile',
    detail: 'Maharashtra State Engineering Entrance',
    color: '#10f0a0',
    year: '2025',
  },
  {
    icon: FiCode,
    title: 'HackXcelerate 2026',
    value: 'Finalist',
    detail: 'Built Cognitive-Aware Task Scheduler with Gemini API',
    color: '#a855f7',
    year: '2026',
  },
  {
    icon: FiAward,
    title: 'VJTI IT — Batch 2029',
    value: 'Top College',
    detail: 'Veermata Jijabai Technological Institute, Mumbai',
    color: '#06d6f7',
    year: '2025',
  },
  {
    icon: FiStar,
    title: 'SSC Board',
    value: '95.4%',
    detail: 'Cambridge School, Aurangabad',
    color: '#ff2d6b',
    year: '2023',
  },
  {
    icon: FiTrendingUp,
    title: 'HSC Board',
    value: '83.33%',
    detail: 'Maharashtra State',
    color: '#06d6f7',
    year: '2025',
  },
]

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-line font-mono text-xs text-[#ff2d6b] tracking-[0.3em] uppercase mb-4">
            04 / Achievements
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Milestones &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d6b] to-[#f59e0b]">war stories</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glass rounded-2xl p-6 hover:border-opacity-60 transition-all group relative overflow-hidden"
                style={{ border: `1px solid ${a.color}20` }}
              >
                {/* Year badge */}
                <span
                  className="absolute top-4 right-4 font-mono text-xs"
                  style={{ color: a.color, opacity: 0.5 }}
                >
                  {a.year}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}
                >
                  <Icon size={18} style={{ color: a.color }} />
                </div>

                <div
                  className="font-display font-black text-2xl mb-1"
                  style={{ color: a.color }}
                >
                  {a.value}
                </div>
                <div className="font-bold text-white text-sm mb-1">{a.title}</div>
                <div className="font-mono text-xs text-gray-500 leading-relaxed">{a.detail}</div>

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${a.color}08, transparent 70%)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="font-display text-xl text-gray-600 italic">
            "Ranks got me here.{' '}
            <span className="text-[#06d6f7] not-italic">What I build</span>{' '}
            will take me further."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
