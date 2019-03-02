exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('most_recent_employment_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('most_recent_employment_details').insert([
        {id: 1,
          profile_id: 1,
          role: '',
          organisation: '',
          Location: '',
          start_date: '',
          end_date: '',
          description: ''
        }
      ])
    })
}
