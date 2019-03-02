exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        {id: 1,
          profile_id: 1,
          title: 'best app in the world',
          link_url: 'https://github.com/harakeke-2019/track-a-grad',
          description: 'An app to display grads to the world'
        },
        {id: 2,
          profile_id: 2,
          title: 'basketball',
          link_url: 'https://www.youtube.com/watch?v=Oi7vRx-0nCY',
          description: 'Not a real student app, but lets watch some bball for fun'
        }
      ])
    })
}
