exports.up = function (knex, Promise) {
  return knex.schema.createTable('sessions_mentors', table => {
    table
      .integer('session_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('sessions')
      .onDelete('CASCADE')
    table
      .integer('mentor_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.string('status') // pending | assign | confirmed
    table.primary(['session_id', 'mentor_id'])
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('sessions_mentors')
