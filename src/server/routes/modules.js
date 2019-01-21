const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllModules)
  .get('/:id', getModuleById)
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
    res.send('New module added successfully')
  })
}
// --------------------------
// DELETE a module by ID (soft delete)
function deleteModule(req, res, next) {
<<<<<<< HEAD
  const sql = sqlString.format(`UPDATE modules SET ? WHERE id = ?`, [
    {active: 0},
=======
  const sql = sqlString.format(`DELETE FROM modules WHERE id = ?`, [
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
<<<<<<< HEAD
    if (!result.affectedRows) return next({message: 'module not find'})
=======
    if (!result.affectedRows) return next({ message: 'module not find' })
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
    res.send('Module Deleted')
  })
}

// --------------------------
// UPDATE a module by ID
function updateModule(req, res, next) {
  const sql = sqlString.format(`UPDATE modules SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
<<<<<<< HEAD
    if (!result.affectedRows) return next({message: 'module not find'})
=======
    if (!result.affectedRows) return next({ message: 'module not find' })
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
    res.send('module updated')
  })
}

// --------------------------
// GET one module by ID
function getModuleById(req, res, next) {
<<<<<<< HEAD
  const sql = sqlString.format(
    'SELECT * FROM modules WHERE id = ?',
    [req.params.id]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'module not find'})
=======
  const sql = sqlString.format('SELECT * FROM modules WHERE id = ?', [
    req.params.id
  ])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({ message: 'module not find' })
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
    res.send(rows[0])
  })
}

module.exports = router
