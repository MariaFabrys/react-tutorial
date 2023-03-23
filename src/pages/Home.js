import Box from '@mui/material/Box'

import Header from './components/Header'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

import React from 'react'

const Home = () => {
  return (
    <>
    <Header />
    <Menu/>
    <Box sx={{
      display: 'flex',
    }}>
      <Sidebar/>
      <Content />
    </Box>
    <Footer />
  </>
  )
}

export default Home