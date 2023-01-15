
import React, {useEffect, useState} from "react";
import Counter from "../counter/counter";
import "./itemListContainer.css";
import { products } from "../../productsMock";

const ItemListcontainer =( {greeting}) => {
    //Flag o Bandera
    const [ isDark , setIsDark ] = useState(false)
    const [ num , setNum] = useState(0)
    const [ items , setItems] = useState([])//se recomienda siempre usar el tipo de dato con el que vamos a empezar

    const toogleMode = () =>{
        
        setIsDark(!isDark)

    }
// el useEffect se usa para tareas que no quieras que se este repitiendo
// el useEffect sin dependencias se va a repetir como cualquier consol.log
    useEffect ( ()=>{
      console.log("hola dentro del primer efecto")
    })
//el useEffect con temendencias solo se repetira una unica vez
    useEffect (()=>{
      console.log ("gola desde el efecto con array de dependencias vacio")
    }, []) // <----Arreglo de dependencias

    useEffect (()=>{
      console.log ("hola desde el efecto con arreglo de dependencias a la escucha de NUM")
    } , [ num ]) // <----- Arreglo de dependencias a la escucha de una variable

    console.log(isDark)

    const onAdd = () => {
      console.log("hola")
    }
//Es una promesa con las palabras reservadas new , Promise
//es una tarea asincrona
    const task = new Promise ((resolve , reject)=>{
      resolve(products)
    })//nunca desde front-end vendran las promesas

    console.log ("Esta es la promesa", task)

    task
      //set items me va a setear mi estado con eso que venga en la respuesta
      .then((res)=>{setItems( res )})
      .catch((err)=>{console.log("se rechazo")})
    //se aplica a una promesa para capturar lo que la promesa resolvio
    // se aplica para obtener lo que una promesa me lo devolvio como error

    console.log(items)

    return (
    //Para hacer un un modo oscuro podemos reducir linreas de codigo de la siguiente manera
    <div className= {isDark ? "container-items-dark" : "container-items-ligth"}>
    <h2>{greeting}</h2> 
    <button onClick={toogleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>

    <button onClick={()=>setNum(num+1)}>sumar</button>
    <Counter stock = {10} initial = {1} onAdd = {onAdd}/>
    </div>
  )
}

export default ItemListcontainer;