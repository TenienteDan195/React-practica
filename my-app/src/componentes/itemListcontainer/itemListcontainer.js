
import React, {useEffect, useState} from "react";
import "./itemListContainer.css";

const ItemListcontainer =( {greeting}) => {
    //Flag o Bandera
    const [ isDark , setIsDark ] = useState(false)
    const [ num , setNum] = useState(0)

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
    } , [ num ]) // <----- Arreglo de dependencias

    console.log(isDark)

  return (
    //Para hacer un un modo oscuro podemos reducir linreas de codigo de la siguiente manera
    <div className= {isDark ? "container-items-dark" : "container-items-ligth"}>
    <h2>{greeting}</h2> 
    <button onClick={toogleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>

    <button onClick={()=>setNum(num+1)}>sumar</button>
    </div>
  )
}

export default ItemListcontainer;