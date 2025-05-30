import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// IMPORTA QUI LE TUE IMMAGINI PER IL CAROSELLO ^^
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
import designProject13 from '@/assets/portfolio/design_project_13.jpg';

const carouselImages = [designProject1, designProject2, designProject3, designProject4, designProject5, designProject6, designProject7, designProject8, designProject9, designProject10, designProject11, designProject12, designProject13];

export const AboutMe = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl"> {/* Riporto max-w-5xl per coerenza con altre sezioni */}
        <div className="grid md:grid-cols-2 gap-12 items-center"> {/* items-center per allineare verticalmente */}
          {/* Blocco di testo "Chi Sono" - Colonna di sinistra */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800 dark:text-white">
              La mia <span className="gradient-text">evoluzione</span> creativa
            </h2>
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                Ho iniziato il mio percorso 10 anni fa come <strong className="text-blue-600 dark:text-blue-400">graphic designer</strong>,
                sviluppando una passione profonda per la comunicazione visiva e il branding.
                Ogni progetto è stato un'opportunità per esplorare nuove frontiere creative.
              </p>
              <p>
                Negli ultimi 2 anni ho abbracciato il mondo del <strong className="text-blue-600 dark:text-blue-400">frontend development</strong>,
                unendo la mia sensibilità estetica alle competenze tecniche. Questa fusione mi permette di
                creare esperienze digitali complete e coinvolgenti.
              </p>
              <p>
                Oggi sono in grado di seguire un progetto dalla <span className="gradient-text font-semibold">concezione creativa </span> {' '}
                fino alla <span className="gradient-text font-semibold"> realizzazione tecnica</span>, garantendo
                coerenza e qualità in ogni fase del processo.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
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
            className="relative flex justify-center items-center py-4 md:py-0" 
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"> {/* Contenitore del carosello con dimensioni fisse */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCards]}
                effect={"cards"}
                grabCursor={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper w-full h-full"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    // Mantengo le stesse classi di prima che sembravano funzionare per te
                    className="flex justify-center items-center rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Design Project ${index + 1}`}
                      className="w-full h-full object-contain" // Riportato a object-contain
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};