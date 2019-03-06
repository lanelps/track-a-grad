import React, {Component} from 'react'
import GraduateProfile from '../GraduateProfile/GraduateProfile'
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getGraduates} from '../../api/users'
import './graduatefeed.css'

class GraduateFeed extends Component {
  // on load get this info
  componentDidMount () {
    this.props.dispatch(getGraduates())
  }

  render () {
    return (
      <div>

        <Nav />
        <div className="spacer"></div>
        <h1 className="gradDashboard-title">Welcome to Trackergrad</h1>        {this.props.graduates.map((graduate) => {
          return (
            <React.Fragment key={graduate.id}>
              <Link key={graduate.id} to={`/graduatedashboard/${graduate.id}`} style={{textDecoration: 'none'}}>
                <GraduateProfile
                  key={graduate.id}
                  id={graduate.id}
                  firstName={graduate.firstName}
                  lastName={graduate.lastName}
                  profilePicture={graduate.profilePicture}
                  location={graduate.location}
                  cv={graduate.cv}
                  description={graduate.description}
                  workStatus={graduate.workStatus}

                  // skills={graduate.skills}
                />
              </Link>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    graduates: state.graduates
  }
}

export default connect(mapStateToProps)(GraduateFeed)

// make link to new route with the child component and on didmount in that component it will call the api function
