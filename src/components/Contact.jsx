import { motion } from 'framer-motion';
import { Mail, Link2, Code2, Phone, Download } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'smohammedsalman332@gmail.com', href: 'mailto:smohammedsalman332@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9092091569', href: 'tel:+919092091569' },
  { icon: Link2, label: 'LinkedIn', value: 's-mohammed-salman', href: 'https://linkedin.com/in/s-mohammed-salman' },
  { icon: Code2, label: 'GitHub', value: 'Salman33o', href: 'https://github.com/Salman33o' },
];


export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-tag text-sm text-[#3B82F6] mb-3"
        >
          04 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-bold text-3xl sm:text-4xl mb-6"
        >
          Let's build something worth shipping.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto mb-12"
        >
          Open to internship and full-time roles in AI, data science, and full-stack ML
          product development. Reach out — I reply fast.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:border-[#3B82F6]/40 hover:bg-white/[0.04] transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] shrink-0">
                <c.icon size={18} />
              </span>
              <span>
                <span className="block text-xs text-slate-500">{c.label}</span>
                <span className="block text-sm text-slate-200">{c.value}</span>
              </span>
            </motion.a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={18} />
          Download full resume
        </a>
      </div>

      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} Salman. Built from scratch, deployed on GitHub Pages.</span>
        <div className="flex gap-5">
          <a href="#top" className="hover:text-slate-300 transition-colors">Back to top</a>
        </div>
      </footer>
    </section>
  );
}
