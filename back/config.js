const mysql = require('mysql');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Odilon_2013',
  database: 'accountlivecoding'
})

database.connect(function(err) {
  if (err) throw err
  console.log('MYSQL connected')
})

module.exports = database;