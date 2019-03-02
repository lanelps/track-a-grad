exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          user_id: 1,
          first_name: 'John',
          last_name: 'Smith',
          cohort_id: 1,
          profile_picture: 'server/public/images/avatars/avatar2.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/harakeke-2019/track-a-grad',
          work_statuses_id: 1,
          skills: ''
        },
        {
          id: 2,
          user_id: 2,
          first_name: 'Guy',
          last_name: 'Fawkes',
          cohort_id: 2,
          profile_picture: 'server/public/images/avatars/avatar3.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/harakeke-2019/track-a-grad',
          work_statuses_id: 1,
          skills: ''
        },
      ])
    })
}
