import React from 'react'
import './dashboardheader.css'

export default function DashBoardHeader (props) {
  return (
    <React.Fragment>
      <div className="dashboardheader">
        <img src="../../images/avatars/avatar32.png" alt="student-profile-photo" height="100" />

        <div className="headerinfo">
          <p>{props.workStatus}</p>
          <p>{props.firstName}{props.lastName}</p>
          <p>{props.location}</p>
          <p>{props.cohort}</p>
        </div>

        <div>
          <a href="#">See C.V</a>
        </div>
      </div>
    </React.Fragment>
  )
}
