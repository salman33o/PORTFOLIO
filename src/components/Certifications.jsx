import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Data Analyst Domain Internship Completion',
    issuer: 'Sri Lakshmi Technology',
    date: 'Jul 2026',
    tags: ['BERT', 'ATS', 'Python', 'Streamlit'],
  },
  {
    title: 'Data Science with Python',
    issuer: 'Tech Vedhu',
    date: '2024 — 2025',
    tags: ['Machine Learning', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Power BI for Data Analysis',
    issuer: 'Simplilearn',
    date: '2024',
    tags: ['Power BI', 'DAX', 'Dashboards'],
  },
  {
    title: 'Python for Data Science',
    issuer: 'LinkedIn Learning',
    date: '2024',
    tags: ['Python', 'Data Wrangling'],
  },
  {
    title: 'Responsible AI & Ethics',
    issuer: 'HPE / Gateway Software Solutions',
    date: 'Mar 2026',
    tags: ['Generative AI', 'AI Ethics'],
  },
  {
    title: 'International Level Hackathon 360°-3.0',
    issuer: 'KPR Institute & ECLearnix',
    date: 'Feb 2026',
    tags: ['AI Innovation', 'Hackathon'],
  },
  {
    title: 'ICAT (Internship Common Aptitude Test)',
    issuer: 'Cert No. CIT-P-3313380',
    date: 'May 2026',
    tags: ['Aptitude', 'Data Science'],
  },
  {
    title: 'Tech Vedhu Data Science Badge',
    issuer: 'Tech Vedhu',
    date: 'Jul 2025',
    tags: ['ML', 'NLP', 'Deep Learning', 'SQL', 'Tableau'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-mono-tag text-xs uppercase tracking-widest text-[#3B82F6] mb-3">
            VERIFIED CREDENTIALS
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Certifications &amp; Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-[#131E36]/60 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#3B82F6]/40 hover:bg-[#131E36]/90 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform">
                    <Award size={18} />
                  </span>
                  <span className="font-mono-tag text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                    {c.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-sm text-slate-100 mb-1 leading-snug group-hover:text-[#3B82F6] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{c.issuer}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono-tag text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
