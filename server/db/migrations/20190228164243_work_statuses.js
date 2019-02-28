exports.up = function (knex, Promise) {
  return knex.schema.createTalbe('work_statuses', table => {
    table.increment('id').primary()
    table.string('status')
  })
}

exports.down = function (knex, Promise) {

}
