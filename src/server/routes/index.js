const express = require('express')
const router = express.Router()

/* import routers: */
const usersRoute = require('./users')
const classesRoute = require('./classes')
const classesmodulesRoute = require('./classes-modules')
const modulesRoute = require('./modules')
const rolesRoute = require('./roles')

const profileRouter = require('./profile')
// const othersRoute = require('./othersRoute')

/* routers middleware: */
/*Modules routes*/
router.use("/modules", modulesRoute)
router.use("/roles", rolesRoute)

router.use("/users", usersRoute)
router.use("/classes", classesRoute)
router.use("/classes-modules", classesmodulesRoute)
router.use("/profile", profileRouter)

module.exports = router