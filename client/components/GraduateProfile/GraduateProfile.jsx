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
          <h3>{props.workStatus}</h3>
        </div>
      </div>
      <h2>POINT OF DIFFERENCE </h2>
      <p>{props.description}</p>
      <h2>SKILLS </h2>
      {/* <p>{props.skills}</p> */}
      <h3>Redux</h3>
      <h3>React</h3>
      <h3>SQl</h3>
    </div>
  )
}
