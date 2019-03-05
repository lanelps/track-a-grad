exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          user_id: 1,
          first_name: 'Aubrey',
          last_name: 'Te Kanawa',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar31.png',
          location: 'Auckland',
          cv_location: 'https://aubreytekanawa.github.io/profile/',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/aubreytekanawa',
          work_statuses_id: 2,
          skills: 'Git & Github, HTML, CSS, Basic JavaScript, Express, Node.js, Knex, React'
        },
        {
          id: 2,
          user_id: 2,
          first_name: 'David',
          last_name: 'Luttig',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar32.png',
          location: 'Auckland',
          cv_location: 'https://nz.linkedin.com/in/david-luttig-bb670272',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/DLuttig',
          work_statuses_id: 1,
          skills: 'Git & Github, HTML, CSS, JavaScript, Express, Node.js, Knex, React & Redux'
        },
        {
          id: 3,
          user_id: 3,
          first_name: 'Evandah',
          last_name: 'Steadman',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar38.png',
          location: 'Auckland',
          cv_location: 'https://nz.linkedin.com/in/evandah-steadman-810a3ab3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/evandahs15',
          work_statuses_id: 1,
          skills: 'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux, Material UI'
        },
        {
          id: 4,
          user_id: 4,
          first_name: 'Jason',
          last_name: 'Simpson',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar36.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/jason-simpson',
          work_statuses_id: 1,
          skills: 'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
        },
        {
          id: 5,
          user_id: 5,
          first_name: 'Lane',
          last_name: 'Le-Prevost Smith',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar32.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/lanelps',
          work_statuses_id: 1,
          skills: 'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
        },
        {
          id: 6,
          user_id: 6,
          first_name: 'Riki',
          last_name: 'Hoeata',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar31.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem quisquam aliquam corrupti? Ad, est voluptatibus alias quod accusantium illum autem, inventore quae fugiat mollitia, quia dolorem odit laborum quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus enim vel, veritatis quibusdam nobis quod a eligendi itaque dignissimos ratione perspiciatis ab nisi iste? Commodi eum culpa ipsa vel!',
          github_url: 'https://github.com/craftedcraft',
          work_statuses_id: 1,
          skills: 'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
        }
      ])
    })
}
