import React, {useState, createContext, useContext} from 'react';
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext(); 

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  function login(email, password) {   

    if(password === 'secret' && email === 'meuemail@gmail.com') {
      setUser({id:'123', email});
      navigate('/books')
    }
    else {
      setError('Esse usuário não existe aqui!');
      navigate('/')
    }
    
    console.log('login auth', email, password);
  }

  function logout (){
    console.log('logout')
    setUser(null);
    navigate('/')
  }

  return(
    <AuthContext.Provider value={{authenticated: user, login, logout, error}}>
      {children}
    </AuthContext.Provider>
  );
}