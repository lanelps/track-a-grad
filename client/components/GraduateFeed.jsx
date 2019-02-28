import React, {Component} from 'react'
import GraduateProfile from './GraduateProfile'
import Nav from './Nav'

export default class GraduateFeed extends Component {
  state = [
    {
    profiles: {
      id: 1,
      location: 'Auckland',
      description: ' Hello, i am a passionate design student.',
      profilePhoto: 'image'
    },
    graduates: {
      firstName: 'Evandah',
      lastName: 'Steadman'
    },
    workStatuses: {
      status: 'working'
    },
    },
  {
      profiles: {
        id: 2,
        location: 'Auckland',
        description: ' Hello, i am a passionate design student.',
        profilePhoto: 'image'
      },
      graduates: {
        firstName: 'Evandah',
        lastName: 'Steadman'
      },
      workStatuses: {
        status: 'working'
      },
      },
    {
      profiles: {
        id: 3,
        location: 'Auckland',
        description: ' Hello, i am a passionate design student.',
        profilePhoto: 'image'
      },
      graduates: {
        firstName: 'Evandah',
        lastName: 'Steadman'
      },
      workStatuses: {
        status: 'working'
      },
      }]


  render () {
    return (
      <div>
        <Nav />
        {this.state.map(graduate =>
          (<GraduateProfile 
          key={graduate.profiles.id}
          status={graduate.workStatuses.status}
          firstName={graduate.graduates.firstName}
          lastName={graduate.graduates.lastName}
          location={graduate.profiles.location}
          description={graduate.profiles.description}
            />
            ))}
      </div>
    )
  }
}





