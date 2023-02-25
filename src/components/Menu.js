import Box from '@mui/material/Box';

const Menu = () => {
    return (
        <Box component='Menu' sx={styles.Box}> 
             <h3 style={styles.h3}>Menu...</h3>
        </Box>
    )
}

const styles = {
    Box:{
        margin:"0px",
        background: "#909d9e",
        height:"100px"
    },
    h3:{
        margin:"0px",
        color:"black"
    }
    
}



export default Menu