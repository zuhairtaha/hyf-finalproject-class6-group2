const express = require('express')
const router = express.Router()
// const mentors = require("../mentors")
const db = require("../models/db")

/* GET mentors listing. */
router.get('/', (req, res, next) => {
  // res.send(mentors)
  db.query('SELECT * FROM ??', ['mentors'], (err, result) => {
    if (err) throw err
    res.send(result)
  })
  // db.end()
})

module.exports = router
