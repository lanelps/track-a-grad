import React from 'react'
import ReactContactForm from 'react-mail-form'
import './contact.css'

export default function ContactForm () {
  return (

    <div>
      <h2>Id love to talk...</h2>
      <form className = "contact">
        <ReactContactForm to="aubreytekanawa@gmail.com" />
        <input type='text' placeholder='Name*'/><br/>
        <input type='text' placeholder='Email*'/>
        <input type='text' placeholder='Phone*'/><br/>
        <textarea type='text' placeholder='Message*'/>
      </form>
    </div>
  )
}
