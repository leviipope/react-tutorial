// updater function =   A function passed as an argument to setState() usually
//                      ex. setYear(arrow function)
//                      Allows for safe updates based on the previous state
//                      Used with multiple state updates and asynchronous functions
//                      Good practice to use updater functions

import React, {useState} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){
        //setCount(count + 1);
        //setCount(count + 1);
        // Only adds 1

        setCount(prevCount => prevCount + 1); // naming convention => a or prevAge for age
        setCount(prevCount => prevCount + 1);
        // This way, it will add 2

        // Takes the PENDING state to calculate NEXT state.
        // React puts updater function in a queue
        // During the next render, it will call them in the same order.

        // when using multiple state updates, make sure to use updater functions, it is good practice either way.
    }

    function reset(){
        setCount(0);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default MyComponent