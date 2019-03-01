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
          <input type="text"/>
        </center>
        <center>
          <h4>Password Field</h4>
          <input type="text"/>
        </center>
        <br/>
        <br/>
        <center>
          <a href="/graduatedashboard"><button>SIGN IN</button></a>
        </center>
      </React.Fragment>
    )
  }
}

export default SignIn
