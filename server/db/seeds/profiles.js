exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function() {
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
          description:
            'Kiaora tatou, I am a papakainga housing consultant. I am currently also serving as a board member for Waikato Tainui and have worked most recently worked as a senior advisor in Maori Housing for Te Puni Kokiri. I have been highly active in Maori governance and in particular the promotion and development of papakainga housing throuhgout Aotearoa. I had come to Dev Academy to add tech skills to my kete as I view a knowledge of the tech industry as being a prerequisite for being able to meaningful engage in the future development of my tribe',
          github_url: 'https://github.com/aubreytekanawa',
          work_statuses_id: 2,
          skills:
            'Git & Github, HTML, CSS, Basic JavaScript, Express, Node.js, Knex, React'
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
          description:
            ' I am motivated Full-Stack Developer whose current primary focus is to become a Cloud DevOps engineer and Developer, where I can help build and improve business’s web apps and hosting solution. With my numerous experience in IT support service, I aim to provide the best support through technology for end users and businesses to achieve their goals. I strive to add values to the business.',
          github_url: 'https://github.com/DLuttig',
          work_statuses_id: 1,
          skills:
            'Git & Github, HTML, CSS, JavaScript, Express, Node.js, Knex, React & Redux'
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
          description:
            ' I am a creative UI / UX designer, with a strong skillset in user-centric design, full-stack development, and team management. I am passionate about translating innovative product visions into beautiful designs to help reach market successfully.',
          github_url: 'https://github.com/evandahs15',
          work_statuses_id: 1,
          skills:
            'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux, Material UI'
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
          description: 'I like figuring out how things work by breaking them',
          github_url: 'https://github.com/jason-simpson',
          work_statuses_id: 1,
          skills:
            'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
        },
        {
          id: 5,
          user_id: 5,
          first_name: 'Jess',
          last_name: 'Morgan',
          cohort_id: 12,
          profile_picture: 'server/public/images/avatars/avatar32.png',
          location: 'Auckland',
          cv_location: '',
          description: 'Im a web developer with a love for design',
          github_url: 'https://github.com/lanelps',
          work_statuses_id: 1,
          skills:
            'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
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
          description:
            'Founding director of Craft Smoothie with a real passion for tech, after 9 years of juggling a professional rugby career with a full-time job. Being no stranger to the challenge of maintaining a nutritious diet with a demanding schedule, it was a natural transition for me to start a company that would enable others to live more productive and healthy lives while allowing me to delve into my passion for tech with our online platform: www.craftsmoothie.co.nz',
          github_url: 'https://github.com/craftedcraft',
          work_statuses_id: 1,
          skills:
            'Git & Github, HTML, CSS, JavaScript, Node.js, Knex, React & Redux'
        }
      ])
    })
}
