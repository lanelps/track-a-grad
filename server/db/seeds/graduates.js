exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('graduates').del()
    .then(function () {
      // Inserts seed entries
      return knex('graduates').insert([
        {
          id: 1,
          graduateId: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'john.smith@mail.com',
          hash: '',
          boolean: 'true'}
      ])
    })
}
