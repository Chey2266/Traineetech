import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../HIT.css"

const ViewCourse = () => {
  const[course, setCourse] = useState([]);
  const[id, setId] = useState();
  const[name, setname] = useState();
  const[heading, setHeading] = useState();
  const[path, setPath] = useState();
  const[description, setDescription] = useState();
  const[description1, setDescription1] = useState();

  useEffect(()=>{
    axios.get("http://localhost:4000/course")
    .then((res)=>{
    setCourse(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  });
  const deleteCourse = (courseId) =>{
    axios.delete("http://localhost:4000/course/" + courseId)
    .then((res)=>{
        alert("Course deleted successfully")
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  const editCourse = (courseId)=>{
    axios.get("http://localhost:4000/course/" + courseId)
    .then((res)=>{
        setId(res.data.id)
        setname(res.data.name)
        setHeading(res.data.heading)
        setPath(res.data.path)
        setDescription(res.data.description)
        setDescription1(res.data.description1)
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  const updateCourse = (e) =>{
    e.preventDefault();
    axios.put("http://localhost:4000/course/" + id,{id, name, heading, path, description, description1})
    .then(()=>{
        alert("Course upadated successfully")
    })
    .catch((err)=>{
        console.log(err);
    })
}
  return (
    <div className='container p-5'>
      <h1>View Courses</h1>
      <div className='table-responsive'>
        <table className="table table-bordered">
          <thead className='table-dark'>
            <tr className="abctable">
              <th>Id</th>
              <th>Course Name</th>
              <th>Heading</th>
              <th>Image Link</th>
              <th>Description</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {course.map((course)=>{
              return(
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.heading}</td>
                  <td>{course.path}</td>
                  <td>{course.description}</td>
                  <td>{course.description1}</td>
                  <td><button className='btn ' id='edit' onClick={()=>{editCourse(course.id)}} >Edit</button><button className='btn' id='delete' onClick={()=>{deleteCourse(course.id)}} >Delete</button></td>
                </tr>
              ) 
             })}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={updateCourse}>
          <input type='text' name='id' placeholder='Enter Id'  value={id} onChange={(e)=>{setId(e.target.value)}}/>
          <input type='text' name='name' placeholder='Enter Course' value={name} onChange={(e)=>{setname(e.target.value)}}/>
          <input type='text' name='heading' placeholder='Enter Heading' value={heading} onChange={(e)=>{setHeading(e.target.value)}}/>
          <input type='text' name='image' placeholder='Image link' value={path} onChange={(e)=>{setPath(e.target.value)}}/>
          <input id='desc' type='text' name='description' placeholder='Enter Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
          <input type='text' name='description1' placeholder='Enter Description' value={description1} onChange={(e)=>{setDescription1(e.target.value)}}/>
          <input className='btn btn-success' type='submit'/>
        </form>
      </div>
    </div>
  )
}

export default ViewCourse