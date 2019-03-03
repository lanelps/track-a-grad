const connection = require('./index')

module.exports = {
  updateUsers
}

function updateUsers (graduate, db = connection) {
  return db('users')
    .where('users.id', graduate.id)
    .update({
      email: graduate.email
    })
    .then(updateProfile(graduate))
    .then(updateMostRecentEmployment(graduate))
}

function updateProfile (graduate, db = connection) {
  return db('profiles')
    .where('profiles.user_id', graduate.id)
    .update({
      first_name: graduate.firstName,
      last_name: graduate.lastName,
      location: graduate.location,
      cv_location: graduate.cv,
      description: graduate.description,
      github_url: graduate.githubUrl,
      work_statuses_id: graduate.workStatusId,
      skills: graduate.skills
    })
}

function updateMostRecentEmployment (graduate, db = connection) {
  return db('most_recent_employment_details')
    .where('most_recent_employment_details.profile_id', graduate.id)
    .update({
      role: graduate.mostRecentRole,
      organisation: graduate.mostRecentOrganisation,
      location: graduate.mostRecentLocation,
      start_date: graduate.mostRecentStartDate,
      end_date: graduate.mostRecentEndDate,
      description: graduate.mostRecentDescription
    })
}
