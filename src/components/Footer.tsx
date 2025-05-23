import { FaGithubAlt, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-12 border-t-2 border-cyan-500 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Bio */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-block mb-4">
            <img
              src={logo}
              alt="Logo Stefania Deliso"
              className="w-28 h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>
          <p className="text-sm text-slate-400 font-mono max-w-md">
            Frontend developer & UI/UX designer con uno stile tra minimalismo moderno e vibes nerd. 👾
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Darkmindy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FaGithubAlt className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/stefaniad91/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Navigazione */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">Link Utili</h3>
          <ul className="space-y-2 text-sm font-mono text-slate-400">
            {["home", "projects", "skills", "about", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                  className="hover:text-cyan-400 transition"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">Contatti</h3>
          <ul className="space-y-3 text-sm text-slate-400 font-mono">
            <li className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2 text-cyan-400" />
              stefania.deliso1@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2 text-cyan-400" />
              +39 324 7860089
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm font-mono text-slate-500">
        <p>© {currentYear} Stefania Deliso. All rights reserved.</p>
        <p className="mt-1">Built with React, Vite & ❤️</p>
      </div>
    </motion.footer>
  );
}
