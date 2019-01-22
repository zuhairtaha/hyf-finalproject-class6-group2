const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllClasses)
  .get('/:id', getClassById)
  .post('/', createClass)
  .delete('/:id', deleteClass)
  .put('/:id', updateClass)

// --------------------------
// GET all classes
function listAllClasses(req, res, next) {
  const sql = sqlString.format('SELECT * FROM classes')
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new class
function createClass(req, res, next) {
  const sql = sqlString.format(`INSERT INTO classes SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send({ added: true, id: result.insertId })
  })
}

// --------------------------
// DELETE a class by ID (soft delete)
function deleteClass(req, res, next) {
  console.log(req.params.id)
  const sql = sqlString.format(`DELETE FROM classes WHERE id = ?`, [
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows)
      return next({ message: 'class not found', deleted: false })
    res.send({ deleted: true })
  })
}

// --------------------------
// UPDATE a class by ID
function updateClass(req, res, next) {
  const sql = sqlString.format(`UPDATE classes SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows)
      return next({ message: 'class not found', updated: false })
    res.send({ updated: true })
  })
}

// --------------------------
// GET one class by ID
function getClassById(req, res, next) {
  const sql = sqlString.format('SELECT * FROM classes WHERE id = ?', [
    req.params.id
  ])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({ message: 'class not find' })
    res.send(rows[0])
  })
}

module.exports = router
