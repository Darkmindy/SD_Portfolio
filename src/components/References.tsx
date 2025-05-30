import { Container } from '../components/layout/Container'; 
import SectionIntro from '../components/layout/SectionIntro';
import { motion } from 'framer-motion';

const references = [
  {
    name: "Fabio Lanzafame",
    role: "Staff Software Engineer",
    text: "Stefania ha una capacità innata di guidare gli altri. Sempre presente, attenta e sul pezzo. Ha assimilato le basi per iniziare questo percorso. Attenta allo stile (HTML - CSS) e alla logica di manipolazione (Typescript). Ha iniziato a muovere i primi passi su React, assimilando i principi della programmazione 'component based'. A mio parere si configura come ottimo candidato per team di programmazione basati su Agile Development. Notevole e lodevole l'impegno che ci mette.",
  },
  {
    name: "Vincenzo Magnano",
    role: "Studente Front End Developer @ Steve Jobs Academy",
    text: "Ho conosciuto Stefania durante il corso Front End Developer in Steve Jobs Academy. E' una persona molto attiva e posso senz'altro dire di quanto sia solare e pronta a strappare un sorriso in classe, ma posso anche dire di quanto lei sia preparata non solo in questo ambito ma anche in molti altri. È una persona che riesce a fare mille cose tra cui imparare velocemente tutto ciò che c'era da sapere per quanto riguarda lo sviluppo Front End. È senz'altro portata per la programmazione e riesce sempre ad essere un'aiuto per ogni cosa le si chieda. Sicuramente in azienda farai la differenza!",
  },
];

export const References = () => {
  // Varianti per l'animazione delle card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03, // Leggero ingrandimento all'hover
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)", // Ombra più intensa
      y: -5, // Leggero sollevamento
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  return (
    <section id="references" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      <Container>
        <SectionIntro
          title={
            <>
              💬 Le mie <span className="gradient-text">Referenze</span>
            </>
          }
          description="Scopri cosa dicono di me sui progetti realizzati insieme."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12"> {/* Aumentato il gap e aggiunto margin-top */}
          {references.map((ref, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Animazione quando la card entra nella vista
              viewport={{ once: true, amount: 0.3 }} // L'animazione parte una sola volta quando il 30% dell'elemento è visibile
              whileHover="hover"
              className="relative bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-transparent
                         hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 ease-in-out" // Stile delle card
            >
              <p className="italic mb-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="text-3xl font-serif mr-1 leading-none inline-block align-bottom">“</span>
                {ref.text}
                <span className="text-3xl font-serif ml-1 leading-none inline-block align-top">”</span>
              </p>
              <p className="font-bold text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-1">{ref.name}</p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{ref.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};