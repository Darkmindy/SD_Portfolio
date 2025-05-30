import './index.css';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import { References } from './components/References';
import { Blog } from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Layout } from '@/components/layout/Layout';


function App() {
  return (
    <Layout>
      {/* Navbar, FloatingThemeToggle, Footer, ScrollToTop sono ora dentro Layout */}
      <Hero />
      <FloatingThemeToggle />
      <Projects />
      <AboutMe />
      <Skillset />
      <References />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default App;