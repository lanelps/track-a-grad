import React, {Component} from 'react'

import Nav from '../Nav/Nav'
import DashBoardHeader from '../../../DashboardHeader/DashBoardHeader'
import Info from '../Info/Info'
import ContactForm from '../contactForm/ContactForm'
import './graduatedashboard.css'

export default class GraduateDashboard extends Component {
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
