import { motion } from "framer-motion";
import { Container } from "../components/layout/Container";
import Logo from "../assets/logo.png";
import { FaArrowDown } from "react-icons/fa6";
import Avatar from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-gradient-to-br from-sky-100 to-blue-200 dark:from-slate-900 dark:to-slate-800 text-primary dark:text-white"
    >
      <Container>
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-8"
          >
            <img
              src={Avatar}
              alt="Your Avatar"
              className="w-32 h-32"
            />
            {Logo && (
              <img
                src={Logo}
                alt="Logo Stefania Deliso"
                className="w-40 h-auto object-contain transition-transform duration-300 hover:scale-105" // Larghezza aumentata
              />
            )}
          </motion.div>

          <motion.h2
            className="text-4xl md:text-3xl font-nanum-pen font-bold text-cyan-700 dark:text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Front-End Developer | UI/UX Designer 🎨
          </motion.h2>

          <motion.div
            className="inline-block px-4 py-2 bg-yellow-300 text-black font-pixel text-xs rounded pixel-badge shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Ready to Code
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-cyan-600 dark:border-cyan-400 rounded-md text-cyan-800 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white transition font-mono"
            >
              Esplora il portfolio
              <FaArrowDown className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
