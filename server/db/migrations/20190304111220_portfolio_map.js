exports.up = function (knex, Promise) {
  return knex.schema.createTable('portfolio_map', table => {
    table.increments('id').primary()
    table.integer('profile_id')
    table.integer('portfolio_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('portfolio_map')
}
