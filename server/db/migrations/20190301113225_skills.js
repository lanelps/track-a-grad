exports.up = function (knex, Promise) {
  return knex.schema.createTable('skills', table => {
    table.increments('id').primary()
    table.string('skill')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('skills')
}
