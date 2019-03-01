import React, {Component} from 'react'

import Nav from './Nav'
import DashBoardHeader from './DashBoardHeader'
import Info from './Info'
import ContactForm from './ContactForm'

import {connect} from 'react-redux'
import {getProfile} from '../api/users'

class GraduateDashboard extends Component {
  componentDidMount () {
    this.props.dispatch(getProfile())
  }
  render () {
    return (
      <React.Fragment>
        <h1>Graduate Dashboard</h1>
        <Nav />
        <DashBoardHeader />
        <Info />
        <ContactForm />
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(GraduateDashboard)
