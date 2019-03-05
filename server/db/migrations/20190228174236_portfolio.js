exports.up = function (knex, Promise) {
  return knex.schema.createTable('portfolio', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('link_url')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('portfolio')
}
