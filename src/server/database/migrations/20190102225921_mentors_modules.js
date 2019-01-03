exports.up = function (knex, Promise) {
  return knex.schema.createTable('mentors_modules', table => {
    table.integer('mentorid')
    table.integer('moduleid')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mentors_modules')
}
