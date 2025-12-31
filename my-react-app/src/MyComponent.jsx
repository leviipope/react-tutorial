// useEffect() =    React Hook that tells React DO SOME CODE WHEN (pick one):
//                  This component re-renders
//                  This component mounts
//                  The state of a value changes
//                  Think of 'Effect' as 'side code'

// useEffect(function, [dependecies])

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when a value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Chnage color</button>
        </div>
    );
}

export default MyComponent