exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('most_recent_employment_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('most_recent_employment_details').insert([
        {id: 1,
          profile_id: 1,
          role: 'Senior Advisor - Housing',
          organisation: 'Te Puni Kokiri',
          location: 'Whangarei',
          start_date: '11/4/2017',
          end_date: '22/1/2018',
          description: 'Overseeing Maori Housing Network Projects in Te Tai Tokerau region'
        },
        {id: 2,
          profile_id: 1,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        },
        {id: 3,
          profile_id: 3,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        },
        {id: 4,
          profile_id: 4,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        },
        {id: 5,
          profile_id: 5,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        },
        {id: 6,
          profile_id: 6,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        },
        {id: 7,
          profile_id: 7,
          role: '',
          organisation: '',
          location: '',
          start_date: '',
          end_date: '',
          description: ''
        }
      ])
    })
}
