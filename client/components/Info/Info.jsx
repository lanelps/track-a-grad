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
          <p>{props.mostRecentOrganisation}</p>
          <p> {props.mostRecentRole}</p>
          <p>{props.mostRecentLocation}</p> 
          <p>{props.mostRecentStartDate}</p> 
          <p> {props.mostRecentEndDate}</p>
          <p> {props.mostRecentDescription}</p>

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
