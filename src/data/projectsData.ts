// src/data/projectsData.ts

import DuckList from '@/assets/Projects/DuckList.png';
import ProjectWork from '@/assets/Projects/Project-Work.png';
import TicTacToe from '@/assets/Projects/Tic-tac-toe.png';
import FirstPortfolio from '@/assets/Projects/MyPortfolio.png';
import MyBusinessCard from '@/assets/Projects/MyBusinessCard.png';
import SoulFarm from '@/assets/Projects/SoulFarm.png';
import GoodGen from '@/assets/Projects/FeelGood.png';

export type ProjectCategory = 'web-development' | 'ui-ux-design' | 'branding' | 'mobile-design' | 'games' | 'other';

export interface Project {
    id: number;
    title: string;
    description: string; // Breve descrizione per la card
    longDescription?: string; // Descrizione più lunga per la modal
    imageUrl: string;
    technologies: string[]; // Unificato 'tech' e 'stack'
    category: ProjectCategory; // Per il filtraggio
    type: 'Development' | 'Design'; // Per il tag visivo
    liveUrl?: string; // Link alla demo live
    repoUrl?: string; // Link al repository GitHub
}

export const projects: Project[] = [
    {
        id: 1,
        title: "SoulFarm Replica - Website",
        description: "Replica frontend di un sito WordPress esistente, un vero banco di prova per le mie competenze.",
        longDescription: "Questo progetto ha rappresentato un'ottima sfida per replicare fedelmente un sito WordPress esistente, concentrandomi sulla fedeltà del design e sulla reattività. Ho applicato principi di sviluppo moderno per ottimizzare le performance.",
        imageUrl: SoulFarm,
        technologies: ['React', 'Vite', 'TypeScript', 'TailwindCSS'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/soulfarm-react/',
        repoUrl: 'https://github.com/Darkmindy/soulfarm-react',
    },
    {
        id: 2,
        title: 'First Portfolio 👩🏻‍💻',
        description: 'Il mio primo prototipo di sito portfolio, un progetto fondamentale per consolidare le basi.',
        longDescription: 'Questo è stato il mio primo tentativo di creare un sito portfolio, un progetto "scolastico" che mi ha permesso di esplorare le basi di React e l\'integrazione con Material-UI, segnando l\'inizio del mio percorso nel frontend.',
        imageUrl: FirstPortfolio,
        technologies: ['React', 'Material-UI', 'TypeScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://stefaniadeliso.netlify.app',
        repoUrl: 'https://github.com/Darkmindy/Stefania_D-portfolio-site.git',
    },
    {
        id: 3,
        title: 'DuckList - To-Do App 🦆',
        description: 'Una divertente to-do list con le paperelle, per organizzare le attività quotidiane.',
        longDescription: 'Questo progetto è stato realizzato utilizzando React, Bootstrap e TypeScript. L\'applicazione offre una lista di elementi da fare, con funzionalità complete di aggiunta, rimozione e marcatura come completato. L\'aggiunta delle paperelle la rende unica e giocosa!',
        imageUrl: DuckList,
        technologies: ['React', 'Bootstrap', 'TypeScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/DuckList/',
        repoUrl: 'https://github.com/Darkmindy/DuckList',
    },
    {
        id: 4,
        title: 'Project Work - Study Case',
        description: 'Un progetto di studio e pratica per l\'applicazione di concetti avanzati di sviluppo.',
        longDescription: 'Questo "Project Work" è stato un esercizio di applicazione pratica delle conoscenze acquisite, concentrandomi sull\'integrazione di diverse librerie e sulla gestione dello stato in un\'applicazione React.',
        imageUrl: ProjectWork,
        technologies: ['React', 'Bootstrap', 'TypeScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/Project-Work/',
        repoUrl: 'https://github.com/Darkmindy/Project-Work',
    },
    {
        id: 5,
        title: 'Tic-tac-toe 🎮 - Game',
        description: 'Il classico gioco Tic-tac-toe (Tris) arricchito con suoni ed emoji per un\'esperienza divertente.',
        longDescription: 'Questo progetto ricrea il classico gioco Tic-Tac-Toe, ma con un tocco moderno e interattivo. Ho implementato effetti sonori e l\'uso di emoji per rendere il gameplay più coinvolgente e visivamente accattivante.',
        imageUrl: TicTacToe,
        technologies: ['React', 'CSS', 'JavaScript'],
        category: 'games',
        type: 'Development',
        liveUrl: 'https://board-game-sd.netlify.app',
        repoUrl: 'https://github.com/Darkmindy/Tic-tac-toe',
    },
    {
        id: 6,
        title: 'My Business Card - HTML/CSS',
        description: 'Una semplice business card digitale creata con HTML e CSS.',
        longDescription: 'Questo è un progetto base per dimostrare le competenze fondamentali di HTML e CSS, creando un design pulito e responsivo per una business card digitale.',
        imageUrl: MyBusinessCard,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/MyBusinessCard/',
        repoUrl: 'https://github.com/Darkmindy/MyBusinessCard',
    },
    {
        id: 7,
        title: 'Feel Good Factory - Mood Booster',
        description: 'Un semplice generatore di frasi motivazionali per aiutarti a mantenere la motivazione.',
        longDescription: 'Questo progetto mi ha permesso di esplorare le basi di React e l\'implementazione di un generatore di frasi motivazionali per aiutarti a mantenere la motivazione.',
        imageUrl: GoodGen,
        technologies: ['React', 'Vite', 'CSS', 'TypeScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/GoodWords-Generator/',
        repoUrl: 'https://github.com/Darkmindy/GoodWords-Generator',
    },
    {
        id: 8,
        title: 'Egg Timer Master',
        description: 'Un timer interattivo per cucinare le uova alla perfezione! 🍳',
        longDescription: 'Questo progetto mi ha permesso di esplorare le basi di React e l\'implementazione di un timer interattivo per cucinare le uova alla perfezione.',
        imageUrl: EggTimer,
        technologies: ['HTML', 'CSS', 'React', 'TypeScript', 'Vite'],
        category: 'web-development',        
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/MyPortfolio/',
        repoUrl: 'https://github.com/Darkmindy/egg-timer-app',
    }
];