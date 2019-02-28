import React from 'react'

export default function Description () {
  const dummyData = {
    profiles: {
      location: 'Auckland',
      status: 'working',
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
    cohorts: {
      cohort: 'Harakeke2019'
    }
  }
  return (
    <React.Fragment>
      {/* photo div */}
      <div>
        <a href="#">
          <img src={`${dummyData.profiles.profilePhoto}`} alt="student-profile-photo" height="42" width="42" />
        </a>
      </div>
      {/* information div */}
      <div>
        <h1>{dummyData.workStatuses.status}</h1>
        <h1>{dummyData.profiles.firstName}{dummyData.profileslastName}</h1>
        <h1>{dummyData.profiles.location}</h1>
        <h1>{dummyData.cohorts.cohort}</h1>
      </div>
      {/* cv div */}
      <div>
        <p>Descroption</p>
      </div>
    </React.Fragment>
  )
}
