import axios from 'axios';
import React, { useState } from 'react'

const AddBatches = () => {
    const[id, setId] = useState();
    const[course, setCourse] = useState();
    const[startdate, setStartdate] = useState();
    const[timings, setTimings] = useState();
    const[duration, setDuration] = useState();
    const[trainer, setTrainer] = useState();

    const postBatch = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/batches", {id, course, startdate, timings, duration, trainer})
        .then(()=>{
            alert('Batch added successfully')
        })
        .catch((err)=>{
            console.log(err);
        })
    };
  return (
    <div className='container p-5' id='addBatches'>
        <h1>Add Batches</h1>
        <form onSubmit={postBatch}>
            <input type='text' name='course' placeholder='Enter Id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <input type='text' name='course' placeholder='Enter Course' value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
            <input type='date' name='date' placeholder='Enter startdate' value={startdate} onChange={(e)=>{setStartdate(e.target.value)}}/>
            <input type='text' name='course' placeholder='Enter timing' value={timings} onChange={(e)=>{setTimings(e.target.value)}}/>
            <input type='text' name='course' placeholder='Enter duration' value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>
            <input type='text' name='course' placeholder='Enter trainer' value={trainer} onChange={(e)=>{setTrainer(e.target.value)}}/>
            <input className='btn btn-success' type='submit'/>
        </form>
    </div>
  )
}

export default AddBatches