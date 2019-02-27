import React, {Component} from 'react'

import Nav from './Nav'

export default class StudentDashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>Student Dashboard</h1>
        <Nav />
      </React.Fragment>
    )
  }
}
