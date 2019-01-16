const tableName = 'users'
exports.up = knex =>
  knex.schema.createTable(tableName, table => {
    table.increments()
    table.string('name')
    table.string('email') // todo: make it unique and index key
    table.boolean('email_confirmed').defaultTo(false)
    table.string('avatar')
    table.date('birth_date')
    table
      .integer('role_id')
      .unsigned()
      .references('id')
      .inTable('roles')
    table.string('status')
    table.string('github_username')
    table.string('github_token')
    table.string('linkedin')
    table.string('type')
    table.boolean('active').defaultTo(true)
    table.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable(tableName)
