exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increment('id').primary()
    table.string('cohort')
    table.string('year')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cohorts')
}
