const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'devdb',
    password: '123456',
    database: 'dbpeople'
}

const connection = mysql.createConnection(config)
  
module.exports = {connection};