import { useState } from "react"
function App() {
  let [color,setColor]=useState("olive")

  return (
    <>
    <body className='w-full h-screen duration-4000' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 bg-white rounded-2xl'>
          <button onClick={()=>{setColor("red")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>{setColor("blue")}}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button onClick={()=>{setColor("green")}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>{setColor("yellow")}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>{setColor("orange")}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button onClick={()=>{setColor("black")}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}>
            Black
          </button>
        </div>

      </div>
    </body>
    </>
  )
}

export default App
