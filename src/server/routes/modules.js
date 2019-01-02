const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllModules)
  .get('/:id', getMentorById)
  .post('/', createMentor)
  .delete('/:id', deleteMentor)
  .put('/:id', updateMentor)

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
// CREATE a new mentor
function createMentor(req, res, next) {
  const sql = sqlString.format(`INSERT INTO mentors SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New mentor added successfully')
  })
}

// --------------------------
// DELETE a mentor by ID (soft delete)
function deleteMentor(req, res, next) {
  const sql = sqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    {active: 0},
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'Mentor not find'})
    res.send('Mentor Deleted')
  })
}

// --------------------------
// UPDATE a mentor by ID
function updateMentor(req, res, next) {
  const sql = sqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'Mentor not find'})
    res.send('Mentor updated')
  })
}

// --------------------------
// GET one mentor by ID
function getMentorById(req, res, next) {
  const sql = sqlString.format(
    'SELECT * FROM mentors WHERE id = ? AND status = ?',
    [req.params.id, "Active"]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'Mentor not find'})
    res.send(rows[0])
  })
}

module.exports = router
