const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/users')
const jwtTestSecret = require('../../tests/server/routes/jwt-test-secret')

module.exports = {
  issue,
  decode,
  createToken // exported for testing
}

function issue (req, res) {
  db.getGraduateByEmail(req.body.email)
    .then(user => {
      // todo: user's hashed password should not be sent back to client
      // client doesn't need it, and no guarantees that it wiil be stored securely.
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token,
        userId: user.id
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
  const secret = process.env.JWT_SECRET || jwtTestSecret
  if (secret === jwtTestSecret) {
    // console.warn('ATTENTION: Using the JWT Test secret')
  }
  done(null, secret)
}
