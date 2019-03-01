import React, {Component} from 'react'
import GraduateProfile from './GraduateProfile'
import Nav from './Nav'
import {connect} from 'react-redux'

import {getGraduates} from '../api/users'

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
            />
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
