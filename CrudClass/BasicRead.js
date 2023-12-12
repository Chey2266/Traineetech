import React, { Component } from 'react'
import Axios from "axios";

export default class BasicRead extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[],
      };
    }
    componentDidMount(){
        //fetching data from the server using axios
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({
                users: res.data
            })
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);;
        })
    }
  render() {
    return (
      <div className='container p-5'>
        <h1>BasicRead from Api</h1>
        <div className="table-responsive-lg  col-lg-12">
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user)=>{
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        
        
      </div> 
    )
  }
}
