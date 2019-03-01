exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          user_id: 1,
          cohort_id: 1,
          profile_picture: '',
          location: '',
          cv_location: '',
          description: '',
          github_url: '',
          work_statuses_id: 1,
          skills: ''
        }
      ])
    })
}
