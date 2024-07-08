import { useState } from 'react'
import './App.css'
import CardFour from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black'>Tailwind Props</h1>
      <CardFour />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
