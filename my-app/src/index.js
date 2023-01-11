import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './componentes/navbar/navbar';
import Card from './componentes/productos/cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Card/>
  </React.StrictMode>
);


