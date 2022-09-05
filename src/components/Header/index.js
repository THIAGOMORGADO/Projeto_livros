import React from 'react';

export function Header() {
  return (
    <>
    <header>
        <div className="header-container">
          <div className='logo'>
            <h1>Home de livros</h1>
          </div>
          <div className="login">
            {user ? 
            <p onClick={handleLogoutSubmit}>LogOut!</p> :
            <p onClick={handleLogin}>Login</p>
            }
          </div>
        </div>
      </header> 
    </>
  );
}
