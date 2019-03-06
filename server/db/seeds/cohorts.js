exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 0, cohort: 'Select Cohort', year: 'Select Year'},
        {id: 1, cohort: 'Kauri', year: '2016'},
        {id: 2, cohort: 'Kowhai', year: '2016'},
        {id: 3, cohort: 'Kahikatea', year: '2016'},
        {id: 4, cohort: 'Nikau', year: '2016'},
        {id: 5, cohort: 'Pohutukawa', year: '2017'},
        {id: 6, cohort: 'Horoeka', year: '2017'},
        {id: 7, cohort: 'Matai', year: '2017'},
        {id: 8, cohort: 'Harakeke', year: '2018'},
        {id: 9, cohort: 'Kauri', year: '2018'},
        {id: 10, cohort: 'Mamaku', year: '2018'},
        {id: 11, cohort: 'Nikau', year: '2018'},
        {id: 12, cohort: 'Harakeke', year: '2019'}
      ])
    })
}
