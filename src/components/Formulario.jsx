import React, { useState } from 'react';

const Formulario = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(email, password);
  }
  const handleEmail = (event) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)) {
      setEmailError('')
    } else {
      setEmailError('Error en el formato de correo')
    }
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleValidation = () => {
    if (
      email !== '' &&
      password !== '' &&
      emailError === '' &&
      passwordError === ''
    ) {
      return false
    }
    return true
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h4>Email</h4>
        <input type="text" onChange={handleEmail}/>
        <p style={{color: 'red'}}>{(emailError !== '') && emailError}</p>
        <h4>Contraseña</h4>
        <input type="text" onChange={handlePassword}/>
        <p style={{color: 'red'}}>{passwordError !== '' && passwordError}</p>
        <button type="submit"
          disabled={handleValidation()}
        >Submit</button>
      </form>
    </div>
  );
};

export default Formulario;