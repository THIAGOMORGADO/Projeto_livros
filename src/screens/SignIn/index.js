import React from 'react';

import './styles.css';


const SignIn = () => {
  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form">
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Digite sue email'
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name='password' 
            id='pass' 
            placeholder='Sua senha'
            />
        </div>
        <div className="actions">
          <a href="http://">Cadastra-se</a>
          <button>Entra</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

