import React from 'react'
import { createHashRouter, RouterProvider} from 'react-router-dom';
import House from './House'

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <House/>
    },
    {
      path: "/aboutme",
      element: <House/>
    },
    {
      path: "/gallery",
      element: <House/>
    },
    {
      path: "/contact",
      element: <House/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

