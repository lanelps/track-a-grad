import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editSkills} from '../../actions/users'

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        cohort: '',
        cv_link: '',
        github: '',
        skills: '',
        peerReview: '',
        workExperience: '',
        education: '',
        portfolio: '',
            
    }
  }
handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
  event.preventDefault()
}


handleSubmit = event => {
  this.props.editSkills(this.state)
  event.preventDefault()
}
  render () {
    return (
      <React.Fragment>
        <div>
          <form>
            <input name='skills' value={this.state.skills} onChange={this.handleChange}/>
            <input name='firstName' value={this.state.skills} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editSkills: (state) => dispatch(editSkills(state))
  }
}

export default connect(null, mapDispatchToProps)(EditProfile)
