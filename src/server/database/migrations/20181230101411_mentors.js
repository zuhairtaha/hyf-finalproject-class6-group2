exports.up = function (knex, Promise) {
  return knex.schema.createTable('mentors', table => {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.date('bday')
    table.string('type')
    table.string('slack_nickname')
    table.date('admission_date')
    table.string('status')
    table.boolean('active')
      .defaultTo(true)
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mentors')
}