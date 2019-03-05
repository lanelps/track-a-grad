import React from 'react'
import { Redirect } from 'react-router-dom'
import './editform.css'
import {connect} from 'react-redux'
import {getProfile, updateProfile} from '../../api/users'
import Form from '../Form/Form'

class EditForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
  }

  handleSubmit (profile) {
    this.props.dispatch(updateProfile(profile))
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/graduatedashboard/${this.props.match.params.id}`} />
    }
  }

  render () {
    return (
      <React.Fragment>
        {
          (this.props.profile)
            ? <Form profile={this.props.profile} submit={this.handleSubmit}/> : <div>Loading...</div>
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

export default connect(mapStateToProps)(EditForm)
