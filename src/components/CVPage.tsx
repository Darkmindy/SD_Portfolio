import { Container } from '@/components/layout/Container'; 
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedinIn, FaGithubAlt, FaDribbble, FaBehance } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

// Importa il tuo CV PDF se vuoi offrire un link di download
import cvPdf from '../assets/StefaniaDeliso_CV_GraficaFrontEnd.pdf'; 

export default function CVPage() {

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

  return (
    <section id="cv-page" className="min-h-screen py-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Container>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white dark:bg-slate-950 p-6 md:p-10 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800"
        >
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
              Stefania Deliso
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              Front End Developer + Graphic Designer
            </p>
            <p className="text-md md:text-lg text-slate-600 dark:text-slate-400 italic mt-4">
              "People ignore design that ignore people."  - Frank Chimero
            </p>
          </header>

          {/* Contatti e Social */}
          <motion.section
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mb-10 text-lg"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500 dark:text-blue-300" />
              <span>stefania.deliso1@gmail.com</span> 
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaGlobe className="text-blue-500 dark:text-blue-300" />
              <a href="https://stefania-dev-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-300">
                https://stefania-dev-portfolio.netlify.app
              </a> 
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaPhone className="text-blue-500 dark:text-blue-300" />
              <span>(+39) 324 7860 089</span> 
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-500 dark:text-blue-300" />
              <span>Catania, Italy</span> 
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaLinkedinIn className="text-blue-500 dark:text-blue-300" />
              <a href="https://www.linkedin.com/in/stefaniad91/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-300">
                /stefaniad91
              </a> 
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaGithubAlt className="text-blue-500 dark:text-blue-300" />
              <a href="https://github.com/Darkmindy/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-300">
                /Darkmindy
              </a> [cite: 3]
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaDribbble className="text-blue-500 dark:text-blue-300" />
              <a href="https://dribbble.com/stefania_d91" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-300">
                /stefania_d91
              </a> 
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaBehance className="text-blue-500 dark:text-blue-300" />
              <a href="https://www.behance.net/stefania_d" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-300">
                /stefania_d
              </a> 
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <FaDownload className="text-blue-500 dark:text-blue-300" />
              <a
                href={cvPdf}
                download="StefaniaDeliso_CV_GraficaFrontEnd.pdf"
                className="hover:underline text-blue-500 dark:text-blue-300"
              >
                Download CV (PDF)
              </a>
            </motion.div>
          </motion.section>

          {/* Sezione Esperienza */}
          <motion.section
            variants={sectionVariants}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-6">Experience</h2>
            <div className="space-y-6">
              {/* Esperienza 1: EM Web Designer - Emmé Pubblicità */}
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Front End Developer - Web Designer - Emmé Pubblicità
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">
                  Lug 2024 - Feb 2025 | Gravina di Catania 
                </p>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>Creavo siti web in WordPress usando l'editor Gutenberg, riproducendo design precisi fatti con Figma. [cite: 5]</li>
                  <li>Mi occupavo della grafica per i social media di cinque brand, usando Canva e Meta Business Suite. [cite: 5]</li>
                </ul>
              </motion.div>

              {/* Esperienza 2: Web Designer - Evolution Tech */}
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Web Designer - Evolution Tech
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">
                  Giu 2024 - Giu 2024 | Remote 
                </p>
                {/* Aggiungi dettagli se disponibili */}
              </motion.div>

              {/* Esperienza 3: Web Designer - Texxo Italia */}
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Web Designer - Texxo Italia
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">
                  Gen 2021 - Gen 2022 | Remote 
                </p>
                {/* Aggiungi dettagli se disponibili */}
              </motion.div>

              {/* Esperienza 4: Web Designer - IPro Comunicazione */}
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Web Designer - IPro Comunicazione
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">
                  Gen 2020 - Mar 2020 | Catania 
                </p>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                  <li>Aggiornavo e modificavo un sito web esistente migliorando temi, contenuti e velocità. [cite: 1]</li>
                  <li>Ho costruito e gestito il sito aziendale www.aziendedeccellenza.it con WordPress. [cite: 1]</li>
                  <li>Ho seguito il progetto "Stars of Social" (sito e social media). [cite: 1]</li>
                  <li>Ho contribuito ad aggiungere contenuti sul sito web fierodiesseresiciliani.it in Joomla e creato progetti di sensibilizzazione (es: "lorestoacasa Sicilia edition"). [cite: 1]</li>
                  <li>Ho creato format grafici per social media dell'azienda. [cite: 1]</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Sezione Education */}
          <motion.section
            variants={sectionVariants}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-6">Education</h2>
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Front End Development course
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">ITS Steve Jobs Academy</p> [cite: 6]
                <p className="text-sm text-slate-500 dark:text-slate-400">Nov 2023 - Mar 2024</p> [cite: 6]
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  React TypeScript Developer course
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">Opinno Italy</p> [cite: 6]
                <p className="text-sm text-slate-500 dark:text-slate-400">Feb 2025 - (In corso)</p> [cite: 6]
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Foundations of User Experience (UX) Design
                </h3>
                <p className="text-md text-slate-600 dark:text-slate-400">Coursera</p> [cite: 6]
                <p className="text-sm text-slate-500 dark:text-slate-400">Feb 2025</p> [cite: 6]
              </motion.div>
            </div>
          </motion.section>

          {/* Sezione Skills */}
          <motion.section
            variants={sectionVariants}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 text-lg">
                <motion.div variants={itemVariants}><span className="font-semibold">Web Design</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Mobile Design</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">User Experience</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Wireframing</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Prototyping</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Testing</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Design System</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">React JS</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Material UI</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">TailwindCSS</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Framer</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">CSS</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">TypeScript</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">Next JS</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">HTML</span></motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">JS</span></motion.div> 
            </div>
          </motion.section>

          {/* Sezione Tools */}
          <motion.section
            variants={sectionVariants}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-6">Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 text-lg">
                <motion.div variants={itemVariants}>Figma</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>Canva</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>Vite.js</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>Netlify</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>Adobe Photoshop</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>VS Code</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>WordPress</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>GitHub</motion.div> [cite: 6]
                <motion.div variants={itemVariants}>Vercel</motion.div> [cite: 6]
            </div>
          </motion.section>

          {/* Sezione Languages */}
          <motion.section
            variants={sectionVariants}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold border-b-2 border-blue-500 dark:border-blue-400 pb-2 mb-6">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 text-lg">
                <motion.div variants={itemVariants}><span className="font-semibold">Italian:</span> Native</motion.div> 
                <motion.div variants={itemVariants}><span className="font-semibold">English:</span> Professional working</motion.div> 
            </div>
          </motion.section>

          {/* Torna alla Home */}
          <div className="text-center mt-12">
            <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold">
              Torna alla Home
            </a>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}