// src/App.tsx
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle'; 
import { References } from './components/References';
import { Blog } from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Layout } from './components/layout/Layout';
import { Container } from './components/layout/Container';
import CVPage from './components/cv/CV';

// Importazioni Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

function App() {
  return (
    <Router>
      <Layout>
        <FloatingThemeToggle /> 

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Container> 
                <Projects />
                <AboutMe />
                <Skillset />
                <References />
                <Blog />
                <Contact />
              </Container>
            </>
          } />
          <Route path="/cv" element={<CVPage />} /> 
        </Routes>

      </Layout>
    </Router>
  );
}

export default App;