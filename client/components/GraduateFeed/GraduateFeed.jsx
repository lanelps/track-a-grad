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
        <h1>Graduate Feed</h1>
        <Nav />
        {this.props.graduates.map((graduate) => {
          return (
            <Link key={graduate.id} to={`/graduatedashboard/${graduate.id}`} style={{textDecoration: 'none'}}>
              <GraduateProfile
                key={graduate.id}
                status={graduate.status}
                firstName={graduate.firstName}
                lastName={graduate.lastName}
                profilePicture={graduate.profilePicture}
                location={graduate.location}
                cv={graduate.cv}
                description={graduate.description}
                githubUrl={graduate.githubUrl}
                workStatus={graduate.workStatus}

              // skills={graduate.skills}
              />
            </Link>
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
