exports.up = function (knex, Promise) {
  return knex.schema.createTable('modules', table => {
    table.increments('moduleid')
    table.string('module')
    table.string('description')
    table.date('start')
    table.string('length')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('modules')
}