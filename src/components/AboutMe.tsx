import { useEffect, useState } from 'react';
import { Container } from '../components/layout/Container';
import { motion } from 'framer-motion';
import MeImg from '../assets/me.jpg';
import { FaArrowUp } from "react-icons/fa6";

const titlesWithEmojis = [
  '👩‍💻 Frontend Dev Artist',
  '🎨 10+ anni di Graphic Design',
  '🛠️ WordPress Modder',
  '✨ UI Enthusiast',
  '⚛️ React Lover',
  '✅ Accessibility Advocate',
];

export const AboutMe = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titlesWithEmojis.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-white text-primary dark:bg-slate-950 dark:text-white transition-colors duration-500"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text block */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-nanum-pen font-bold mb-4">About Me</h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 font-serif">
            Front-end developer, web designer <span className="font-nanum-pen text-gray-400 dark:text-gray-500">(e tante altre cose...)</span> con la passione per il design pulito, accessibile e curato nei dettagli.
            <br /> Sono costantemente concentrata sull'apprendimento e sull'ampliamento delle mie competenze, elaborando soluzioni sempre migliori e altamente performanti.
           <br /> Ogni progetto è un'opportunità per fare{" "}
              <span className="font-pixel">level up <FaArrowUp /></span>{" "}! ✨
          </p>
            <a
              href="/assets/cv.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-900 text-white font-mono hover:bg-cyan-600 transition"
              download
            >
              📄 Download CV
            </a>
          </motion.div>

          {/* Image + badge */}
          <motion.div
            className="md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gameboy-frame">
              <img
                src={MeImg}
                alt="Stefania"
                className="w-full h-full object-cover object-top rounded-md"
              />
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10">
                <div className="badge-pixel">{titlesWithEmojis[currentTitle]}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
