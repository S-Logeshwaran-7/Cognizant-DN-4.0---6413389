import { useState } from "react";
export const IncrementDecrement= () =>{
    var [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        count===0?setCount(0) : setCount(count-1);
    }
    return(
        <div>
            <p> count: {count} </p>
            <button onClick={increment} onClickCapture={() => alert("Hello! Member!")}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}