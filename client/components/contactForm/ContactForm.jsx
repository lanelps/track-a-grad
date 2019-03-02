import React from 'react'
import './contact.css'

export default function ContactForm () {
  return (
    <div>
      <h2>Id love to talk...</h2>
      <form className='contact'>
        <input type='text' placeholder='Name*'/><br/>
        <input type='text' placeholder='Email*'/>
        <input type='text' placeholder='Phone*'/><br/>
        <textarea type='text' placeholder='Message*'/>
      </form>
      <a href="/graduatedashboard"><button>Send</button></a>

    </div>
  )
}
