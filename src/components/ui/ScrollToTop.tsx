import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-6 z-50 bg-yellow-300 text-black p-3 rounded-full border-2 border-black shadow-md hover:scale-110 transition-transform"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  );
};

export default ScrollToTop;
