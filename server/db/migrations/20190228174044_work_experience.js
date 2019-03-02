exports.up = function (knex, Promise) {
  return knex.schema.createTable('work_experience', table => {
    table.increments('id').primary()
    table.integer('profile_id').references('profiles.id')
    table.string('role')
    table.string('organisation')
    table.string('Location')
    table.string('start_date')
    table.string('end_date')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('work_experience')
}
