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
        <h1>Graduate Dashboard</h1>
        {(this.props.profile)
          ? <React.Fragment>
            <Nav />
            <div className="graduatedashboard">
              <DashBoardHeader />
              <Info name={this.props.profile.firstName} />
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
