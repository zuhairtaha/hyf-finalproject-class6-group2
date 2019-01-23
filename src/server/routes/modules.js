const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllModules)
  .get('/:id', getModuleById)
  .get('/rest-modules-for-class/:id', getRestModulesForClass)
  .post('/', createModule)
  .delete('/:id', deleteModule)
  .put('/:id', updateModule)

// --------------------------
// GET all modules
function listAllModules(req, res, next) {
  const sql = sqlString.format('SELECT * FROM modules')
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new module
function createModule(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send({ added: true })
  })
}

// --------------------------
// DELETE a module by ID (soft delete)
function deleteModule(req, res, next) {
  const sql = sqlString.format(`DELETE FROM modules WHERE id = ?`, [
    req.params.id
  ])
  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({ message: 'module not find' })
    res.send({ deleted: true })
  })
}

// --------------------------
// UPDATE a module by ID
function updateModule(req, res, next) {
  const sql = sqlString.format(
    `UPDATE modules SET ? , updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
    [req.body, req.params.id]
  )

  db.execute(sql, (err, result) => {
    if (err) return next(err)

    if (!result.affectedRows)
      return next({ updated: false, message: 'module not find' })
    res.send({ updated: true })
  })
}

// --------------------------
// GET one module by ID
function getModuleById(req, res, next) {
  const sql = sqlString.format('SELECT * FROM modules WHERE id = ?', [
    req.params.id
  ])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({ message: 'module not find' })
    res.send(rows[0])
  })
}

// --------------------------
// Get rest modules for a class by class id
function getRestModulesForClass(req, res, next) {
  const sql = sqlString.format(
    ` SELECT id,title,length FROM modules WHERE id NOT IN (
SELECT module_id FROM classes_modules WHERE class_id <=> ?
)`,
    [req.params.id]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0)
      return next({ message: 'all modules has been already added' })
    res.send(rows)
  })
}

module.exports = router
