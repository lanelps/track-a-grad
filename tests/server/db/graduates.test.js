const request = require('supertest')

const seedData = [
  {
    id: 1,
    graduate_id: 1,
    first_name: 'John',
    last_name: 'Smith',
    email: 'john.smith@mail.com',
    hash: '',
    boolean: 'true'
  }
]

jest.mock('../../../server/db/graduates', () => ({
  getGraduates: () => Promise.resolve({
    id: 1,
    graduate_id: 1,
    first_name: 'John',
    last_name: 'Smith',
    email: 'john.smith@mail.com',
    hash: '',
    boolean: 'true'})
}))

const server = require('../../../server/server')

test('GET gratuates', () => {
  return request(server)
    .get('http://localhost:3000/api/v1/graduates')
    .expect(200)
    .then((res) => {
      const expected = seedData[0]
      const actual = res.body
      expect(expected).toBe(actual)
    })
    .catch(err => expect(err).toBeNull())
})
