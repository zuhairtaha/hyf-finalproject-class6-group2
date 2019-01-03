exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments()
        table.string('name').notNullable()
        table.boolean('active')
        table.text('cv')
        table.string('email')
        table.timestamps(true,true)
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('students')
  }