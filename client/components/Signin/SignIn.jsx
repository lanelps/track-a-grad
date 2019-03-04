import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import './signin.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../../actions/auth'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
    e.preventDefault()
  }

  // handleSubmit (e) {
  //   const {name, value} = this.state
  //   console.log(e)
  //   e.preventDefault()
  //   this.props.dispatch(signIn(user))
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(e)
  // }
  handleSubmit (e) {
    e.preventDefault()
    const {email, password} = this.state
    this.props.dispatch(signIn(email, password)) // TODO: callback - confirmSuccess
  }

  render () {
    if (this.props.SignedIn) {
      return <Redirect to='/graduatefeed' />
    }

    // const {email, password} = this.state

    return (
      <React.Fragment>
        <div className="signinBlock">
          <div className="container">
            <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
            <div className="titleWrapper">
              <span className="subtitle">Welcome to</span>
              <span className="title">Your GradProfile</span>
            </div>
            <form>
              <div>

                <TextField
                  id="standard-dense"
                  label="Email"
                  margin="dense"
                  className="input"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  className="input"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

              </div>
              <div className="loginWrapper">
                <button name='sign-in-button' className="loginButton" type="submit" onClick={this.handleSubmit} >Login</button>
              </div>
            </form>
            <div className="link">
              <a href="/registration">Register</a>
            </div>
          </div>
        </div>
        <img className="backgroundImage" src='../../images/backimage.png' alt="tracker"/>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    signin: state.signIn
  }
}
export default connect(mapStateToProps)(SignIn)
