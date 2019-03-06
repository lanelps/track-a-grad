import React, {Component} from 'react'
import './signin.css'
import {Redirect, Link} from 'react-router-dom'
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

  handleSubmit (e) {
    e.preventDefault()
    const {email, password} = this.state
    const goToGraduateDashboard = userId => this.props.history.push(`/form`)
    this.props.dispatch(signIn(email, password, goToGraduateDashboard)) // TODO: callback - confirmSuccess
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
            <form>
              <div>
                <label className="field a-field a-field_a2 page__field">
                  <input className="field__input a-field__input" placeholder=" " name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                  <span className="a-field__label-wrap">
                    <span className="a-field__label">Email</span>
                  </span>
                </label>

                <label className="field a-field a-field_a2 page__field">
                  <input className="field__input a-field__input" placeholder=" " name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                  <span className="a-field__label-wrap">
                    <span className="a-field__label">Password</span>
                  </span>
                </label>

              </div>
              <div className="loginWrapper">
                <button name='sign-in-button' className="loginButton" type="submit" onClick={this.handleSubmit} >Login</button>
              </div>
            </form>
            <div className="link">
              <Link to="/registration">Register</Link>
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
    signIn: state.signIn
  }
}
export default connect(mapStateToProps)(SignIn)
