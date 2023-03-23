import Box from '@mui/material/Box'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Content from '../components/Content'


const About = () => {
  return (
    <>
      <Header />
      <Menu/>
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Quem Somos">
            <h1>Quem Somos?</h1>
            <p>Venha conhecer mais sobre nosso site!</p>
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default About