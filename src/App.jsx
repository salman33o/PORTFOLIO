import Nav from './components/Nav';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <MyWork />
      <WhyMe />
      <Contact />
    </div>
  );
}
