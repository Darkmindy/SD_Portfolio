import { Container } from '../components/layout/Container';
import SectionIntro from '../components/layout/SectionIntro';

const blogPosts = [
  {
    title: "React Hook Form e UseWatch",
    date: "Maggio 2025",
    link: "https://www.linkedin.com/posts/stefaniad91_react19-reacthookform-usewatch-activity-7331259227702751234-hNwC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAByFgVwBq347oO98Zi3Q_rjVY4lbAyapuYM",
    description: "Utilizzo di React Hook Form e UseWatch per gestire il form di registrazione."
  },
  {
    title: "React 19 e il nuovo Compiler",
    date: "Maggio 2025",
    link: "https://www.linkedin.com/posts/stefaniad91_reactjs-react19-frontenddevelopment-activity-7328115677951668228-1yEs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAByFgVwBq347oO98Zi3Q_rjVY4lbAyapuYM",
    description: "Introduzione alla nuova versione di React, React 19, e il suo nuovo Compiler."
  },
  {
    title: "React 19 e ForwardRef",
    date: "Maggio 2025",
    link: "https://www.linkedin.com/posts/stefaniad91_react19-typescript-reactcompiler-activity-7328508796929048576-1p1I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAByFgVwBq347oO98Zi3Q_rjVY4lbAyapuYM",
    description: "Utilizzo di ForwardRef per gestire il form di registrazione."
  }
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