exports.up = function (knex, Promise) {
  return knex.schema.createTable('classes_modules', table => {
    table.integer('classid')
    table.integer('moduleid')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('classes_modules')
}