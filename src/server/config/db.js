const mysql = require('mysql2')

const DATABASE_URL = process.env.JAWSDB_URL
const connection = mysql.createConnection(DATABASE_URL)

module.exports = connection