const {generateHash} = require('../../auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      Promise.all([
        generateHash('johnsHash'),
        generateHash('bossesHash')
      ])
        .then(([johnsHash, bossesHash]) => {
          // Inserts seed entries
          return knex('users').insert([
            {
              id: 1,
              email: 'aubreytekanawa@gmail.com',
              hash: johnsHash,
              last_login: new Date(),
              boolean: 'true'},
            {
              id: 2,
              email: 'dluttig5@live.com',
              hash: bossesHash,
              last_login: new Date(),
              boolean: 'false'},
            {
              id: 3,
              email: 'vandahs@outlook.com',
              hash: johnsHash,
              last_login: new Date(),
              boolean: 'false'},
            {
              id: 4,
              email: 'jasonjamessimpson@gmail.com',
              hash: bossesHash,
              last_login: new Date(),
              boolean: 'false'},
            {
              id: 5,
              email: 'riki@craftsmoothie.co.nz',
              hash: johnsHash,
              last_login: new Date(),
              boolean: 'false'},
          ])
        })
    })
}
