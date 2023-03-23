import Box from '@mui/material/Box'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'


const About = () => {
  return (
    <>
      <Header />
      <Menu/>
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
            <h1>Quem Somos?</h1>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default About