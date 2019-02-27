const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  getGraduates
}

function getGraduates (db = connection) {
  return db('Gradutes')
    .select()
}
