function UserGreeting(props){
    
    /*

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please login to continue</h2>
    }
        
    */
    
    /*

    return(props.isLoggedIn ?   <h2 className="welcome-message">Udv {props.username}</h2> : 
                                <h2 className="login-prompt">Please log in</h2>);

    */

    const WelcomeMessage = <h2 className="welcome-message">Udv {props.username}</h2>
    const LoginPrompt = <h2 className="login-prompt">Please log in</h2>

    return(props.isLoggedIn ? WelcomeMessage : LoginPrompt);

}
export default UserGreeting