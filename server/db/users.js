const connection = require('./index')
// const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates,
  getProfile
}

function getGraduates (status, db = connection) {
  return db('users')
    .where('users.boolean', status)
    .select()
}

function getProfile (id, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select()
}
