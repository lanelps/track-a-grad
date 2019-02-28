import React, {Component} from 'react'
import GraduateProfile from './GraduateProfile'
import Nav from './Nav'

export default class GraduateFeed extends Component {
  render () {
    return (
      <div>
        <Nav />
        <GraduateProfile />
      </div>
    )
  }
}
