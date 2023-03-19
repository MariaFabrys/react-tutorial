import Box from '@mui/material/Box'
import Alert from './Alert'

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

            
            <br/>


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