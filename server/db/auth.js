const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  createUser
  // signIn
}

function createUser ({email, password}, db = connection) {
  return db('users').insert({email, hash: password})
}

// function signIn (email, db = connection) {
//   return db('users')
//     .where('users.email', email)
//     .select()
// }
