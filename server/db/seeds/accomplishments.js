exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accomplishments').del()
    .then(function () {
      // Inserts seed entries
      return knex('accomplishments').insert([
        {
          id: 1,
          profile_id: 1,
          description: '',
          year: ''
        }
      ])
    })
}
