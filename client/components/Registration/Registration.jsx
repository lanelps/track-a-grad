import React from 'react'
import './registration.css'
import {Link} from 'react-router-dom'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="signinBlock">
          <div className="container">
            <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
            <div className="registertitleWrapper">
              <span className="subtitle">Ready to</span>
              <span className="title">Register?</span>
            </div>
            <div>
              <label className="field a-field a-field_a2 page__field">
                <input className="field__input a-field__input" placeholder=" " name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} required />
                <span className="a-field__label-wrap">
                  <span className="a-field__label">First Name</span>
                </span>
              </label>
              <label className="field a-field a-field_a2 page__field">
                <input className="field__input a-field__input" placeholder=" " name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} required />
                <span className="a-field__label-wrap">
                  <span className="a-field__label">Last Name</span>
                </span>
              </label>
              <label className="field a-field a-field_a2 page__field">
                <input className="field__input a-field__input" placeholder=" " name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                <span className="a-field__label-wrap">
                  <span className="a-field__label">Email</span>
                </span>
              </label>
              <label className="field a-field a-field_a2 page__field">
                <input className="field__input a-field__input" placeholder=" " name="password" type="email" value={this.state.password} onChange={this.handleChange} required />
                <span className="a-field__label-wrap">
                  <span className="a-field__label">Password</span>
                </span>
              </label>
            </div>
            <div className="RegisterWrapper">
              <Link to="/graduatefeed" className="loginButton">Register</Link>
            </div>
            <div className="space"></div>
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
