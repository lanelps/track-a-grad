import React from 'react'
import './registration.css'

export default function Registration () {
  return (
    <div>

      <h1>Registration Page</h1>
      <form method="post" action="/Registration">
        <input type='text' name='firstName' placeholder='First Name*'/><br/>
        <input type='text' name='lastName' placeholder='Last Name*'/><br/>
        <input type='text' name='email' placeholder='Email*'/><br/>
        <input type='text' name='cohort' placeholder='Cohort*'/>
        <input type='text' name='year' placeholder='Year*'/> <br/>
        <input type='text' name='hash' placeholer='Password*' />
        <input type='submit'name='users' />
      </form>
    </div>
  )
}
// MVP 1 - Needs to redirect onclick to the login page so that they can come into their editable profile via the login screen.
// MVP 4 - If administrator section is acheived. This will require a redirect onclick to a validation page notifying the user that their profile will be validated by an EDA administrator between 24-48 hours and notify the administrator that a new user has registered. 
