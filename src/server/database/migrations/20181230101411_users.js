exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name')
    table.string('email')
    table.boolean('email_confirmed').defaultTo(false)
    table.string('avatar')
    table.date('birth_date')
    table.string('role')
    table.string('slack_nickname')
    table.date('admission_date')
    table.string('status')
    table.string('github_login')
    table.string('github_id')
    table.string('linkedin')
    table.string('type')
    table.boolean('active').defaultTo(true)
    table.text('remarks')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('users')
