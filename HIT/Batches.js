import React, { useEffect, useState } from 'react'
import "./HIT.css"
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Batches() {
  const[batches, setbatches] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/batches")
    .then((res)=>{
      setbatches(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div className='container p-5'>
    <h1 className='h1'><span>New</span> Batches</h1>
        <div className='table-responsive'>
            <table className="table table-bordered">
<thead className='table-dark'>
<tr className="abctable">
<th>Course</th>
<th>Date</th>
<th>Timings</th>
<th>Duration</th>
<th>Trainer</th>
<th>Register for Demo</th>
</tr>
</thead>
<tbody>
    {batches.map((batch)=>{
      return(
        <tr key={batch.id}>
          <td>{batch.course}</td>
          <td>{batch.startdate}</td>
          <td>{batch.timings}</td>
          <td>{batch.duration}</td>
          <td>{batch.trainer}</td>
          <td  className='text-center'><NavLink className='btn' to="/register" id='now'>Enroll Now</NavLink></td>
        </tr>
      )
    })}
</tbody>
</table>
        </div>
    </div>

  )
}

export default Batches