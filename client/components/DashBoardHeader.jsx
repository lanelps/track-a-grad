import React from 'react'

export default function DashBoardHeader () {
  const dummyData = {
    profiles: {
      profilePhoto: 'https://twistedsifter.com/2012/09/one-trippy-profile-pic/',
      location: 'Te Kuiti',
      cvLink: 'https://resume.io'
    },
    users: {
      firstName: 'Yo',
      lastName: 'Mama'
    },
    workStatuses: {
      status: 'pimpin aint easy'
    },
    cohorts: {
      cohort: 'harakeke-2019'

    }
  }

  return (
    <React.Fragment>
      {/* photo div */}
      <div>
        <img src={`${dummyData.profiles.profilePhoto}`} alt="student-profile-photo" height="42" width="42" />
      </div>
      {/* information div */}
      <div>
        <h3>{dummyData.workStatuses.status}</h3>
        <h3>{dummyData.users.firstName}{dummyData.users.lastName}</h3>
        <h3>{dummyData.profiles.location}</h3>
        <h3>{dummyData.cohorts.cohort}</h3>
      </div>
      {/* cv div */}
      <div>
        <a href={`${dummyData.profiles.cvLink}`}>See CV</a>
      </div>
    </React.Fragment>
  )
}
