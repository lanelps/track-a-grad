import React, {Component} from 'react'

import Nav from './Nav'
import DashBoardHeader from './DashBoardHeader'
import Info from './Info'
import ContactForm from './ContactForm'

export default class GradDashboard extends Component {
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
