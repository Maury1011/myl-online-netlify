import React from 'react';
import Modal from './Modal';
import { useState } from 'react';

function LoginModal({ visible, onClose }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Inicio de sesión exitoso.');
      window.location.href = '/mazos';
    } else {
      alert(data.message);
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Contraseña" required onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="boton" type="submit">Continuar</button>
      </form>
    </Modal>
  );
}

export default LoginModal;
