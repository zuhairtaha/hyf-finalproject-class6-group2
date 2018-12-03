const mysql = require('mysql')

// local database
const localDB = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hyf-fp-c6-g2'
}

// @link: https://devcenter.heroku.com/articles/jawsdb
// @link: https://www.npmjs.com/package/mysql
const db = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection(localDB)

// connect
db.connect(err => {
  if (err) throw err
  else console.log("MySQL connected")
})

module.exports = db
