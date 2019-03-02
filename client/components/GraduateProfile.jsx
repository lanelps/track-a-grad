import React from 'react'

export default function GraduateProfile (props) {
  return (
    <div style={{border: '1px solid red', marginTop: '20px', padding: '20px'}}>
      <p>{props.status}</p>
      <h1>{props.firstName} {props.lastName}</h1>
      <h3><span>Just a bit {props.workStatus} arent ya {props.firstName}?</span></h3>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
      <img src={`${props.profiePicture}`} alt="student-profile-picture"/>
    </div>
  )
}
