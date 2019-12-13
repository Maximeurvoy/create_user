import React, { useState } from 'react';
import axios from 'axios';






function Login() {

  const [form, setForm]= useState({
    email:'',
    password:''
  })
  
  const [user, setUser]= useState(null)
  
  const submitForm = () => {
    axios.post('http://localhost:8000/login/', {
      email: form.email,
      password: form.password
    }).then(result => {
      if(result.status===200){
        setUser(result.data)
      }
      console.log(result)
    })
  }
  return (
    <>
    {!user ?<div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="email">Email</label>
          <input type="text" 
            value={form.email}
            onChange={(e)=> setForm({...form, email : e.target.value})}
            className="form-control" 
            id="inputfirstname" 
            placeholder='email@email.com'/>
        </div>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Password</label>
        <input type="password" 
          value={form.password}
          onChange={(e)=> setForm({...form, password : e.target.value})}
          className="form-control" 
          id="inputpassword" 
          placeholder='firstName'/>
      </div>
      <div className="form-group">
      </div> 
      <button onClick={submitForm} className="btn btn-primary" >login</button>
      </div>: <div> 
        <p>Hello {user.firstname} {user.lastname}</p>
      </div>}
    </>

  );
}

export default Login;
