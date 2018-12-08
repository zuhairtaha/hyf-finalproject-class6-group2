const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllMentors)
  .get('/:id', getMentorById)
  .post('/', createMentor)
  .delete('/:id', deleteMentor)
  .put('/:id', updateMentor)

// --------------------------
// GET all mentors
function listAllMentors(req, res, next) {
  const sql = sqlString.format('SELECT * FROM mentors WHERE active=?', [1])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
<<<<<<< HEAD
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
=======
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
>>>>>>> 346123fb819aca330870d795414af30ba2008ba8

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
    'SELECT * FROM mentors WHERE id = ? AND active = ?',
    [req.params.id, 1]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'Mentor not find'})
    res.send(rows[0])
  })
}

module.exports = router
