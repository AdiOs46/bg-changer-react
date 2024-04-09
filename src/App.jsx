import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex-wrap flex bottom-12 justify-center inset-x-0 px-2'>
        <div 
          className="flex-wrap flex bg-white rounded-xl shadow-lg h-[6vh] gap-4 justify-center px-3 py-2">
                  <button onClick={() => setColor("red")} className="bg-red-600 grow rounded-full shadow-lg text-white px-4">Red</button>
                  <button onClick={() => setColor("rgb(22, 163, 74)")} className="bg-green-600 grow rounded-full shadow-lg px-4 ">Green</button>
                  <button onClick={() => setColor("rgb(37, 99, 235)")} className="bg-blue-600 grow rounded-full shadow-lg text-white px-4">Blue</button>
                  <button onClick={() => setColor("rgb(77, 124, 15)")} className="bg-lime-700 grow rounded-full shadow-lg px-4">Olive</button>
                  <button onClick={() => setColor("rgb(75, 85, 99)")} className="bg-gray-600 grow rounded-full shadow-lg text-white px-4">Gray</button>
                  <button onClick={() => setColor("rgb(234, 179, 8)")} className="bg-yellow-500 grow rounded-full shadow-lg px-4">Yellow</button>
                  <button onClick={() => setColor("rgb(244, 114, 182)")} className="bg-pink-400 grow rounded-full shadow-lg px-4">Pink</button>
                  <button onClick={() => setColor("rgb(147, 51, 234)")} className="bg-purple-600 grow text-white rounded-full shadow-lg px-4">Purple</button>
                  <button onClick={() => setColor("rgb(192, 38, 211")} className="bg-fuchsia-600 grow rounded-full shadow-lg px-4">Lavender</button>
                  <button onClick={() => setColor("white")} className="bg-white grow rounded-full shadow-lg px-4">White</button>
                  <button onClick={() => setColor("black")} className="bg-black grow text-white rounded-full shadow-lg px-4">Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
