exports.up = function (knex, Promise) {
  return knex.schema.createTable('accomplishments', table => {
    table.increment('id').primary()
    table.integer('profile_id').references('profiles.id')
    table.string('description')
    table.string('year')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('accomplishments')
}
