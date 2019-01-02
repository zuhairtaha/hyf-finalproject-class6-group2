exports.up = function (knex, Promise) {
  return knex.schema.createTable('classes_modules_mentors', table => {
    table.integer('classid')
    table.integer('moduleid')
    table.integer('mentorid')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('classes_modules_mentors')
}