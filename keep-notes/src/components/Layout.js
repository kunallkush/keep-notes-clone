import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>

    <Header/>
    <div className='mb-5'>
        <main>{children}</main>
    </div>
    <Footer/>
    </>
  )
}

export default Layout;