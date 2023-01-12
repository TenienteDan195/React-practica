import React from 'react'
import CustomButton from '../custombutton/customButton'
import {useState} from "react"

function Counter () {

    const [counter , setCounter] = useState(0)



  return (
    <>
        <h2>{counter}</h2>
            <CustomButton texto = {"sumar"} counter = {counter} setCounter = {setCounter} />
    </>
  )
}

export default Counter