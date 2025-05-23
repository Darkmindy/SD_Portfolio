import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingThemeToggle />
      <AboutMe />
      <Skillset />
      <Footer />

      {/* Altre sezioni andranno qui */}
    </>
  );
}

export default App;