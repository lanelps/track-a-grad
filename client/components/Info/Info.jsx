import React from 'react'
import './info.css'
import EditProfile from '../EditProfile/EditProfile'

export default function Info (props) {
  return (
    <React.Fragment>
      <div>
        <div className="info-section">
          <div className="align">
            <h2>Skills</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>Heres them skills yo</p>
        </div>
        <div className="info-section">
          <div className="align">
            <h2>Pair Review</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>Evandah is alright I guess</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Work Experience</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>Maccas</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Accomplishments</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>Excellence in being a ho</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Education</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>Pakuranga high</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Portfolio</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>www.lmao.com</p>
        </div>

        <div className="info-section">
          <div className="align">
            <h2>Github</h2>
            <div className="edit">
              <EditProfile />
            </div>
          </div>
          <p>www.github.lmao.com</p>
        </div>
      </div>
    </React.Fragment>
  )
}
