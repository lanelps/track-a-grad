const {generateHash} = require('../../auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      Promise.all([
        generateHash('john'),
        generateHash('boss')
      ])
        .then(([johnsHash, bossesHash]) => {
          // Inserts seed entries
          return knex('users').insert([
            {
              id: 1,
              email: 'john.smith@mail.com',
              hash: johnsHash,
              last_login: new Date(),
              boolean: 'true'},
            {
              id: 2,
              email: 'boss.guy@mail.com',
              hash: bossesHash,
              last_login: new Date(),
              boolean: 'false'}
          ])
        })
    })
}
