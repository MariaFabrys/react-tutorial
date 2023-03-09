const typeColor={
    success: '#cdefd6',
    error: '#efcdcd',
    info: '#cddeef',
    warning: '#ebe5b7'
}

const Alert = ({type, children}) => {

    const bg = {
        background: typeColor[type],
        padding: "10px",
        borderRadius: "10px"
    }
    return(
        <div style={bg}>
            {children}
        </div>
    )
}

export default Alert