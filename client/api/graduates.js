import request from 'superagent'

const graduatesUrl = 'http://localhost:3000/api/v1/graduates'

export function getGraduates () {
  request
    .get(`${graduatesUrl}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
