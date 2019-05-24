import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// custom components
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
