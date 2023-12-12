import React, { Component } from 'react';
import "./AddEmployee.css"
import axios from 'axios';

export default class AddEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:"",
        name:"",
        role:"",
        salary:"",
        location:""
      };
    }
    ChangeData =(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            
        });
        //console.log("working");
    };
    postData =(e)=>{
        e.preventDefault();
        const{id, name, role, salary,location} = this.state; //destructure 
        axios.post("http://localhost:4000/employee", {id,name,role,salary,location})
        .then(()=>{
            alert("Added Successfully");
            this.setState({
                id:"",
                name:"",
                role:"",
                salary:"",
                location:"",
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    } 
  render() {
    const{id, name, role, salary,location} = this.state; //destructure 
    return (
      <div className='container p-5' id='postData'>
        <h1>AddEmployee</h1>
        <form onSubmit={this.postData}>
            <input type='number' name='id' placeholder='id' value={id} onChange={this.ChangeData}/>
            <input type='text' name='name' placeholder='Employee Name' value={name} onChange={this.ChangeData}/>
            <input type='text' name='role' placeholder='Employee Role' value={role} onChange={this.ChangeData}/>
            <input type='text' name='salary' placeholder='Employee Salary' value={salary} onChange={this.ChangeData}/>
            <input type='text' name='location' placeholder='Employee Location' value={location} onChange={this.ChangeData}/>
            <input type='submit'/>
        </form>
      </div>
    )
  }
}
