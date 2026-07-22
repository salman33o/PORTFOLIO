import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#why-me', label: 'Why Me' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0F172A]/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] text-white flex items-center justify-center font-extrabold text-sm shadow-md">
            SM
          </span>
          <span>S. Mohammed Salman</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </li>
          <li>
            <a
              href="resume.pdf"
              download="S_Mohammed_Salman_Resume.pdf"
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-all text-white shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10 animate-in slide-in-from-top duration-200">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white py-1 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="resume.pdf"
            download="S_Mohammed_Salman_Resume.pdf"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#3B82F6] text-white w-fit mt-2 shadow-md"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
