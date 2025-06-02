# My Portfolio - Stefania Deliso

## Descrizione del Progetto

Questo è il mio portfolio personale. Il sito è stato creato per presentare competenze, progetti e esperienza professionale in un formato moderno, dinamico e responsivo. L'obiettivo è fornire una piattaforma intuitiva e visivamente accattivante per i potenziali clienti e collaboratori.

## Tecnologie Utilizzate

Il progetto è sviluppato utilizzando le seguenti tecnologie e librerie principali:

* **React**: Libreria JavaScript per la costruzione dell'interfaccia utente.
* **TypeScript**: Superser di JavaScript che aggiunge tipizzazione statica per una maggiore robustezza del codice.
* **Vite**: Strumento di build rapido e moderno per lo sviluppo frontend.
* **Tailwind CSS**: Framework CSS utility-first per una rapida e flessibile creazione di stili.
* **Framer Motion**: Libreria per animazioni fluide e performanti in React.
* **React Icons**: Set di icone popolari per React.
* **Swiper.js (con `@types/swiper`)**: Libreria moderna per la creazione di slider e caroselli (presumibilmente usata nella sezione 'Projects' o 'Blog').

## Come Installare e Avviare il Progetto

Segui questi passaggi per clonare il repository, installare le dipendenze e avviare il progetto in locale:

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/Darkmindy/SD_Portfolio
    cd SD_Portfolio
    ```

2.  **Installa le dipendenze:**
    Assicurati di avere Node.js e npm (o Yarn) installati sul tuo sistema.
    ```bash
    npm install
    # oppure
    yarn install
    ```

3.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    # oppure
    yarn dev
    ```
    Il progetto sarà accessibile nel tuo browser all'indirizzo `http://localhost:5173` (o un'altra porta disponibile).

4.  **Crea la build per la produzione:**
    Per generare una versione ottimizzata del progetto per la distribuzione:
    ```bash
    npm run build
    # oppure
    yarn build
    ```
    Questo creerà i file ottimizzati nella cartella `dist/`.

## Struttura del Progetto

Il progetto segue una struttura modulare, con i componenti organizzati per funzionalità:

├── public/                 # File statici (es. immagini, favicon)
│   └── assets/             # Immagini usate nel progetto (es. profile.png)
├── src/
│   ├── components/
│   │   ├── AboutMe.tsx     # Sezione "Chi Sono"
│   │   ├── Blog.tsx        # Sezione "Blog" (sezione dinamica/articoli)
│   │   ├── Contact.tsx     # Sezione "Contatti"
│   │   ├── Container.tsx   # Componente riutilizzabile per centrare e delimitare il contenuto
│   │   ├── Footer.tsx      # Piè di pagina
│   │   ├── HeroSection.tsx # Sezione principale/Hero
│   │   ├── Layout.tsx      # Componente di layout generale (Navbar, Footer, ScrollToTop, Container)
│   │   ├── Navbar.tsx      # Barra di navigazione
│   │   ├── Projects.tsx    # Sezione "Progetti"
│   │   ├── References.tsx  # Sezione "Referenze"
│   │   ├── SkillSet.tsx    # Sezione "Skillset"
│   │   └── ui/             # Componenti UI generici (es. FloatingThemeToggle, ScrollToTop)
│   │       ├── FloatingThemeToggle.tsx # Pulsante per cambio tema (chiaro/scuro)
│   │       └── ScrollToTop.tsx         # Pulsante per scrollare in cima alla pagina
│   ├── App.tsx             # Componente radice dell'applicazione, gestisce il routing e il layout
│   ├── index.css           # Stili CSS globali e di base (inclusi i gradienti di testo)
│   ├── main.tsx            # Punto di ingresso dell'applicazione React
│   ├── types.d.ts          # Definizioni di tipi TypeScript globali (se presenti)
│   └── vite-env.d.ts       # Tipi generati da Vite
├── index.html              # Il file HTML principale
├── package.json            # Definizioni del progetto e delle dipendenze
├── postcss.config.js       # Configurazione PostCSS (per Tailwind)
├── tailwind.config.js      # Configurazione di Tailwind CSS
├── tsconfig.json           # Configurazione TypeScript
└── tsconfig.node.json      # Configurazione TypeScript per Node.js


## Punti Salienti e Caratteristiche Specifiche

* **Design Responsivo**: Il sito è completamente responsivo e si adatta a diverse dimensioni dello schermo, dai dispositivi mobili ai desktop. La `HeroSection` in particolare è progettata per estendersi a tutta larghezza, mantenendo il contenuto leggibile grazie a padding interni.
* **Tema Chiaro/Scuro**: Il sito supporta una modalità chiara e una scura, gestita da `FloatingThemeToggle` e Tailwind CSS, migliorando l'esperienza utente in base alle preferenze o all'ora del giorno.
* **Animazioni Fluide**: Utilizza `Framer Motion` per animazioni eleganti e performanti, specialmente nella `HeroSection` e in altre interazioni UI.
* **Sfondo Interattivo nella Hero**: La `HeroSection` presenta uno sfondo dinamico con sfere fluttuanti e un effetto di luce che segue il movimento del mouse, creando un'esperienza visiva coinvolgente.
* **Componente `Container` Riutilizzabile**: Un componente `Container.tsx` dedicato (`max-w-5xl mx-auto px-4 md:px-8`) è utilizzato nel `Layout` principale per garantire che il contenuto delle sezioni sia ben allineato e leggibile su tutte le dimensioni dello schermo, fornendo un layout coerente per la maggior parte delle pagine.
* **Gradienti di Testo**: Alcuni elementi testuali chiave (es. "Creative", "ispirano", "coinvolgono") utilizzano un effetto gradiente per un impatto visivo maggiore, definito tramite classi CSS in `index.css`.
* **Navigazione Semplice**: Una barra di navigazione (`Navbar`) chiara e un pulsante `ScrollToTop` migliorano l'usabilità del sito.

## Come Contribuire

Al momento, il progetto è un portfolio personale. Tuttavia, se hai suggerimenti, bug report o idee per miglioramenti, sentiti libero di aprire una "issue" o una "pull request" nel repository GitHub.

## Licenza

Questo progetto è rilasciato sotto la licenza [MIT License](LICENSE.md).