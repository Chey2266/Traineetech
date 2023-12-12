import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./HIT.css"
import { NavLink } from 'react-router-dom';

const Courses = () => { 
    const [course, setCo] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/course")
        .then((res)=>{
            setCo(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div className='container p-5' id='course'>
        <h1 className='h'>Courses</h1>
        <div className='row'>
            {course.map((cou)=>{
                return<div className='col-12 col-md-6 col-lg-3'>
                <div class="card">
                    <img class="card-img-top" src={cou.path} alt="Title" />
                    <div class="card-body">
                        <h5 class="card-title text-center ">{cou.name}</h5>
                        <NavLink to={`/coursedetails/${cou.id}`}>
                            <button className='btn text-bg-danger know'>Know More</button>  
                        </NavLink>
                    </div>
                </div>
            </div> 
            })}
        </div>
    </div>
  )
}

export default Courses