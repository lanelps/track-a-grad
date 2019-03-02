exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('work_statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_statuses').insert([
        {id: 1,
          status: 'Seeking Employment'},
        {id: 2,
          status: 'Employed'},
        {id: 3,
          status: 'Seeking Freelance Work' },       
        {id: 4,
          status: 'Studying' },
      ])
    })
}
