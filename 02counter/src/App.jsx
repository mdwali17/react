import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15

  const [counter,setCounter]= useState(15)

  const addValue=()=>{
    console.log(counter)
    if(counter<20){
      setCounter(counter+1)
    }
    // setCounter(counter+1)
  }
  const removeValue=()=>{
    console.log(counter)
    if(counter>0){
    setCounter(counter-1)
    }
    // else{
    //   return setCounter("value does not less than 0")
    // }
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value :{counter}</h2>

      <button
      onClick={addValue} > 
      Add Value:{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value:{counter}</button>
    </>
  )
}

export default App