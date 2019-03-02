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
      hash: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signIn(user))
    this.setState({
      email: '',
      hash: ''
    })
    e.preventDefault()
  }

  render () {
    if (this.props.SignedIn) {
      return <Redirect to='/graduatefeed' />
    }

    const {email, hash} = this.state

    return (
      <React.Fragment>
        <h2>SignIn</h2>
        <h4>Email Field</h4>
        <input id='email' name='email' placeholder='email' type="text" onChange={this.handleChange} value={email} />
        <h4>Password Field</h4>
        <input id='hash' name="hash" placeholder='password' onChange={this.handleChange} value={hash} />
        {/* <a href="/graduatedashboard">Pass</a> */}
        <button on Click={this.handleSubmit}>SIGN IN</button>

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
          <a href="/graduatefeed"><button>SIGN IN</button></a>
        </center>
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

function mapStateToProps (state) {
  return {
    signin: state.signIn
  }
}
export default connect(mapStateToProps)(SignIn)
