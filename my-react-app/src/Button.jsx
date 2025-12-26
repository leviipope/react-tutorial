
function Button(){

    const inlineStyles = {
            backgroundColor: "hsl(0, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "block",
            margin: "10px"
        }

    return(
        <>
            <button className="button">Im external</button>
            <button style={inlineStyles}>im inline</button>
        </>
    );
}

export default Button