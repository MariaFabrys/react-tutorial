import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box component='Footer' sx={styles.Box}>
            <h3 style={styles.h3}>Footer</h3>
        </Box>
    )
}

const styles = {
    Box:{
        height: "100px", 
        width: "100%",
        background: "#7a8c89"
    },
    h3:{
        textAlign: "center",
        margin: "0px"

    }
}

export default Footer