exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'John',
          last_name: 'Smith',
          email: 'john.smith@mail.com',
          hash: '',
          last_login: '',
          boolean: 'true'},
        {
          id: 2,
          first_name: 'Boss',
          last_name: 'Guy',
          email: 'boss.guy@mail.com',
          hash: '',
          last_login: '',
          boolean: 'false'}
      ])
    })
}
