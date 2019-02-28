import React from 'react'

export default function Info () {
  const dummyData = {
    profiles: {
      description: 'Profiles Dummy Description'
    },
    education: {
      school: 'DummySchool',
      qualifications: 'DummyQualification',
      fieldOfStudy: 'DummyFiledOfStudy',
      startDate: '01/01/01',
      endDate: '02/02/02',
      description: 'Education Dummy Desription'
    },
    workExperiences: {
      role: 'DummyRole',
      organisation: 'DummyOrganisation',
      location: 'DummyLocation',
      startDate: '03/03/03',
      endDate: '04/04/04',
      description: 'Work Experiences Description'
    },
    accomplishments: {
      description: 'Dummy Accomplishments Description',
      year: '1999'
    },
    portfolio: {
      title: 'DummyPortfolioTitle',
      linkURL: '#',
      description: 'Dummy Portfolio Description'
    },
    githubURL: '#',
    contactNumber: '555-555-555',
    status: 'DummyStatus'
  }
  return (
    <React.Fragment>
      <div>
        <h2>Info</h2>

        <div>
          {dummyData.profiles.description}
        </div>
      </div>

      <div>
        <h3>Education</h3>

        <div>
          {dummyData.education.school}
        </div>

        <div>
          {dummyData.education.qualifications}
        </div>

        <div>
          {dummyData.education.fieldOfStudy}
        </div>

        <div>
          {dummyData.education.startDate}
        </div>

        <div>
          {dummyData.education.endDate}
        </div>

        <div>
          {dummyData.education.description}
        </div>
      </div>

      <div>
        <h3>Work Experience</h3>

        <div>
          {dummyData.workExperiences.role}
        </div>

        <div>
          {dummyData.workExperiences.organisation}
        </div>

        <div>
          {dummyData.workExperiences.location}
        </div>

        <div>
          {dummyData.workExperiences.startDate}
        </div>

        <div>
          {dummyData.workExperiences.endDate}
        </div>

        <div>
          {dummyData.workExperiences.description}
        </div>
      </div>

      <div>
        <h3>Accomplishments</h3>

        <div>
          {dummyData.accomplishments.description}
        </div>

        <div>
          {dummyData.accomplishments.year}
        </div>
      </div>

      <div>
        <h3>Portfolio</h3>

        <div>
          {dummyData.portfolio.title}
        </div>

        <div>
          {dummyData.portfolio.linkURL}
        </div>

        <div>
          {dummyData.portfolio.description}
        </div>
      </div>

      <div>
        Github
        {dummyData.githubURL}
      </div>

      <div>
        Contact Number
        {dummyData.contactNumber}
      </div>

      <div>
       Status
        {dummyData.status}
      </div>

    </React.Fragment>
  )
}
