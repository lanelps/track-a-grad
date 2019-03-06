const express = require('express')
const router = express.Router()
const db = require('../db/users')
const token = require('../auth/token')

router.get('/', (req, res) => {
  const status = true
  db.getGraduates(status)
    .then(graduates => {
      res.json(graduates)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/profiles/workstatuslist', (req, res) => {
  db.getStatuses()
    .then(workStatuses => {
      res.json(workStatuses)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  db.getProfile(id)
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/profiles/:id/portfolio', (req, res) => {
  const id = req.params.id
  db.getPortfolio(id)
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/profiles/:id', (req, res) => {
  const graduate = req.body
  db.updateUser(graduate)
    .then(() => db.updateProfile(graduate))
    .then(() => db.updateMostRecentEmploymentDetails(graduate))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
