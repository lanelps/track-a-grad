import React from 'react'

import './info.css'

export default function Info (props) {
  return (
    <React.Fragment>
      <div>
        <div className="info-section">
          <div className="align">
            <h2>Competencies</h2>
            <div className="edit">

            </div>
          </div>
          <p>{props.skills}</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Most Recent Employment Details</h2>
            <div className="edit">

            </div>
          </div>
          <p>
            {props.mostRecentOrganisation}
            {props.mostRecentRole}
            {props.mostRecentLocation}
            {props.mostRecentStartDate}
            {props.mostRecentEndDate}
            {props.mostRecentDescription}
          </p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Github</h2>
            <div className="edit">

            </div>
          </div>
          <p>{props.githubUrl}</p>
        </div>
      </div>
    </React.Fragment>
  )
}
