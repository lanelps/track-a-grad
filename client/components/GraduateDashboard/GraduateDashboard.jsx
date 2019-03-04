import React, {Component} from 'react'

import Nav from '../Nav/Nav'
import DashBoardHeader from '../DashboardHeader/DashBoardHeader'
import Info from '../Info/Info'
import ContactForm from '../contactForm/ContactForm'
import './graduatedashboard.css'

import {connect} from 'react-redux'
import {getProfile} from '../../api/users'

class GraduateDashboard extends Component {
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
  }
  render () {
    return (
      <React.Fragment>
        {(this.props.profile)
          ? <React.Fragment>
            <Nav />
            <div className="spacer"></div>
            <h1>Graduate Dashboard</h1>
            <div className="graduatedashboard">
              <DashBoardHeader
                firstName={this.props.profile.firstName} LastName={this.props.profile.lastName} workStatus={this.props.profile.workStatus}
                location={this.props.profile.location}
                cohort={this.props.profile.cohort}
                cv={this.props.profile.cv}
              />
              <Info
                skills={this.props.profile.skills}
              />
              Contact Form
              <ContactForm />
            </div>
          </React.Fragment>
          : <div>Loading...</div>
        }

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
