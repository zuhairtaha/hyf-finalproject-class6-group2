const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', getAll)
  .get('/:id', listClassesModules)
  .get('/:id', getUserById)
  .post('/', createModule)
  .delete('/:id', deleteUser)
  .put('/:id', updateModule)
  .put('/:id', addtoclass)

// --------------------------
// GET all users
function getAll(req, res, next) {
  const sql = sqlString.format(`
SELECT
  classes.id AS group_id,
  classes.name AS group_title,
  classes_modules.id AS item_id,
  modules.title AS item_title,
  classes_modules.start_date,
  classes_modules.end_date
FROM
  classes
  LEFT JOIN classes_modules
    ON classes_modules.class_id = classes.id
  LEFT JOIN modules
    ON classes_modules.module_id = modules.id
        `)
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
} // --------------------------
// GET all users
function listClassesModules(req, res, next) {
  const sql = sqlString.format(
    `SELECT * FROM modules 
          INNER JOIN classes_modules 
          ON modules.module_id = classes_modules.module_id 
          WHERE classes_modules.class_id = ?`,
    [req.params.id]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new user
function createModule(req, res, next) {
  const sql = sqlString.format(`INSERT INTO classes_modules SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send({ added: true })
  })
}

// --------------------------
// ADD a new module to class
function addtoclass(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New user added successfully')
  })
}

// --------------------------
// DELETE a user by ID (soft delete)
function deleteUser(req, res, next) {
  const sql = sqlString.format(`UPDATE users SET ? WHERE id = ?`, [
    { active: 0 },
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({ message: 'User not find' })
    res.send('User Deleted')
  })
}

// --------------------------
// UPDATE a user by ID
function updateModule(req, res, next) {
  const sql = sqlString.format(`UPDATE users SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({ message: 'User not find' })
    res.send('User updated')
  })
}

// --------------------------
// GET one user by ID
function getUserById(req, res, next) {
  const sql = sqlString.format(
    'SELECT * FROM users WHERE id = ? AND status = ?',
    [req.params.id, 'Active']
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({ message: 'User not find' })
    res.send(rows[0])
  })
}

module.exports = router
