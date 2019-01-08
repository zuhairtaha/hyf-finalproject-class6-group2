const express = require('express')
const authRouter = require('./auth/routes')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const clientRouter = require('./routes/client')
const apiRoutes = require('./routes')
// Even though we don't use this variable anywhere, if it's not required the authentication dosen't work.
// I'll get back to it and figure it out.
// eslint-disable-next-line no-unused-vars
const passportSetup = require('./auth/passport-setup')
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.json(err.message)
})

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
)

// Then we initialize passport and start the sessions.
app.use(passport.initialize())
app.use(passport.session())

/*
 * Here we make sure that every route that comes from the router.js file start with /auth,
 * to make it easialy distinguishable from other routes.
 */
app.use('/auth', authRouter.router)

/*
 * Here we check the cookie if the cookie is valid with the middleware we wrote,
 * them we send the information back if it's vaild and we send nothing back if it's not.
 * we could send back json with information that the request was invalid if we wanted to
 * do anything in react to display this.
 */
app.post('/api/profile', authRouter.authCheck, (req, res) => {
  res.send(req.user)
})

app.use("/api", apiRoutes);


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../build")))
  app.use('/', clientRouter)
}

module.exports = app
