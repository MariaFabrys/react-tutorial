import Box from '@mui/material/Box'
import fotoCoelho from './assets/img/coelhoOrelhudo.webp'
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import { FaCartPlus as IconCarrinhoMais,} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#DDD",
            width: 200,
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
            <img 
                style={{
                    width: 200,
                    height: 123.83
                }}
                src="https://www.zooplus.pt/magazine/wp-content/uploads/2019/06/coelhos-768x632.jpg"
                alt="Bunny"
            />
            <hr />
            <img
                style={{
                    width: 200,
                    heigh: 120
                }}
                src={fotoCoelho}
                alt="Bunny"
            />
            <hr />
            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#345345'
            }} />
            <hr />
            <IconCarrinhoMais 
            style={{
                width: 40,
                height: 40,
                color: '#345345'
            }}
            /><hr />
            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#982234'
            }} />
            <hr />        
        </Box>
    )
}

export default Sidebar