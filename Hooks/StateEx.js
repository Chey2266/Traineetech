import React, { useEffect, useState } from 'react'

const StateEx = () => {
    const[trainer,settrainer] = useState("Chandra") //state daeclaration
    const[counter, setcounter] = useState(0)

    useEffect(()=>{
        document.title = trainer + " You Clicked" + counter +" times"
    })
  return (
    <div  className='container p-5'>
        <h1 className='text-start'>Welcome to {trainer}</h1> 
        <button onClick={()=>{settrainer("Chaitanya")}}>Update</button>
        <h1 className='text-start'>Counter: {counter}</h1>
        <button onClick={()=>{setcounter(counter+1)}}>Add</button>
    </div>
  )
}

export default StateEx