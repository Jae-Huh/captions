exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('username')
    table.binary('password_hash')
    table.string('profile_pic')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
