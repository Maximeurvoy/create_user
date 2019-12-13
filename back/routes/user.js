const express = require ('express');
const database = require('../config.js');
const userRouter = express.Router()
const sha256 = require ('sha256')

userRouter.get('/',(req,res)=>{
  res.send('all user');
});

userRouter.post('/', function(req, res) {
  const { lastname, firstname, email, password } = req.body;
  if(!lastname || !firstname || !email || !password) {
    res.status(400).send('miss input field');
  } else {
    database.query(`SELECT email FROM user WHERE email = '${email}'`, function(err, rows) {
      if(err) {
        res.sendStatus(400);
        throw err;
      } else {
        if(rows.length > 0) {
          res.status(400).send('email already registred');
        } else {
          database.query(`INSERT INTO user(firstname, lastname, email, password, date)
          VALUES('${firstname}', '${lastname}', '${email}', '${sha256(password)}', NOW())`, function(err, rows) {
            if(err) {
              res.sendStatus(400);
              throw err;
            } else {
              res.sendStatus(200);
              console.log(rows);
            }
          })
        }
      }
    })
  }
//   connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

})

module.exports = userRouter;