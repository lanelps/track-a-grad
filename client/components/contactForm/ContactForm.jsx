import React from 'react'
import './contact.css'

export default function ContactForm () {
  return (

    <div>
      <h2>CONTACT ME FOR MORE</h2>
      <form action="https://getform.io/f/1fd513fe-b5e8-41ec-b42e-7a491018333b" method="POST">
        <input className="contact-textfield-half-1" type="text" name="name" placeholder="  Full Name" />
        <input className="contact-textfield-half-2" type="email" name="email" placeholder="  Email" />
        <input className= "contact-textfield-full"type="text" name="message" placeholder="  Message" />
        <button className="submit" type="submit">Send</button>
      </form>
    </div>
  )
}
