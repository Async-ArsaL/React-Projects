import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color ,setColor] = useState("olive")
  return (
    <>
    <div className='h-screen w-full0' style={{backgroundColor:color}} >

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-6 py-3 rounded-full  shadow-xl' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("Yellow")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("Gray")} className='outline-none px-6 py-3 rounded-full text-white shadow-xl' style={{backgroundColor:"Gray"}}>Gray</button>
          <button onClick={()=>setColor("White")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"White"}}>White</button>
          <button onClick={()=>setColor("Black")} className='outline-none px-6 py-3 rounded-full text-white shadow-xl' style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={()=>setColor("Lavender")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"Lavender"}}>Lavender</button>
          <button onClick={()=>setColor("Orange")} className='outline-none px-6 py-3 rounded-full shadow-xl' style={{backgroundColor:"Orange"}}>Orange</button>
        </div>
</div>
    </div>
    </>
  )
}

export default App