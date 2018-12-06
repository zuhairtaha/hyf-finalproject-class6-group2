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

router.post('/', (req, res, next) => {
  // res.send(mentors)
  console.log("xxxx")
  console.log(req.body)
  db.query('INSERT INTO mentors SET ?', req.body, (err, result) => {
    if (err) throw err
    res.send(result)
  })
  // db.end()
})
/*export function createMentor(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO mentors SET ?`, jsonData);
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    console.log(result);

    res.send('success');
  });
}
*/
module.exports = router
