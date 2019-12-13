const express = require ('express');
const bodyParser = require ('body-parser');
const userRouter = require ('./routes/user.js');
const loginRouter = require ('./routes/login.js')

const api = express();
      api.use(bodyParser.urlencoded({extended: false}));
      api.use(bodyParser.json());
      api.use((req, res, next) => {
        console.log('test')
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      api.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
      });
    });
    
const port = 8000;

api.use('/users', userRouter);
api.use('/login', loginRouter);


api.listen(port, (err)=>{
  if (err){
    throw err;
  }else{
    console.log(`API listen on port ${port}`)
  }
})