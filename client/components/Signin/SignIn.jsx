import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import './signin.css'
// import {Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {signin} from '../actions/auth'

class SignIn extends React.Component {
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
              <span className="subtitle">Welcome to</span>
              <span className="title">Your GradProfile</span>
            </div>
            <div>
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
              <a href="/graduatefeed" className="loginButton">Login</a>
            </div>
          </div>
        </div>
        <img className="backgroundImage" src='../../images/background.png' alt="tracker"/>
      </React.Fragment>
    )
  }
}

export default SignIn
