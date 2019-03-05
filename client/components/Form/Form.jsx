import React from 'react'
import { Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.profile.id,
      email: props.profile.email,
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      profilePicture: props.profile.profilePicture,
      workStatusId: props.profile.workStatusId,
      location: props.profile.location,
      cv: props.profile.cv,
      skills: props.profile.skills,
      githubUrl: props.profile.githubUrl,
      mostRecentRole: props.profile.mostRecentRole,
      mostRecentOrganisation: props.profile.mostRecentOrganisation,
      mostRecentLocation: props.profile.mostRecentLocation,
      mostRecentStartDate: props.profile.mostRecentStartDate,
      mostRecentEndDate: props.profile.mostRecentEndDate,
      mostRecentDescription: props.profile.mostRecentDescription,
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.statusChange = this.statusChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setRedirect = this.setRedirect.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  statusChange(e) {
    this.setState({
      workStatusId: Number(e.target.value)
    })
  }

  handleSubmit() {
    this.props.submit(this.state, this.setRedirect())
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/graduatedashboard/${this.state.id}`} />
    }
    return (
      <React.Fragment>
        <div className="container">
          <img
            className="logo"
            src="../../images/trackergrad-logo.png"
            alt="tracker"
          />
          <div className="titleWrapper">
            <span className="Title">
              <h1>Graduate Profile Page</h1>{' '}
            </span>
            <span className="subtitle">Edit Mode</span>

            <form onSubmit={this.handleSubmit}>
              <h2>ABOUT YOU</h2>
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                type="text"
                placeholder="First Name"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="profilePicture"
                value={this.state.profilePicture}
                onChange={this.handleChange}
                type="text"
                placeholder="paste url for image here"
              />
              <br />
              <label>Work Status: </label>
              <select
                name="workStatusId"
                onChange={this.statusChange}
                value={this.state.workStatusId}
              >
                <option value="1">Available</option>
                <option value="2">Unavailable</option>
              </select>
              <br />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                type="text"
                placeholder="Where do you live?"
              />
              <br />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                type="text"
                placeholder="Description"
              />
              <br />
              <h2>CONTACT INFORMATION</h2>
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="text"
                placeholder="Email"
              />
              <br />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="cv"
                value={this.state.cv}
                onChange={this.handleChange}
                type="text"
                placeholder="Insert link to CV or LinkedIn Profile"
              />
              <br />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="githubUrl"
                value={this.state.githubUrl}
                onChange={this.handleChange}
                type="text"
                placeholder="Insert link to Github Profile"
              />{' '}
              <br />
              <h2>SKILLS</h2>
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="skills"
                value={this.state.skills}
                onChange={this.handleChange}
                type="text"
                placeholder="Insert Specific Programming Languages, Libraries or Competencies"
              />
              <h2>WORK</h2>
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentOrganisation"
                value={this.state.mostRecentOrganisation}
                onChange={this.handleChange}
                type="text"
                placeholder="Who was your most recent employer?"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentLocation"
                value={this.state.mostRecentLocation}
                onChange={this.handleChange}
                type="text"
                placeholder="location?"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentRole"
                value={this.state.mostRecentRole}
                onChange={this.handleChange}
                type="text"
                placeholder="What was your role?"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentStartDate"
                value={this.state.mostRecentStartDate}
                onChange={this.handleChange}
                type="text"
                placeholder="Start date"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentEndDate"
                value={this.state.mostRecentEndDate}
                onChange={this.handleChange}
                type="text"
                placeholder="End date"
              />
              <TextField
                id="standard-dense"
                margin="dense"
                className="input"
                name="mostRecentDescription"
                value={this.state.mostRecentDescription}
                onChange={this.handleChange}
                type="text"
                placeholder="Description"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Form
