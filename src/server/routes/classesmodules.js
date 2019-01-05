const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', getAllModulesWithClasses)
  .get('/:id', listclassesmodules)
  .get('/:id', getMentorById)
  .post('/', createModule)
  .delete('/:id', deleteMentor)
  .put('/:id', updateModule)
  .put('/:id', addtoclass)

// --------------------------
// GET all mentors
function getAllModulesWithClasses(req, res, next) {
  console.log('req is' + req)
  const sql = sqlString.format(`SELECT
    \`modules\`.\`id\`
    , \`classes_modules\`.\`classid\` AS \`group\`
    , \`modules\`.\`title\`
    , \`classes_modules\`.\`start_date\` AS \`start\`
    , \`classes_modules\`.\`end_date\` AS \`end\`
FROM
    \`classes_modules\`
    INNER JOIN \`modules\` 
        ON (\`classes_modules\`.\`moduleid\` = \`modules\`.\`id\`)`)
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}// --------------------------
// GET all mentors
function listclassesmodules(req, res, next) {
  console.log('req is' + req)
  const sql = sqlString.format('SELECT * FROM modules INNER JOIN classes_modules ON modules.moduleid = classes_modules.moduleid WHERE classes_modules.classid = ?', [req.params.id])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new mentor
function createModule(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New mentor added successfully')
  })
}

// --------------------------
// ADD a new module to class
function addtoclass(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

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
function updateModule(req, res, next) {
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
