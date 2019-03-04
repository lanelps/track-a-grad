import React from 'react'
import './editform.css'
import {connect} from 'react-redux'
import {getProfile} from '../../api/users'
import Form from '../Form/Form'

class EditForm extends React.Component {
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
  }
  render () {
    return (
      <React.Fragment>
        {
          (this.props.profile)
            ? <Form profile={this.props.profile}/> : <div>Loading...</div>
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
