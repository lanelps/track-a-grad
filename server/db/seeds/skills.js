exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, skill: 'Git'},
        {id: 2, skill: 'HTML'},
        {id: 3, skill: 'CSS'},
        {id: 4, skill: 'JavaScript'},
        {id: 5, skill: 'React'},
        {id: 6, skill: 'Redux'},
        {id: 7, skill: 'Node.js'},
        {id: 8, skill: 'Knex.js'},
        {id: 9, skill: 'semantic-UI'},
        {id: 10, skill: 'Express.js'},
        {id: 11, skill: 'Figma'},
        {id: 12, skill: 'Webflow'}
      ])
    })
}
