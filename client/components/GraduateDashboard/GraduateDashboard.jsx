import React, {Component} from 'react'

import Nav from '../Nav/Nav'
import DashBoardHeader from '../DashboardHeader/DashBoardHeader'
import Info from '../Info/Info'
import ContactForm from '../contactForm/ContactForm'
import './graduatedashboard.css'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {getProfile} from '../../api/users'

class GraduateDashboard extends Component {
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
  }
  render () {
    return (
      <React.Fragment>
        {this.props.profile ? (
          <React.Fragment>
            <Nav />
            <div className="spacer" />
            <h1 className="gradDashboard-title">Graduate Profile</h1>
            <div className="graduatedashboard">

              <DashBoardHeader
                firstName={this.props.profile.firstName}
                lastName={this.props.profile.lastName}
                workStatus={this.props.profile.workStatus}
                location={this.props.profile.location}
                cohort={this.props.profile.cohort}
                year={this.props.profile.year}
                cv={this.props.profile.cv}
                description={this.props.profile.description}
              />

              <Info
                skills={this.props.profile.skills}
                mostRecentOrganisation={
                  this.props.profile.mostRecentOrganisation
                }
                mostRecentRole={this.props.profile.mostRecentRole}
                mostRecentLocation={this.props.profile.mostRecentLocation}
                mostRecentStartDate={this.props.profile.mostRecentStartDate}
                mostRecentEndDate={this.props.profile.mostRecentEndDate}
                mostRecentDescription={this.props.profile.mostRecentDescription}
                githubUrl={this.props.profile.githubUrl}
              />
              <ContactForm />

            </div>
          </React.Fragment>
        ) : (
          <div>Loading...</div>
        )}
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
