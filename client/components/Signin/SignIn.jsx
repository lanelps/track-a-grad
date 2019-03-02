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
        <div className="SignInBlock">
          <div>
            <img src="logo"/>
            <div>
              <span className="sub-title">Welcome to</span>
              <span className="title">Your GradProfile</span>
            </div>
            <div>
              <TextField
                id="standard-dense"
                label="Email"
                margin="dense"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </div>
            <div>
              <a href="/graduatefeed">Login</a>
            </div>

          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default SignIn
