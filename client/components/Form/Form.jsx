import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import {Redirect} from 'react-router-dom'
import {updateProfile} from '../../api/users'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.profile.id,
      email: props.profile.email,
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      profilePicture: props.profile.profilePicture,
      workStatus: props.profile.workStatus,
      location: props.profile.location,
      cv: props.profile.cv,
      skills: props.profile.skills,
      githubUrl: props.profile.githubUrl,
      mostRecentRole: props.profile.mostRecentRole,
      mostRecentOrganisation: props.profile.mostRecentOrganisation,
      mostRecentLocation: props.profile.mostRecentLocation,
      mostRecentStartDate: props.profile.mostRecentStartDate,
      mostRecentEndDate: props.profile.mostRecentEndDate,
      mostRecentDescription: props.profile.mostRecentDescription
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.props.dispatch(updateProfile(this.state))
      .then(
        this.renderRedirect()
      )
    event.preventDefault()
  }

  renderRedirect () {
    return <Redirect to='/path' />
  }

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
          <div className="titleWrapper">
            <span className='Title'><h1>Graduate Profile Page</h1> </span>
            <span className="subtitle">Edit Mode</span>

            <form onSubmit={this.handleSubmit}>
              <h2>ABOUT YOU</h2>
              <TextField id="standard-dense" margin="dense" className="input" name='firstName' value={this.state.firstName} onChange={this.handleChange} type='text' placeholder='First Name'/>
              <TextField id="standard-dense" margin="dense" className="input" name='lastName' value={this.state.lastName} onChange={this.handleChange} type='text' placeholder='Last Name'/> <br/>
              <TextField id="standard-dense" margin="dense" className="input" name='profilePicture' value={this.state.profilePicture} onChange={this.handleChange} type='text' placeholder='paste url for image here'/><br/>
              <TextField id="standard-dense" margin="dense" className="input" name='workStatus' value={this.state.workStatus} onChange={this.handleChange} type='text' placeholder='Whats your work Status?'/><br/>
              <TextField id="standard-dense" margin="dense" className="input" name='location' value={this.state.location} onChange={this.handleChange} type='text' placeholder='Where do you live?'/><br/>
              <TextField id="standard-dense" margin="dense" className="input" name='description' value={this.state.description} onChange={this.handleChange} type='text' placeholder='What is your point of difference?'/><br/>

              <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Drop Picture </Button>

              <h2>CONTACT INFORMATION</h2>
              <TextField id="standard-dense" margin="dense" className="input" name='email' value={this.state.email} onChange={this.handleChange} type='text' placeholder='Email'/><br/>
              <TextField id="standard-dense" margin="dense" className="input" name='cv' value={this.state.cv} onChange={this.handleChange} type='text' placeholder='Insert link to CV or LinkedIn Profile'/><br/>
              <TextField id="standard-dense" margin="dense" className="input" name='githubUrl' value={this.state.githubUrl} onChange={this.handleChange} type='text' placeholder='Insert link to Github Profile'/> <br/>

              <h2>SKILLS</h2>
              <TextField id="standard-dense" margin="dense" className="input" name='skills' value={this.state.skills} onChange={this.handleChange} type='text' placeholder='Insert Specific Programming Languages, Libraries or Competencies'/>

              <h2>WORK</h2>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentOrganisation' value={this.state.mostRecentOrganisation} onChange={this.handleChange} type='text' placeholder='what is your most recent organisation?'/>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentLocation' value={this.state.mostRecentLocation} onChange={this.handleChange} type='text' placeholder='what is your most recent location?'/>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentRole' value={this.state.mostRecentRole} onChange={this.handleChange} type='text' placeholder='What is your most recent role'/>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentStartDate' value={this.state.mostRecentStartDate} onChange={this.handleChange} type='text' placeholder='When did you start?'/>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentEndDate' value={this.state.mostRecentEndDate} onChange={this.handleChange} type='text' placeholder='When did you finish?'/>
              <TextField id="standard-dense" margin="dense" className="input" name='mostRecentDescription' value={this.state.mostRecentDescription} onChange={this.handleChange} type='text' placeholder='Tell us about your job role?'/>

              {/* <Button variant="outlined" color="primary" onClick={this.state.handleSubmit}>Update Profile </Button> */}
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Form
