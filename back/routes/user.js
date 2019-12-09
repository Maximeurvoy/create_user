const express = require ('express')
const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
  res.send('all user');
});

userRouter.post ('/',(req,res)=>{
  console.log(req.body);
  res.sendStatus(418);
})

module.exports = userRouter;