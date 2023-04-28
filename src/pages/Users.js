import Box from '@mui/material/Box'
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import CardUser from '../components/CardUser'

const Users = () => {

//modal abrir
  
  const [users, setUsers] = useState(false)

  const loadUsers = async () => {
    try {
      const response = await fetch('http://localhost:3100/user')
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  //fica espiando se alguma coisa muda
  useEffect(() => {
    loadUsers()
  }, []) //roda uma vez quando o componente é carregado

  

  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Users">
          <button onClick={()=> setModalOpen(true)}>Cadastrar User</button>
            {users && 
              users.map(user => (
                <CardUser key={user.id} user={user} />
              ))
            }
        </Content>
      </Box>

      <Box className="bgModal" onClick={(event) =>{
        if(Event.target.className)
      }}
      sx=
      {{position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '0000000A0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'


      }}>
        <Box sx={{
          width: '500px',
          height: '300px',
          background: '#FFf',
          borderRadius: '10px',
          padding: '20px'
        }}>
          <h1>Cadastrar User</h1>


        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Users