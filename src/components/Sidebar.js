import './Sidebar.css'
import Box from '@mui/material/Box';
import photoBunny from './assets/img/coelhoOrelhudo.webp'
import { ReactComponent as IconCarrinho} from './assets/img/carrinho.svg'

import {GiStarfighter as IconStar} from 'react-icons/gi'



const Sidebar = () => {
    return (
        <Box component="nav">
            <ul>
                <li>Home</li>
                <li>Conteúdo</li>
                <li>Comunidade</li>
                <li>Sobre</li>
            </ul>
        <div class="img-coelhos">
        <img
              style={{width: 150}}
             src='https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/04/coelhos-principais-caracteristicas-e-como-cuidar-dentro-de-casa-960x640.jpg.webp'
              alt='Bunny'>
            </img>
            <hr/>
            <img
              style={{width: 150}}
              src={photoBunny} 
              alt='Bunny2'>
            </img>
        </div>

        {/* ReactComponent */}
        <div class="icon">

            <IconCarrinho style={{width: 30, height: 30}}/>

            <IconStar style={{width: 40, height: 30, color:'#fff'}}/>
        </div>
 
        </Box>
    )
}

export default Sidebar