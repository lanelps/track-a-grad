const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/users')

module.exports = {
  issue,
  decode,
  createToken // exported for testing
}

function issue (req, res) {
  db.getGraduateByEmail(req.body.email)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}
// email instead of username
function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    email: user.email
  }, secret, {
    expiresIn: '1d'
  })
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}
