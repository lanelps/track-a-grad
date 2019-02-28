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

jest.mock('../server/db/users', () => ({
  getGraduates: () => Promise.resolve({
    id: 1,
    graduate_id: 1,
    first_name: 'John',
    last_name: 'Smith',
    email: 'john.smith@mail.com',
    hash: '',
    boolean: 'true'})
}))

const server = require('../server/server')

test('GET users', (done) => {
  request(server)
    .get('/api/v1/users/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const expected = seedData[0]
      const actual = res.body
      expect(expected).toEqual(actual)
      done()
    })
})
