exports.up = function(knex, Promise) {
  return knex.schema.createTable('permissions', table => {
    table.increments()
    table
      .integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
    table.string('name')
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('permissions')
