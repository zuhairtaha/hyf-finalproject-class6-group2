exports.up = function (knex, Promise) {
    return knex.schema.createTable('roles', table => {
      table.increments()
      table.string('name')
    })
  }
  
  exports.down = (knex, Promise) => knex.schema.dropTable('roles')
  