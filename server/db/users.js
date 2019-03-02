const connection = require('./index')
// const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates,
  getProfile
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
    .join('education', 'profiles.id', 'education.profile_id')
    .join('work_experience', 'profiles.id', 'work_experience.profile_id')
    .join('portfolio', 'profiles.id', 'portfolio.profile_id')
    .where('users.id', id)
    .first()
    .select('users.id as id', 'first_name as firstName', 'last_name as lastName', 'email', 'profile_picture as profilePicture', 'cv_location as cv', 'github_url as githubUrl', 'status as workStatus')
}
