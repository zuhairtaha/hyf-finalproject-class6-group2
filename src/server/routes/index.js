const express = require('express')
const router = express.Router()

/* import routers: */
const mentorsRoute = require('./mentors')
const classesRoute = require('./classes')
const classesmodulesRoute = require('./classesmodules')
const classesmodulesmentorsRoute = require('./classesmodulesmentors')
const modulesRoute = require('./modules')

// const othersRoute = require('./othersRoute')

/* routers middleware: */
/*Modules routes*/
router.use("/modules", modulesRoute)

router.use("/mentors", mentorsRoute)
router.use("/classes", classesRoute)
router.use("/classesmodules", classesmodulesRoute)
router.use("/classesmodulesmentors", classesmodulesmentorsRoute)

// router.use("/others", othersRoute)


module.exports = router