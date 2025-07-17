import React from 'react';
function Modal({ visible, onClose, children }) {
  if (!visible) return null;

  return (
    <div className="modal" onClick={e => e.target.className === 'modal' && onClose()}>
      <div className="modal-content">
        <span className="cerrar-modal" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
