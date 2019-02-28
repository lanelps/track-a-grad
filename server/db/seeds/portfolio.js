exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        {id: 1,
          profile_id: 1,
          title: '',
          link_url: '',
          description: ''
        },
        {id: 2,
          profile_id: 2,
          title: '',
          link_url: '',
          description: ''
        }
      ])
    })
}
