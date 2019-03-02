import React from 'react'
import './graduateprofile.css'

export default function GraduateProfile (props) {
  return (
    <div className="graduateprofile">
      {/* <img src={`${props.profilePicture}`} alt="student-profile-picture"/> */}
      <img src="../../images/avatars/avatar32.png" width="100"/>
      <h1>{props.firstName} {props.lastName}</h1>
      <p>{props.status}</p>
      <p>Status: {props.workStatus}</p>
      <h3>{props.location}</h3>
      <p>Point of difference: {props.description}</p>
    </div>
  )
}
