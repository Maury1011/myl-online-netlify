import React from 'react';
function Header({ toggleModal }) {
  return (
    <div className="header">
      <h1>MyL Cartas</h1>
      <button className="boton" onClick={() => toggleModal('register')}>Registrarse</button>
      <button className="boton" onClick={() => toggleModal('login')}>Iniciar Sesión</button>
    </div>
  );
}

export default Header;
