const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  signIn
}

function signIn (email, db = connection) {
  return db('users')
    .where('users.email', email)
    .select()
}
