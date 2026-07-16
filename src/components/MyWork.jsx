import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Resume Analyzer',
    tagline: 'Flagship internship project — hybrid ATS scoring engine',
    description:
      'Full-stack resume intelligence platform combining Sentence-BERT semantic matching with keyword-based ATS scoring. Includes a RAG pipeline for context-aware feedback, a recruiter analytics dashboard with real SQL aggregation, and hardened security (rate limiting, file validation, CSRF protection).',
    stack: ['Next.js', 'FastAPI', 'Sentence-BERT', 'RAG', 'Ollama', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    name: 'RAG-Based AI Knowledge Assistant',
    tagline: 'Local-first retrieval-augmented Q&A system',
    description:
      'A zero-cost knowledge assistant using ChromaDB and sentence-transformers for retrieval, with a React + Vite + Tailwind frontend that shows citation chips linking answers back to source passages.',
    stack: ['LangChain', 'ChromaDB', 'Ollama', 'React'],
    github: '#',
    demo: '#',
  },
  {
    name: 'AI Business Analytics Dashboard',
    tagline: 'Natural language to SQL, with a safety layer',
    description:
      'Converts plain-English business questions into SQL queries against DuckDB, with a JSON query-plan validation layer before execution, visualized through interactive Recharts dashboards.',
    stack: ['DuckDB', 'NL-to-SQL', 'Recharts', 'Python'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Movie Recommendation System',
    tagline: 'Hybrid collaborative + content-based filtering',
    description:
      'Combines collaborative filtering with TF-IDF and cosine similarity over movie metadata to generate personalized recommendations — my earliest resume anchor project.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'TF-IDF'],
    github: '#',
    demo: '#',
  },
];

export default function MyWork() {
  return (
    <section id="work" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono-tag text-sm text-[#3B82F6] mb-3">02 — Selected work</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">My Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-7 flex flex-col ${
                p.featured
                  ? 'border-[#3B82F6]/40 bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/5 md:col-span-2'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {p.featured && (
                <span className="font-mono-tag text-[11px] text-[#3B82F6] mb-3 uppercase tracking-wide">
                  Flagship project
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-1.5">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{p.tagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono-tag text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Code2 size={16} /> Code
                </a>
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
