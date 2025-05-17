import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThemeToggle />
      <AboutMe />
      <Skillset />

      {/* Altre sezioni andranno qui */}
    </>
  );
}

export default App;