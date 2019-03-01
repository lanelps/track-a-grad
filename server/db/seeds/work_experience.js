exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('work_experiences').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_experiences').insert([
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
