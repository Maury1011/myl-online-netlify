import React from 'react';
function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="paginacion">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>⬅ Anterior</button>
      )}
      <span>Página {currentPage} de {totalPages}</span>
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Siguiente ➡</button>
      )}
    </div>
  );
}

export default Pagination;

