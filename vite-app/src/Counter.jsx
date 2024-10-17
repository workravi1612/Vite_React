import React,{useState} from "react";
//updaterFunction(arrowFunction)
//setYear(y => y + 1)
function Counter(){

    

    const[count, setCount] = useState(0);
    
    const increseCount = () => {
        setCount(count+1)
        // setCount(c => c + 1) // Updater function (Arrow function or normal fn call)
        // setCount(c => c + 1) //Acc. to React documentation counter can be represented with prevCounter or c
        // setCount(c => c + 1) //We want to update 
    }
    const resetCount = () => {
        setCount(0)
    }
    const decreseCount = () => {
        setCount(count-1) //updates previous state not current state
        setCount(count-1) //this duplication won't work because it updates only previous state, but we have to update current state

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