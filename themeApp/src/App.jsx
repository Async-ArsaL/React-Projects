import { createContext, useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'

const themeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <div className='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
   <ChildA />
      </div>
    </themeContext.Provider>
  )
}

export default App
export { themeContext}


