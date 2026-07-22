import { motion } from 'framer-motion';

const skills = [
  { name: 'Machine Learning', level: 92, color: 'from-blue-500 to-cyan-400', textColor: 'text-blue-400' },
  { name: 'Data Engineering', level: 88, color: 'from-purple-500 to-indigo-400', textColor: 'text-purple-400' },
  { name: 'Python & ML Libs', level: 95, color: 'from-emerald-400 to-teal-300', textColor: 'text-teal-300' },
  { name: 'Web Development', level: 82, color: 'from-amber-400 to-orange-500', textColor: 'text-amber-400' },
  { name: 'MLOps & DevOps', level: 78, color: 'from-pink-500 to-rose-400', textColor: 'text-pink-400' },
  { name: 'NLP & LLMs', level: 85, color: 'from-violet-500 to-purple-400', textColor: 'text-violet-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0B1220]/60 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-tag text-xs uppercase tracking-widest text-[#8B5CF6] mb-3">
            WHY ME
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Beyond the code — the skills, experience, and mindset that make the difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#131E36]/40 border border-white/5 p-5 rounded-2xl backdrop-blur-sm shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-display font-semibold text-slate-200 text-base sm:text-lg">
                  {skill.name}
                </span>
                <span className={`font-mono-tag font-bold text-sm ${skill.textColor}`}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
