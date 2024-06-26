import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if(counter<=19){
      setCounter(++counter)
    }else{
      alert("Value can not be more than 20, subtract now!")
    }
  }

  const subtractValue = () => {
    if(counter>=1){
      setCounter(--counter)
    }else{
      alert("Value can not be negative, add now!")
    }
    
  }
  
  return (
    <>
      <h1>Coding with react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
