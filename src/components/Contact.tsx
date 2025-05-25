import { Container } from '../components/layout/Container';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 text-primary dark:text-white">
      <Container>
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Contattami</h2>
        <form
          action="https://formspree.io/forms/mwplykao"
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full p-3 rounded border border-slate-300 dark:bg-slate-800"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-slate-300 dark:bg-slate-800"
            required
          />
          <textarea
            name="message"
            placeholder="Messaggio"
            rows={5}
            className="w-full p-3 rounded border border-slate-300 dark:bg-slate-800"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded font-semibold"
          >
            Invia Messaggio
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
