import React from 'react'
import './contact.css'

export default function ContactForm () {
  return (

    <div>
      <h2>Id love to talk...</h2>
      <form action="https://getform.io/f/1fd513fe-b5e8-41ec-b42e-7a491018333b" method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
