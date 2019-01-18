const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllRoles)
  .get('/:id', getRoleById)
  .post('/', createRole)
  .delete('/:id', deleteRole)
  .put('/:id', updateRole)

// --------------------------
// GET all Roles
function listAllRoles(req, res, next) {
  const sql = sqlString.format('SELECT * FROM roles')
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new Role
function createRole(req, res, next) {
  const sql = sqlString.format(`INSERT INTO roles SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New Role added successfully')
  })
}
// --------------------------
// DELETE a Role by ID (soft delete)
function deleteRole(req, res, next) {
  const sql = sqlString.format(`UPDATE roles SET ? WHERE id = ?`, [
    {active: 0},
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'Role not find'})
    res.send('Role Deleted')
  })
}

// --------------------------
// UPDATE a Role by ID
function updateRole(req, res, next) {
  const sql = sqlString.format(`UPDATE roles SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'Role not find'})
    res.send('Role updated')
  })
}

// --------------------------
// GET one Role by ID
function getRoleById(req, res, next) {
  const sql = sqlString.format(
    'SELECT * FROM roles WHERE id = ?',
    [req.params.id]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'Role not find'})
    res.send(rows[0])
  })
}

module.exports = router
