function Button(){
    
    const handleClick = () => console.log("Ouch")

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    let count = 0
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        } else {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick4 = (e) => e.target.textContent = "OUCH!"

    return(
        <>
            <button onClick={handleClick}>simple click me</button>
            <button onClick={() => handleClick2("levente")}>i have arguments</button>
            <button onClick={() => handleClick3("levente")}>conditional click me</button>
            <button onClick={(e) => handleClick4(e)}>event</button>
        </> 
        // to send argument to a function, we need to wrap the callback into a funciton expression or an arrow function
    );
}

export default Button