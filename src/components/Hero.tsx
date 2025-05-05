import { motion } from 'framer-motion';
import profile from "../assets/profile.png";
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const jobTitles = [
  'Frontend Developer',
  'Graphic UI/UX Designer',
  'React Enthusiast',
  'Code Alchemist',
  'Pixel Perfectionist',
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTitle = jobTitles[currentTitleIndex];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Immagine profilo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Stefania Deliso"
            className="rounded-lg shadow-lg w-52 h-52 md:w-64 md:h-64 object-cover"
          />
        </motion.div>

        {/* Testo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight text-slate-900 dark:text-white">
            Ciao, sono Stefania 👋 <br />
            <motion.span
              key={currentTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-cyan-500 inline-block" 
            >
              {currentTitle}
            </motion.span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 font-serif">
            Sviluppatrice e designer <span className="font-nanum-pen text-gray-400 dark:text-gray-500">(a volte...)</span> costantemente concentrata sull'apprendimento e sull'ampliamento delle mie competenze, elaborando soluzioni sempre migliori e altamente performanti. ✨
          </p>

          <a
            href="https://www.linkedin.com/in/stefaniad91/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 dark:bg-cyan-900 text-white font-semibold font-mono hover:bg-cyan-600 hover:dark:bg-cyan-600 transition"
          >
            <FaLinkedin className="text-xl" />
            Connettiamoci su LinkedIn!
          </a>
        </motion.div>
      </div>
    </section>
  );
}