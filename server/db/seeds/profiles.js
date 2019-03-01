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
          profile_picture: 'server/public/images/avatars/avatar2.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: '',
          work_statuses_id: 1,
          skills_id: 1
        }
      ])
    })
}
