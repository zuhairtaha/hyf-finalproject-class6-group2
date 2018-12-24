const express = require('express')
const router = express.Router()

/* import routers: */
const mentorsRoute = require('./mentors')
const classesRoute = require('./classes')

// const othersRoute = require('./othersRoute')
// const othersRoute = require('./othersRoute')

/* routers middleware: */
router.use("/mentors", mentorsRoute)
router.use("/classes", classesRoute)

// router.use("/others", othersRoute)
// router.use("/others", othersRoute)


module.exports = router