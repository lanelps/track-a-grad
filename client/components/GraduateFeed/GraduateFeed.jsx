import React, {Component} from 'react'
import GraduateProfile from '../GraduateProfile/GraduateProfile'
import Nav from '../Nav/Nav'
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
              // skills={graduate.skills}
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
