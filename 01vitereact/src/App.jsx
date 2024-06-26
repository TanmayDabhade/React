import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Tutorial from "./tutorial.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Coding with Tommy</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tutorial />
    </>
  )
}

export default App
