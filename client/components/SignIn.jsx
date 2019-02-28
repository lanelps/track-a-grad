import React, {Component} from 'react'
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
        <center>
          <h2>SignIn</h2>
        </center>
        <center>
          <h4>Email Field</h4>
        </center>
        <center>
          <h4>Password Field</h4>
        </center>
        <center>
          <button>SIGN IN</button>
        </center>
      </React.Fragment>
    )
  }
}

export default SignIn
