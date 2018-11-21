const mysql = require('mysql');
const pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  port:3306,
  password:'',
  database:'xuhuan',
  connectionLimit:10
})
 module.exports = pool;