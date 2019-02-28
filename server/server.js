const path = require('path')
const express = require('express')
const server = express()

const usersRoutes = require('./routes/users')
// const authRoutes = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', usersRoutes)
// server.use('/api/v1/auth', authRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
