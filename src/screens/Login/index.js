import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export function LoginPage(){
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
                                                              
    console.log('Submit', {email, password})
  }

  function handleCadastro(){
    return (
      navigate('/')
    )
  }

  return(
    <div id="login">
      <h1 className="title">Login</h1>
  
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email: </label>
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
            htmlFor="password">Senha: </label>
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
          <p onClick={handleCadastro} className="btn_cadastrese">Cadastra-se</p>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
