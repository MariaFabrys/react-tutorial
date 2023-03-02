import Box from '@mui/material/Box';
import photoBunny from './assets/img/coelhoOrelhudo.webp'
import { ReactComponent as IconCarrinho} from './assets/img/carrinho.svg';
import {GiStarfighter as IconStar} from 'react-icons/gi'

const Content = () => {
    return (
        <Box component="Content" sx={styles.Box}>
            <h3 style={styles.h3}> Content</h3>

            <img
              style={{width: 500, height: 333.23}}
             src='https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2021/04/coelhos-principais-caracteristicas-e-como-cuidar-dentro-de-casa-960x640.jpg.webp'
              alt='Bunny'>
            </img>
            
            <img
              style={{width: 500, height: 333.23}}
              src={photoBunny} 
              alt='Bunny2'>
            </img>

            
            <IconCarrinho style={{width: 30, height: 30}}/>

            <IconStar style={{width: 40, height: 30, color:'#fff'}}/>
        </Box>
    )
}

const styles = {
    Box: {
        background: '#ff0d51',
        width: "100%",
        padding: "15px"
    },
    h3: {
        textAlign: "center"
    }
}

export default Content