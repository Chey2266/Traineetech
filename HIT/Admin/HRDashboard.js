import React, { useState } from 'react'
import AddBatches from './AddBatches'
import ViewBatches from './ViewBatches'
import { useActionData } from 'react-router-dom'
import AddCourse from './AddCourse'
import ViewCourse from './ViewCourse'
import ViewEnquiry from './ViewEnquiry'

const HRDashboard = () => {
  const [view, setview] = useState("");
  const DashboardView =() =>{
    let msg = "";
    if (view === ""){
    msg =  <h1>Welcome to Admin Dashboard</h1>;
    }
    else if(view === "addBatches"){
      msg = <AddBatches/>;
    }
    else if(view === "viewBatches"){
      msg = <ViewBatches/>;
    }
    else if(view === "addcourses"){
      msg = <AddCourse/>;
    }
    else if(view === "viewcourse"){
      msg = <ViewCourse/>;
    }
    else if(view === "viewEnquires"){
      msg = <ViewEnquiry/>;
    }
    else{
      msg =<h1>This feature is not available </h1>
    }
    return msg;
  };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-2'id='sidenav'>
                <button onClick={()=>{setview("addBatches")}}>Add Batches</button>
                <button onClick={()=>{setview("viewBatches")}}>View Batches</button>
                <button onClick={()=>{setview("addcourses")}}>Add Courses</button>
                <button onClick={()=>{setview("viewcourse")}}>View Courses</button>
                <button onClick={()=>{setview("viewEnquires")}}>View Enquiries</button>
            </div>
            <div className='col-12 col-lg-10'>
              {DashboardView()}
            </div>
        </div>
    </div>
  )
}

export default HRDashboard