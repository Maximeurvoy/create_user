const express = require ('express');
const bodyParser = require ('body-parser');
const userRouter = require ('./routes/user.js');


const api = express();
      api.use(bodyParser.urlencoded({extended: false}));
      api.use(bodyParser.json());

const port = 8000;

api.use('/users', userRouter);


api.listen(port, (err)=>{
  if (err){
    throw err;
  }else{
    console.log(`API listen on port ${port}`)
  }
})