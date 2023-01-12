import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './componentes/navbar/navbar';
import ItemListcontainer from './componentes/itemListcontainer/itemListcontainer';
import CustomButton from './componentes/custombutton/customButton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar/>
    <ItemListcontainer greeting = {"hola como estas"}/>
  </>

);


