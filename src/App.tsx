import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skillset from './components/SkillSet';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skillset />

      {/* Altre sezioni andranno qui */}
    </>
  );
}

export default App;