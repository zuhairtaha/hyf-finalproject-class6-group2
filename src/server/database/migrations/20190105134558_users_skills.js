exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_skills', table => {
    table
      .integer('skill_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('skills')
      .onDelete('CASCADE')
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.primary(['skill_id', 'user_id'])
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('users_skills')
