import React from 'react'
import './dashboardheader.css'

export default function DashBoardHeader (props) {
  return (
    <React.Fragment>
      <div className="profileHeader">
        <div>
          {/* <img src={`${props.profilePicture}`} alt="student-profile-picture"/> */}
          <img src="../../images/avatars/avatar32.png" width="100"/>
          <div className="info">
            <h1>{props.firstName} {props.lastName}</h1>
            <h4>{props.location}</h4>
            <h4>{props.cohort}</h4>
          </div>
        </div>
        <div className="statusBar">
          {/* <p>{props.status} </p> */}
          <h3>{props.workStatus}</h3>
          <div>
            <a href="#">See C.V</a>
          </div>
        </div>
      </div>
      {/* <p>{props.description}</p> */}
      <p>I am a creative UI / UX designer, with a strong skillset in user-centric design, full-stack development, and team management. I am passionate about translating innovative product visions into beautiful designs to help reach market successfully.</p>
    </React.Fragment>
  )
}

//    <div className="dashboardheader">
//         <img src="../../images/avatars/avatar32.png" alt="student-profile-photo" height="100" />

//         <div className="headerinfo">
//           <p>{props.workStatus}</p>
//           <p>{props.firstName}{props.lastName}</p>
//           <p>{props.location}</p>
//           <p>{props.cohort}</p>
//         </div>

//         <div>
//           <a href="#">See C.V</a>
//         </div>
//       </div>
