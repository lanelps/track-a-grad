const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  registerGraduate,
  signIn
}

function registerGraduate ({email, password}, db = connection) {
  return generateHash(password)
    .then(hash => {
      return db('users').insert({email, hash})
    })
}

function signIn (email, db = connection) {
  return db('users')
    .where('users.email', email)
    .select()
}
