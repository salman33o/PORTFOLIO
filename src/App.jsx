import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Skills from './components/Skills';
import WhyMe from './components/WhyMe';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden transition-colors duration-300">
      <ScrollProgress />
      <Nav />
      <Hero />
      <MyWork />
      <Skills />
      <WhyMe />
      <Certifications />
      <Contact />
    </div>
  );
}
