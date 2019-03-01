import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
// import {signin} from '../actions'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      hash: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {email, value} = e.target
    this.setState({
      [email]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signin(user))
    this.setState({
      email: '',
      password: ''
    })
    e.preventDefault()
  }

  render () {
    if (this.props.loggedIn) {
      return <Redirect to='/' />
    }

    const {email, password} = this.state

    return (
      <React.Fragment>
        <center >
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
        <a href="/graduatedashboard"><button on Click={this.handleSubmit}>SIGN IN</button></a>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    signin: state.signin
  }
}
export default connect(mapStateToProps)(SignIn)
