const express = require('express');
const router = express.Router();
const mentors = require("../mentors")

/* GET mentors listing. */
router.get('/', (req, res, next) => {
  res.send(mentors)
});

module.exports = router;
