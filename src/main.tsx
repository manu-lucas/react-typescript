import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Home from './pages/Home';
import './index.css'




const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
