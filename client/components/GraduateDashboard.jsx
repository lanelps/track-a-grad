import React, {Component} from 'react'

import Nav from './Nav'
import DashBoardHeader from './DashBoardHeader'
import Info from './Info'
import ContactForm from './ContactForm'
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
    graduates: state.graduates
  }
}

export default connect(mapStateToProps)(GraduateFeed)
