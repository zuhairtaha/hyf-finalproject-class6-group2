const tableName = 'classes_modules'

exports.up = knex =>
  knex.schema.table(tableName, table => {
    table.renameColumn('classid', 'class_id')
    table.renameColumn('moduleid', 'module_id')
  })

exports.down = knex =>
  knex.schema.alterTable(tableName, table => {
    table.renameColumn('class_id', 'classid')
    table.renameColumn('module_id', 'moduleid')
  })