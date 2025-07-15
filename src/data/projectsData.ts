// src/data/projectsData.ts

import DuckList from '@/assets/Projects/DuckList.png';
import ProjectWork from '@/assets/Projects/Project-Work.png';
import TicTacToe from '@/assets/Projects/Tic-tac-toe.png';
import FirstPortfolio from '@/assets/Projects/MyPortfolio.png';
import MyBusinessCard from '@/assets/Projects/MyBusinessCard.png';
import SoulFarm from '@/assets/Projects/SoulFarm.png';
import GoodGen from '@/assets/Projects/FeelGood.png';
import EggTimer from '@/assets/Projects/EggTimer.png';
import ElysianCup from '@/assets/Projects/New-Elysian-Cup.png';
import ElysianCupImage1 from '@/assets/Projects/ElysianCup/ElysianCupImage1.jpg';
//import ElysianCupImage2 from '@/assets/Projects/ElysianCup/ElysianCupImage2.jpg';
import ElysianCupImage3 from '@/assets/Projects/ElysianCup/ElysianCupImage3.jpg';
import ElysianCupImage4 from '@/assets/Projects/ElysianCup/ElysianCupImage4.jpg';
import ElysianCupImage5 from '@/assets/Projects/ElysianCup/ElysianCupImage5.jpg';
import ElysianCupImage6 from '@/assets/Projects/ElysianCup/ElysianCupImage6.jpg';
import ElysianCupImage7 from '@/assets/Projects/ElysianCup/ElysianCupImage7.jpg';
import ElysianCupImage8 from '@/assets/Projects/ElysianCup/ElysianCupImage8.jpg';

export type ProjectCategory = 'web-development' | 'ui-ux-design' | 'branding' | 'mobile-design' | 'games' | 'other';

export interface Project {
    id: number;
    title: string;
    description: string; // Breve descrizione per la card
    longDescription?: string; // Descrizione più lunga per la modal
    imageUrl?: string;
    images?: string[]; // Array di immagini per il carosello
    technologies: string[]; // Unificato 'tech' e 'stack'
    category: ProjectCategory; // Per il filtraggio
    type: 'Development' | 'Design'; // Per il tag visivo
    liveUrl?: string; // Link alla demo live
    repoUrl?: string; // Link al repository GitHub
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Elysian Cup",
        description: "Un'app di gestione per un torneo di fantacalcio, con un'interfaccia intuitiva e funzionalità avanzate di gestione del mercato.",
        longDescription: "Ho contribuito a questo progetto (fork) sviluppando integralmente la sezione del **Mercato**. Le mie responsabilità includevano la creazione della schermata, l'implementazione della logica di acquisto e vendita (con una valuta interna, i Fanta Punti), e lo sviluppo di filtri e funzionalità di ricerca dinamica per i giocatori. Ho usato **TypeScript** per garantire la solidità del codice e gestito in modo pulito lo stato dell'applicazione, dimostrando la mia capacità di integrare nuove funzionalità in un progetto esistente.",
        imageUrl: ElysianCup,
        images: [
        ElysianCupImage1,
        //ElysianCupImage2,
        ElysianCupImage3,
        ElysianCupImage4,
        ElysianCupImage5,
        ElysianCupImage6,
        ElysianCupImage7,
        ElysianCupImage8
    ],
        technologies: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'React Icons'],
        category: 'web-development',
         type: 'Development',
        liveUrl: '',
        repoUrl: 'https://github.com/Darkmindy/ElysianCup',
    },
    {
        id: 2,
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
        id: 3,
        title: 'Cooking Egg Master 🍳⏱️',
        description: 'Un timer interattivo per cucinare le uova alla perfezione! 🍳',
        longDescription: 'Questa non è solo una web app, ma una Progressive Web App (PWA), il che significa che puoi "installarla" direttamente sul tuo smartphone per usarla come una vera e propria applicazione, con la sua icona sulla schermata Home!',
        imageUrl: EggTimer,
        technologies: ['HTML', 'TailwindCSS', 'React', 'TypeScript', 'Vite'],
        category: 'web-development',        
        type: 'Development',
        liveUrl: 'https://cookingeggmaster.netlify.app',
        repoUrl: 'https://github.com/Darkmindy/egg-timer-app',
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
        title: 'My Business Card - HTML/CSS',
        description: 'Una semplice business card digitale creata con HTML e CSS.',
        longDescription: 'Questo è un progetto base per dimostrare le competenze fondamentali di HTML e CSS, creando un design pulito e responsivo per una business card digitale.',
        imageUrl: MyBusinessCard,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'web-development',
        type: 'Development',
        liveUrl: 'https://darkmindy.github.io/MyBusinessCard/',
        repoUrl: 'https://github.com/Darkmindy/MyBusinessCard',
    }
];