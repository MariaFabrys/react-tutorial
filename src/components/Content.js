import Box from '@mui/material/Box'
import Alert from './Alert'
import photoBunny from './assets/img/coelhoOrelhudo.webp'
import { ReactComponent as IconCarrinho} from './assets/img/carrinho.svg'

import {GiStarfighter as IconStar} from 'react-icons/gi'
import SampleUseState from './SampleUseState'


const Content = () => {
    return (
        <Box component="Content" sx={styles.Box}>

            
            <h3 style={styles.h3}> Content</h3>


            <Alert type="success" >
                Deu certo!
            </Alert>
            <Alert type="error">
                Deu erro!
            </Alert>
            <Alert type="info">

                Info!
            </Alert>
            <Alert type="warning">

                Warning!
            </Alert>

            <SampleUseState/>

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

            <br/>

            {/* ReactComponent */}
            <IconCarrinho style={{width: 30, height: 30}}/>

            <IconStar style={{width: 40, height: 30, color:'#fff'}}/>
        </Box>
    )
}

const styles = {
    Box: {
        background: "#EEE",
        width: "100%",
        padding: "15px"
    },
    h3: {
        textAlign: "center"
    }
 
}

export default Content