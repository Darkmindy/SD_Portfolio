import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaLocationPin, FaGlobe, FaDownload } from "react-icons/fa6";
import { FaInstagram, FaDribbble, FaBehance, FaLinkedinIn, FaGithub, FaBriefcase, FaCode, FaGraduationCap, FaTools } from "react-icons/fa";
import FloatingThemeToggle from "@/components/ui/FloatingThemeToggle";
import cvPdf from '@/assets/StefaniaDeliso_CV_GraficaFrontEnd.pdf';

// Import delle immagini
import emmeLogo from '@/assets/icons/emme.jpeg';
import evolutionLogo from '@/assets/icons/evolution.jpeg';
import texxoLogo from '@/assets/icons/texxo.jpeg';
import iproLogo from '@/assets/icons/ipro.jpeg';
import profilePic from '@/assets/me.jpg';


type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  color: string;
  initials: string; 
  technologies?: string[];
  icon: string; 
};

const experiences: Experience[] = [
  {
    title: "Web Designer",
    company: "Emmé Pubblicità",
    period: "Lug 2024 - Feb 2025",
    location: "Gravina di Catania",
    description: "Creavo siti web in WordPress usando l'editor Gutenberg, riproducendo design precisi fatti con Figma. Mi occupavo della grafica per i social media di cinque brand, usando Canva e Meta Business Suite.",
    color: "purple",
    initials: "EP",
    icon: emmeLogo 
  },
  {
    title: "Web Designer",
    company: "Evolution Tech",
    period: "Giu 2024 - Ott 2024",
    location: "Remote",
    description: "Aggiornamento e modifica di siti web esistenti, miglioramento di temi, contenuti e ottimizzazione delle performance per velocità di caricamento.",
    color: "red",
    initials: "ET",
    icon: evolutionLogo
  },
  {
    title: "Web Designer",
    company: "Texxo Italia",
    period: "Gen 2021 - Gen 2022",
    location: "Remote",
    description: "Ho costruito e gestito 3 siti aziendali con WordPress. Coordinamento del progetto 'Sfera of Social' includendo sviluppo sito web e gestione social media.",
    color: "blue",
    initials: "TI",
    icon: texxoLogo
  },
  {
    title: "Web Designer",
    company: "IPro Comunicazione",
    period: "Mar 2020",
    location: "Catania",
    description: "Aggiornamento contenuti frontend/backend in Joomla e creazione di progetti di sensibilizzazione (brochure, social media design). Sviluppo della presenza grafica sui social media aziendali.",
    color: "orange",
    initials: "iPC",
    icon: iproLogo
  }
];

const skillCategoriesData = {
  design: {
    title: "Design",
    items: ["Wireframing", "Prototyping", "UI/UX Testing", "Design System"]
  },
  frontend: {
    title: "Frontend Development",
    items: ["React JS", "TypeScript", "Next.js", "HTML/CSS", "JavaScript"]
  },
  styling: {
    title: "Styling & Frameworks",
    items: ["TailwindCSS", "Material UI", "Framer Motion", "Responsive Design"]
  },
  tools: {
    title: "Tools",
    items: ["Figma", "Canva", "Vite.js", "Netlify", "Photoshop", "Vercel", "Adobe Photoshop", "VS Code", "WordPress", "GitHub"]
  },
  languages: {
    title: "Lingue",
    items: [
      { name: "Italiano", level: "Madrelingua", abbr: "IT", color: "green" },
      { name: "English", level: "Professionale", abbr: "EN", color: "blue" }
    ]
  }
};

const education = [
  {
    title: "Front End Development Course",
    institution: "ITS Steve Jobs Academy",
    period: "Nov 2023 - Giu 2024",
    description: "Corso professionale focalizzato sullo sviluppo web frontend.",
    initials: "ITS",
    color: "red"
  },
  {
    title: "React TypeScript Developer",
    institution: "Opinno Italy",
    period: "Mar 2024",
    description: "Certificazione nello sviluppo React con TypeScript.",
    initials: "O",
    color: "green"
  },
  {
    title: "Foundations of User Experience (UX) Design",
    period: "Feb 2025",
    description: "Corso sulle basi della User Experience Design.",
    initials: "C",
    color: "blue"
  }
];

