import { FaGithubAlt, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png"; // Assicurati che il percorso sia corretto

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset per tenere conto della Navbar fissa (se presente)
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
      className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 dark:border-blue-800/50" 
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-10 border-b border-slate-800 dark:border-blue-800/50"> 
        {/* Logo + Bio */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-block mb-6"> 
            <img
              src={logo}
              alt="Logo Stefania Deliso"
              className="w-32 h-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </a>
          <p className="text-base text-slate-400 font-sans leading-relaxed max-w-md"> 
            Frontend developer & UI/UX designer con uno stile tra minimalismo moderno e vibes nerd. 👾
          </p>
          <div className="flex space-x-5 mt-6"> 

            {/* Social Links con stile uniforme a Hero Section */}
            {[
              { icon: FaGithubAlt, href: "https://github.com/Darkmindy", label: "GitHub" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/stefaniad91/", label: "LinkedIn" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="sr-only">{label}</span>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigazione */}
        <div>
          <h3 className="text-xl font-semibold mb-5 gradient-text font-display">Link Utili</h3> 
          <ul className="space-y-3 text-base font-sans text-slate-300"> 
            {["home", "projects", "skills", "about", "references", "blog", "contact"].map((id) => ( 
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                  className="hover:text-blue-400 transition-colors duration-200 block" 
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-xl font-semibold mb-5 gradient-text font-display">Contattami</h3> 
          <ul className="space-y-3 text-base text-slate-300 font-sans"> 
            <li className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-3 text-blue-400" />
              <a href="mailto:stefania.devgdi@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                stefania.devgdi@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="w-5 h-5 mr-3 text-blue-400" /> 
              <a href="tel:+393247860089" className="hover:text-blue-400 transition-colors duration-200">
                +39 324 7860089
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 pt-6 text-center text-sm font-sans text-slate-500"> {/* Margine superiore uniforme, font sans */}
        <p>© {currentYear} Stefania Deliso. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built with React, Vite & <span className="text-red-500">❤️</span></p> {/* Leggero margine superiore e colore diverso per l'ultima riga */}
      </div>
    </motion.footer>
  );
}