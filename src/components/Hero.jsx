import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Dynamic Particle Canvas */}
      <ParticleBackground />

      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#3B82F6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[26rem] h-[26rem] bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-semibold w-fit mb-6 shadow-sm shadow-teal-500/10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-4 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-sm">Salman</span>
          </h1>

          {/* Subheading */}
          <h2 className="font-display font-semibold text-xl sm:text-2xl text-slate-300 mb-6">
            AI &amp; Data Science Student
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            I build intelligent systems that turn messy data into real-world impact — from production ML pipelines to LLM-powered developer tools. Currently finishing my B.Sc. in AI &amp; Data Science at RVS Technical Campus.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all text-white font-medium text-sm"
            >
              View My Work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <a
              href="resume.pdf"
              download="S_Mohammed_Salman_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 active:scale-95 transition-all text-slate-200 font-medium text-sm"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Graphic / Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Main Photo container with glowing border */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EF4444] shadow-2xl shadow-blue-500/10">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0F172A] bg-slate-900">
              <img
                src="profile.jpg"
                alt="S. Mohammed Salman"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge 1: Projects Built */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute left-[-20px] top-[40%] bg-[#131E36]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl shadow-xl shadow-black/35 flex flex-col"
            >
              <span className="text-slate-400 text-[10px] font-mono-tag uppercase tracking-wider">Projects Built</span>
              <span className="text-white text-lg font-bold">20+</span>
            </motion.div>

            {/* Floating Badge 2: Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute right-[-20px] bottom-[25%] bg-[#131E36]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl shadow-xl shadow-black/35 flex flex-col"
            >
              <span className="text-slate-400 text-[10px] font-mono-tag uppercase tracking-wider">Certifications</span>
              <span className="text-white text-lg font-bold">8+</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
