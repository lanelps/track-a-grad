exports.up = function (knex, Promise) {
  return knex.schema.createTable('graduates', table => {
    table.increments('id').primary()
    table.integer('graduate_id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('hash')
    table.boolean('boolean')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('graduates')
}
