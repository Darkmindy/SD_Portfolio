import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";

const FloatingThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 transition"
      aria-label="Toggle Theme"
    >
      {dark ? <BsSun size={20} /> : <BsMoonStarsFill size={20} />}
    </button>
  );
};

export default FloatingThemeToggle;
