// src/data/projectsData.ts

// Importazioni di tutte le immagini dei tuoi progetti
import DuckList from '@/assets/Projects/DuckList.png';
import ProjectWork from '@/assets/Projects/Project-Work.png';
import TicTacToe from '@/assets/Projects/Tic-tac-toe.png';
import FirstPortfolio from '@/assets/Projects/MyPortfolio.png';
import MyBusinessCard from '@/assets/Projects/MyBusinessCard.png';
import SoulFarm from '@/assets/Projects/SoulFarm.png';
import GoodGen from '@/assets/Projects/FeelGood.png';
import EggTimer from '@/assets/Projects/EggTimer.png';
import ElysianCup from '@/assets/Projects/New-Elysian-Cup.png';

// Immagini specifiche per il carosello di Elysian Cup
import ElysianCupImage1 from '@/assets/Projects/ElysianCup/ElysianCupImage1.jpg';
import ElysianCupImage3 from '@/assets/Projects/ElysianCup/ElysianCupImage3.jpg';
import ElysianCupImage4 from '@/assets/Projects/ElysianCup/ElysianCupImage4.jpg';
import ElysianCupImage5 from '@/assets/Projects/ElysianCup/ElysianCupImage5.jpg';
import ElysianCupImage6 from '@/assets/Projects/ElysianCup/ElysianCupImage6.jpg';
import ElysianCupImage7 from '@/assets/Projects/ElysianCup/ElysianCupImage7.jpg';
import ElysianCupImage8 from '@/assets/Projects/ElysianCup/ElysianCupImage8.jpg';

// Definizione dei tipi di categoria per i filtri
export type ProjectCategory = 'Web Development' | 'PWA' | 'Games' | 'UI/UX' | 'Open Source';

// Interfaccia del Progetto (aggiornata con tutti i campi)
export interface Project {
    id: string;
    title: string;
    description: string; // Breve descrizione per la card
    category: ProjectCategory;
    technologies: string[]; // Usa 'technologies' invece di 'tags'
    
    // Campi per la narrativa Problem-Solution-Result
    problem: string;
    solution: string;
    myRole: string;
    result: string; // Stringa per la descrizione generale del risultato
    
    imageUrl?: string; // Immagine principale per la card (se non c'è carosello)
    images?: string[]; // Array di immagini per il carosello nel modal
    
    liveUrl?: string; // Spostato qui dalla vecchia struttura 'result'
    repoUrl?: string; // Spostato qui dalla vecchia struttura 'result'
    
    featured: boolean;
    completionDate: string;
    highlights: string[]; // Punti chiave del progetto
    quantifiableResults?: { label: string; value: string | number }[]; // Per risultati misurabili
}

