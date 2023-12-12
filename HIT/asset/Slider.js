import React from 'react'
import slider1 from "./1.jpg"
import slider2 from "./2.jpg"
import slider3 from "./3.jpg"
import "../HIT.css"

function Slider() {
  return (
    <div className='container-fluid p-0'>
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
            </div>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src={slider1} className='w-100' alt=""></img>
                </div>
                <div class="carousel-item">
                    <img src={slider2} className='w-100' alt=''></img>
                </div>
                <div class="carousel-item">
                    <img src={slider3} className='w-100' alt=''></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='container' id='para'>
            <div className='row'>
            <div className='col-8'>
            <h1 class='heading'>Welcome to <span>Hyderabad IT Trainings</span></h1>
            <p>Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both classroom and online training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.</p>
            <p>Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that enables students to gain realtime exposure.</p>
            <p>Hyderabad IT Trainings is a one-stop shop for IT courses, Web Development services & Recruitment services. Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training services.</p>
            </div>
            <div className='col-12 col-lg-4 btn' id='slidd'>
                <img className='sli btn' src='https://th.bing.com/th/id/OIP.x71YlxwAYZII0O9gddzIpQHaFQ?w=279&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
                <img className=' sli1 btn' src='https://th.bing.com/th/id/OIP.XcWlT900xDE7dgirRo18PAAAAA?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Slider