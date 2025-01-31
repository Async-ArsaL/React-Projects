import React from 'react'
import Cards from "./components/Cards"

const App = () => {
   let username= {
     name: 'Arsal',
   }
  return (
    <>
  
     <h2 className='text-4xl bg-green-300 text-center'>Cards</h2>
     <div className='flex flex-wrap'>
<Cards username="ArsaL"></Cards>
<Cards username="Irshad"></Cards>

</div>
    </>
  )
}

export default App