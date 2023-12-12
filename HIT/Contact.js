import React, { Component } from 'react'   
import "./HIT.css"

export default class Contact extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           username:"",
           mobile:"",
           email:""
        }
      }
      ChangeData =(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        });
        
      }
      //name validation
      submitHandler =(refresh)=>{
        refresh.preventDefault();
        let alphaExp = /^[a-zA-Z]+$/
        if(this.state.username === ""){
          document.getElementById("userNote").innerHTML = "Name is Mandatory"
        }  
        else{
          if(this.state.username.match(alphaExp)){
            document.getElementById("userNote").innerHTML = ""
          }
          else{
            document.getElementById("userNote").innerHTML = "only characters"
          }
        }
    
        //mobile validation
        let numExp = /^[0-9]+$/;
        if(this.state.mobile === ""){
          document.getElementById("userNote1").innerHTML = "Mobile number is Mandatory"
        }  
        else{
          if(this.state.mobile.match(numExp)){
            document.getElementById("userNote1").innerHTML = ""
          }
          else{
            document.getElementById("userNote1").innerHTML = "only numbers"
          }
        }  
        //mail validation
        let mailExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.email === ""){
          document.getElementById("userNote2").innerHTML = "email is Mandatory"
        }  
        else{
          if(this.state.email.match(mailExp)){
            document.getElementById("userNote2").innerHTML = ""
          }
          else{
            document.getElementById("userNote2").innerHTML = "enter valid email(Ex:ITtechnology@gmail.com)"
          }
        }  
      }
  render() {
    return (
        <div className='container-fluid p-5'>
          <h1 className='h11'><span>Contact</span> Us</h1>
          <div className='row'>
            <div className='container col-12 col-lg-8 p-5 text-center'>
              <form onSubmit={this.submitHandler}>
                      <input id='in' type='text' name='username' placeholder='Your name' value={this.state.username} onChange={this.ChangeData}/>
                      <p id='userNote'></p>
                      <input id='in' type='tel' name='mobile' placeholder='Mobile Number' value={this.state.mobile} onChange={this.ChangeData}/>
                      <p id='userNote1'></p>
                      <input id='in' type='email' name='email' placeholder='Email Id' value={this.state.email} onChange={this.ChangeData}/>
                      <p id='userNote2'></p>
                      <select id='sel' name='course'>
                        <option hidden>Select your course</option>
                        <option >Python Fullstack</option>
                        <option >MERN Full Stack Developer</option>
                        <option >UI Development</option>
                        <option >React JS</option>
                        <option >UI/UX Designing</option>
                      </select>
                      <textarea name='message' placeholder='Message'></textarea>
                      <button class="btnn">Submit</button>
                  </form>
            </div>
            <div  className='col-12 col-lg-4'>
                 <h4 className='ad'>Address</h4>
                 <p id='addddd'>House No 40, Third Floor,</p>
                 <p id='addddd'>Vittalrao Nagar, Madhapur,</p>
                 <p id='addddd'>Hitech City Main Road,</p>
                 <p id='addddd'>Hyderabad, Telangana- 081</p>
                 <p id='addddd'>info@hyderabadittrainings.com</p>
                 <p id='addddd'>hr@hyderabadittrainings.com</p>
            </div>
            <div className='col-12 col-lg-12'>
              <iframe className='p-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243604.77461595088!2d78.384686!3d17.444171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Python%20Java%20MERN%20Full%20Stack%20Web%20Development%20React%20JS%20PHP%20UI%20UX%20Design%20Training%20Institute%20Hyderabad!5e0!3m2!1sen!2sin!4v1701153515500!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      )
    }
  }