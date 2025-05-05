import { useEffect, useState } from 'react';
import meImage from '../../assets/me.jpg';

const nerdTitles = [
  '🧙‍♀️ Frontend Mage',
  '⚔️ Code Alchemist',
  '✨ React Sorceress',
  '🧠 UI Architect',
  '💡 UX Tinkerer',
  '🕹️ Pixel Crafter',
];

export default function AboutMe() {
  const [title, setTitle] = useState(nerdTitles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextTitle = nerdTitles[Math.floor(Math.random() * nerdTitles.length)];
      setTitle(nextTitle);
    }, 5000); // Cambia ogni 5 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-0 max-w-5xl mx-auto bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 dark:text-gray-200">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Immagine */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-md shrink-0">
          <img
            src={meImage}
            alt="Me"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Testo + Pulsante + Badge */}
        <div className="flex-1">
          <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
            Ciao! Sono Stefania, una front-end developer con passione per il design elegante e funzionale. Mi diverto a creare esperienze interattive e pixel-perfect, ispirate sia dal mondo minimal che da quello un po’ nerd 🎮.
          </p>

          <div className="mt-2">
            <a
              href="/assets/cv.pdf"
              download
              className="inline-block px-5 py-2 bg-accent text-white rounded-lg hover:bg-cyan-500 transition font-mono"
            >
              Download CV
            </a>

            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md inline-block animate-pulse font-mono">
              {title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}