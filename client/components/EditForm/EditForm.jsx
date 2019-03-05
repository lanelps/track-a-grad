import React from 'react'
import './editform.css'
import {connect} from 'react-redux'
import {getProfile, updateProfile} from '../../api/users'
import Form from '../Form/Form'
import InvalidLogIn from '../Signin/InValidLogIn'

class EditForm extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
  }

  handleSubmit (profile) {
    this.props.dispatch(updateProfile(profile))
  }

  render () {
    return (
      <React.Fragment>
        {
          (this.props.profile)
            ? <Form profile={this.props.profile}
              submit={this.handleSubmit}/>
            : <div>Loading...</div>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    signIn: state.signIn
  }
}

export default connect(mapStateToProps)(EditForm)
