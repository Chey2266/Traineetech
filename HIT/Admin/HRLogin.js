import React, { useState } from 'react'
import "../HIT.css"
import { useNavigate } from 'react-router-dom';

const HRLogin = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const validateAdmin = (e) =>{
        e.preventDefault();
        if(username === "chaitanya" && password === "Chey@2266"){
           // alert("Login Successfully")
          navigate("/hrdashboard") ;
        }
        else{
            alert("Invalid Login")
        }
    }
  return (
    <div className='container p-5'>
        <h1 className='text-center' id='wel'>Welcome Admin</h1>
        <div className='col-10 col-lg-6 mx-auto'>
        <form onSubmit={validateAdmin}>
            <input id='inn' type='text' name='username' placeholder='username' className='form-control mb-3' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
            <input id='inn' type='password' name='password' placeholder='password' className='form-control mb-3' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <input id='btn' type='submit' className=' form-control '></input>
        </form>
        </div>
    </div>
  )
}

export default HRLogin