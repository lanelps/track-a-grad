import React from 'react'
import './registration.css'
import TextField from '@material-ui/core/TextField'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className="signinBlock">
          <div className="container">
            <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
            <div className="titleWrapper">
              <span className="subtitle">Ready to</span>
              <span className="title">Register?</span>
            </div>
            <div>
              <TextField
                id="standard-dense"
                label="First name"
                margin="dense"
                className="input"
              />
              <TextField
                id="standard-dense"
                label="Last name"
                margin="dense"
                className="input"
              />
              <TextField
                id="standard-dense"
                label="Email"
                margin="dense"
                className="input"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                className="input"
              />
            </div>
            <div className="loginWrapper">
              <a href="/graduatefeed" className="loginButton">Register</a>
            </div>
            <div className="link">
              <a href="/">Login</a>
            </div>
          </div>
        </div>
        <img className="backgroundImage" src='../../images/register-image.png' alt="tracker"/>
      </React.Fragment>
    )
  }
}

export default Register
// MVP 1 - Needs to redirect onclick to the login page so that they can come into their editable profile via the login screen.
// MVP 4 - If administrator section is acheived. This will require a redirect onclick to a validation page notifying the user that their profile will be validated by an EDA administrator between 24-48 hours and notify the administrator that a new user has registered.
