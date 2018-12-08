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

router.get('/:id', (req, res, next) => {
  // res.send(mentors)
  console.log('aaaa',req)
  db.query('SELECT * FROM mentors WHERE id = ?', (err, result) => {
    if (err) throw err
    res.send(result)
  })
  // db.end()
})
/*export function getMentorById(req, res) {
  const internshipId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM mentors WHERE id = ? AND active = ?',
    [internshipId, true],
  );
  console.log(sql);

  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    res.send(rows[0]);
  });
}*/
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
