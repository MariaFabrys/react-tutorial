import Box from '@mui/material/Box'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'


const Error404 = () => {
  return (
    <>
      <Header />
      <Menu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
            <h1>Opsss... Página não encontrada!</h1>
            <p>Verifique se a URL está correta.</p>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Error404