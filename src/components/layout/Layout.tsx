// src/components/Layout.tsx
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ui/ScrollToTop";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
  
    <div className="min-h-screen bg-white dark:bg-slate-950 text-primary dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="pt-20 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};