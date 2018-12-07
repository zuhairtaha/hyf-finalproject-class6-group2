const mysql = require('mysql')

// local database
const localDB = {
  host: 'localhost',
<<<<<<< HEAD
  user: 'root',
  password: '',
  database: 'hyf-fp-c6-g2'
=======
  user: 'hyf',
  password: 'password',
  database: 'hyf_fp_c6_g2'
>>>>>>> 64a535e1cd9b7492fd364ed1734d15166c547334
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
