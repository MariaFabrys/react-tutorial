import Box from '@mui/material/Box'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <Menu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
            <h1>Contato</h1>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Contact