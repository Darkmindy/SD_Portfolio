import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'; // IMPORTANTE: Assicurati che sia importato anche in main.tsx/App.tsx

// IMPORTA QUI LE TUE IMMAGINI REALI PER IL CAROSELLO!
import designProject1 from '@/assets/portfolio/design_project_1.jpg';
import designProject2 from '@/assets/portfolio/design_project_2.jpg';
import designProject3 from '@/assets/portfolio/design_project_3.jpg';
import designProject4 from '@/assets/portfolio/design_project_4.jpg';
import designProject5 from '@/assets/portfolio/design_project_5.jpg';
import designProject6 from '@/assets/portfolio/design_project_6.jpg';
import designProject7 from '@/assets/portfolio/design_project_7.jpg';
import designProject8 from '@/assets/portfolio/design_project_8.jpg';
import designProject9 from '@/assets/portfolio/design_project_9.jpg';
import designProject10 from '@/assets/portfolio/design_project_10.jpg';
import designProject11 from '@/assets/portfolio/design_project_11.jpg';
import designProject12 from '@/assets/portfolio/design_project_12.jpg';

const carouselImages = [designProject1, designProject2, designProject3, designProject4, designProject5, designProject6, designProject7, designProject8, designProject9, designProject10, designProject11, designProject12];

export const AboutMe = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Ho rimosso qui il titolo About Me, verrà inserito dentro la colonna di sinistra */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Blocco di testo "Chi Sono" - Colonna di sinistra */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              {/* Il titolo About Me è ora qui, allineato con il testo del paragrafo */}
              <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-sans leading-relaxed">
                Sono una{" "}
                <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                  Graphic Designer
                </strong>{" "}
                con oltre{" "}
                <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                  10 anni di esperienza
                </strong>{" "}
                nel campo del design visivo.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-sans leading-relaxed">
                Ho integrato il{" "}
                <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                  Front-end Developing
                </strong>{" "}
                per creare soluzioni che siano non solo belle, ma anche funzionali e performanti.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 font-sans leading-relaxed">
                Il mio percorso è un continuo{" "}
                <strong className="text-blue-600 dark:text-blue-400 font-mono">
                  level up ✨
                </strong>
                : mi dedico a trasformare idee complesse in esperienze digitali intuitive e coinvolgenti, sempre con attenzione a qualità, accessibilità e innovazione.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Parliamone
                </a>
                <a
                  href="/assets/cv.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap"
                  download
                >
                  📄 Download CV
                </a>
              </div>
            </motion.div>

            {/* Blocco Carosello Portfolio Grafico - Colonna di destra */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              // Rimosso p-0 in favore di un padding più specifico se necessario internamente
              // Rimosso bg-gradient e shadow-2xl per un look più pulito e solo immagini
              className="relative rounded-2xl overflow-hidden group"
            >
                {/* Rimosso completamente h3 e p qui sotto il carosello */}
              <div className="relative w-full h-96 md:h-[450px] lg:h-[500px] flex justify-center items-center overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCards]}
                  effect={"cards"}
                  grabCursor={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="mySwiper w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                >
                  {carouselImages.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        // La slide è trasparente e con un'ombra leggera, padding di 4 unità
                        className="flex justify-center items-center rounded-xl overflow-hidden shadow-lg p-4"
                    >
                      <img
                        src={image}
                        alt={`Design Project ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Rimosso anche il bottone "Esplora tutti i Progetti" qui per la trasparenza richiesta */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};