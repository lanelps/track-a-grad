exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, cohort: 'Harakeke', year: '2019'},
        {id: 2, cohort: 'Kowhai', year: '2017'},
        {id: 3, cohort: 'Kauri', year: '2018'}
      ])
    })
}
