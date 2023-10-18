import React from 'react'
import RootLayout from './Routes/RootLayout';
import Header from './components/Header/Header';
import Error from './Routes/Error';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/Footer/Footer';



const router = createBrowserRouter([
  { path: "/",
element:<RootLayout />,
errorElement: <Error />,
children:[
  {
    index:true,
    element: <Header />,
  },
  {
    
    element: <Footer />,
  }
]},
]); 

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App