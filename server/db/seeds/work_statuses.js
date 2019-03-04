exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('work_statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_statuses').insert([
        {id: 1, status: 'useless'},
        {id: 2, status: 'not so useless'},
        {id: 3, status: 'winning'},
        {id: 4, status: 'hungry'}
      ])
    })
}
