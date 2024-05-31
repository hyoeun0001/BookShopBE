const mariadb = require('mysql2');

const connection = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'BookShop',
  dateStrings: true
})


module.exports = connection;