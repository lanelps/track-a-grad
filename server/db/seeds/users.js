exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'john.smith@mail.com',
          hash: '',
          last_login: '',
          boolean: 'true'},
        {
          id: 2,
          email: 'boss.guy@mail.com',
          hash: '',
          last_login: '',
          boolean: 'false'}
      ])
    })
}
