const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
const Joi = require('joi')
// --------------------------
// @link: https://github.com/hapijs/joi/blob/v14.3.1/API.md
const schema = Joi.object().keys({
  class_id: Joi.number().required(),
  module_id: Joi.number()
    .required()
    .not(0),
  github_page: Joi.optional(),
  start_date: Joi.date().required(),
  end_date: Joi.date()
    .disallow(Joi.ref('start_date'))
    .required() // todo: this should be > start_date
})
// --------------------------
router
  .get('/', getAll)
  .get('/:id', getClassModule)
  .post('/', AddClassModule)
  .delete('/:id', deleteClassModule)
  .put('/:id', updateClassModule)

// --------------------------
// GET all classes-modules (groups and items for calender)
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

// CREATE a new class-module
function AddClassModule(req, res, next) {
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  const sql = sqlString.format(`INSERT INTO classes_modules SET ?`, req.body)
  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send({ added: true, id: result.insertId })
  })
}
// --------------------------

// DELETE a class_module by ID
function deleteClassModule(req, res, next) {
  const sql = sqlString.format(`DELETE FROM classes_modules WHERE id = ?`, [
    req.params.id
  ])
  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({ message: 'row not found!' })
    res.send({ deleted: true })
  })
}
// --------------------------
function getClassModule(req, res, next) {
  const sql = sqlString.format(
    `
      SELECT
        classes_modules.*
        , modules.title AS module_title
        , modules.length 
        , classes.name AS class_name
    FROM
        classes_modules
        INNER JOIN modules 
            ON classes_modules.module_id = modules.id
        INNER JOIN classes 
            ON classes_modules.class_id = classes.id
    WHERE classes_modules.id =?
      `,
    [req.params.id]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({ message: 'row not find' })
    res.send(rows[0])
  })
}

// --------------------------
// UPDATE a class by ID
function updateClassModule(req, res, next) {
  const sql = sqlString.format(`UPDATE classes_modules SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])
  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows)
      return next({ message: 'class_module not found', updated: false })
    res.send({ updated: true })
  })
}

module.exports = router
