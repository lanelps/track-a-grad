import React from 'react'
import ReactContactForm from 'react-mail-form'
export default function ContactForm () {
  return (

    <div>
      <h2>Id love to talk...</h2>
      <form className = "contact-form">
        <ReactContactForm to="aubreytekanawa@gmail.com" />
      </form>
    </div>
  )
}
