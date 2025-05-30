// src/data/skillsData.ts

// Importa tutte le icone
import html from '@/assets/Icons/html.png';
import css from '@/assets/Icons/css.png';
import javascript from '@/assets/Icons/javascript.png';
import react from '@/assets/Icons/react.png';
import typescript from '@/assets/Icons/typescript.png';
import tailwindcss from '@/assets/Icons/tailwindcss.svg';
import figma from '@/assets/Icons/figma.svg';
import less from '@/assets/Icons/less.svg';
import expressJs from '@/assets/Icons/expressjs.svg';
import angular from '@/assets/Icons/angularjs.svg';
import nodeJs from '@/assets/Icons/node.png';
import mongoDb from '@/assets/Icons/mongo.png';
import git from '@/assets/Icons/git.png';
import github from '@/assets/Icons/github.png';
import vitejs from '@/assets/Icons/vite.png';
import bootstrap from '@/assets/Icons/bootstrap.png';
import adobe from '@/assets/Icons/adobe.svg';
import C from '@/assets/Icons/c.png';
import firebase from '@/assets/Icons/firebase.svg';
import wordpress from '@/assets/Icons/wordpress.svg';
import VsCode from '@/assets/Icons/vscode.png';
import Accessibility from '@/assets/Icons/accessibility.svg';
import CommandLine from '@/assets/Icons/window-terminal.svg';
import GenAI from '@/assets/Icons/ai.svg';

export interface Skill {
  name: string;
  icon: string;
  status?: 'Base' | 'In Crescita' | 'Ottimo'; // Tipizziamo meglio lo status
  category: 'Frontend' | 'Backend & Database' | 'Design & Strumenti' | 'Workflow & Innovazione';
}

export interface SoftSkill {
  phrase: string;
}

export const allHardSkills: Skill[] = [
  { name: 'Accessibilità', icon: Accessibility, category: 'Frontend' },
  { name: 'HTML', icon: html, category: 'Frontend' },
  { name: 'CSS', icon: css, category: 'Frontend' },
  { name: 'JavaScript', icon: javascript, category: 'Frontend' },
  { name: 'TypeScript', icon: typescript, category: 'Frontend' },
  { name: 'Angular', icon: angular, category: 'Frontend' },
  { name: 'React', icon: react, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: tailwindcss, category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend', icon: bootstrap },
  { name: 'Less', icon: less, category: 'Frontend' },
  { name: 'ViteJS', icon: vitejs, category: 'Frontend' },

  { name: 'NodeJS', icon: nodeJs, category: 'Backend & Database' },
  { name: 'ExpressJS', icon: expressJs, status: 'In Crescita', category: 'Backend & Database' },
  { name: 'MongoDB', icon: mongoDb, category: 'Backend & Database' },
  { name: 'Firebase', icon: firebase, category: 'Backend & Database' },
  { name: 'Wordpress', icon: wordpress, category: 'Backend & Database' },

  { name: 'Figma', icon: figma, status: 'Ottimo', category: 'Design & Strumenti' },
  { name: 'Adobe Creative Suite', icon: adobe, category: 'Design & Strumenti' },
  { name: 'Visual Studio Code', icon: VsCode, category: 'Design & Strumenti' },
  { name: 'Git', icon: git, category: 'Design & Strumenti' },
  { name: 'GitHub', icon: github, category: 'Design & Strumenti' },
  { name: 'C', icon: C, status: 'Base', category: 'Design & Strumenti' },

  { name: 'Command Line', icon: CommandLine, category: 'Workflow & Innovazione' },
  { name: 'Intelligenza Artificiale Generativa', icon: GenAI, status: 'In Crescita', category: 'Workflow & Innovazione' },
];

export const softSkillsPhrases: SoftSkill[] = [
  { phrase: 'Problem Solving' },
  { phrase: 'Attenzione ai Dettagli' },
  { phrase: 'Autonomia' },
  { phrase: 'Lavoro in Team' },
  { phrase: 'Gestione del Tempo' },
  { phrase: 'Rispetto delle Scadenze' },
  { phrase: 'Flessibilità' },
  { phrase: 'Adattabilità' },
  { phrase: 'Apprendimento Continuo' },
  { phrase: 'Comunicazione Efficace' },
];