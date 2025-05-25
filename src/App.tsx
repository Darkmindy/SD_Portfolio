import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { Contact } from 'lucide-react';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingThemeToggle />
      <AboutMe />
      <Projects />
      <Skillset />
      <ScrollToTop />
      <Contact />
      <Footer />

      {/* Altre sezioni andranno qui */}
    </>
  );
}

export default App;