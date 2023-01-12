
//HOOK --> estado =useState
 import {useState} from "react"


//Cuando algo cambia en el ESTADO CustomButton internamente este se vuelve a renderizar
                    // Props
const CustomButton =( {texto , counter , setCounter} ) => {

  const sumar = ()=>{
    setCounter( counter + 1)
  }

//   // todo lo de abajo comentado es lo estructurado que esta en la siguiente CONST

//   // const miEstado = useState(1)

//   // let counter = miEstado  [0]

//   // let setCounter = miEstado [1]

//   const [ counter , setCounter] = useState(0)

//   // console.log(counter)
//   // console.log(setCounter)

//   // let counter = 0

//   const sumar = () =>{

//     // counter++

//     setCounter(counter + 1)

//   };

//   const restar = () =>{
//     setCounter ( counter - 1)

//   }


  return (
    <>
    <button onClick={sumar}>{texto}</button>
    {/* <button onClick={sumar}>{texto}</button> */}
    </>

  )
}

export default CustomButton