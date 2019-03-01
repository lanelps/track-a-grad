exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function () {
      // Inserts seed entries
      return knex('education').insert([
        {id: 1, profile_id: 1, school: 'EDA', qualifications: 'bootcamp', field_of_study: 'monkey business', start_date: '7/1/2019'},
        {id: 2, profile_id: 2, school: 'EDA', qualifications: 'bootcamp', field_of_study: 'business time', start_date: '7/1/2019'},
        {id: 3, profile_id: 3, school: 'EDA', qualifications: 'bootcamp', field_of_study: 'gang business', start_date: '7/1/2019'}
      ])
    })
}
