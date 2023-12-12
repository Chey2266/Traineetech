import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../HIT.css"

const ViewBatches = () => {
    const[batches, setbatches] = useState([]);

    const[id, setId] = useState();
    const[course, setCourse] = useState();
    const[startdate, setStartdate] = useState();
    const[timings, setTimings] = useState();
    const[duration, setDuration] = useState();
    const[trainer, setTrainer] = useState();

    useEffect(()=>{
        axios.get("http://localhost:4000/batches")
        .then((res)=>{
        setbatches(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    const deleteBatch = (batchId) =>{
        axios.delete("http://localhost:4000/batches/" + batchId)
        .then((res)=>{
            alert("Batch deleted successfully")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const editbatch = (batchId)=>{
        axios.get("http://localhost:4000/batches/" + batchId)
        .then((res)=>{
            setId(res.data.id)
            setCourse(res.data.course)
            setStartdate(res.data.startdate)
            setTimings(res.data.timings)
            setDuration(res.data.duration)
            setTrainer(res.data.trainer)
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    const updatedbatch = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:4000/batches/" + id,{id, course, startdate, timings, duration, trainer})
        .then(()=>{
            alert("Batch upadated successfully")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='container p-5'>
            <h1>View Batches</h1>
                <div className='table-responsive'>
                    <table className="table table-bordered">
                        <thead className='table-dark'>
                        <tr className="abctable">
                            <th>Id</th>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Timings</th>
                            <th>Duration</th>
                            <th>Trainer</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {batches.map((batch)=>{
                                return(
                                    <tr key={batch.id}>
                                    <td>{batch.id}</td>
                                    <td>{batch.course}</td>
                                    <td>{batch.startdate}</td>
                                    <td>{batch.timings}</td>
                                    <td>{batch.duration}</td>
                                    <td>{batch.trainer}</td>
                                    <td  className='text-center'><button className='btn' id='enroll' onClick={()=>{editbatch(batch.id)}}>Edit</button><button className='btn' id='enroll1' onClick={()=>{deleteBatch(batch.id)}}>Delete</button></td>
                                    </tr>
                                ) 
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <form onSubmit={updatedbatch}>
                        <input type='text' name='id' placeholder='Enter Id' disabled value={id} onChange={(e)=>{setId(e.target.value)}}/>
                        <input type='text' name='course' placeholder='Enter Course' value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                        <input type='date' name='startdate' placeholder='Enter startdate' value={startdate} onChange={(e)=>{setStartdate(e.target.value)}}/>
                        <input type='text' name='timings' placeholder='Enter timing' value={timings} onChange={(e)=>{setTimings(e.target.value)}}/>
                        <input type='text' name='duration' placeholder='Enter duration' value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>
                        <input type='text' name='trainer' placeholder='Enter trainer' value={trainer} onChange={(e)=>{setTrainer(e.target.value)}}/>
                        <input className='btn btn-success' type='submit'/>
                    </form>
                </div>
            </div>        
    )
}
export default ViewBatches 