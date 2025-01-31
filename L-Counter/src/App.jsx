import {useState } from 'react';

const App = () => {
      let [value , setValue] = useState(0)

        let addValue = ()=>{
          if (value < 30){
            setValue(value + 1)
          }
        };

        let removeValue = ()=>{

          if (value > 0){
            setValue(value - 1)
          }
        };

  
  
  return (
    <>
    <center>
    <h1>Arsal Aur React 😁</h1>
    <h2>Current Value: {value}</h2>
    <button onClick={addValue}>Increase value</button>
    <br />
    <br />

    <button onClick={removeValue}>Decrease Value</button>    
    <p>Footer : {value}</p>
    
    </center>
    </>
  )

}
export default App