    import DuckList from '@/assets/Projects/DuckList.png';
    import ProjectWork from '@/assets/Projects/Project-Work.png';
    import TicTacToe from '@/assets/Projects/Tic-Tac-Toe.png';
    import FirstPortfolio from '@/assets/Projects/MyPortfolio.png';
    import MyBusinessCard from '@/assets/Projects/MyBusinessCard.png';
    import ComingSoon from '@/assets/Projects/ComingSoon.png';

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
            title: "Coming Soon",
            imageUrl: ComingSoon,
            description: "Progetto in sviluppo, presto disponibile!",
            tech: ["React", "Vite"],
            github: "",
            demo: "",
        },
        {
            id: 2,
            title: 'Personal Portfolio 👩🏻‍💻',
            description: 'Il primo prototipo di sito portfolio',
            text: '',
            imageUrl: FirstPortfolio,
            stack: ['React', 'Material-UI', 'TypeScript'],
            liveUrl: 'https://livedemo1.com',
            repoUrl: 'https://github.com/Darkmindy/Stefania_D-portfolio-site.git',
        },
        {
            id: 3,
            title: 'DuckList',
            description: 'A simple To Do List with ducks 🦆',
            text: 'This project focuses on a React.js and hooks exercise. The app also allows users to add, edit, and delete tasks.',
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