exports.up = function (knex, Promise) {
  return knex.schema.createTable('work_statuses', table => {
    table.increments('id').primary()
    table.string('status')
  })
}

exports.down = function (knex, Promise) {

}
