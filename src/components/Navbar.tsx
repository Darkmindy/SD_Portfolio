import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md p-4 flex justify-between items-center z-50"
    >
      <a href="/" className="focus:outline-none">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
      </a>
      <ul className="flex gap-4 items-center">
        <li>
          <a
            href="https://github.com/darkmindy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 dark:text-white hover:text-cyan-500 transition"
          >
            <FaGithub className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/stefaniad91/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 dark:text-white hover:text-cyan-500 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
