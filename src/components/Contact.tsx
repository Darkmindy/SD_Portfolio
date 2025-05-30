import { Container } from '../components/layout/Container';
import SectionIntro from '../components/layout/SectionIntro';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-primary dark:text-white"> {/* Allineo padding a sezioni precedenti */}
      <Container>
        {/* Utilizzo SectionIntro per il titolo e la descrizione */}
        <SectionIntro
          title={
            <>
              Parliamone <span className="gradient-text">Insieme</span>
            </>
          }
          description="Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Contattami, sono qui per ascoltarti!"
        />
        {/* Il resto del contenuto rimane uguale */}
        <form
          action="https://formspree.io/forms/mwplykao" // Assicurati che questo sia l'ID corretto per il tuo Formspree
          method="POST"
          className="max-w-xl mx-auto space-y-6 mt-12" // Aggiungo un margine superiore per separare dal SectionIntro
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full p-3 rounded border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" // Miglioro lo stile e l'interattività
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" // Miglioro lo stile e l'interattività
            required
          />
          <textarea
            name="message"
            placeholder="Messaggio"
            rows={5}
            className="w-full p-3 rounded border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" // Miglioro lo stile e l'interattività
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5" // Rendo il bottone più accattivante e consistente
          >
            Invia Messaggio
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;