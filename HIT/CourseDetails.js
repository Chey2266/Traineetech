import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import "./HIT.css"

const CourseDetails = () => {
    const{id} = useParams();

    const[details, setDetails] = useState("");
    const[name, setname] = useState('');
    const[mobile, setmobile] = useState('');
    const[email, setemail] = useState('');
    const[course, setcourse] = useState('');
    const[message, setmessage] = useState('');
    useEffect(()=>{
        axios.get("http://localhost:4000/course/" + id)
        .then((res)=>{
            setDetails(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    const enquiry = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/enquires",{name,mobile,email,course,message})
        .then(()=>{
            alert("Enquiry Posted ! Your'll Get a Call from Admin Team:")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='container p-5'>
        <div className='row'>
            <div className='col-12 col-lg-8'>
                <h1 className='h text-start'>CourseDetails</h1>
                <h3 className=''>{details.heading}</h3>
                <p className='pp'>{details.description}</p>       
                <p className='pp'>{details.description1}</p>
            </div>
            <div className='col-12 col-lg-4 btn' id='frm'>
                <h1>Register Here</h1>
                <form onSubmit={enquiry}>
                        <input  type='text' name='username' placeholder='Your name' value={name} onChange={(e)=>setname(e.target.value)} />
                        <input  type='tel' name='mobile' placeholder='Mobile Number' value={mobile} onChange={(e)=>setmobile(e.target.value)} />
                        <input  type='email' name='email' placeholder='Email Id' value={email} onChange={(e)=>setemail(e.target.value)} />
                        <select name='course' value={course} onChange={(e)=>setcourse(e.target.value)}>
                        <option hidden>Select your course</option>
                        <option value="Python Fullstack" >Python Fullstack</option>
                        <option value="MERN Full Stack Developer">MERN Full Stack Developer</option>
                        <option value="UI Development">UI Development</option>
                        <option value="React JS">React JS</option>
                        <option value="UI/UX Designing">UI/UX Designing</option>
                        </select>
                        <textarea name='message' placeholder='Message' value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
                        <button className="btn11">Submit</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default CourseDetails