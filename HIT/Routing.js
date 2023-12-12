import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Slider from './asset/Slider';
import Courses from './Courses';
import Batches from './Batches';
import Errorrr from './Errorrr';
import RegisterStudent from './RegisterStudent';
import HRLogin from './Admin/HRLogin';
import EmployeeData from '../CrudClass/EmployeeData';
import Contact from './Contact';
import HRDashboard from './Admin/HRDashboard';
import CourseDetails from './CourseDetails';



const Routing = () => {
  return (
    <div className='container-fluid p-0'>
        <Routes>
            <Route path='/' element={<Slider/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/coursedetails/:id' element={<CourseDetails/>}/>
            <Route path='/batches' element={<Batches/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/register" element={<RegisterStudent/>}/>
            <Route path='/hrlogin' element={<HRLogin/>}/>
            <Route path='/hrdashboard' element={<HRDashboard/>}/>
            <Route path='*' element={<Errorrr/>}/>
        </Routes>
    </div>
  );
};

export default Routing;