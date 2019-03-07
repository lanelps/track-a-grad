const {generateHash} = require('../../auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      Promise.all([
        generateHash('aubrey'),
        generateHash('david'),
        generateHash('evandah'),
        generateHash('jason'),
        generateHash('jess'),
        generateHash('riki')
      ])
        .then(([aubreyHash, davidHash, evandahHash, jasonHash, laneHash, rikiHash]) => {
          // Inserts seed entries
          return knex('users').insert([
            {
              id: 1,
              email: 'aubreytekanawa@gmail.com',
              hash: aubreyHash,
              last_login: new Date(),
              boolean: true
            },
            {
              id: 2,
              email: 'dluttig5@live.com',
              hash: davidHash,
              last_login: new Date(),
              boolean: true
            },
            {
              id: 3,
              email: 'vandahs@outlook.com',
              hash: evandahHash,
              last_login: new Date(),
              boolean: true
            },
            {
              id: 4,
              email: 'jasonjamessimpson@gmail.com',
              hash: jasonHash,
              last_login: new Date(),
              boolean: true
            },
            {
              id: 5,
              email: 'jess@morgan.com',
              hash: laneHash,
              last_login: new Date(),
              boolean: true
            },
            {
              id: 6,
              email: 'riki@craftsmoothie.co.nz',
              hash: rikiHash,
              last_login: new Date(),
              boolean: true
            }
          ])
        })
    })
}
