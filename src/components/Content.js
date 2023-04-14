import Box from '@mui/material/Box'
// import { Children } from 'react'
// import Alert from './Alert'

// import SampleUseState from './SampleUseState'


const Content = ({title, Children}) => {
    return (
        <Box sx={styles.Box}>

            
            <h3 style={styles.h3}> {title}</h3>


           {Children}

            
            <br />


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