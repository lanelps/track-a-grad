const express = require('express')
const db = require('../db/users')
const router = express.Router()
const token = require('../auth/token')
const hash = require('../auth/hash')
const verifyJwt = require('express-jwt')

router.post('/register', register, token.issue)
router.post('/login', validateLogin, checkGraduate, token.issue)

// router.get(`/graduatedashboard/:id/form`, token.decode, (req, res) => {
//   db.getUserById(Number(req.params.id))
//     .then(user => {
//       res.json(user)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

function register (req, res, next) {
  db.registerGraduate(req.body)
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      message.includes('user exists')
        ? registrationError(res, 'User already exists.', 400)
        : registrationError(res, `Something bad happened. We don't know why.`, 500)
    })
}

function validateLogin (req, res, next) {
  const {email, password} = req.body

  if (!email) {
    return next(new Error('No email provided'))
  }
  if (!password) {
    return next(new Error('No password provided'))
  }

  next()
}

function checkGraduate (req, res, next) {
  db.getGraduateByEmail(req.body.email)
    .then(graduate => {
      // todo: id gets sent to local store even if password is wrong.
      if (graduate) res.locals.graduateId = graduate.id
      return graduate && hash.verify(graduate.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

function registrationError (res, errorMessage, errorCode) {
  res.status(errorCode).json({
    ok: false,
    message: errorMessage
  })
}

module.exports = router
