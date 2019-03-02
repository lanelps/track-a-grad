exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('work_experience').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_experience').insert([
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
