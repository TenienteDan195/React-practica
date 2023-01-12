import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './componentes/navbar/navbar';
import ItemListcontainer from './componentes/itemListcontainer/itemListcontainer';
import Counter from './componentes/counter/counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* asi es como se llama a un elemento <llamas al elemento /> */}
    <NavBar/>

    <Counter/>

                        {/* props con lo que ingreses adentro de las comillas es lo que se podra ver en el boton */}
    <ItemListcontainer greeting = {"hola como estas"}/>
  </>

);


