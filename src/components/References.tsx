import { Container } from '../components/layout/Container';

const references = [
  {
    name: "Giulia Rossi",
    role: "Project Manager @ CreativeStudio",
    text: "Stefania ha una mente creativa e un occhio attento al dettaglio. I suoi progetti sono sempre puntuali e professionali.",
  },
  {
    name: "Marco Bianchi",
    role: "Senior Developer @ DevHub",
    text: "Collaborare con lei è stato semplice: design intuitivo, codice pulito e grande capacità di problem solving.",
  },
];

export const References = () => (
  <section id="references" className="py-20 bg-white dark:bg-slate-950 text-primary dark:text-white">
    <Container>
      <h2 className="text-3xl font-bold text-center font-serif mb-12">💬 Referenze</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {references.map((ref, i) => (
          <div key={i} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow">
            <p className="italic mb-4">“{ref.text}”</p>
            <p className="font-semibold">{ref.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{ref.role}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
