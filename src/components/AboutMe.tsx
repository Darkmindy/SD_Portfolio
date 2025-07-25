import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { ArrowRight, Download, Sparkles, Code, Palette } from 'lucide-react';

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

const carouselImages = [
  { src: designProject1, title: "Branding Aziendale", description: "Logo e identità visiva completa" },
  { src: designProject2, title: "Web Design", description: "UI/UX per applicazioni moderne" },
  { src: designProject3, title: "Print Design", description: "Materiale pubblicitario stampato" },
  { src: designProject4, title: "Social Media", description: "Grafica per campagne social" },
  { src: designProject5, title: "Packaging", description: "Design per prodotti consumer" },
  { src: designProject6, title: "Editorial Design", description: "Layout per pubblicazioni" },
  { src: designProject7, title: "Motion Graphics", description: "Animazioni e video design" },
  { src: designProject8, title: "Illustration", description: "Illustrazioni personalizzate" },
  { src: designProject9, title: "App Interface", description: "Design per mobile app" },
  { src: designProject10, title: "Corporate Identity", description: "Sistemi di identità aziendale" },
  { src: designProject11, title: "Event Design", description: "Grafica per eventi e fiere" },
  { src: designProject12, title: "E-commerce Design", description: "Interfacce per shop online" },
  { src: designProject13, title: "Brand Guidelines", description: "Manuali di brand identity" }
];

const skills = [
  { icon: Palette, label: "10 anni di Design", color: "from-pink-500 to-rose-500" },
  { icon: Code, label: "2 anni di Frontend", color: "from-blue-500 to-cyan-500" },
  { icon: Sparkles, label: "Visione Completa", color: "from-purple-500 to-violet-500" }
];

export const AboutMe = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Blocco di testo "Chi Sono" - Colonna di sinistra */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                <Sparkles className="w-4 h-4" />
                La mia storia
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-800 dark:text-white leading-tight">
              La mia{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                evoluzione
              </span>{' '}
              creativa
            </h2>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <skill.icon className="w-4 h-4" />
                  {skill.label}
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative pl-6 border-l-4 border-gradient-to-b from-blue-500 to-purple-500"
              >
                <span className="absolute left-[-8px] top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Ho iniziato il mio percorso 10 anni fa come <strong className="text-blue-600 dark:text-blue-400 font-bold">graphic designer</strong>,
                sviluppando una passione profonda per la comunicazione visiva e il branding.
                Ogni progetto è stato un'opportunità per esplorare nuove frontiere creative.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative pl-6 border-l-4 border-gradient-to-b from-purple-500 to-pink-500"
              >
                <span className="absolute left-[-8px] top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                Negli ultimi 2 anni ho abbracciato il mondo del <strong className="text-purple-600 dark:text-purple-400 font-bold">frontend development</strong>,
                unendo la mia sensibilità estetica alle competenze tecniche. Questa fusione mi permette di
                creare esperienze digitali complete e coinvolgenti.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl font-medium bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
              >
                Oggi sono in grado di seguire un progetto dalla{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  concezione creativa
                </span>{' '}
                fino alla{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                  realizzazione tecnica
                </span>
                , garantendo coerenza e qualità in ogni fase del processo.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Parliamone
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
              
              <a
                href="/CV_Stefania_D_FE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-2xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-transparent hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Vedi il mio CV
              </a>
            </motion.div>
          </motion.div>

          {/* Blocco Carosello Portfolio Grafico - Colonna di destra */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center py-8 lg:py-0"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] border border-blue-200 dark:border-blue-800 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute w-[500px] h-[500px] border border-purple-200 dark:border-purple-800 rounded-full animate-spin-slow-reverse opacity-10"></div>
            </div>

            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCards]}
                effect="cards"
                grabCursor={true}
                autoplay={{ 
                  delay: 3500, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true 
                }}
                loop={true}
                cardsEffect={{
                  slideShadows: true,
                }}
                className="mySwiper w-full h-full relative z-10"
              >
                {carouselImages.map((project, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="relative w-full h-full group overflow-hidden">
                      <div className="w-full h-full p-4 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                        <img
                          src={project.src}
                          alt={`${project.title} - ${project.description}`}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-md"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-black/70 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20">
                          <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                          <p className="text-xs text-slate-200 leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl rotate-12 opacity-80 blur-sm"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-16 left-0 w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl rotate-45 opacity-60 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};