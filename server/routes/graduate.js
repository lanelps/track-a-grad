const express = require('express')
const router = express.Router()
const db = require('../db/graduates')

router.get('/', (req, res) => {
  db.getGraduates()
    .then(graduates => {
      res.json(graduates)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
