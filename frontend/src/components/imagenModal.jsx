import React from 'react';

function ImageModal({ visible, onClose, imageUrl }) {
  if (!visible) return null;

  return (
    <div
      className="modal"
      onClick={onClose}               // clic en overlay cierra
    >
      {/* Detén el cierre al clicar sobre la imagen */}
      <img
        className="imagen-grande"
        src={imageUrl}
        alt="Imagen en grande"
        onClick={e => e.stopPropagation()}
      />
      {/* Botón de cerrar */}
      <span
        className="cerrar-modal"
        onClick={onClose}
      >
        &times;
      </span>
    </div>
  );
}

export default ImageModal;
