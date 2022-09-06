import React, {useState, createContext, useContext, useEffect} from 'react';

import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext(); 

export function useAuth() {
  return useContext(AuthContext);
  
}

export function AuthProvider({children}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    if(recoverdUser){
      setUser(JSON.parse(recoverdUser))
    }
    setLoading(false);
  }, [])
 

  function login(email, password) {   
   
    console.log('login auth', email, password);

      const loggedUser = {
        id: '123',
        email
      }

      localStorage.setItem("user", JSON.stringify(loggedUser));


     if(password === 'secret') {
      setUser(loggedUser);
      navigate('/books')
    }
    else {
      setError('Esse usuário não existe aqui!');
      navigate('/')
    }

  }

  function logout (){
    console.log('logout')
    setUser(null);
    navigate('/')
    localStorage.removeItem("user")
  }

  return(
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout, error, setError}}>
      {children}
    </AuthContext.Provider>
  );
}