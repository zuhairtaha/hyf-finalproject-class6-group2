const tableName = 'classes'

exports.up = knex =>
  knex.schema.table(tableName, table => {
    table.renameColumn('classname', 'name')
  })

exports.down = knex =>
  knex.schema.alterTable(tableName, table => {
    table.renameColumn('name', 'classname')
  })
