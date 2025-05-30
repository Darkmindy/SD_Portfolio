import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutMe } from './components/AboutMe';
import Skillset from './components/SkillSet';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { References } from './components/References';
import { Blog } from './components/Blog'; 
import Contact from './components/Contact'; 
import Projects from './components/Projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'; 


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingThemeToggle /> 
      <Projects />
      <AboutMe />
      <Skillset />
      <References />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;