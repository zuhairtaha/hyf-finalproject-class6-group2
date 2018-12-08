const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const clientRouter = require('./routes/client')
const apiRoutes = require('./routes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use("/api", apiRoutes);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.json(err.message)
})

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../build")))
  app.use('/', clientRouter)
}

module.exports = app
