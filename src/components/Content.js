import Box from '@mui/material/Box';

const Content = () => {
    return (
        <Box component="Content" sx={styles.Box}>
            <h3 style={styles.h3}> Content</h3>
        </Box>
    )
}

const styles = {
    Box: {
        background: '#ff0d51',
        width: "100%"
    },
    h3: {
        textAlign: "center"
    }
}

export default Content