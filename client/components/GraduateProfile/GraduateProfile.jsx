import React from 'react'
import './graduateprofile.css'

export default function GraduateProfile (props) {
  return (
    <div className="graduateprofile">
      <div className="profileHeader">
        <div>
          {/* <img src={`${props.profilePicture}`} alt="student-profile-picture"/> */}
          <img src="../../images/avatars/avatar32.png" width="100"/>
          <div className="info">
            <h1>{props.firstName} {props.lastName}</h1>
            <h4>{props.location}</h4>
            <h4>Harakeke2019</h4> {/*  {props.cohort} */}
          </div>
        </div>
        <div className="statusBar">
          {/* <p>{props.status} </p> */}
          <p>{props.workStatus}</p>
        </div>
      </div>
      <p>Point of difference: {props.description}</p>
    </div>
  )
}
