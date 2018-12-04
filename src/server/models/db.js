const mysql = require('mysql')

// local database
const localDB = {
  host: 'jfrpocyduwfg38kq.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'qlhi3go2pyq3971u',
  password: 'wh43h6xkqkipi89z',
  database: 'g1rb97g4lgyxgccx'
}

// @link: https://devcenter.heroku.com/articles/jawsdb
// @link: https://www.npmjs.com/package/mysql
const db = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection(localDB)

// connect
db.connect(err => {
  if (err) throw err
  else console.log('MySQL connected')
})

module.exports = db
