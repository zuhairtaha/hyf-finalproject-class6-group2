const mysql = require('mysql2')

const DATABASE_URL = process.env.JAWSDB_URL || "mysql://root:@127.0.0.1:3306/hyf-fp-c6-g2"
const connection = mysql.createConnection(DATABASE_URL)

module.exports = connection