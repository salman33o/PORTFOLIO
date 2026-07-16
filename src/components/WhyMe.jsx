import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    period: '2022 — 2026',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    place: 'RVS Technical Campus, Coimbatore (Anna University)',
    detail: 'Final-year student focused on applied ML, NLP, and full-stack AI product development.',
  },
  {
    icon: Briefcase,
    period: 'Internship',
    title: 'Data Analyst',
    place: 'Sri Lakshmi Technology',
    detail: 'Built the Resume Analyzer from the ground up — the project that anchors my portfolio.',
  },
  {
    icon: Briefcase,
    period: 'Internship',
    title: 'Software Development',
    place: 'Gateway Software Solutions',
    detail: 'Contributed to full-stack development tasks across the SDLC.',
  },
  {
    icon: Briefcase,
    period: 'Data Analytics',
    title: 'Analytics & Reporting',
    place: 'DevAlpha Technologies',
    detail: 'Delivered customer insight analysis, business dashboards, and market performance reports.',
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  { label: 'ML / AI', items: ['Sentence-BERT', 'RAG', 'LangChain', 'Ollama', 'scikit-learn'] },
  { label: 'Web', items: ['Next.js', 'React', 'FastAPI', 'Tailwind CSS'] },
  { label: 'Data', items: ['Pandas', 'DuckDB', 'PostgreSQL', 'Recharts'] },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative py-28 px-6 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono-tag text-sm text-[#8B5CF6] mb-3">03 — Why me</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Grounded in fundamentals, built for shipping product.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-3">
            <ol className="relative border-l border-white/10 pl-8 space-y-10">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.55rem] flex items-center justify-center w-8 h-8 rounded-full bg-[#131E36] border border-[#3B82F6]/40">
                    <t.icon size={15} className="text-[#3B82F6]" />
                  </span>
                  <p className="font-mono-tag text-xs text-slate-500 mb-1">{t.period}</p>
                  <h3 className="font-display font-semibold text-lg mb-0.5">{t.title}</h3>
                  <p className="text-sm text-[#8B5CF6] mb-2">{t.place}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{t.detail}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-slate-300 mb-2">
              <Sparkles size={16} className="text-[#8B5CF6]" />
              <span className="font-mono-tag text-xs uppercase tracking-wide">Toolbelt</span>
            </div>
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="text-xs text-slate-500 mb-2">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="font-mono-tag text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
