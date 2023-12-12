import React, { useMemo, useState } from 'react'

const MemoEx = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber]= useState(5);
    const fact = useMemo(()=>{
        return factorial(number)
    },[number]);
  return (
    <div className='"container p-5 text-center'>
        <h1>Counter : {counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Add</button>
        <h1>Number : {fact}</h1>
        <button onClick={()=>{setNumber(number + 1)}}>Add</button>
    </div>
  )
}; 

export default MemoEx;

const factorial = (num) => {
    console.log("Function Executed");
    return num *num ;
}