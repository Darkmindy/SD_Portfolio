import { Container } from '../components/layout/Container';
import SectionIntro from '../components/layout/SectionIntro';

const blogPosts = [
  {
    title: "Perché la UX è fondamentale nel Front-End",
    date: "Maggio 2025",
    link: "https://www.linkedin.com/posts/stefaniad91_uxfrontend",
    description: "Breve riflessione su come un buon design UX migliora l'esperienza dell'utente e la qualità del codice."
  },
  {
    title: "Tailwind CSS: amore a prima vista",
    date: "Aprile 2025",
    link: "https://www.linkedin.com/posts/stefaniad91_tailwindcss",
    description: "5 motivi per cui Tailwind ha migliorato il mio workflow di sviluppo."
  },
];

export const Blog = () => (
  <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 text-primary dark:text-white"> {/* Allineo padding a sezioni precedenti */}
    <Container>
      {/* Utilizzo SectionIntro per il titolo e la descrizione */}
      <SectionIntro
        title={
          <>
            📝 Blog & <span className="gradient-text">Risorse</span>
          </>
        }
        description="Approfondimenti e riflessioni sulle mie esperienze nel mondo del design e dello sviluppo web."
      />
      {/* Il resto del contenuto rimane uguale */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" // Aggiungo transizione per l'ombra
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{post.title}</h3> {/* Aggiungo colore al titolo */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{post.description}</p>
          </a>
        ))}
      </div>
    </Container>
  </section>
);