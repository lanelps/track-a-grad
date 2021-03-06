exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email')
    table.string('hash')
    table.datetime('last_login').defaultTo(knex.fn.now())
    table.boolean('boolean')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
