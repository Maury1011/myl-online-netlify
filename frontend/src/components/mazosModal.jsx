import React from 'react';
import Modal from './Modal';

function MazosModal({ visible, onClose, cartaId, mazos = [] }) {
  const añadirCarta = async (mazoId) => {
    const res = await fetch('/anadirCarta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mazoId, cartaId })
    });

    const data = await res.json();
    if (res.ok) {
      alert('Carta añadida al mazo.');
      onClose();
    } else {
      alert(data.message || 'Error al añadir la carta.');
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <h3>Selecciona un mazo</h3>
      <ul id="listaMazos">
        {mazos.map(mazo => (
          <button key={mazo.id} className="boton" onClick={() => añadirCarta(mazo.id)}>
            {mazo.nombre}
          </button>
        ))}
      </ul>
    </Modal>
  );
}

export default MazosModal;
