import React, { Component } from 'react'
import axios from 'axios'
import "./AddEmployee.css"

export default class EmployeeData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        employees:[],
        id:"",
        name:"",
        role:"",
        salary:"",
        location:""
      }
    }
    componentDidMount(){
        //fetchin data from api
        axios.get("http://localhost:4000/employee")
        .then((res)=>{
            this.setState({
                employees: res.data,
            })
            //console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });  
    }
    deleteData =(empId)=>{
        //alert("working " + empID);
        axios.delete("http://localhost:4000/employee/" + empId)
        .then(()=>{
            alert("Emplyee data deleted successfully")
        })
        .catch((err)=>{
            console.log(err );
        })
    };
    editData = (empId) =>{
        axios.get("http://localhost:4000/employee/"+empId) 
        .then((res)=>{
            this.setState({
                id: res.data.id,
                name: res.data.name,
                role: res.data.role,
                salary: res.data.salary,
                location: res.data.location
            })
        })
        .catch((err)=>{
            console.log(err);
        })
        //alert("working" +empId)
    };
    ChangeData =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    updateData =(e)=>{
        e.preventDefault();
        const{id, name, role, salary,location} = this.state; //destructure  
        axios.put("http://localhost:4000/employee/" +id,{id,name,role,salary,location})
        .then(()=>{
            alert("Employee data updated successfully")
        })
        .catch((err)=>{
            alert("Not updated ")
            console.log(err);
        })
    }
  render() {

    const{id, name, role, salary,location} = this.state; //destructure 

    return (
      <div className='container p-5'>
        <h1>EmployeData</h1>
        <div className="table-responsive">
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">Employe Id</th>
                        <th scope="col">Employe Name</th>
                        <th scope="col">Employe Role</th>
                        <th scope="col">Employe Salary</th>
                        <th scope="col">Employe Location</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map((emp)=>{
                            return(
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.location}</td>
                                    <td><button className='edit' onClick={()=>this.editData(emp.id)}>Edit</button></td>
                                    <td><button onClick={()=>this.deleteData(emp.id)} >Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <div id='postdata'>
        <form onSubmit={this.updateData}>
            <input type='number' name='id' placeholder='id' disabled value={id} onChange={this.ChangeData}/>
            <input type='text' name='name' placeholder='Employee Name' value={name} onChange={this.ChangeData}/>
            <input type='text' name='role' placeholder='Employee Role' value={role} onChange={this.ChangeData}/>
            <input type='text' name='salary' placeholder='Employee Salary' value={salary} onChange={this.ChangeData}/>
            <input type='text' name='location' placeholder='Employee Location' value={location} onChange={this.ChangeData}/>
            <input type='submit'/>
        </form>
        </div>
      </div>
    )
  }
}
