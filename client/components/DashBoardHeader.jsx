import React from 'react'

export default function DashBoardHeader () {
  const {firstName, lastName, location, cohort, photo, cvLink, status} = this.props.student

  return (
    <React.Fragment>
      {/* photo div */}
      <div>
        <img src={`${photo}`} alt="student-profile-photo" height="42" width="42" />
      </div>
      {/* information div */}
      <div>
        <h1>{status}</h1>
        <h1>{firstName}{lastName}</h1>
        <h1>{location}</h1>
        <h1>{cohort}</h1>
      </div>
      {/* cv div */}
      <div>
        <a href={`${cvLink}`}>See CV</a>
      </div>
    </React.Fragment>
  )
}
