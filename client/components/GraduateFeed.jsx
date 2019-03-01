import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import GraduateProfile from './GraduateProfile'
import Nav from './Nav'
import {connect} from 'react-redux'

import {getGraduates, getProfile} from '../api/users'

class GraduateFeed extends Component {
  // on load get this info
  componentDidMount () {
    this.props.dispatch(getGraduates())
  }

  render () {
    return (
      <div>
        <Nav />
        {this.props.graduates.map((graduate) => {
          return (
            <Link key={graduate.id} to={}>
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

//make link to new route with the child component and on didmount in that component it will call the api function