exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolio_map').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio_map').insert([
        {id: 1,
          profile_id: 1,
          portfolio_id: 1
        },
        {id: 2,
          profile_id: 1,
          portfolio_id: 2
        }
      ])
    })
}
