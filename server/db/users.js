const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates,
  getProfile,
  getGraduateByEmail,
  registerGraduate
}

function getGraduateByEmail (email, db = connection) {
  return db('users')
    .where('email', email)
    .first()
}

function getGraduates (status, db = connection) {
  return db('users')
    .where('users.boolean', status)
    .join('profiles', 'users.id', 'profiles.user_id')
    .join('work_statuses', 'profiles.work_statuses_id', 'work_statuses.id')
    .select('users.id as id', 'first_name as firstName', 'last_name as lastName', 'email', 'profile_picture as profilePicture', 'location as location', 'cv_location as cv', 'description', 'github_url as githubUrl', 'status as workStatus')
}

function getProfile (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .join('work_statuses', 'profiles.work_statuses_id', 'work_statuses.id')
    .join('cohorts', 'profiles.cohort_id', 'cohorts.id')
    .join('most_recent_employment_details', 'profiles.id', 'most_recent_employment_details.profile_id')
    .join('portfolio', 'profiles.id', 'portfolio.profile_id')
    .where('users.id', id)
    .first()
    .select('users.id as id', 'email', 'first_name as firstName', 'last_name as lastName', 'profile_picture as profilePicture', 'cohort', 'year', 'status as workStatus', 'profiles.location as location', 'cv_location as cv', 'profiles.description as description', 'skills', 'github_url as githubUrl', 'status as workStatus', 'most_recent_employment_details.role as mostRecentRole', 'most_recent_employment_details.organisation as mostRecentOrganisation', 'most_recent_employment_details.location as mostRecentLocation', 'most_recent_employment_details.start_date as mostRecentStartDate', 'most_recent_employment_details.end_date as mostRecentEndDate', 'most_recent_employment_details.description as mostRecentDescription')
}

function registerGraduate ({email, password}, db = connection) {
  return getGraduateByEmail(email)
    .then(graduate => {
      if (graduate) { throw new Error('user exists') }
    })
    .then(() => generateHash(password)
      .then(hash => db('users').insert({email, hash}))
    )
}
