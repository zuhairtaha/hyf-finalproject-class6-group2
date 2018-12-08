const mysql = require('mysql2')

const DATABASE_URL = process.env.JAWSDB_URL || "mysql://hyf:password@127.0.0.1:3306/hyf_fp_c6_g2"
const connection = mysql.createConnection(DATABASE_URL)

module.exports = connection