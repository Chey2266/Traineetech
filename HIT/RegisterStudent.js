import React, { useState } from 'react'
import "./HIT.css"
import axios from 'axios';

const RegisterStudent = () => {
    const[id, setId] = useState('');
    const[name, setname] = useState('');
    const[mobile, setmobile] = useState('');
    const[email, setemail] = useState('');
    const[course, setcourse] = useState('');
    const[message, setmessage] = useState('');
    const postEnquiry = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/enquires",{id,name,mobile,email,course,message})
        .then(()=>{
            alert("Enquiry Posted ! Your'll Get a Call from Admin Team:")
        })
        .catch((err)=>{
            console.log(err);
        })
        //alert("working " + mobile  );
    }
  return (
    <div className='container p-5' id='contact'>
        <h1>Register Here</h1>
        <div className='row'>
            <div className='col-12 col-lg-12'>
            <form onSubmit={postEnquiry}>
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

export default RegisterStudent