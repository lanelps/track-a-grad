exports.up = function (knex, Promise) {
  return knex.schema.createTable('education', table => {
    table.increments('id').primary()
    table.integer('id_profiles').references('profiles.id')
    table.string('school')
    table.string('qualifications')
    table.string('field_of_study')
    table.string('start_date')
    table.string('end_date')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('education')
}
