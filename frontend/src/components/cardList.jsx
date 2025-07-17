import React from 'react';
function CardList({ cartas, onAddToMazo, onShowImage }) {
  return (
    <div className="cartas-container">
      <div className="cartas-list">
        {cartas.map(carta => (
          <div key={carta.id}>
            <img
              className="imagen-peque"
              src={carta.imagen}
              alt={carta.nombre}
              onClick={() => onShowImage(carta.imagen)}
            />
            <div className="carta-info">
              <button
                className="boton boton-agregar-mazo"
                onClick={() => onAddToMazo(carta.id)}
              >
                Agregar a mazo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
