import React, { useState } from 'react';
import axios from 'axios';

function Register() {

const [form, setForm] = useState({
  lastname:'',
  firstname:'',
  email:'',
  password:'',
  cpassword:''
})

const submitForm = () => {
  axios.post('http://localhost:8000/users/', {
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    password: form.password
  }).then(result => {
    console.log(result)
  })
}

const checkform=()=>{
  let disable = true ;

  if (form.cpassword === form.password) {
    disable = false;
  }
  return disable
}

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">First Name</label>
          <input type="text" 
            value={form.firstName}
            onChange={(e)=> setForm({...form, firstname : e.target.value})}
            className="form-control" 
            id="inputfirstname" 
            placeholder='firstName'/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Last Name</label>
          <input type="text" 
            value={form.lastName} 
            onChange={(e)=> setForm({...form, lastname : e.target.value})}
            className="form-control" 
            id="inputlastname" 
            placeholder='LastName'/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Email</label>
        <input type="email" 
          value={form.email} 
          onChange={(e)=> setForm({...form, email : e.target.value})}
          className="form-control" 
          id="inputemail" 
          placeholder="toto@toto.com"/>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Password</label>
          <input type="password" 
            value={form.password}
            onChange={(e)=> setForm({...form, password : e.target.value})}
            className="form-control" 
            id="inputpassword" 
            placeholder='firstName'/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Password</label>
          <input type="password" 
            value={form.cpassword}
            onChange={(e)=> setForm({...form, cpassword : e.target.value})}
            className="form-control" 
            id="inputcpassword" 
            placeholder='firstName'/>
        </div>
      </div>
      <div className="form-group">
      </div>
      <button onClick={submitForm} className="btn btn-primary" disabled={checkform()}>Sign in</button>
    </>
  );
}

export default Register;
