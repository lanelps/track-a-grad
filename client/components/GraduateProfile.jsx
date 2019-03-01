import React from 'react'

export default function GraduateProfile (props) {
  return (
    <div style={{border: '5px solid red'}}>
      <h1>{props.status}</h1>
      <h1>{props.firstName}{props.lastName}</h1>
      <h1>{props.location}</h1>
      <h1>{props.description}</h1>
      <img src={`${props.profiePicture}`} alt="student-profile-pic"/>
    </div>
  )
}
