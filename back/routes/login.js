const express = require ('express');
const database = require('../config.js');
const loginRouter = express.Router()
const sha256 = require ('sha256')

loginRouter.post('/',(req,res)=>{
  const {email, password} = req.body;

  if(!email || !password) {
    res.status(400).send('missing inputs fields');
  } else {
    database.query(`SELECT email, lastname, firstname, date FROM user
    WHERE email = '${email}' AND password = '${sha256(password)}'`, function(err, result) {
      if(err) {
        res.sendStatus(400);
        throw err;
      } else {
        if(result.length <= 0) {
          res.status(403).send('bad email/password');
        } else {
          res.status(200).send(result[0]);
        }
      }
    });
  }
})
module.exports= loginRouter;