import React from 'react'
import { createHashRouter, RouterProvider} from 'react-router-dom';
import House from './House'
import Aboutme from './Aboutme';
import Contactme from './Contactme';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <House/>
    },
    {
      path: "/aboutme",
      element: <Aboutme/>
    },
    {
      path: "/contact",
      element: <Contactme/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

