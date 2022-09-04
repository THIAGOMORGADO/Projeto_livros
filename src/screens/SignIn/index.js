import React, {useState} from 'react';

import './styles.css';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    

    e.preventDefault();

    console.log('aaaa', {email, password})
  }

  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Digite sue email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
          />
        </div>
        <div className="field">
          <label 
            htmlFor="password">Senha</label>
          <input 
            type="password" 
            name='password' 
            id='password' 
            placeholder='Sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        <div className="actions">
          <a href="#">Cadastra-se</a>
          <button type="submit">Entra</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

