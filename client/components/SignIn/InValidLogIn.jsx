import React from 'react'
import {Link} from 'react-router-dom'

export default function InValidLogIn () {
  return (
    <div>
      <h2>InValid Login Credentials</h2>
      <Link to="/login">Try logging in again</Link>
    </div>
  )
}
