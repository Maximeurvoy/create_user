import React from 'react';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import Login from './Components/Login';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
<div className='container'>
  <Navbar/>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Switch>


  
</div>  );
}

export default App;
