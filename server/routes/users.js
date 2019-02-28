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

module.exports = router
