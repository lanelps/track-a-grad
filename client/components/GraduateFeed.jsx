import React, {Component} from 'react'
import GraduateProfile from './GraduateProfile'
import Nav from './Nav'
import {connect} from 'react-redux'

import {getGraduates} from '../api/users'

class GraduateFeed extends Component {
  constructor (props) {
    super(props)
    this.state = [props.graduates]
  }

  // on load get this info
  componentDidMount () {
    this.props.dispatch(getGraduates())
  }

  render () {
    return (
      <div>
        <Nav />
        {this.state.map(graduates =>
          (<GraduateProfile
            key={graduates.id}
            status={graduates.status}
            firstName={graduates.firstName}
            lastName={graduates.lastName}
            profilePicture={graduates.profilePicture}
            location={graduates.location}
            cv={graduates.cv}
            description={graduates.description}
            githubUrl={graduates.githubUrl}
            workStatus={graduates.workStatus}
          />
          ))}
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
