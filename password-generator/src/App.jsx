import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number_used, setNumberUsed] = useState(false)
  const [char_used, setCharUsed] = useState(false)
  const [password, setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number_used){str+= "0123456789"}
    if(char_used){str+="!@#$%^&*~?:"}

    for(let i = 0; i<length; i++){
      let char_index = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char_index)
    }

    setPassword(pass)

  }, [length, number_used, char_used, setPassword])





  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    alert("Copied to clipboard")
  }, [password])


  useEffect(() => {passwordGenerator()}, [length, number_used, char_used, passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-auto mx-auto shadow-md rounded-lg my-8 px-4 py-4 text-orange-700 bg-gray-700">
        <div className="flex">
          {/* <label htmlFor="password">Password</label> */}
          <input 
          className = "rounded-lg px-8 py-8 w-full h-10" 
          value = {password}
          placeholder='Password' 
          type="text" 
          readOnly/>

          <button 
          onClick={copyToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex">
          <div className="flex text-sm gap-x-2">
            <div className="fkex items-center gap-x-1">
              
              <input 
              
              type="range"
              name='range'
              min = {6}
              max = {16}
              onChange={(e) => {
                setLength(e.target.value)
                passwordGenerator()
              }}
              className='cursor-pointer style-none my-5'
              />
              <label htmlFor="range" className='p-5'>Length : {length}</label>

              <input 
              type="checkbox" 
              name="numberUsed" 
              defaultChecked={number_used} 
              onChange={() => {
                setNumberUsed((prev) => !prev)
                passwordGenerator()
              }}
              className='cursor-pointer style-none p-5'
              />
              <label htmlFor="numberUsed" className='p-5'>Using numbers: {number_used}</label>

              <input 
              type="checkbox" 
              name="charUsed" 
              defaultChecked={char_used} 
              onChange={() => {
                setCharUsed((prev) => !prev) 
                passwordGenerator()
              }}
              className='cursor-pointer style-none p-5'
              />
              <label htmlFor="charUsed" className='p-5'>Using chars: {char_used}</label>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
