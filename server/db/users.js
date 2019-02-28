const connection = require('./index')
// const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates
}

function getGraduates (status, db = connection) {
  return db('users')
    .where('users.boolean', status)
    .select()
}
