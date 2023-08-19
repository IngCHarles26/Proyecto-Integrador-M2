import React, { useState } from 'react';
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;
const initial = {
  email:"",
  password:"",
}

const validate = (input,errors={})=>{
  let validateEmail = 
    input.email &&
    regexEmail.test(input.email) &&
    input.email.length <= 35;
  let validatePassword = 
    regexPassword.test(input.password) &&
    input.password.length >= 6 &&
    input.password.length <= 10;
  errors.email = !validateEmail ? "Email inválido" : "";
  errors.password = !validatePassword ? "Password inválido" : "";
  return errors;
}



export default function Form(props){
  const {login} = props;
  const [userData, setUserData] = useState(initial);
  const [errors, setErrors] = useState(initial);

  const handleSubmit = (e)=>{
    e.preventDefault();
    login(userData)
  }

  const handleChange = (e)=>{
    setErrors(validate({
      ...userData,
      [e.target.name]:e.target.value,
    }))
    setUserData({...userData,
      [e.target.name]:e.target.value})
  } 
  
  return(
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input 
        value={userData.email} 
        name="email"
        onChange={handleChange}
        type="text"
        placeholder='Escribe tu usario'/>
      <p>{errors.email}</p>
      <label>Password: </label>
      <input 
        value={userData.password} 
        name="password"
        onChange={handleChange}
        type="text"
        placeholder='Escribe tu contraseña'/>
      <p>{errors.password}</p>
      <button type='submit '>Submit</button>
    </form>
  )
}