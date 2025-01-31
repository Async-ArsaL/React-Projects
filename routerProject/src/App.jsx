import React from 'react'
import  {RouterProvider,createBrowserRouter} from "react-router-dom"
import Contect from './components/Contect'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Courses from './components/Courses'
import Reports from './components/Reports'
import { useEffect } from 'react'



const router = createBrowserRouter([
  {
    path:"/",
    element: <div>
      <Navbar></Navbar>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:<div>
    <Navbar></Navbar>
    <About/>
  </div>,
  children:[
    {
      path:'courses',
      element: <Courses />
    },
    {
      path:'results',
      element: <Reports/>
    }
  ]

  },
  {
    path:'/contact',
    element:<div>
    <Navbar></Navbar>
    <Contect/>
  </div>
  }, {
    path:'/student/:id',
    element:<div>
    <Navbar></Navbar>
    <Params/>
  </div>
  },
  {
    path:'*',
    element:<div>
      <Navbar></Navbar>
      <h2>Page Not Found</h2>
    </div>
  }
  ])
  

const App = () => {
  useEffect(() => {
    document.body.classList.add("overflow-y-scroll");
  }, []);
  return (
    <div><RouterProvider  router={router} /></div>
  )
}

export default App;