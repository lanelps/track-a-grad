import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default function Nav () {
  return (
    <div>
      {/* logo div */}
      <div>
        <h3>Track-a-grad</h3>
      </div>
      {/* navLinks div */}
      <div className="navbar">
        <div className="SignIn">
          <Link to="/">Sign In</Link>
        </div>
        <div className="Register">
          <Link to="/registration">Register</Link>
        </div>
        <div className="GraduateFeed">
          <Link to="/graduatefeed">Graduate Feed</Link>
        </div>
        <div className="Profile">
          <Link to="/graduateprofile">Profile</Link>
        </div>
      </div>
    </div>
  )
}
