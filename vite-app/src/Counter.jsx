import React,{useState} from "react";

function Counter(){

    

    const[count, setCount] = useState(0);
    
    const increseCount = () => {
        setCount(count+1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const decreseCount = () => {
        setCount(count-1)
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={increseCount}>Increse</button>
            <button className="counter-button" onClick={resetCount}>Reset</button>
            <button className="counter-button" onClick={decreseCount}>Decrese</button>
        </div>
    )

}

export default Counter;