import Box from '@mui/material/Box'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <MainMenu style={styles.MainMenu}/>
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


const styles = {
 MainMenu:{
  background: '#836FFF'
 }
}


export default App