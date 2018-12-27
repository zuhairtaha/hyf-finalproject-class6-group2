const express = require('express')
const router = express.Router()

/* import routers: */
const mentorsRoute = require('./mentors')
const classesRoute = require('./classes')
const modulesRoute = require('./classesmodules')

// const othersRoute = require('./othersRoute')
// const othersRoute = require('./othersRoute')

/* routers middleware: */
router.use("/mentors", mentorsRoute)
router.use("/classes", classesRoute)
router.use("/modules", modulesRoute)

// router.use("/others", othersRoute)
// router.use("/others", othersRoute)


module.exports = router