import React, {useState, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

import './styles.css';


const SignIn = () => {
  const {authenticated, login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submit', {email, password})
    login(email, password);
    

  }

  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <p>{String(authenticated)}</p>
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

