import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function RootLayout() {
  return (
    <>
    <Header />

    <main>
        <Outlet></Outlet>
    </main>
    
    <Footer />
    </>
  )
}

export default RootLayout