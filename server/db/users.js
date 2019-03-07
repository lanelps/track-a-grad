const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates,
  getProfile,
  getStatuses,
  getCohortList,
  getPortfolio,
  updateUser,
  updateProfile,
  updateMostRecentEmploymentDetails,
  getGraduateByEmail,
  registerGraduate,
  getGraduateById
}

function getGraduateByEmail (email, db = connection) {
  return db('users')
    .where('email', email)
    .first()
}

function getGraduateById (id, db = connection) {
  return db('users')
    .select('id', 'username')
    .where('id', id)
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
    .where('users.id', id)
    .first()
    .select('users.id as id', 'email', 'first_name as firstName', 'last_name as lastName', 'profile_picture as profilePicture', 'cohort', 'year', 'work_statuses.status as workStatus', 'work_statuses_id as workStatusId', 'profiles.location as location', 'cv_location as cv', 'profiles.description as description', 'skills', 'github_url as githubUrl', 'most_recent_employment_details.role as mostRecentRole', 'most_recent_employment_details.organisation as mostRecentOrganisation', 'most_recent_employment_details.location as mostRecentLocation', 'most_recent_employment_details.start_date as mostRecentStartDate', 'most_recent_employment_details.end_date as mostRecentEndDate', 'most_recent_employment_details.description as mostRecentDescription')
}

function getStatuses (db = connection) {
  return db('work_statuses')
    .select()
}

function getCohortList (db = connection) {
  return db('cohorts')
    .select()
}

function getPortfolio (id, db = connection) {
  return db('portfolio_map')
    .join('portfolio', 'portfolio_map.portfolio_id', 'portfolio.id')
    .where('portfolio_map.profile_id', id)
    .select()
}

function updateUser (graduate, db = connection) {
  return db('users')
    .where('id', graduate.id)
    .update({
      email: graduate.email
    })
}

function updateProfile (graduate, db = connection) {
  return db('profiles')
    .where('user_id', graduate.id)
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

function updateMostRecentEmploymentDetails (graduate, db = connection) {
  return db('most_recent_employment_details')
    .where('profile_id', graduate.id)
    .update({
      role: graduate.mostRecentRole,
      organisation: graduate.mostRecentOrganisation,
      location: graduate.mostRecentLocation,
      start_date: graduate.mostRecentStartDate,
      end_date: graduate.mostRecentEndDate,
      description: graduate.mostRecentDescription
    })
}

function registerGraduate ({email, password, firstName, lastName}, db = connection) {
  return getGraduateByEmail(email)
    .then(graduate => {
      if (graduate) { throw new Error('user exists') }
    })
    .then(() => generateHash(password))
    .then(hash => db('users').insert({email, hash, boolean: true}))
    .then(userId => userId[0])
    .then(userId => db('profiles').insert({user_id: userId, first_name: firstName, last_name: lastName, cohort_id: '12', profile_picture: '', location: '', cv_location: '', description: '', 'github_url': '', work_statuses_id: 1, skills: ''}))
}
