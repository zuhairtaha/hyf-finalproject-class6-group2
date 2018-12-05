const mysql = require('mysql')

// local database
const localDB = {
  host: 'localhost',
  user: 'hyf',
  password: 'password',
  database: 'hyf_fp_c6_g2'
}

// @link: https://devcenter.heroku.com/articles/jawsdb
// @link: https://www.npmjs.com/package/mysql
const db = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection(localDB)

// connect
db.connect(err => {
  if (err) console.log(err)
  else console.log('MySQL connected')
})

module.exports = db
