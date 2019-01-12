exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name')
    table.string('email')
    table.boolean('email_confirmed').defaultTo(false)
    table.string('avatar')
    table.date('birth_date')
    table
      .integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
    table.string('status')
    table.string('github_username')
    table.string('github_id')
    table.string('linkedin')
    table.string('type')
    table.boolean('active').defaultTo(true)
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('users')
