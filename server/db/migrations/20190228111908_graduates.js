exports.up = function (knex, Promise) {
  return knex.schema.createTable('graduates', table => {
    table.increments('id').primary()
    table.integer('graduateId')
    table.string('firstName')
    table.string('lastNameame')
    table.string('email')
    table.string('hash')
    table.boolean('boolean')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('graduates')
}
