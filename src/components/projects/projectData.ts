    import DuckList from '@/assets/Projects/DuckList.png';
    import ProjectWork from '@/assets/Projects/Project-Work.png';
    import TicTacToe from '@/assets/Projects/Tic-tac-toe.png';
    import FirstPortfolio from '@/assets/Projects/MyPortfolio.png';
    import MyBusinessCard from '@/assets/Projects/MyBusinessCard.png';
    import SoulFarm from '@/assets/Projects/SoulFarm.png';

    export interface Project {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        tech?: string[];
        github?: string;
        demo?: string;
        stack?: string[];
        liveUrl?: string;
        repoUrl?: string;
        text?: string;
    }

    export const projects: Project[] = [
       
        {
            id: 1,
            title: "SoulFarm Replica - Website",
            imageUrl: SoulFarm,
            description: "Il test Frontend per eccellenza, ho preso un sito già esistente in wordpress ",
            tech: ["React", "Vite", "TypeScript", "TailwindCSS"],
            github: "https://github.com/Darkmindy/soulfarm-react",
            demo: "https://darkmindy.github.io/soulfarm-react/",
        },
        {
            id: 2,
            title: 'First Portfolio 👩🏻‍💻',
            description: 'Il primo prototipo di sito portfolio, progetto "scolastico"',
            text: '',
            imageUrl: FirstPortfolio,
            stack: ['React', 'Material-UI', 'TypeScript'],
            liveUrl: 'https://livedemo1.com',
            repoUrl: 'https://github.com/Darkmindy/Stefania_D-portfolio-site.git',
        },
        {
            id: 3,
            title: 'DuckList',
            description: 'Una to-do list con le paperelle 🦆',
            text: 'Questo progetto è stato realizzato utilizzando React, Bootstrap e TypeScript. L\'applicazione offre una lista di elementi da fare, con funzionalità di aggiunta, rimozione e completamento.',
            imageUrl: DuckList,
            stack: ['React', 'Bootstrap', 'TypeScript'],
            liveUrl: 'https://github.com/Darkmindy/DuckList',
            repoUrl: 'https://github.com/Darkmindy/DuckList',
        },
        {
            id: 4,
            title: 'Project Work',
            description: 'A Project Work',
            text: '',
            imageUrl: ProjectWork,
            stack: ['React', 'Bootstrap', 'TypeScript'],
            liveUrl: 'https://github.com/Darkmindy/Project-Work',
            repoUrl: 'https://github.com/Darkmindy/Project-Work',
        },
        {
            id: 5,
            title: 'Tic-tac-toe 🎮',
            description: 'Il classico gioco Tic-tac-toe (per gli amici Tris)',
            text: 'This project involves creating a simple Tic-Tac-Toe game enriched with sounds and emojis.',
            imageUrl: TicTacToe,
            stack: ['React', 'CSS'],
            liveUrl: 'https://board-game-sd.netlify.app',
            repoUrl: 'https://github.com/Darkmindy/Tic-tac-toe',
        },
        {
            id: 6,
            title: 'MyBusinessCard',
            description: 'A Business Card',
            text: '',
            imageUrl: MyBusinessCard,
            stack: ['HTML', 'CSS'],
            liveUrl: 'https://github.com/Darkmindy/MyBusinessCard',
            repoUrl: 'https://github.com/Darkmindy/MyBusinessCard',
        },
        // Aggiungi gli altri progetti...
    ];