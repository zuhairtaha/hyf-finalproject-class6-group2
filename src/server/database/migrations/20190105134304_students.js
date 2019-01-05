exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.boolean('email_confirmed').defaultTo(false)
    table.string('photo')
    table.date('birth_date')
    table.string('slack_nickname')
    table.date('admission_date')
    table.string('status')
    table.boolean('active').defaultTo(true)
    table.text('remarks')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('students')
