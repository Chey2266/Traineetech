import axios from 'axios';
import React, { useState } from 'react'

const AddCourse = () => {
  const[id, setId] = useState();
  const[name, setname] = useState();
  const[heading, setHeading] = useState();
  const[path, setPath] = useState();
  const[description, setDescription] = useState();
  const[description1, setDescription1] = useState();

  const postCourse =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/course" ,{id, name, heading, path, description, description1})
    .then(()=>{
      alert("Added course successfully!")
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='container p-5' id='addBatches'>
        <h1>AddCourse</h1>
        <div>
        <form onSubmit={postCourse}>
            <input type='text' name='id' placeholder='Enter Id'  value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <input type='text' name='name' placeholder='Enter Course' value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type='text' name='heading' placeholder='Enter Heading' value={heading} onChange={(e)=>{setHeading(e.target.value)}}/>
            <input type='text' name='image' placeholder='Image link' value={path} onChange={(e)=>{setPath(e.target.value)}}/>
            <input type='text' name='description' placeholder='Enter Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input type='text' name='description1' placeholder='Enter Description' value={description1} onChange={(e)=>{setDescription1(e.target.value)}}/>
            <input className='btn btn-success' type='submit'/>
        </form>
        </div>
    </div>
  )
}

export default AddCourse