import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#06d6f7',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    color: '#a855f7',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets', 'MongoDB'],
  },
  {
    category: 'AI / ML',
    color: '#10f0a0',
    skills: ['Python', 'XGBoost', 'LightGBM', 'LSTM', 'FinBERT', 'Scikit-learn'],
  },
  {
    category: 'Languages',
    color: '#ff2d6b',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'C', 'SQL'],
  },
  {
    category: 'Tools & DevOps',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code'],
  },
]

const proficiencies = [
  { label: 'React + FastAPI', pct: 88, color: '#06d6f7' },
  { label: 'Python / ML', pct: 82, color: '#10f0a0' },
  { label: 'MongoDB', pct: 80, color: '#a855f7' },
  { label: 'C / C++', pct: 75, color: '#ff2d6b' },
  { label: 'System Design', pct: 65, color: '#f59e0b' },
]

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-line font-mono text-xs text-[#10f0a0] tracking-[0.3em] uppercase mb-4">
            03 / Skills
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            My tech arsenal<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10f0a0] to-[#06d6f7]">& weapons of choice</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — skill categories */}
          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: group.color }}>
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      className="px-3 py-1.5 rounded-lg font-mono text-xs text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors"
                      style={{
                        background: `${group.color}08`,
                        boxShadow: `0 0 12px ${group.color}08`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — proficiency bars */}
          <div>
            <div className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-8">
              Proficiency Index
            </div>
            <div className="space-y-7">
              {proficiencies.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-gray-300">{p.label}</span>
                    <span className="font-mono text-xs" style={{ color: p.color }}>{p.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${p.pct}%` } : {}}
                      transition={{ delay: i * 0.12 + 0.4, duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${p.color}80, ${p.color})`,
                        boxShadow: `0 0 8px ${p.color}60`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Also learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 glass rounded-2xl p-5 border border-gray-800"
            >
              <div className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-3">
                Currently Learning
              </div>
              <div className="flex flex-wrap gap-2">
                {['Reinforcement Learning (PPO)', 'Docker', 'TypeScript', 'System Design'].map(s => (
                  <span key={s} className="font-mono text-xs text-[#f59e0b] px-2 py-1 rounded border border-[#f59e0b]/20 bg-[#f59e0b]/05">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
