const express = require('express');
const pool = require('../pool');
const router = express.Router();
router.get('/news',(req,res)=>{
  var sql = 'select * from news'
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports = router; 