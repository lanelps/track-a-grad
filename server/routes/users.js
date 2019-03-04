const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', (req, res) => {
  const status = 'true'
  db.getGraduates(status)
    .then(graduates => {
      res.json(graduates)
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

router.put('/profiles/:id/update', (req, res) => {
  const id = req.params.id
  const graduate = req.body
  db.updateUser(graduate)
    .then(() => db.updateProfile(graduate))
    .then(() => db.updateMostRecentEmploymentDetails(graduate))
    // .then(res.redirect(`./profiles/${id}`))
    .then(res.redirect('/'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
