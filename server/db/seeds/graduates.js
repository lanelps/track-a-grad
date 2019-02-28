exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('graduates').del()
    .then(function () {
      // Inserts seed entries
      return knex('graduates').insert([
        {
          id: 1,
          graduate_id: 1,
          first_name: 'John',
          last_name: 'Smith',
          email: 'john.smith@mail.com',
          hash: '',
          boolean: 'true'}
      ])
    })
}
