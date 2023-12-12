import React from 'react'
import logo from "./asset/logo.jpg"
import { NavLink } from 'react-router-dom'

function Header() {
    <title>Traineetech</title>
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo}></img>
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/batches">Batches</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/register">Register Here</NavLink>
                                <NavLink className="dropdown-item" to="/hrlogin">Admin Login</NavLink>
                            </div>
                        </li>
                        </ul>
                    
                </div>
          </div>
        </nav>
        
    </div>
  )
}

export default Header