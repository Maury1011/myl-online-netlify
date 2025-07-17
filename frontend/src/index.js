import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Componente principal
import './styles/styles.css'; // Estilos específicos de la aplicación
import './styles/nav.css'; // Estilos para la lista de cartas
import './styles/modal.css'; // Estilos para los modales
import './styles/filters.css'; // Estilos para los mazos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
