import Hero from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import SkillSet from "../components/SkillSet";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FloatingThemeToggle from "../components/ui/FloatingThemeToggle";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillSet />
      <Projects />
      <Contact />
      <FloatingThemeToggle />
    </>
  );
};

export default Home;
