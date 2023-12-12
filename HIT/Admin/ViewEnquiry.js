import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiry = () => {
    const [enquires, setEnquires] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/enquires")
        .then((res)=>{
            setEnquires(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div className='container p-5'>
            <h1>View Enquiries</h1>
            <div className='table-responsive'>
                <table className="table table-bordered">
                    <thead className='table-dark'>
                        <tr className="abctable">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mobile</th>
                           <th>Email</th>
                            <th>Course</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquires.map((enquires)=>{
                            return(
                                <tr key={enquires.id}>
                                    <td>{enquires.id}</td>
                                    <td>{enquires.name}</td>
                                    <td>{enquires.mobile}</td>
                                    <td>{enquires.email}</td>
                                    <td>{enquires.course}</td>
                                    <td>{enquires.message}</td>
                                    <td  className='text-center'><button className='btn' id='enroll' >Edit</button><button className='btn' id='enroll1' >Delete</button></td>
                                </tr>
                            ) 
                        })}
                    </tbody>
                </table>
            </div>
        </div>        
    )
}

export default ViewEnquiry