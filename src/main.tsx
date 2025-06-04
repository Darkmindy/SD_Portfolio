// src/main.tsx (o src/index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@/context/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider> {/* Avvolgi App con ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);