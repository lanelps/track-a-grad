exports.up = function(knex, Promise) {
  return knex.schema.createTable('avatars', table => {
    table.increments('id').primary()
    table.string('image')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skills')
};
