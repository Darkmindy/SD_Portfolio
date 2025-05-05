import { useEffect, useState } from 'react';
import { Container } from '../components/layout/Container';
import { motion } from 'framer-motion';
import MeImg from '../assets/me.jpg';

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
    <section id="about" className="py-24 bg-white text-primary dark:bg-slate-950 dark:text-white">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sans font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-6">
              Sono una front-end developer con passione per il design pulito, accessibile e curato nei dettagli.
              Ogni progetto è per me un'opportunità per "level up" e migliorare.
            </p>
            <a
              href="/assets/cv.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-900 text-white font-semibold font-mono hover:bg-cyan-600 transition"
              download
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={MeImg}
              alt="Stefania"
              className="w-[260px] h-[300px] rounded-lg mx-auto shadow-lg object-cover object-top scale-110 border-4 border-transparent outline-2 outline-black dark:outline-white outline-offset-[-4px]"
            />
            {/* Badge in basso al centro sopra la foto */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-cyan-500 text-white dark:bg-cyan-900 dark:text-white font-mono text-sm py-2 px-3 rounded-md shadow-md border-2 border-white dark:border-slate-900">
                {titlesWithEmojis[currentTitle]}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};