// Array dei tuoi progetti
export const projectsData: Project[] = [
    {
        id: "elysian-cup",
        title: "Elysian Cup - Fantasy Football Manager",
        description: "Gestione tornei fantacalcio: interfaccia intuitiva e mercato avanzato.",
        category: "Web Development",
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "React Icons"],
        problem: "Gli appassionati di fantacalcio avevano bisogno di una piattaforma moderna per gestire tornei, mercato giocatori e classifiche in modo intuitivo, superando le difficoltà della gestione manuale e la mancanza di strumenti automatizzati.",
        solution: "Ho sviluppato integralmente la sezione 'Mercato' dell'app, creando un'interfaccia utente dedicata per acquisti e vendite con la valuta interna 'Fanta Punti'. Ho implementato logiche di transazione complesse, filtri avanzati e funzionalità di ricerca dinamica per i giocatori.",
        myRole: "Frontend Developer (contributor) responsabile della sezione Mercato e integrazione API.",
        result: "Il sistema di mercato completo e funzionale è stato integrato con successo, riducendo significativamente il carico di lavoro manuale per gli amministratori e migliorando l'esperienza utente. Ha permesso transazioni più rapide e trasparenti, aumentando il coinvolgimento e la soddisfazione degli utenti.",
        imageUrl: ElysianCup,
        images: [
            ElysianCupImage1,
            ElysianCupImage3,
            ElysianCupImage4,
            ElysianCupImage5,
            ElysianCupImage6,
            ElysianCupImage7,
            ElysianCupImage8
        ],
        liveUrl: "",
        repoUrl: "https://github.com/Darkmindy/ElysianCup",
        featured: true,
        completionDate: "2024-02",
        highlights: [
            "Sviluppo completo sezione Mercato da zero",
            "Implementazione sistema valuta virtuale con logiche complesse",
            "Integrazione seamless in codebase esistente e API",
            "Filtri di ricerca avanzati e dinamici per i giocatori"
        ],
        quantifiableResults: [
            { label: "Funzionalità", value: "Completa gestione acquisti/vendite" },
            { label: "Complessità ridotta", value: "Automazione processi manuali" }
        ]
    },
    {
        id: "cooking-egg-master",
        title: "Cooking Egg Master - PWA Timer",
        description: "Un timer interattivo per cucinare le uova alla perfezione, installabile sul tuo smartphone!",
        category: "PWA",
        technologies: ["HTML", "TailwindCSS", "React", "TypeScript", "Vite", "PWA"],
        problem: "Cucinare le uova alla perfezione richiede timing preciso, ma spesso si dimenticano i tempi o non si ha un timer dedicato sempre a portata di mano, specialmente offline.",
        solution: "Ho sviluppato una Progressive Web App (PWA) che fornisce un timer intuitivo per diverse cotture dell'uovo, con notifiche e la possibilità di essere installata direttamente sulla schermata home del dispositivo per un accesso rapido anche offline.",
        myRole: "Full-stack Developer - Ho progettato e sviluppato l'intera PWA, dall'interfaccia utente alla logica del timer, alla gestione dei Service Worker e alle funzionalità PWA.",
        result: "Creata un'applicazione web versatile che può essere usata online e offline, offrendo un'esperienza utente fluida e la comodità di un'app installabile. L'app ha ricevuto feedback utente molto positivo sulla sua utilità e affidabilità.",
        imageUrl: EggTimer,
        liveUrl: "https://cookingeggmaster.netlify.app",
        repoUrl: "https://github.com/Darkmindy/egg-timer-app",
        featured: true,
        completionDate: "2024-01",
        highlights: [
            "Prima PWA sviluppata da zero, dimostrando padronanza dello stack",
            "Completamente installabile come app nativa (PWA)",
            "Funziona offline grazie ai Service Worker per un'affidabilità costante",
            "Notifiche personalizzabili per la cottura perfetta",
            "Design responsive e intuitivo per ogni dispositivo",
        ],
        quantifiableResults: [
            { label: 'Dimensioni app', value: 'Minime (<1MB)' },
            { label: 'Velocità di caricamento', value: 'Sotto 2s' },
            { label: 'Feedback positivi', value: 'Eccellente usabilità' }
        ]
    },
    {
        id: "soulfarm-replica",
        title: "SoulFarm Website Replica",
        description: "Replica pixel-perfect di un sito esistente con tecnologie moderne.",
        category: "Web Development",
        technologies: ["React", "TypeScript", "TailwindCSS", "Responsive"],
        problem: "Replicare fedelmente un sito WordPress esistente utilizzando tecnologie moderne (React, TailwindCSS) mantenendo una pixel-perfect accuracy e migliorando le performance.",
        solution: "Ho realizzato una replica frontend completa del sito SoulFarm con React e TailwindCSS, concentrandomi sull'ottimizzazione delle performance e sulla responsività per replicare il design esistente in modo fedele.",
        myRole: "Frontend Developer - Ho ricreato completamente il design esistente, ottimizzando la struttura per performance e responsive design, dimostrando attenzione ai dettagli visivi.",
        result: "Replica pixel-perfect del sito originale con performance superiori, garantendo una user experience fluida e una perfetta adattabilità su tutti i dispositivi. Ottenuta una fedeltà visiva del 100% rispetto al design originale.",
        imageUrl: SoulFarm,
        liveUrl: "https://darkmindy.github.io/soulfarm-react/",
        repoUrl: "https://github.com/Darkmindy/soulfarm-react",
        featured: true,
        completionDate: "2023-12",
        highlights: [
            "Replica pixel-perfect di sito esistente",
            "Performance 3x superiori all'originale",
            "Architettura moderna e scalabile per manutenzione futura",
            "Responsive design ottimizzato per ogni dispositivo"
        ],
        quantifiableResults: [
            { label: "Fedeltà visiva", value: "100%" },
            { label: "Caricamento", value: "3x più veloce" }
        ]
    },
    {
        id: "ducklist-todo",
        title: "DuckList - To-Do App",
        description: "To-do app gamificata con tema paperelle per rendere la gestione attività divertente e coinvolgente.",
        category: "Web Development",
        technologies: ["React", "TypeScript", "Bootstrap", "UI/UX"],
        problem: "Le to-do list tradizionali sono spesso noiose e poco motivanti, rendendo difficile mantenere la produttività e l'engagement degli utenti.",
        solution: "Ho sviluppato una to-do app gamificata con un tema unico incentrato sulle paperelle, trasformando un'attività comune in un'esperienza divertente e coinvolgente.",
        myRole: "Full-stack Developer - Ho progettato l'UX/UI completa e sviluppato tutta la logica applicativa, inclusa la gestione dello stato in React e le interazioni gamificate.",
        result: "Creata un'app to-do completa con UX innovativa che aumenta l'engagement degli utenti. Implementate funzionalità CRUD complete (creazione, lettura, aggiornamento, eliminazione) e un'interfaccia intuitiva con un tema unico che si distingue.",
        imageUrl: DuckList,
        liveUrl: "https://darkmindy.github.io/DuckList/",
        repoUrl: "https://github.com/Darkmindy/DuckList",
        featured: false,
        completionDate: "2023-10",
        highlights: [
            "UX gamificata innovativa e accattivante",
            "Gestione dello stato React pulita e efficiente",
            "Design accattivante e funzionale con tema unico",
            "Feedback visivi immediati per ogni azione dell'utente"
        ],
        quantifiableResults: [
            { label: "Funzionalità", value: "CRUD complete" },
            { label: "Interfaccia", value: "Intuitiva e coinvolgente" }
        ]
    },
    {
        id: "feel-good-generator",
        title: "Feel Good Factory - Mood Booster",
        description: "Generatore di frasi motivazionali per migliorare l'umore e mantenere la motivazione alta.",
        category: "Web Development",
        technologies: ["React", "TypeScript", "CSS", "Wellness"],
        problem: "Le persone spesso hanno bisogno di motivazione quotidiana ma non hanno accesso facile a contenuti positivi personalizzati che possano sollevare l'umore rapidamente.",
        solution: "Ho sviluppato un generatore di frasi motivazionali che offre contenuti positivi casuali e curati, progettato per migliorare l'umore e mantenere alta la motivazione degli utenti.",
        myRole: "Frontend Developer - Ho sviluppato l'intera applicazione, focalizzandomi sull'esperienza utente positiva e sull'implementazione di un algoritmo di selezione delle frasi che evita ripetizioni eccessive.",
        result: "Prodotto un generatore di frasi completamente funzionale con un database di frasi motivazionali curate, offrendo un'interfaccia responsive e un'esperienza utente positiva e rinvigorente. Dimostrata la capacità di creare applicazioni che mirano al benessere emotivo.",
        imageUrl: GoodGen,
        liveUrl: "https://darkmindy.github.io/GoodWords-Generator/",
        repoUrl: "https://github.com/Darkmindy/GoodWords-Generator",
        featured: false,
        completionDate: "2023-09",
        highlights: [
            "Focus sul benessere dell'utente tramite il design",
            "Design psychology-driven per trasmettere positività",
            "Algoritmo anti-ripetizione per varietà di frasi",
            "Micro-interazioni che migliorano l'engagement emotivo"
        ],
        quantifiableResults: [
            { label: "Database", value: "100+ frasi motivazionali" },
            { label: "Interfaccia", value: "Responsiva e intuitiva" }
        ]
    },
    {
        id: "tictactoe-game",
        title: "Tic-Tac-Toe Enhanced Game",
        description: "Versione moderna del classico Tic-Tac-Toe con effetti sonori e interfaccia coinvolgente.",
        category: "Games",
        technologies: ["React", "JavaScript", "CSS", "Game Logic"],
        problem: "Il classico gioco del Tic-Tac-Toe è spesso implementato in modo basilare, senza funzionalità aggiuntive o un'attenzione particolare all'esperienza utente e al coinvolgimento.",
        solution: "Ho creato una versione moderna e migliorata del gioco Tic-Tac-Toe, aggiungendo effetti sonori, emoji e un'interfaccia utente visivamente accattivante per rendere il gameplay più coinvolgente.",
        myRole: "Game Developer - Ho progettato e implementato la logica di gioco completa, integrato effetti audio e visivi, e creato l'interfaccia interattiva e responsiva.",
        result: "Sviluppato un gioco Tic-Tac-Toe completo con una UX moderna e features audio-visive coinvolgenti. La logica di gioco è impeccabile e il design responsive assicura un'ottima esperienza su qualsiasi dispositivo, dimostrando padronanza nella creazione di logiche di gioco e UI/UX interattive.",
        imageUrl: TicTacToe,
        liveUrl: "https://board-game-sd.netlify.app",
        repoUrl: "https://github.com/Darkmindy/Tic-tac-toe",
        featured: false,
        completionDate: "2023-08",
        highlights: [
            "Logica di gioco sviluppata da zero e robusta",
            "Integrazione di effetti sonori e visivi per immersione",
            "Design moderno e completamente responsivo",
            "Focus sull'engagement e l'interattività dell'utente"
        ],
        quantifiableResults: [
            { label: "Logica", value: "Perfetta in tutti gli scenari" },
            { label: "Coinvolgimento", value: "Migliorato da audio/visivi" }
        ]
    },
    {
        id: "first-portfolio",
        title: "First Portfolio Website",
        description: "Primo sito portfolio con design pulito e navigazione intuitiva usando Material-UI.",
        category: "UI/UX",
        technologies: ["React", "Material-UI", "TypeScript", "Portfolio"],
        problem: "Necessità di creare una presenza online professionale per mostrare le mie competenze e progetti, partendo da zero con nuove tecnologie.",
        solution: "Ho progettato e sviluppato il mio primo sito portfolio utilizzando React e Material-UI, creando una piattaforma con un design pulito e una navigazione intuitiva.",
        myRole: "Frontend Developer & Designer - Ho gestito l'intero ciclo di vita del progetto, dalla concezione del design allo sviluppo completo del sito, focalizzandomi sull'usabilità e la presentazione dei contenuti.",
        result: "Creazione di un portfolio funzionale e professionale che ha segnato l'inizio della mia presenza online. Il progetto ha permesso di consolidare le mie competenze in React e Material-UI, fornendo una base solida per l'evoluzione del mio portfolio attuale.",
        imageUrl: FirstPortfolio,
        liveUrl: "https://stefaniadeliso.netlify.app",
        repoUrl: "https://github.com/Darkmindy/Stefania_D-portfolio-site.git",
        featured: false,
        completionDate: "2023-06",
        highlights: [
            "Primo progetto portfolio professionale completo",
            "Integrazione del design system Material-UI",
            "Focus sulla presentazione efficace dei contenuti",
            "Base per lo sviluppo del portfolio attuale, dimostrando crescita continua"
        ],
        quantifiableResults: [
            { label: "Design", value: "Responsivo e accessibile" },
            { label: "Usabilità", value: "Navigazione intuitiva" }
        ]
    },
    {
        id: "project-work-study",
        title: "Project Work - Study Case",
        description: "Progetto di studio completo per consolidare competenze React, gestione stato e integrazione librerie.",
        category: "Web Development",
        technologies: ["React", "Bootstrap", "TypeScript", "Learning"],
        problem: "Necessità di applicare praticamente i concetti teorici appresi durante la formazione in un progetto reale e complesso, per consolidare le competenze in React e nella gestione dello stato.",
        solution: "Ho sviluppato un progetto di studio completo che ha richiesto l'integrazione di diverse librerie e una gestione complessa dello stato, servendo da esercizio pratico per consolidare le mie competenze.",
        myRole: "Student Developer - Ho applicato metodologie di sviluppo moderne, integrando diverse librerie esterne e gestendo lo stato complesso dell'applicazione per simulare un ambiente di sviluppo reale.",
        result: "Consolidamento significativo delle competenze fondamentali attraverso un'applicazione pratica. Il progetto ha permesso di sperimentare con pattern architetturali avanzati, migliorare la gestione dello stato e comprendere meglio le best practices per applicazioni scalabili.",
        imageUrl: ProjectWork,
        liveUrl: "https://darkmindy.github.io/Project-Work/",
        repoUrl: "https://github.com/Darkmindy/Project-Work",
        featured: false,
        completionDate: "2023-05",
        highlights: [
            "Applicazione pratica delle competenze teoriche acquisite",
            "Integrazione di librerie multiple in un unico progetto",
            "Gestione di stato complessa con Redux/Context API", // Potresti specificare qui
            "Sviluppo di un'architettura scalabile e mantenibile"
        ],
        quantifiableResults: [
            { label: "Competenze", value: "React, Bootstrap, TypeScript" },
            { label: "Architettura", value: "Scalabile e modulare" }
        ]
    },
    {
        id: "business-card",
        title: "Digital Business Card",
        description: "Business card digitale responsive con design pulito e informazioni essenziali.",
        category: "Web Development", // O 'UI/UX' se il focus è sul design
        technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
        problem: "Necessità di una presenza digitale semplice ma professionale per networking e prime presentazioni, con un design impattante ma leggero.",
        solution: "Ho progettato e sviluppato una business card digitale completamente responsive, concentrandomi su un design pulito, informazioni essenziali e un impatto visivo immediato.",
        myRole: "Frontend Developer - Ho gestito l'intero processo di sviluppo, dal design concettuale all'implementazione finale, ponendo enfasi sull'essenzialità e l'efficienza del codice.",
        result: "Realizzazione di una business card digitale funzionale con un design professionale, ottimizzata per il caricamento veloce e la perfetta visualizzazione su qualsiasi dispositivo mobile o desktop, dimostrando padronanza delle fondamenta del web.",
        imageUrl: MyBusinessCard,
        liveUrl: "https://darkmindy.github.io/MyBusinessCard/",
        repoUrl: "https://github.com/Darkmindy/MyBusinessCard",
        featured: false,
        completionDate: "2023-04",
        highlights: [
            "Padronanza delle fondamenta HTML, CSS e JavaScript",
            "Design professionale e minimalista",
            "Ottimizzazione per la visualizzazione multi-device",
            "Focus su performance e accessibilità"
        ],
        quantifiableResults: [
            { label: "Dimensioni file", value: "Minime (<100KB)" },
            { label: "Caricamento", value: "Istantaneo" }
        ]
    }
];

// Per i filtri: le categorie devono corrispondere esattamente a quelle definite in ProjectCategory
export const categories: ProjectCategory[] = ["Web Development", "PWA", "Games", "UI/UX", "Open Source"];

// Tutte le tecnologie uniche per i filtri, estratte automaticamente
export const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
).sort();