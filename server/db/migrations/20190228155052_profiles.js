exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('users_id').references('users.id')
    table.integer('cohorts_id').references('cohorts.id')
    table.string('profile_photo')
    table.string('location')
    table.string('cv_location')
    table.string('description')
    table.string('github_url')
    table.string('string')
    table.string('work_statuses').references('cohorts.users')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