// --- COMPONENTE CV ---
const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white flex relative">
      {/* FloatingThemeToggle per il cambio di tema */}
      <div className="absolute top-4 right-4 z-10">
        <FloatingThemeToggle />
      </div>

      {/* Sidebar sinistra */}
      <div className="w-80 bg-white dark:bg-slate-800 shadow-lg p-8 flex flex-col h-fit sticky top-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-purple-200 dark:ring-purple-800">
            <img src={profilePic} alt="Stefania Deliso" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stefania Deliso</h1>
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-1">Front End Developer</p>
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Graphic Designer</p>
        </div>

        {/* Quote */}
        <div className="mb-8 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
            "People ignore design that ignores people."
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 font-medium">— Frank Kimero</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Contatti</h3>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
              <FaEnvelope className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
              <p className="text-sm text-gray-900 dark:text-white font-medium">stefania.deliso1@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
              <FaGlobe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Website</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium break-all">https://stefania-dev-portfolio.netlify.app</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
              <FaPhone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Telefono</p>
              <p className="text-sm text-gray-900 dark:text-white font-medium">(+39) 324 7860 089</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
              <FaLocationPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Località</p>
              <p className="text-sm text-gray-900 dark:text-white font-medium">Catania, Italy</p>
            </div>
          </div>
        </div>

        {/* Pulsante Scarica CV */}
        <div className="flex justify-center mt-auto mb-8">
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-colors duration-300 shadow-lg">
            <a href={cvPdf} download="StefaniaDeliso_CV_GraficaFrontEnd.pdf">
              <FaDownload className="w-4 h-4 mr-2" />
              Scarica CV
            </a>
          </Button>
        </div>

        {/* Social con icone fa6 */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Social</h3>
          <div className="space-y-3">
            {/* Instagram */}
            <a href="https://www.instagram.com/stefania_d91/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
              <FaInstagram className="w-5 h-5 text-pink-500" />
              <span className="text-sm text-gray-900 dark:text-white">@stefania_d91</span>
            </a>
            {/* Dribbble */}
            <a href="https://dribbble.com/stefania_d91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
              <FaDribbble className="w-5 h-5 text-pink-500" /> {/* Icona FaDribbble */}
              <span className="text-sm text-gray-900 dark:text-white">/stefania_d91</span>
            </a>
            {/* Behance */}
            <a href="https://www.behance.net/stefaniad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
              <FaBehance className="w-5 h-5 text-blue-600" /> {/* Icona FaBehance */}
              <span className="text-sm text-gray-900 dark:text-white">/stefaniad</span>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/stefaniad91/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
              <FaLinkedinIn className="w-5 h-5 text-blue-500" /> {/* Icona FaLinkedinIn */}
              <span className="text-sm text-gray-900 dark:text-white">/stefaniad91</span>
            </a>
            {/* GitHub (mantenuto da lucide-react perché più comune nel mondo dev) */}
            <a href="https://github.com/Darkmindy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
              <FaGithub className="w-5 h-5 text-gray-900 dark:text-white" /> {/* Icona FaGithub */}
              <span className="text-sm text-gray-900 dark:text-white">/Darkmindy</span>
            </a>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Lingue</h3>
          <div className="space-y-4">
            {skillCategoriesData.languages.items.map((lang, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-8 h-5 bg-${lang.color}-600 rounded-sm flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{lang.abbr}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{lang.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content (colonna di destra) */}
      <div className="flex-1 bg-gray-50 dark:bg-slate-900 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Esperienza Lavorativa */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FaBriefcase className="w-7 h-7 text-purple-600" /> Esperienza Lavorativa
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className={`bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 border-l-4 border-l-${exp.color}-500`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Qui usiamo un tag <img> per la tua immagine personalizzata */}
                      <div className={`w-16 h-16 bg-${exp.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 p-2`}> {/* Aggiunto padding per l'immagine */}
                        <img src={exp.icon} alt={`${exp.company} logo`} className="w-full h-full object-contain" /> {/* object-contain per non tagliare l'immagine */}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                            <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-medium`}>{exp.company}</p>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                            <span className={`bg-${exp.color}-100 dark:bg-${exp.color}-900/50 text-${exp.color}-700 dark:text-${exp.color}-300 text-xs px-3 py-1 rounded-full`}>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.technologies && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className={`inline-block px-3 py-1 bg-${exp.color}-100 dark:bg-${exp.color}-900/50 text-${exp.color}-700 dark:text-${exp.color}-300 text-xs rounded-full`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competenze (Skills) */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FaCode className="w-7 h-7 text-purple-600" /> Competenze
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Design Skills */}
              <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Design</h3>
                  <div className="space-y-2">
                    {skillCategoriesData.design.items.map((skill, index) => (
                      <span key={index} className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Frontend Development Skills */}
              <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
                  <div className="space-y-2">
                    {skillCategoriesData.frontend.items.map((skill, index) => (
                      <span key={index} className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Styling & Frameworks Skills */}
              <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Styling & Frameworks</h3>
                  <div className="space-y-2">
                    {skillCategoriesData.styling.items.map((skill, index) => (
                      <span key={index} className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools Skills */}
              <Card className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaTools className="w-5 h-5 text-gray-600 dark:text-gray-400" /> Strumenti
                  </h3>
                  <div className="space-y-2">
                    {skillCategoriesData.tools.items.map((skill, index) => (
                      <span key={index} className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-sm rounded-full mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Formazione (Education) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <FaGraduationCap className="w-7 h-7 text-purple-600" /> Formazione
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                  <CardContent className="p-6 text-center">
                    {/* Qui potresti decidere se mettere un'icona o mantenere le iniziali */}
                    <div className={`w-16 h-16 bg-${edu.color}-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                      {edu.initials}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mt-2">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;