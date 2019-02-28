import request from 'superagent'

const usersUrl = 'http://localhost:3000/api/v1/users'

export function getGraduates () {
  request
    .get(`${usersUrl}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get graduates')
    })
}

export function getProfile (id) {
  request
    .get(`${usersUrl}/profiles/${id}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Connot get profile')
    })
}
