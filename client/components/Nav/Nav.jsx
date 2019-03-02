import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default function Nav () {
  return (
    <React.Fragment>
      <div className="navWrapper">
        <div className="navlogo">
          <img src='../../images/trackergrad-logo.png' alt="tracker"/>        </div>
        <div className="menu">
          <div>
            <Link to="/">Sign In</Link>
          </div>
          <div>
            <Link to="/registration">Register</Link>
          </div>
          <div>
            <Link to="/graduatefeed">Graduate Feed</Link>
          </div>
          <div>
            <Link to="/graduateprofile">Profile</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
