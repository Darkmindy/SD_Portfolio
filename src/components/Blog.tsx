import { Container } from '../components/layout/Container';

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
  <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900 text-primary dark:text-white">
    <Container>
      <h2 className="text-3xl font-bold text-center font-serif mb-12">📝 Blog & Risorse</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{post.description}</p>
          </a>
        ))}
      </div>
    </Container>
  </section>
);
