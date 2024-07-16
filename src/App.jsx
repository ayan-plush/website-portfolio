import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import House from './House'

function App() {
  const router = createBrowserRouter([
    {
      path: "https://ayan-plush.github.io/website-portfolio/",
      element: <House/>
    },
    {
      path: "https://ayan-plush.github.io/website-portfolio/aboutme",
      element: <House/>
    },
    {
      path: "https://ayan-plush.github.io/website-portfolio/gallery",
      element: <House/>
    },
    {
      path: "https://ayan-plush.github.io/website-portfolio/contact",
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

